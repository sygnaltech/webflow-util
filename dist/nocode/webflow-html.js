(() => {
  // src/webflow-core.ts
  var WfuCore = class {
    init() {
      this.initDebugMode();
    }
    initDebugMode() {
      const debugParamKey = "debug";
      let params = new URLSearchParams(window.location.search);
      let hasDebug = params.has(debugParamKey);
      if (hasDebug) {
        let wfuDebug = new WfuDebug(`wfu init`);
        wfuDebug.persistentDebug = this.stringToBoolean(params.get(debugParamKey));
      }
    }
    stringToBoolean(str) {
      const truthyValues = ["1", "true", "yes"];
      const falsyValues = ["0", "false", "no"];
      if (truthyValues.indexOf(str.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  };
  var WfuDebug = class {
    constructor(label) {
      this.localStorageDebugFlag = "wfuDebug";
      this._enabled = false;
      this._label = label;
    }
    get persistentDebug() {
      return Boolean(localStorage.getItem(this.localStorageDebugFlag));
    }
    set persistentDebug(active) {
      if (active) {
        localStorage.setItem(this.localStorageDebugFlag, "true");
        console.debug("WFU persistent debug enabled.");
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug("WFU persistent debug disabled.");
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
  var WfuHtmlDynamicAttributes = class {
    constructor(config) {
      this.config = config;
    }
    Process() {
      let debug = new WfuDebug("wfu-html");
      debug.debug("Dynamic attributes processed.", this.config);
      var allElements = document.querySelectorAll("*");
      allElements.forEach(function(element) {
        for (var i = 0; i < element.attributes.length; i++) {
          var attr = element.attributes[i];
          if (attr.name.startsWith("x-")) {
            var newAttrName = attr.name.slice(2);
            element.setAttribute(newAttrName, attr.value);
          }
        }
      });
    }
  };

  // src/webflow-html.ts
  var WfuHtml = class {
    constructor(config) {
      this.config = config;
    }
    Process() {
      if (this.config.dynamicAttributes) {
        let obj = new WfuHtmlDynamicAttributes({});
        obj.Process();
      }
    }
  };

  // src/nocode/webflow-html.ts
  var init = () => {
    new WfuCore().init();
    let debug = new WfuDebug("wfu-html");
    debug.debug("Initializing");
    let obj = new WfuHtml({
      dynamicAttributes: true
    });
    obj.Process();
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-html.js.map
