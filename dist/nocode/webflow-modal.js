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

  // node_modules/typescript-cookie/dist/typescript-cookie.mjs
  var encodeName = (name) => encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
  var encodeValue = (value) => {
    return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  };
  var decodeName = decodeURIComponent;
  var decodeValue = (value) => {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  };
  function stringifyAttributes(attributes) {
    attributes = Object.assign({}, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires != null) {
      attributes.expires = attributes.expires.toUTCString();
    }
    return Object.entries(attributes).filter(([key, value]) => value != null && value !== false).map(([key, value]) => value === true ? `; ${key}` : `; ${key}=${value.split(";")[0]}`).join("");
  }
  function get(name, decodeValue2, decodeName2) {
    const scan = /(?:^|; )([^=]*)=([^;]*)/g;
    const jar = {};
    let match;
    while ((match = scan.exec(document.cookie)) != null) {
      try {
        const found = decodeName2(match[1]);
        jar[found] = decodeValue2(match[2], found);
        if (name === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name != null ? jar[name] : jar;
  }
  var DEFAULT_CODEC = Object.freeze({
    decodeName,
    decodeValue,
    encodeName,
    encodeValue
  });
  var DEFAULT_ATTRIBUTES = Object.freeze({
    path: "/"
  });
  function setCookie(name, value, attributes = DEFAULT_ATTRIBUTES, { encodeValue: encodeValue$1 = encodeValue, encodeName: encodeName$1 = encodeName } = {}) {
    return document.cookie = `${encodeName$1(name)}=${encodeValue$1(value, name)}${stringifyAttributes(attributes)}`;
  }
  function getCookie(name, { decodeValue: decodeValue$1 = decodeValue, decodeName: decodeName$1 = decodeName } = {}) {
    return get(name, decodeValue$1, decodeName$1);
  }
  function getCookies({ decodeValue: decodeValue$1 = decodeValue, decodeName: decodeName$1 = decodeName } = {}) {
    return get(void 0, decodeValue$1, decodeName$1);
  }
  function removeCookie(name, attributes = DEFAULT_ATTRIBUTES) {
    setCookie(name, "", Object.assign({}, attributes, {
      expires: -1
    }));
  }
  function init(converter, defaultAttributes) {
    const api = {
      set: function(name, value, attributes) {
        return setCookie(name, value, Object.assign({}, this.attributes, attributes), {
          encodeValue: this.converter.write
        });
      },
      get: function(name) {
        if (arguments.length === 0) {
          return getCookies(this.converter.read);
        }
        if (name == null) {
          return;
        }
        return getCookie(name, this.converter.read);
      },
      remove: function(name, attributes) {
        removeCookie(name, Object.assign({}, this.attributes, attributes));
      },
      withAttributes: function(attributes) {
        return init(this.converter, Object.assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(Object.assign({}, this.converter, converter2), this.attributes);
      }
    };
    const config = {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    };
    return Object.create(api, config);
  }
  var compat = init({ read: DEFAULT_CODEC.decodeValue, write: DEFAULT_CODEC.encodeValue }, DEFAULT_ATTRIBUTES);

  // src/webflow-modal.ts
  var Sa5Modal = class {
    constructor(element) {
      this._element = element;
    }
    getModalKeyName() {
      return `wfu-modal_${this._name}`;
    }
    isSuppressed() {
      const suppressed = getCookie(
        this.getModalKeyName()
      );
      return suppressed;
    }
    suppress(val, duration) {
      setCookie(
        this.getModalKeyName(),
        val,
        {
          expires: duration
        }
      );
    }
    unSuppress() {
      removeCookie(
        this.getModalKeyName()
      );
    }
    init() {
      this._name = this._element.getAttribute("wfu-modal") || "default";
      if (this.isSuppressed()) {
        this._element.remove();
        return;
      }
      this._element.removeAttribute("wfu-modal-trigger");
      document.querySelectorAll("[wfu-modal-close]").forEach((element) => {
        element.addEventListener("click", () => {
          const modalClose = element;
          const modal = modalClose.closest("[wfu-modal]");
          const modalCloseVal = modalClose.getAttribute("wfu-modal-close") || "true";
          const modalCloseType = modal.getAttribute("wfu-modal-close-type") || "auto";
          const modalSuppressDuration = parseFloat(modal.getAttribute("wfu-modal-suppress-days")) || 9999;
          this.suppress(
            modalCloseVal,
            modalSuppressDuration
          );
          switch (modalCloseType) {
            case "interaction":
              break;
            case "auto":
            default:
              modal.remove();
              break;
          }
        });
      });
    }
  };

  // src/nocode/webflow-modal.ts
  var init2 = () => {
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-modal");
    debug.debug("Initializing");
    document.querySelectorAll("[wfu-modal]").forEach((element) => {
      const modalElem = element;
      let modal = new Sa5Modal(modalElem);
      modal.init();
    });
  };
  document.addEventListener("DOMContentLoaded", init2);
})();
/*! typescript-cookie v1.0.6 | MIT */
//# sourceMappingURL=webflow-modal.js.map
