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
    getHandlers(name) {
      return this.handlers.filter((item) => item[0] === name).map((item) => item[1]);
    }
    getHandler(name) {
      const item = this.handlers.find((item2) => item2[0] === name);
      return item ? item[1] : void 0;
    }
    init() {
      this.initDebugMode();
    }
    initDebugMode() {
      const debugParamKey = "debug";
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
      var core;
      if (sa5instance?.constructor?.name == "Sa5Core") {
        core = sa5instance;
      } else {
        core = new Sa5Core();
        if (Array.isArray(sa5instance))
          core.handlers = sa5instance;
        window["sa5"] = core;
        window["Sa5"] = window["sa5"];
      }
      if (module) {
        window["sa5"][module.name] = module;
      }
      return core;
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

  // src/webflow-track.ts
  var Sa5Tracker = class {
    constructor(config = {}) {
      this.config = {
        method: config.method ?? "sessionStorage",
        prefix: config.prefix ?? "track"
      };
      this.debug = new Sa5Debug("sa5-tracker");
      this.debug.debug("Initializing");
    }
    trackKey(key) {
      return `${this.config.prefix}_${key}`;
    }
    track(key, val) {
      switch (this.config.method) {
        case "sessionStorage":
          sessionStorage.setItem(
            `${this.trackKey(key)}`,
            val || "true"
          );
          break;
        case "localStorage":
          localStorage.setItem(
            `${this.trackKey(key)}`,
            val || "true"
          );
          break;
        case "cookies":
          document.cookie = `${this.config.prefix}_${key}=${val || "true"}`;
          break;
      }
    }
    untrack(key) {
      switch (this.config.method) {
        case "sessionStorage":
          sessionStorage.removeItem(`${this.trackKey(key)}`);
          break;
        case "localStorage":
          localStorage.removeItem(`${this.trackKey(key)}`);
          break;
        case "cookies":
          document.cookie = `${this.trackKey(key)}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
          break;
      }
    }
    isTracked(key) {
      switch (this.config.method) {
        case "sessionStorage":
          return sessionStorage.getItem(`${this.trackKey(key)}`);
          break;
        case "localStorage":
          return localStorage.getItem(`${this.trackKey(key)}`);
          break;
        case "cookies":
          return document.cookie.split("; ").find((row) => row.startsWith(`${this.trackKey(key)}`))?.split("=")[1];
          break;
      }
    }
    getItem(key) {
      switch (this.config.method) {
        case "sessionStorage":
          return sessionStorage.getItem(`${this.trackKey(key)}`);
          break;
        case "localStorage":
          return localStorage.getItem(`${this.trackKey(key)}`);
          break;
        case "cookies":
          return document.cookie.split("; ").find((row) => row.startsWith(`${this.trackKey(key)}`))?.split("=")[1];
          break;
      }
    }
    reset() {
      switch (this.config.method) {
        case "sessionStorage":
          sessionStorage.clear();
          break;
        case "localStorage":
          localStorage.clear();
          break;
        case "cookies":
          var arrSplit = document.cookie.split(";");
          for (var i = 0; i < arrSplit.length; i++) {
            var cookie = arrSplit[i].trim();
            var cookieName = cookie.split("=")[0];
            if (cookieName.indexOf(`${this.config.prefix}_`) === 0) {
              document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
          }
          break;
      }
    }
  };
  Sa5Core.startup(Sa5Tracker);
})();
//# sourceMappingURL=webflow-track.js.map