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

  // src/webflow-core/debug.ts
  var Sa5Debug = class {
    constructor(label) {
      this.localStorageDebugFlag = "sa5-debug";
      this._enabled = false;
      this._label = label;
    }
    get persistentDebug() {
      return Boolean(localStorage.getItem(this.localStorageDebugFlag));
    }
    set persistentDebug(active) {
      if (active) {
        localStorage.setItem(this.localStorageDebugFlag, "true");
        console.debug(`sa5-core debug enabled (persistent).`);
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug(`sa5-core debug disabled (persistent).`);
      }
    }
    get enabled() {
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
    debug(...args) {
      if (this.enabled)
        console.debug(this._label, ...args);
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

  // src/webflow-html/dynamic-attributes.ts
  var Sa5HtmlDynamicAttributes = class {
    constructor(config) {
      this.config = config;
    }
    init() {
      let debug = new Sa5Debug("sa5-html");
      debug.debug("Dynamic attributes initialized.", this.config);
      var allElements = document.querySelectorAll("*");
      allElements.forEach((element) => {
        Array.from(element.attributes).forEach((attr) => {
          if (attr.name.startsWith("x-") || attr.name.startsWith("x:")) {
            const newAttrName = attr.name.slice(2);
            element.setAttribute(newAttrName, attr.value);
            switch (element.tagName.toLowerCase()) {
              case "textarea":
                if (newAttrName === "value")
                  element.value = attr.value;
                break;
              case "select":
                if (newAttrName === "value")
                  element.value = attr.value;
                break;
              case "input":
                switch (element.getAttribute("type")) {
                  case "checkbox":
                    if (newAttrName == "checked") {
                      if (booleanValue(attr.value))
                        element.setAttribute("checked", "checked");
                      else
                        element.removeAttribute("checked");
                    }
                    break;
                }
                break;
            }
            debug.debug(`Element: ${element.tagName}, New Attribute: ${newAttrName}, Value: ${attr.value}`);
          }
        });
      });
    }
  };
})();
//# sourceMappingURL=dynamic-attributes.js.map
