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

  // src/webflow-url/queryPassthrough.ts
  var Sa5QueryPassthrough = class {
    constructor(config = {}) {
      this.config = {
        ignorePatterns: config.ignorePatterns ?? [
          /_page$/
        ],
        overwriteExisting: config.overwriteExisting ?? false,
        internalOnly: config.internalOnly ?? true
      };
      this.debug = new Sa5Debug("sa5-url-querypassthrough");
      this.debug.debug("Initializing");
      this.debug.debug("Config:", this.config);
    }
    init() {
      document.addEventListener("click", (event) => {
        const target = event.target;
        const anchor = target.closest("a");
        if (anchor) {
          event.preventDefault();
          const currentPageParams = new URLSearchParams(window.location.search);
          const anchorParams = new URLSearchParams(anchor.search);
          const anchorUrl = new URL(anchor.href);
          if (this.config.internalOnly) {
            const isRelativeOrSameHost = !anchorUrl.host || anchorUrl.host === window.location.host;
            if (!isRelativeOrSameHost) {
              return;
            }
          }
          event.preventDefault();
          let newParams = new URLSearchParams();
          for (const [key, value] of currentPageParams) {
            if (this.shouldIgnoreKey(key))
              continue;
            if (anchorParams.has(key) && !this.config.overwriteExisting)
              continue;
            newParams.set(key, value);
          }
          let newUrl = anchorUrl.origin + anchorUrl.pathname;
          if (newParams.size > 0)
            newUrl += "?" + newParams.toString();
          window.location.href = newUrl;
        }
      });
    }
    shouldIgnoreKey(key) {
      for (const pattern of this.config.ignorePatterns) {
        if (typeof pattern === "string") {
          if (pattern === key) {
            return true;
          }
        } else if (pattern instanceof RegExp) {
          if (pattern.test(key)) {
            return true;
          }
        }
      }
      return false;
    }
  };
})();
//# sourceMappingURL=queryPassthrough.js.map
