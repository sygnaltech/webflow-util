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
})();
//# sourceMappingURL=webflow-format.js.map
