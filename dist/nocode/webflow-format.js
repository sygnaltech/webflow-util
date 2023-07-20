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
      console.log("startup");
      if (!(window["sa5"] instanceof Sa5Core)) {
        console.log("CORE");
        var core = new Sa5Core();
        if (Array.isArray(window["sa5"]))
          core.handlers = window["sa5"];
        window["sa5"] = core;
      }
      if (module) {
        window["sa5"][module.constructor.name] = module;
      }
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

  // src/nocode/webflow-format.ts
  var init = () => {
    new Sa5Core().init();
    let debug = new Sa5Debug("sa5-demo");
    debug.debug("Initializing");
    const webflowFormat = new WebflowFormat();
    const elements = document.querySelectorAll("[wfu-format]");
    elements.forEach((element) => {
      webflowFormat.formatField(element);
    });
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-format.js.map
