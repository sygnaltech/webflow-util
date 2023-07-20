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
})();
//# sourceMappingURL=breakpoints.js.map
