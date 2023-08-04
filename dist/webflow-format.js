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

  // src/webflow-format.ts
  var WebflowFormat = class {
    constructor() {
    }
    formatField(elem) {
      const fs = /* @__PURE__ */ new Map([
        ["usd", {
          "locale": "en-US",
          "style": "currency",
          "currency": "USD"
        }],
        ["gbp", {
          "locale": "en-US",
          "style": "currency",
          "currency": "GBP"
        }],
        ["eur", {
          "locale": "en-US",
          "style": "currency",
          "currency": "EUR"
        }],
        ["jpy", {
          "locale": "ja-JP",
          "style": "currency",
          "currency": "JPY"
        }],
        ["percent", {
          "locale": "en-US",
          "style": "percent"
        }],
        ["%", {
          "locale": "en-US",
          "style": "percent"
        }],
        ["comma", {
          "locale": "en-US"
        }],
        [",", {
          "locale": "en-US"
        }]
      ]);
      elem.innerText;
      const txt = elem.innerText;
      const val = parseFloat(txt);
      var fn = elem.getAttribute("wfu-format");
      var decimals = 0;
      if (txt.includes("."))
        decimals = txt.split(".")[1].length;
      var f = fs.get(fn);
      var settings = {};
      settings["style"] = f.style;
      settings["currency"] = f.currency;
      settings["minimumFractionDigits"] = decimals;
      settings["maximumFractionDigits"] = decimals;
      const formatter = new Intl.NumberFormat(f.locale, settings);
      elem.innerHTML = formatter.format(val);
    }
  };
  Sa5Core.startup(WebflowFormat);
})();
//# sourceMappingURL=webflow-format.js.map
