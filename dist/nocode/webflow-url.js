(() => {
  // src/globals.ts
  var Sa5Attribute;
  ((Sa5Attribute2) => {
    function getBracketed(attr) {
      return `[${attr}]`;
    }
    Sa5Attribute2.getBracketed = getBracketed;
  })(Sa5Attribute || (Sa5Attribute = {}));
  var Sa5Attribute = /* @__PURE__ */ ((Sa5Attribute2) => {
    Sa5Attribute2["ATTR_CORE_SCRIPT_INJECT"] = "wfu-script-load";
    Sa5Attribute2["ATTR_VIDEO"] = "wfu-video";
    Sa5Attribute2["ATTR_VIDEO_YOUTUBE_NOREL"] = "wfu-youtube-norel";
    Sa5Attribute2["ATTR_VIDEO_DATA_POSTER_URL"] = "wfu-data-poster-url";
    Sa5Attribute2["ATTR_DESIGN"] = "wfu-design";
    Sa5Attribute2["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
    Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
    Sa5Attribute2["ATTR_ELEMENT_BUTTON"] = "wfu-button";
    Sa5Attribute2["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
    Sa5Attribute2["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
    Sa5Attribute2["ATTR_DATA"] = "wfu-data";
    Sa5Attribute2["ATTR_DATA_TYPE"] = "wfu-data-type";
    Sa5Attribute2["ATTR_DATA_DSN"] = "wfu-data-dsn";
    Sa5Attribute2["ATTR_DATA_ITEM_ID"] = "wfu-data-item-id";
    Sa5Attribute2["ATTR_DATABIND"] = "wfu-bind";
    Sa5Attribute2["ATTR_DATABIND_CONTENT"] = "wfu-bind-content";
    Sa5Attribute2["ATTR_DATABIND_CONTEXT_DSN"] = "wfu-bind-dsn";
    Sa5Attribute2["ATTR_DATABIND_CONTEXT_ITEM_ID"] = "wfu-bind-item-id";
    Sa5Attribute2["ATTR_PRELOAD"] = "wfu-preload";
    Sa5Attribute2["ATTR_IX_TRIGGER"] = "wfu-ix-trigger";
    Sa5Attribute2["ATTR_IX_ID"] = "wfu-ix-id";
    Sa5Attribute2["ATTR_SORT"] = "wfu-sort";
    Sa5Attribute2["ATTR_FILTER"] = "wfu-filter";
    Sa5Attribute2["ATTR_FILTER_MATCH"] = "wfu-filter-match";
    Sa5Attribute2["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
    Sa5Attribute2["ATTR_FILTER_FUNC"] = "wfu-filter-func";
    Sa5Attribute2["ATTR_HIDE"] = "wfu-hide";
    Sa5Attribute2["ATTR_SUPPRESS"] = "wfu-suppress";
    Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
    return Sa5Attribute2;
  })(Sa5Attribute || {});

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

  // src/webflow-core/designer.ts
  var Sa5Designer = class {
    constructor() {
    }
    init() {
      this.removeDesignTimeElements();
    }
    removeDesignTimeElements() {
      const elements = document.querySelectorAll(
        Sa5Attribute.getBracketed("wfu-design" /* ATTR_DESIGN */)
      );
      elements.forEach((element) => {
        element.remove();
      });
    }
  };

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
      new Sa5Designer().init();
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
      this.initAsync();
    }
    async initAsync() {
      this.initScriptInjectionsAsync();
    }
    async initScriptInjectionsAsync() {
      document.addEventListener("DOMContentLoaded", () => {
        const loadSrcScripts = document.querySelectorAll(
          `script[${"wfu-script-load" /* ATTR_CORE_SCRIPT_INJECT */}]`
        );
        loadSrcScripts.forEach((script) => {
          const loadSrcUrl = script.getAttribute("wfu-script-load" /* ATTR_CORE_SCRIPT_INJECT */);
          if (loadSrcUrl) {
            fetch(loadSrcUrl).then((response) => response.text()).then((jsContent) => {
              const newScript = document.createElement("script");
              newScript.textContent = jsContent;
              script.replaceWith(newScript);
            }).catch((error) => {
              console.error("Error loading script:", error);
            });
          }
        });
      });
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
        core.init();
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

  // src/webflow-url/query.ts
  var WfuQuery = class {
    constructor() {
    }
    init() {
      const urlParams = new URLSearchParams(window.location.search);
      if (Array.from(urlParams).length == 0)
        return;
      const that = this;
      let elements = Array.from(
        document.querySelectorAll("*[wfu-query-param], a")
      );
      elements.forEach((element) => {
        let wfuQueryParam = element.getAttribute("wfu-query-param");
        if (element.tagName.toLowerCase() === "input" && wfuQueryParam) {
          element.value = urlParams.get(wfuQueryParam) || "";
        } else if (element.tagName.toLowerCase() === "a") {
        } else if (wfuQueryParam) {
          element.textContent = urlParams.get(wfuQueryParam) || "";
        }
      });
    }
    processLink(linkElem) {
      const urlParams = new URLSearchParams(window.location.search);
      if (linkElem.getAttribute("href") == null)
        return;
      var hrefParts = linkElem.getAttribute("href").split("?");
      var hrefBase = hrefParts[0];
      var hrefQuery = hrefParts[1];
      const newParams = new URLSearchParams(hrefQuery);
      if (linkElem.getAttribute("wfu-query-param") == "-") {
      } else if (linkElem.getAttribute("wfu-query-param") == "*" || linkElem.getAttribute("wfu-query-param") == void 0 || linkElem.hasAttribute("wfu-query-param") == false) {
        for (let p of urlParams) {
          newParams.set(p[0], urlParams.get(p[0]));
        }
        ;
        var newHref = hrefBase + "?" + newParams.toString();
        linkElem.setAttribute("href", newHref);
      } else {
        var overrideParams = linkElem.getAttribute("wfu-query-param").split(",");
        for (let p of overrideParams) {
          if (urlParams.get(p) != null)
            newParams.set(p, urlParams.get(p));
        }
        ;
        var newHref = hrefBase + "?" + newParams.toString();
        linkElem.setAttribute("href", newHref);
      }
    }
  };

  // src/webflow-url/relativeLinkFixup.ts
  var WfuRelativeLinkFixup = class {
    constructor(element) {
      this._element = element;
    }
    init() {
      let elems = Array.from(
        this._element.querySelectorAll(
          "a[href^='http://.' i], a[href^='https://.' i], a[href^='http://?' i], a[href^='https://?' i]"
        )
      );
      elems.forEach((elem) => {
        let href = elem.getAttribute("href");
        if (href) {
          if (href.startsWith("http://."))
            href = href.substring(8);
          if (href.startsWith("https://."))
            href = href.substring(9);
          if (href.startsWith("http://?"))
            href = href.substring(7);
          if (href.startsWith("https://?"))
            href = href.substring(8);
          elem.setAttribute("href", href);
        }
      });
      let elements = Array.from(
        this._element.querySelectorAll("a[href*='//self/' i], a[href$='//self' i]")
      );
      elements.forEach((element) => {
        let originalHref = element.getAttribute("href");
        if (originalHref) {
          const originalUrl = new URL(originalHref);
          let relativeHref = originalUrl.pathname + originalUrl.search + originalUrl.hash;
          element.setAttribute("href", relativeHref);
        }
      });
    }
  };

  // src/webflow-url/targetLinks.ts
  var WfuTargetLinks = class {
    constructor(element) {
      this._element = element;
    }
    init() {
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

  // src/nocode/webflow-url.ts
  var init = () => {
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-url");
    debug.debug("Initializing");
    new WfuQuery().init();
    let elements = Array.from(
      document.querySelectorAll("[wfu-relative-links]")
    );
    elements.forEach((element) => {
      new WfuRelativeLinkFixup(element).init();
    });
    elements = Array.from(
      document.querySelectorAll("[wfu-external-links]")
    );
    elements.forEach((element) => {
      new WfuTargetLinks(element).init();
    });
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-url.js.map
