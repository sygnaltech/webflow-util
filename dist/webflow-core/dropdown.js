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
      console.debug("sa5core", "startup");
      if (!(window["sa5"] instanceof Sa5Core)) {
        console.debug("CORE");
        var core = new Sa5Core();
        if (Array.isArray(window["sa5"]))
          core.handlers = window["sa5"];
        window["sa5"] = core;
      }
      if (module) {
        console.debug("Registered module", module.name);
        window["sa5"][module.name] = module;
      }
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

  // src/webflow-core/dropdown.ts
  var WebflowDropdown = class {
    get element() {
      return this._element;
    }
    get elementToggle() {
      return this._elementToggle;
    }
    get elementList() {
      return this._elementList;
    }
    get opened() {
      if (!this._elementToggle)
        return null;
      if (this._elementToggle.classList.contains("w--open")) {
        return true;
      }
      return false;
    }
    set opened(state) {
      if (state)
        open();
      else
        close();
    }
    constructor(element) {
      this.init(element);
    }
    init(element) {
      if (!element.classList.contains("w-dropdown")) {
        console.error("sa5-core", "element is not on a dropdown element");
        return;
      }
      console.log("init.");
      this._element = element;
      this._elementToggle = element.querySelector(".w-dropdown-toggle");
      this._elementList = element.querySelector(".w-dropdown-list");
    }
    open() {
      console.log("open");
      if (!this.opened)
        this.toggle();
    }
    close() {
      console.log("close");
      if (this.opened)
        this.toggle();
    }
    toggle() {
      console.log("toggle");
      this._elementToggle.dispatchEvent(new Event("mousedown"));
      this._elementToggle.dispatchEvent(new Event("mouseup"));
    }
    onOpenChanged() {
    }
  };
  Sa5Core.startup(WebflowDropdown);
})();
//# sourceMappingURL=dropdown.js.map
