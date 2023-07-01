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

  // src/webflow-core.ts
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

  // src/webflow-cache/webflow-cache-item.ts
  var defaultConfig = {
    store: "sessionStorage",
    name: void 0,
    updateFnAsync: void 0,
    debug: false
  };
  var WfuCacheItem = class {
    constructor(customConfig = {}) {
      this.debug = new WfuDebug("wfu-cache-item");
      this.config = __spreadValues(__spreadValues({}, defaultConfig), customConfig);
      this.debug.enabled = this.config.debug;
    }
  };
  window["WfuCacheItem"] = WfuCacheItem;
})();
//# sourceMappingURL=webflow-cache-item.js.map
