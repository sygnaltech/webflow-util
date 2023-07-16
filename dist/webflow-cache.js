(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b ||= {})
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/webflow-core.ts
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

  // src/webflow-cache.ts
  var defaultConfig = {
    store: 0 /* sessionStorage */,
    prefix: "cache",
    val: {},
    debug: false
  };
  var Sa5Cache = class {
    constructor(customConfig = {}) {
      this.cacheKey = function(key) {
        return `${this.config.prefix}_${key}`;
      };
      this.config = __spreadValues(__spreadValues({}, defaultConfig), customConfig);
      this.debug = new Sa5Debug("sa5-cache");
      this.debug.enabled = this.config.debug;
    }
    getAsync(valueName) {
      return __async(this, null, function* () {
        this.debug.group(`getAsync - "${valueName}"`);
        var valueHandler = this.config.val[valueName];
        this.debug.debug("valueHandler", valueHandler);
        var returnValue = sessionStorage.getItem(
          this.cacheKey(valueName)
        );
        this.debug.debug("cached? sessionStorage.getItem", returnValue);
        const that = this;
        if (returnValue == null || returnValue == void 0) {
          returnValue = yield valueHandler.config.updateFnAsync().then((r) => {
            sessionStorage.setItem(
              this.cacheKey(valueName),
              r
            );
            that.debug.debug("sessionStorage.setItem", valueName, r);
            that.debug.debug("calculated", r);
            return r;
          });
        }
        this.debug.debug("returning", returnValue);
        this.debug.groupEnd();
        return returnValue;
      });
    }
  };
  window["sa5"] = window["sa5"] || {};
  window["sa5"]["Sa5Cache"] = Sa5Cache;
})();
//# sourceMappingURL=webflow-cache.js.map
