(() => {
  // src/utils.ts
  function booleanValue(val) {
    switch (val.toLowerCase()) {
      case "false":
      case "f":
      case "":
      case "0":
      case "no":
      case "off":
      case void 0:
      case "undefined":
      case null:
      case "null":
        return false;
      default:
        return true;
    }
  }

  // src/storage-utils.ts
  var StorageUtils = class {
    static get localStorageAvailable() {
      try {
        const test = "__test__";
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
    static get sessionStorageAvailable() {
      try {
        const test = "__test__";
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
    static get cookiesAvailable() {
      try {
        const test = "__test__=1";
        document.cookie = test + "; path=/";
        const cookies = document.cookie;
        const available = cookies.includes("__test__=1");
        document.cookie = "__test__=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        return available;
      } catch {
        return false;
      }
    }
  };

  // src/webflow-core/debug.ts
  var Sa5Debug = class {
    constructor(label) {
      this.localStorageDebugFlag = "sa5-debug";
      this._enabled = false;
      this._label = label;
    }
    get persistentDebug() {
      return StorageUtils.localStorageAvailable ? Boolean(localStorage.getItem(this.localStorageDebugFlag)) : false;
    }
    set persistentDebug(active) {
      if (!StorageUtils.localStorageAvailable)
        return;
      if (active) {
        localStorage.setItem(this.localStorageDebugFlag, "true");
        console.debug(`sa5-core debug enabled (persistent).`);
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug(`sa5-core debug disabled (persistent).`);
      }
    }
    get enabled() {
      if (!StorageUtils.localStorageAvailable)
        return false;
      var wfuDebugValue = Boolean(localStorage.getItem(this.localStorageDebugFlag));
      wfuDebugValue = wfuDebugValue || this._enabled;
      return wfuDebugValue;
    }
    set enabled(active) {
      this._enabled = active;
    }
    group(name) {
      if (this.enabled)
        console.group(name);
    }
    groupEnd() {
      if (this.enabled)
        console.groupEnd();
    }
    debug2(...args) {
      if (this.enabled)
        console.debug.apply(console, [this._label, ...args]);
    }
    debug(...args) {
      if (this.enabled) {
        let formattedMessage = "";
        let styles = [];
        for (let i = 0; i < args.length; i++) {
          if (typeof args[i] === "string" && args[i].includes("%c") && typeof args[i + 1] === "string") {
            formattedMessage += args[i] + " ";
            styles.push(args[i + 1]);
            i++;
          } else {
            formattedMessage += "%c" + args[i] + " ";
            styles.push("");
          }
        }
        console.debug(formattedMessage.trim(), ...styles);
      }
    }
    static getStyleString(elem) {
      let styleString = "";
      for (let i = 0; i < elem.style.length; i++) {
        const property = elem.style[i];
        const value = elem.style.getPropertyValue(property);
        styleString += `${property}: ${value}; `;
      }
      return styleString;
    }
  };

  // src/webflow-html/dynamic-urls.ts
  var Sa5HtmlDynamicUrls = class {
    constructor(config) {
      this.config = config;
    }
    init() {
      let debug = new Sa5Debug("sa5-html");
      debug.debug("Dynamic URLs initialized.", this.config);
      document.querySelectorAll("*").forEach((el) => {
        Array.from(el.attributes).forEach((attr) => {
          if (attr.name.startsWith("x-")) {
            const newAttrName = attr.name.slice(2);
            this.applyAttr(el, newAttrName, attr.value);
            debug.debug(`Element: ${el.tagName}, New Attribute: ${newAttrName}, Value: ${attr.value}`);
          }
        });
      });
      document.querySelectorAll("*").forEach((el) => {
        Array.from(el.attributes).forEach((attr) => {
          if (attr.name.startsWith("x:")) {
            if (!el.hasAttribute(attr.name))
              return;
            const baseAttr = attr.name.split(":")[1];
            const mainAttr = `x:${baseAttr}`;
            const preAttr = `x:${baseAttr}:pre`;
            const postAttr = `x:${baseAttr}:post`;
            const existingValue = el.getAttribute(baseAttr) || "";
            const mainValue = el.getAttribute(mainAttr) !== null ? el.getAttribute(mainAttr) : existingValue;
            const preValue = el.getAttribute(preAttr) || "";
            const postValue = el.getAttribute(postAttr) || "";
            const finalValue = preValue + mainValue + postValue;
            el.setAttribute(baseAttr, finalValue);
            this.applyAttr(el, baseAttr, finalValue);
            el.removeAttribute(mainAttr);
            el.removeAttribute(preAttr);
            el.removeAttribute(postAttr);
          }
        });
      });
      const scripts = document.querySelectorAll(
        'script[type="application/sa5+json"][handler="DynamicAttribute"]'
      );
      const configs = [];
      scripts.forEach((script) => {
        try {
          if (!script.textContent)
            return;
          const parsed = JSON.parse(script.textContent);
          if (parsed["@type"] === "DynamicAttribute" && typeof parsed.name === "string") {
            const config = {
              name: parsed.name,
              value: typeof parsed.value === "string" ? parsed.value : void 0,
              pre: typeof parsed.pre === "string" ? parsed.pre : void 0,
              post: typeof parsed.post === "string" ? parsed.post : void 0,
              target: typeof parsed.target === "string" ? parsed.target.toLowerCase() : "parent"
            };
            let targetElement = null;
            targetElement = this.getElem(script, config.target);
            if (targetElement) {
              const existingValue = targetElement.getAttribute(config.name);
              const mainValue = config.value !== null ? config.value : existingValue;
              const preValue = config.pre || "";
              const postValue = config.post || "";
              const finalValue = preValue + mainValue + postValue;
              targetElement.setAttribute(config.name, finalValue);
            } else {
              console.warn(`No target element found for target "${config.target}".`);
            }
            configs.push(config);
          }
        } catch (error) {
          console.warn("Invalid JSON in DynamicAttribute script block:", script, error);
        }
      });
    }
    getElem(element, target) {
      let targetElement = null;
      switch (target) {
        case "parent":
          targetElement = element.parentElement.parentElement;
          break;
        case "prev":
          targetElement = element.parentElement.previousElementSibling;
          break;
        case "next":
          targetElement = element.parentElement.nextElementSibling;
          break;
      }
      return targetElement;
    }
    applyAttr(element, newAttrName, newAttrValue) {
      element.setAttribute(newAttrName, newAttrValue);
      switch (element.tagName.toLowerCase()) {
        case "textarea":
          if (newAttrName === "value")
            element.value = newAttrValue;
          break;
        case "select":
          if (newAttrName === "value")
            element.value = newAttrValue;
          break;
        case "input":
          switch (element.getAttribute("type")) {
            case "checkbox":
              if (newAttrName == "checked") {
                if (booleanValue(newAttrValue))
                  element.setAttribute("checked", "checked");
                else
                  element.removeAttribute("checked");
              }
              break;
          }
          break;
      }
    }
  };
})();
//# sourceMappingURL=dynamic-urls.js.map
