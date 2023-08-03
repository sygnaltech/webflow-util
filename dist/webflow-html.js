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

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
    }
    init() {
      this.initDebugMode();
    }
    initDebugMode() {
      const debugParamKey = "sa-debug";
      let params = new URLSearchParams(window.location.search);
      let hasDebug = params.has(debugParamKey);
      if (hasDebug) {
        let wfuDebug = new Sa5Debug(`sa5 init`);
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
    static startup(module = null) {
      let sa5instance = window["sa5"];
      if (!(sa5instance?.constructor?.name == "Sa5Core")) {
        var core = new Sa5Core();
        if (Array.isArray(sa5instance))
          core.handlers = window["sa5"];
        window["sa5"] = core;
        window["Sa5"] = window["sa5"];
      }
      if (module) {
        window["sa5"][module.name] = module;
      }
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

  // src/webflow-html/dynamic-attributes.ts
  var Sa5HtmlDynamicAttributes = class {
    constructor(config) {
      this.config = config;
    }
    init() {
      let debug = new Sa5Debug("sa5-html");
      debug.debug("Dynamic attributes initialized.", this.config);
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

  // src/webflow-html/breakpoints.ts
  var sa5Breakpoints = {
    large1920: "(min-width: 1920px)",
    large1440: "(min-width: 1440px) and (max-width: 1919px)",
    large1280: "(min-width: 1280px) and (max-width: 1439px)",
    desktop: "(min-width: 992px) and (max-width: 1279px)",
    tablet: "(min-width: 768px) and (max-width: 991px)",
    mobileLandscape: "(min-width: 480px) and (max-width: 767px)",
    mobilePortrait: "(max-width: 479px)"
  };
  var Sa5Breakpoints = class {
    constructor(config) {
      this.handleBreakpointChange = (e) => {
        if (!e.matches)
          return;
        var device = null;
        for (let d in sa5Breakpoints) {
          if (e.media == sa5Breakpoints[d]) {
            device = d;
          }
        }
        if (this.config.handleBreakpointChange)
          this.config.handleBreakpointChange(
            device,
            e
          );
      };
      this.config = config;
    }
    init() {
      let debug = new Sa5Debug("sa5-html");
      debug.debug("Breakpoints initialized.", this.config);
      for (let device in sa5Breakpoints) {
        let mediaQueryList = window.matchMedia(sa5Breakpoints[device]);
        mediaQueryList.addEventListener("change", this.handleBreakpointChange);
        if (mediaQueryList.matches) {
          this.handleBreakpointChange(
            {
              media: mediaQueryList.media,
              matches: mediaQueryList.matches
            }
          );
        }
      }
    }
  };

  // src/webflow-html.ts
  var Sa5Html = class {
    constructor(config) {
      this.config = config;
      this.debug = new Sa5Debug("sa5-html");
      this.debug.enabled = this.config.debug;
    }
    init() {
      this.debug.debug("sa5-html init.");
      let breakpoints = new Sa5Breakpoints({
        handleBreakpointChange: (breakpointName, e) => {
          window["sa5"] = window["sa5"] || {};
          const sa5 = window["sa5"];
          const breakpointChangeHandler = sa5["breakpointChanged"];
          if (breakpointChangeHandler)
            breakpointChangeHandler(breakpointName, e);
        }
      });
      breakpoints.init();
      if (this.config.dynamicAttributes) {
        let obj = new Sa5HtmlDynamicAttributes({});
        obj.init();
      }
    }
  };
  Sa5Core.startup(Sa5Html);
})();
//# sourceMappingURL=webflow-html.js.map
