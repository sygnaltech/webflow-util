(() => {
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

  // src/webflow-core.ts
  var WfuCore = class {
    init() {
      this.initDebugMode();
    }
    initDebugMode() {
      const debugParamKey = "debug";
      let params = new URLSearchParams(window.location.search);
      let hasDebug = params.has(debugParamKey);
      if (hasDebug) {
        let wfuDebug = new WfuDebug(`wfu init`);
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
  };
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

  // src/nocode/webflow-format.ts
  var init = () => {
    new WfuCore().init();
    let debug = new WfuDebug("wfu-demo");
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
