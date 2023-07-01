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
})();
//# sourceMappingURL=webflow-core.js.map
