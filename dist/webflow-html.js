(() => {
  // src/webflow-core.ts
  var WfuDebug = class {
    constructor(label) {
      this._enabled = false;
      this._label = label;
    }
    get enabled() {
      var wfuDebugValue = Boolean(localStorage.getItem("wfuDebug"));
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
})();
//# sourceMappingURL=webflow-html.js.map
