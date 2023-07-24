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
      var _a;
      let sa5instance = window["sa5"];
      if (!(((_a = sa5instance == null ? void 0 : sa5instance.constructor) == null ? void 0 : _a.name) == "Sa5Core")) {
        var core = new Sa5Core();
        if (Array.isArray(sa5instance))
          core.handlers = window["sa5"];
        window["sa5"] = core;
        window["Sa5"] = window["sa5"];
      }
      if (module) {
        window["sa5"][module.name] = module;
      }
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

  // src/webflow-url.ts
  var WfuQuery = class {
    constructor() {
    }
    processLink(linkElem) {
      const urlParams = new URLSearchParams(window.location.search);
      if (linkElem.attr("href") == null)
        return;
      var hrefParts = linkElem.attr("href").split("?");
      var hrefBase = hrefParts[0];
      var hrefQuery = hrefParts[1];
      const newParams = new URLSearchParams(hrefQuery);
      if (linkElem.attr("wfu-query-param") == "-") {
      } else if (linkElem.attr("wfu-query-param") == "*" || linkElem.attr("wfu-query-param") == void 0 || linkElem.attr("wfu-query-param") == false) {
        for (let p of urlParams) {
          newParams.set(p[0], urlParams.get(p[0]));
        }
        ;
        var newHref = hrefBase + "?" + newParams.toString();
        linkElem.attr("href", newHref);
      } else {
        var overrideParams = linkElem.attr("wfu-query-param").split(",");
        for (let p of overrideParams) {
          if (urlParams.get(p) != null)
            newParams.set(p, urlParams.get(p));
        }
        ;
        var newHref = hrefBase + "?" + newParams.toString();
        linkElem.attr("href", newHref);
      }
    }
    processAll() {
      const urlParams = new URLSearchParams(window.location.search);
      if (Array.from(urlParams).length == 0)
        return;
      const that = this;
      let elements = Array.from(document.querySelectorAll("*[wfu-query-param], a"));
      elements.forEach((element) => {
        let wfuQueryParam = element.getAttribute("wfu-query-param");
        if (element.tagName.toLowerCase() === "input" && wfuQueryParam) {
          element.value = urlParams.get(wfuQueryParam) || "";
        } else if (element.tagName.toLowerCase() === "a") {
          this.processLink(element);
        } else if (wfuQueryParam) {
          element.textContent = urlParams.get(wfuQueryParam) || "";
        }
      });
    }
  };
  var WfuRelativeLinkFixup = class {
    constructor() {
    }
    processAll() {
      let elements = Array.from(
        document.querySelectorAll("a[href*='//self/' i], a[href$='//self' i]")
      );
      elements.forEach((element) => {
        let href = element.getAttribute("href");
        if (href) {
          const url = new URL(href);
          element.setAttribute("href", url.pathname);
        }
      });
    }
  };
  var WfuTargetLinks = class {
    constructor() {
    }
    processAll() {
      let elements = Array.from(
        document.querySelectorAll("a[href^='http://']:not([target]), a[href^='https://']:not([target])")
      );
      elements.forEach((element) => {
        let href = element.getAttribute("href");
        if (href) {
          console.debug(`retargeting ${href}.`);
          element.setAttribute("target", "_blank");
        }
      });
    }
  };
  Sa5Core.startup(WfuQuery);

  // src/nocode/webflow-utils.ts
  var init = () => {
    new Sa5Core().init();
    let debug = new Sa5Debug("sa5-url");
    debug.debug("Initializing");
    const wfuQuery = new WfuQuery();
    wfuQuery.processAll();
    const wfuRelativeLinkFixup = new WfuRelativeLinkFixup();
    wfuRelativeLinkFixup.processAll();
    const wfuTargetLinks = new WfuTargetLinks();
    wfuTargetLinks.processAll();
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-utils.js.map
