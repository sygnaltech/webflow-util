(() => {
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
        console.debug("sa5-core debug enabled (persistent).");
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug("sa5-core debug disabled (persistent).");
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
          if (attr.name.startsWith("x-")) {
            const newAttrName = attr.name.slice(2);
            element.setAttribute(newAttrName, attr.value);
            switch (element.tagName.toLowerCase()) {
              case "textarea":
                if (newAttrName === "value")
                  element.value = attr.value;
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
