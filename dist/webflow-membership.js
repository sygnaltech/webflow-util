(() => {
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };

  // src/utils.ts
  function identifyElement(element) {
    switch (element.tagName) {
      case "A":
        return "HTMLLinkElement";
      case "INPUT": {
        const inputElement = element;
        switch (inputElement.type) {
          case "checkbox":
            return "HTMLCheckboxElement";
          case "radio":
            return "HTMLRadioElement";
          case "file":
            return "HTMLFileInputElement";
          default:
            return "HTMLInputElement";
        }
      }
      case "SELECT":
        return "HTMLSelectElement";
      case "TEXTAREA":
        return "HTMLTextAreaElement";
      case "BUTTON":
        return "HTMLButtonElement";
      default:
        return "HTMLElement";
    }
  }
  function selectOptionByValue(selectElement, value) {
    for (let i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === value) {
        selectElement.options[i].selected = true;
        break;
      }
    }
  }
  function booleanValue(val) {
    switch (val.toLowerCase()) {
      case "false":
      case "f":
      case "0":
      case "no":
      case "off":
      case void 0:
      case "undefined":
      case null:
      case "null":
        return false;
      default:
        return true;
    }
  }
  function getCookie(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match)
      return match[2];
  }
  function toTitleCase(str) {
    return str.toLowerCase().split(" ").map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

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
    Sa5Attribute2["ATTR_ELEMENT_SLIDE_NAME"] = "wfu-slide-name";
    Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
    Sa5Attribute2["ATTR_ELEMENT_TAB_NAME"] = "wfu-tab-name";
    Sa5Attribute2["ATTR_ELEMENT_BUTTON"] = "wfu-button";
    Sa5Attribute2["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
    Sa5Attribute2["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
    Sa5Attribute2["ATTR_ELEMENT_DECK_TARGET"] = "wfu-deck-target";
    Sa5Attribute2["ATTR_ELEMENT_DECK_ACTION"] = "wfu-deck-action";
    Sa5Attribute2["ATTR_ELEMENT_DECK_ITEM"] = "wfu-deck-action-item";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN"] = "wfu-dropdown";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_NAME"] = "wfu-dropdown-name";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_INIT"] = "wfu-dropdown-init";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_TYPE"] = "wfu-dropdown-type";
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
    Sa5Attribute2["ATTR_SORT_DIR"] = "wfu-sort-dir";
    Sa5Attribute2["ATTR_SORT_TYPE"] = "wfu-sort-type";
    Sa5Attribute2["ATTR_SORT_KEY"] = "wfu-sort-key";
    Sa5Attribute2["ATTR_FILTER"] = "wfu-filter";
    Sa5Attribute2["ATTR_FILTER_MATCH"] = "wfu-filter-match";
    Sa5Attribute2["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
    Sa5Attribute2["ATTR_FILTER_FUNC"] = "wfu-filter-func";
    Sa5Attribute2["ATTR_HIDE"] = "wfu-hide";
    Sa5Attribute2["ATTR_SUPPRESS"] = "wfu-suppress";
    Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
    Sa5Attribute2["ATTR_FORM_HANDLER"] = "wfu-form-handler";
    Sa5Attribute2["ATTR_FORM_MESSAGE"] = "wfu-form-message";
    Sa5Attribute2["ATTR_FORM_IPINFO"] = "wfu-form-ipinfo";
    Sa5Attribute2["ATTR_MODAL"] = "wfu-modal";
    Sa5Attribute2["ATTR_MODAL_TRIGGER"] = "wfu-modal-trigger";
    Sa5Attribute2["ATTR_MODAL_CLOSE"] = "wfu-modal-close";
    Sa5Attribute2["ATTR_MODAL_CLOSE_TYPE"] = "wfu-modal-close-type";
    Sa5Attribute2["ATTR_MODAL_SUPPRESS_DAYS"] = "wfu-modal-suppress-days";
    Sa5Attribute2["ATTR_FORMAT"] = "wfu-format";
    Sa5Attribute2["ATTR_FORMAT_DATE"] = "wfu-format-date";
    Sa5Attribute2["ATTR_FORMAT_HANDLER"] = "wfu-format-handler";
    Sa5Attribute2["ATTR_FORMAT_MODE"] = "wfu-format-mode";
    Sa5Attribute2["ATTR_FORMAT_SUFFIX"] = "wfu-format-suffix";
    Sa5Attribute2["ATTR_COUNTUP"] = "wfu-countup";
    Sa5Attribute2["ATTR_COUNTUP_TRIGGER"] = "wfu-countup-trigger";
    Sa5Attribute2["ATTR_DEMO_LINK"] = "wfu-demo-link";
    Sa5Attribute2["ATTR_LIGHTBOX_CAPTIONS"] = "wfu-lightbox-captions";
    Sa5Attribute2["ATTR_LIGHTBOX_GROUP"] = "wfu-lightbox-group";
    Sa5Attribute2["ATTR_DECODE"] = "wfu-decode";
    Sa5Attribute2["ATTR_LIMIT_MULTIPLE"] = "wfu-limit-multiple";
    Sa5Attribute2["ATTR_LIMIT_MULTIPLE_MIN"] = "wfu-limit-multiple-min";
    Sa5Attribute2["ATTR_SHOW_LOGGED_IN"] = "wfu-show-logged-in";
    Sa5Attribute2["ATTR_HIDE_LOGGED_IN"] = "wfu-hide-logged-in";
    Sa5Attribute2["ATTR_LOGIN_BUTTON"] = "wfu-login-button";
    Sa5Attribute2["ATTR_RICHTEXT_LISTS"] = "wfu-lists";
    Sa5Attribute2["ATTR_RICHTEXT_LIST_THEME"] = "wfu-list-theme";
    Sa5Attribute2["ATTR_URL_RELATIVE_LINKS"] = "wfu-relative-links";
    Sa5Attribute2["ATTR_URL_EXTERNAL_LINKS"] = "wfu-external-links";
    Sa5Attribute2["ATTR_UI_ACCORDION"] = "wfu-ui-accordion";
    Sa5Attribute2["ATTR_RATING"] = "wfu-rating";
    Sa5Attribute2["ATTR_GIST"] = "wfu-gist";
    Sa5Attribute2["ATTR_GIST_COPY"] = "wfu-gist-copy";
    Sa5Attribute2["ATTR_LAYOUT"] = "wfu-layout";
    Sa5Attribute2["ATTR_LAYOUT_HANDLER"] = "wfu-layout-handler";
    Sa5Attribute2["ATTR_LAYOUT_TARGET"] = "wfu-layout-target";
    Sa5Attribute2["ATTR_LAYOUT_ZONE"] = "wfu-layout-zone";
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

  // src/webflow-crypto.ts
  var PRIME64_1 = 11400714785074694791n;
  var PRIME64_2 = 14029467366897019727n;
  var PRIME64_3 = 1609587929392839161n;
  var PRIME64_4 = 9650029242287828579n;
  var PRIME64_5 = 2870177450012600261n;
  var BITS = 64n;
  var BITMASK = 2n ** BITS - 1n;
  var encoder = new TextEncoder();
  function bitsToBigInt(a00, a16, a32, a48) {
    return BigInt(a00) | BigInt(a16) << 16n | BigInt(a32) << 32n | BigInt(a48) << 48n;
  }
  function memoryToBigInt(memory, offset) {
    return BigInt(memory[offset]) | BigInt(memory[offset + 1]) << 8n | BigInt(memory[offset + 2]) << 16n | BigInt(memory[offset + 3]) << 24n | BigInt(memory[offset + 4]) << 32n | BigInt(memory[offset + 5]) << 40n | BigInt(memory[offset + 6]) << 48n | BigInt(memory[offset + 7]) << 56n;
  }
  function rotl(value, rotation) {
    return value << rotation & BITMASK | value >> BITS - rotation;
  }
  function trunc(value) {
    return BigInt.asUintN(64, value);
  }
  var _seed, _v1, _v2, _v3, _v4, _memory, _len, _memsize;
  var _XXH64 = class {
    constructor(seed = 0) {
      __privateAdd(this, _seed, void 0);
      __privateAdd(this, _v1, void 0);
      __privateAdd(this, _v2, void 0);
      __privateAdd(this, _v3, void 0);
      __privateAdd(this, _v4, void 0);
      __privateAdd(this, _memory, void 0);
      __privateAdd(this, _len, void 0);
      __privateAdd(this, _memsize, void 0);
      this.reset(seed);
    }
    reset(seed = __privateGet(this, _seed)) {
      __privateSet(this, _seed, BigInt.asUintN(32, BigInt(seed)));
      __privateSet(this, _v1, trunc(__privateGet(this, _seed) + PRIME64_1 + PRIME64_2));
      __privateSet(this, _v2, trunc(__privateGet(this, _seed) + PRIME64_2));
      __privateSet(this, _v3, __privateGet(this, _seed));
      __privateSet(this, _v4, trunc(__privateGet(this, _seed) - PRIME64_1));
      __privateSet(this, _memory, null);
      __privateSet(this, _len, 0);
      __privateSet(this, _memsize, 0);
      return this;
    }
    update(input) {
      if (typeof input === "string") {
        input = encoder.encode(input);
      }
      let p = 0;
      let len = input.length;
      let bEnd = p + len;
      if (len === 0) {
        return this;
      }
      __privateSet(this, _len, __privateGet(this, _len) + len);
      if (__privateGet(this, _memsize) === 0) {
        __privateSet(this, _memory, new Uint8Array(32));
      }
      if (__privateGet(this, _memsize) + len < 32) {
        __privateGet(this, _memory).set(input.subarray(0, len), __privateGet(this, _memsize));
        __privateSet(this, _memsize, __privateGet(this, _memsize) + len);
        return this;
      }
      if (__privateGet(this, _memsize) > 0) {
        __privateGet(this, _memory).set(input.subarray(0, 32 - __privateGet(this, _memsize)), __privateGet(this, _memsize));
        let p64 = 0;
        let other;
        other = memoryToBigInt(__privateGet(this, _memory), p64);
        __privateSet(this, _v1, trunc(rotl(trunc(__privateGet(this, _v1) + other * PRIME64_2), 31n) * PRIME64_1));
        p64 += 8;
        other = memoryToBigInt(this.memory, p64);
        __privateSet(this, _v2, trunc(rotl(trunc(__privateGet(this, _v2) + other * PRIME64_2), 31n) * PRIME64_1));
        p64 += 8;
        other = memoryToBigInt(this.memory, p64);
        __privateSet(this, _v3, trunc(rotl(trunc(__privateGet(this, _v3) + other * PRIME64_2), 31n) * PRIME64_1));
        p64 += 8;
        other = memoryToBigInt(this.memory, p64);
        __privateSet(this, _v4, trunc(rotl(trunc(__privateGet(this, _v4) + other * PRIME64_2), 31n) * PRIME64_1));
        p += 32 - __privateGet(this, _memsize);
        __privateSet(this, _memsize, 0);
      }
      if (p <= bEnd - 32) {
        const limit = bEnd - 32;
        do {
          let other;
          other = memoryToBigInt(input, p);
          __privateSet(this, _v1, trunc(rotl(trunc(__privateGet(this, _v1) + other * PRIME64_2), 31n) * PRIME64_1));
          p += 8;
          other = memoryToBigInt(input, p);
          __privateSet(this, _v2, trunc(rotl(trunc(__privateGet(this, _v2) + other * PRIME64_2), 31n) * PRIME64_1));
          p += 8;
          other = memoryToBigInt(input, p);
          __privateSet(this, _v3, trunc(rotl(trunc(__privateGet(this, _v3) + other * PRIME64_2), 31n) * PRIME64_1));
          p += 8;
          other = memoryToBigInt(input, p);
          __privateSet(this, _v4, trunc(rotl(trunc(__privateGet(this, _v4) + other * PRIME64_2), 31n) * PRIME64_1));
          p += 8;
        } while (p <= limit);
      }
      if (p < bEnd) {
        __privateGet(this, _memory).set(input.subarray(p, bEnd), __privateGet(this, _memsize));
        __privateSet(this, _memsize, bEnd - p);
      }
      return this;
    }
    digest() {
      let input = __privateGet(this, _memory);
      let bEnd = __privateGet(this, _memsize);
      let p = 0;
      let h64 = 0n;
      let h = 0n;
      let u = 0n;
      if (__privateGet(this, _len) >= 32) {
        h64 = rotl(__privateGet(this, _v1), 1n) + rotl(__privateGet(this, _v2), 7n) + rotl(__privateGet(this, _v3), 12n) + rotl(__privateGet(this, _v4), 18n);
        h64 = trunc(h64 ^ rotl(trunc(__privateGet(this, _v1) * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(h64 * PRIME64_1 + PRIME64_4);
        h64 = trunc(h64 ^ rotl(trunc(__privateGet(this, _v2) * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(h64 * PRIME64_1 + PRIME64_4);
        h64 = trunc(h64 ^ rotl(trunc(__privateGet(this, _v3) * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(h64 * PRIME64_1 + PRIME64_4);
        h64 = trunc(h64 ^ rotl(trunc(__privateGet(this, _v4) * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(h64 * PRIME64_1 + PRIME64_4);
      } else {
        h64 = trunc(__privateGet(this, _seed) + PRIME64_5);
      }
      h64 += BigInt(__privateGet(this, _len));
      while (p <= bEnd - 8) {
        u = memoryToBigInt(input, p);
        u = trunc(rotl(trunc(u * PRIME64_2), 31n) * PRIME64_1);
        h64 = trunc(rotl(h64 ^ u, 27n) * PRIME64_1 + PRIME64_4);
        p += 8;
      }
      if (p + 4 <= bEnd) {
        u = bitsToBigInt(input[p + 1] << 8 | input[p], input[p + 3] << 8 | input[p + 2], 0, 0);
        h64 = trunc(rotl(h64 ^ trunc(u * PRIME64_1), 23n) * PRIME64_2 + PRIME64_3);
        p += 4;
      }
      while (p < bEnd) {
        u = bitsToBigInt(input[p++], 0, 0, 0);
        h64 = trunc(rotl(h64 ^ trunc(u * PRIME64_5), 11n) * PRIME64_1);
      }
      h = trunc(h64 >> 33n);
      h64 = trunc((h64 ^ h) * PRIME64_2);
      h = trunc(h64 >> 29n);
      h64 = trunc((h64 ^ h) * PRIME64_3);
      h = trunc(h64 >> 32n);
      h64 = trunc(h64 ^ h);
      return h64;
    }
    static hash(input, seed = 0) {
      return new _XXH64(seed).update(input).digest().toString(16);
    }
  };
  var XXH64 = _XXH64;
  _seed = new WeakMap();
  _v1 = new WeakMap();
  _v2 = new WeakMap();
  _v3 = new WeakMap();
  _v4 = new WeakMap();
  _memory = new WeakMap();
  _len = new WeakMap();
  _memsize = new WeakMap();

  // src/webflow-membership/user.ts
  var Sa5User = class {
    constructor() {
      this.user_data_loaded = {
        email: false,
        account_info: false,
        custom_fields: false,
        access_groups: false
      };
      this.access_groups = [];
      this.data = {};
      this.meta = {};
      this.raw = {};
      this.isLoggedIn = function() {
        return getCookie("wf_loggedin") || false;
      };
    }
    get user_id_alt() {
      if (!this.email)
        return void 0;
      return XXH64.hash(this.email);
    }
    get name_short_clean() {
      if (!this.email)
        return void 0;
      return this.email.split("@")[0];
    }
    get name_short() {
      if (!this.email)
        return void 0;
      return this.name_short_clean + "@";
    }
    get name_short_tcase() {
      if (!this.email)
        return void 0;
      return toTitleCase(this.name_short_clean);
    }
    fromJSON(json) {
      if (!json)
        return;
      this.user_id = json.user_id;
      this.name = json.name;
      this.email = json.email;
      this.accept_communications = json.accept_communications;
      this.access_groups = json.access_groups;
      this.data = json.data;
      this.user_data_loaded.email = json.user_data_loaded.email;
      this.user_data_loaded.account_info = json.user_data_loaded.account_info;
      this.user_data_loaded.custom_fields = json.user_data_loaded.custom_fields;
      this.user_data_loaded.access_groups = json.user_data_loaded.access_groups;
      this.raw = json.raw;
    }
  };

  // src/webflow-databind/template/default-template-handler.ts
  var DefaultTemplateHandler = class {
    constructor(dataBinder) {
      this._dataBinder = dataBinder;
    }
    processElement(elem) {
      let html = elem.innerHTML;
      html = html.replace(/{{(.*?)}}/g, (match, p1) => {
        return this.processItem(p1, elem);
      });
      elem.innerHTML = html;
    }
    processItem(dsdSpecifier, elem) {
      let dsd = new Sa5DataSourceDescriptor(dsdSpecifier);
      return this._dataBinder.getData(dsd, elem);
    }
  };

  // src/webflow-databind.ts
  var Sa5DataSourceDescriptor = class {
    get isValid() {
      if (!this.name)
        return false;
      if (!this.type)
        return false;
      return true;
    }
    constructor(dataSourceDescriptor) {
      this.parse(dataSourceDescriptor);
    }
    expandDataSourceTypeAbbr(dsd) {
      const DSN_TYPE_ABBR = {
        "@": "$user",
        "+": "$db",
        "?": "$query",
        "!": "$unknown",
        "#": "$unknown",
        "%": "$unknown",
        "^": "$unknown",
        "&": "$unknown",
        "*": "$unknown",
        "=": "$unknown",
        "-": "$unknown",
        "~": "$unknown"
      };
      if (DSN_TYPE_ABBR.hasOwnProperty(dsd[0])) {
        return DSN_TYPE_ABBR[dsd[0]] + "." + dsd.slice(1);
      }
      return dsd;
    }
    parse(dsd) {
      this.name = void 0;
      this.type = void 0;
      dsd = dsd.trim();
      dsd = this.expandDataSourceTypeAbbr(dsd);
      let parts = dsd.split(".");
      var dsnTypeName = parts.shift();
      if (dsnTypeName[0] != "$") {
        return;
      }
      dsnTypeName = dsnTypeName.slice(1);
      this.identifierParts = parts;
      this.name = this.identifierParts.join(".");
      this.type = dsnTypeName;
    }
  };
  var WfuDataBinder2 = class {
    constructor(store, config = {}) {
      this.store = store;
      this.config = {
        db: config.db ?? null,
        user: config.user ?? null,
        handlers: []
      };
      if (!this.config.user)
        this.config.user = new Sa5UserAccounts().loadUserInfoCache();
    }
    bindAll() {
      let dataBind = document.querySelectorAll(
        `[${"wfu-bind" /* ATTR_DATABIND */}]`
      );
      dataBind.forEach((elem) => {
        this.bind(elem);
        elem.removeAttribute("wfu-preload" /* ATTR_PRELOAD */);
      });
      let dataBindContent = document.querySelectorAll(
        `[${"wfu-bind-content" /* ATTR_DATABIND_CONTENT */}]`
      );
      dataBindContent.forEach((elem) => {
        this.bindContent(elem);
        elem.removeAttribute("wfu-preload" /* ATTR_PRELOAD */);
      });
    }
    findContextSetting(element, attr) {
      while (element) {
        if (element.getAttribute(attr) !== null) {
          return element.getAttribute(attr);
        }
        element = element.parentElement;
      }
      return null;
    }
    bind(elem) {
      let dsnDescriptor = elem.getAttribute("wfu-bind" /* ATTR_DATABIND */);
      let dsn = new Sa5DataSourceDescriptor(dsnDescriptor);
      if (!dsn.isValid) {
        console.error("Invalid dsn.", dsn);
        return;
      }
      let val = null;
      val = this.getData(
        dsn,
        elem
      );
      if (!val)
        return;
      switch (identifyElement(elem)) {
        case "HTMLLinkElement":
          elem.href = val;
          break;
        case "HTMLCheckboxElement":
          elem.checked = booleanValue(val);
          break;
        case "HTMLRadioElement":
          break;
        case "HTMLFileInputElement":
          break;
        case "HTMLInputElement":
          elem.value = val;
          break;
        case "HTMLSelectElement":
          selectOptionByValue(
            elem,
            val
          );
          break;
        case "HTMLTextAreaElement":
          elem.value = val;
          break;
        case "HTMLButtonElement":
          break;
        default:
          elem.textContent = val;
          break;
      }
    }
    bindContent(elem) {
      new DefaultTemplateHandler(this).processElement(elem);
    }
    getData(dsd, elem = null) {
      switch (dsd.type) {
        case "user" /* USER */:
          return this.getData_user(
            dsd
          );
        case "db" /* DB */:
          let dsnContext = this.findContextSetting(
            elem,
            "wfu-bind-dsn" /* ATTR_DATABIND_CONTEXT_DSN */
          );
          let itemContext = this.findContextSetting(
            elem,
            "wfu-bind-item-id" /* ATTR_DATABIND_CONTEXT_ITEM_ID */
          );
          return this.getData_db(
            dsd,
            dsnContext,
            itemContext
          );
        case "query" /* QUERY */:
          return this.getData_query(
            dsd
          );
        case "url" /* URL */:
          return this.getData_url(
            dsd
          );
        case "local" /* LOCAL_STORAGE */:
          return this.getData_localStorage(
            dsd
          );
        case "session" /* SESSION_STORAGE */:
          return this.getData_sessionStorage(
            dsd
          );
        case "cookie" /* COOKIE */:
          return this.getData_cookieStorage(
            dsd
          );
      }
    }
    getData_user(dsd) {
      if (!this.config.user || !this.config.user.email)
        return null;
      let val = "";
      switch (dsd.identifierParts[0]) {
        case "data":
          val = this.config.user.data[dsd.identifierParts[1]];
          break;
        default:
          val = this.config.user[dsd.name];
          break;
      }
      return val;
    }
    getData_cookieStorage(dsd) {
      if (typeof window == "undefined")
        return null;
      return getCookie(dsd.name);
    }
    getData_localStorage(dsd) {
      if (typeof window == "undefined")
        return null;
      return localStorage.getItem(dsd.name);
    }
    getData_sessionStorage(dsd) {
      if (typeof window == "undefined")
        return null;
      return sessionStorage.getItem(dsd.name);
    }
    getData_query(dsd) {
      if (typeof window == "undefined")
        return null;
      let urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(dsd.name);
    }
    getData_url(dsd) {
      if (typeof window == "undefined")
        return null;
      const url = new URL(window.location.href);
      const fieldValue = url[dsd.name];
      console.log(fieldValue);
      return fieldValue;
    }
    getData_db(dsd, dsnContext, itemContext) {
      let db = this.store.store[dsnContext];
      let item = db.data.get(itemContext);
      return item[dsd.name];
    }
  };

  // src/webflow-membership/access-groups.ts
  var Sa5UserAccessGroups = class {
    constructor(membership) {
      this.accessGroups = [];
      this.membership = membership;
    }
    async initAsync() {
      console.log("initAsync");
      console.log(await this.getAccessGroupsAsync());
    }
    async getAccessGroupsAsync() {
      this.accessGroups = [];
      for (let group of this.membership.config.accessGroups) {
        let hasAccess = await this.checkAccessGroupAsync(group);
        if (hasAccess)
          this.accessGroups.push(group);
      }
      return this.accessGroups;
    }
    async checkAccessGroupAsync(accessGroupCode) {
      const response = await fetch(
        `${this.membership.config.accessGroupsFolder}/${accessGroupCode}`
      );
      console.log(`redirected: ${response.redirected}`);
      console.log("STATUS:", response.status);
      if (!response.redirected) {
        console.log(`Has access group ${accessGroupCode}`);
        return true;
      }
      if (response.status != 200) {
        console.warn("SA5", `Memberships configuration error- access group ${accessGroupCode} is not queryable.`);
      }
      console.log(`Not logged in, or no access to ${accessGroupCode}`);
      return false;
    }
  };

  // src/webflow-membership/hyperflow.ts
  var Sa5UserHyperflow = class {
    constructor(membership) {
      this.accessGroups = [];
      this.membership = membership;
    }
    async initAsync() {
      console.log("initAsync");
      console.log(await this.getCurrentUserAsync());
    }
    async getCurrentUserAsync() {
      const response = await fetch(
        `${this.membership.config.hf.currentUserUrl}`
      );
      console.log("STATUS:", response.status);
      const raw = await response.json();
      console.log(raw);
    }
  };

  // src/webflow-membership.ts
  var StorageKeys = Object.freeze({
    user: "wfuUser",
    userKey: "wfuUserKey"
  });
  var Sa5UserAccounts = class {
    constructor(config = {}) {
      this.userInfoUpdatedCallback = (user) => {
        if (this.config.userInfoUpdatedCallback)
          this.config.userInfoUpdatedCallback(
            user
          );
      };
      this.config = {
        userInfoUpdatedCallback: config.userInfoUpdatedCallback,
        debug: config.debug ?? false,
        dataBind: config.dataBind ?? true,
        accessGroupsFolder: config.accessGroupsFolder ?? "/sa5-ag",
        accessGroups: config.accessGroups ?? null,
        advanced: {
          accountInfoLoadDelay: config.advanced?.accountInfoLoadDelay ?? 300,
          accountInfoSaveDelay: config.advanced?.accountInfoSaveDelay ?? 500
        },
        hf: {
          enabled: config.hf?.enabled ?? false,
          currentUserUrl: config.hf?.currentUserUrl ?? "/_hf/users/current_user"
        }
      };
      let core = Sa5Core.startup();
      this.debug = new Sa5Debug("sa5-membership");
      this.debug.debug("Initializing");
    }
    isUserInfoChangedCallback(func) {
      if (!func)
        return false;
      return func.length === 1;
    }
    onUserInfoChanged(user) {
      let core = Sa5Core.startup();
      console.log(core);
      const userInfoChanged = core.getHandlers("userInfoChanged" /* EVENT_USER_CHANGED */);
      userInfoChanged.forEach((f) => {
        if (this.isUserInfoChangedCallback(f)) {
          f(user);
        }
      });
    }
    init() {
      this.debug.group(`SA5 UserInfo init - ${Date.now()}.`);
      let core = Sa5Core.startup();
      let configHandler = core.getHandler("getMembershipConfig");
      if (!configHandler)
        return;
      if (configHandler) {
        this.config = configHandler(
          this.config
        );
      }
      let forms = document.querySelectorAll("form[data-wf-user-form-type='login']");
      forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
          let emailInput = form.querySelector("#wf-log-in-email");
          let userEmail = emailInput.value;
          let userKey = btoa(userEmail);
          localStorage.setItem("StorageKeys.userKey", userKey);
        });
      });
      forms = document.querySelectorAll("form[data-wf-user-form-type='userAccount']");
      forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
          setTimeout(async () => {
            await this.loadUserInfoAsync();
          }, this.config.advanced.accountInfoSaveDelay);
        });
      });
      this.readyUserInfo();
      this.debug.groupEnd();
    }
    isLoggedIn() {
      return getCookie("wf_loggedin") || false;
    }
    clearUserInfo() {
      this.debug.group("clearUserInfo");
      this.debug.debug("logged out, cleaning info.");
      sessionStorage.removeItem(StorageKeys.user);
      localStorage.removeItem(StorageKeys.userKey);
      this.debug.groupEnd();
    }
    async readyUserInfo() {
      this.debug.group("readyUserInfo");
      if (!this.isLoggedIn()) {
        this.clearUserInfo();
        this.debug.groupEnd();
        return;
      }
      var user = this.loadUserInfoCache();
      if (user) {
        if (this.config.dataBind) {
          this.debug.debug("databinding", user);
          new WfuDataBinder2(null, {
            user
          }).bindAll();
        }
        this.onUserInfoChanged(user);
      }
      if (!user)
        await this.loadUserInfoAsync();
      this.debug.groupEnd();
    }
    async getUserKey() {
      var userKey;
      const userKeyEncoded = localStorage.getItem(StorageKeys.userKey);
      if (userKeyEncoded) {
        return atob(userKeyEncoded);
      }
    }
    async loadUserInfoAsync() {
      this.debug.group("loadUserInfoAsync");
      this.debug.debug(`isLoggedIn = ${this.isLoggedIn()}`);
      if (!this.isLoggedIn()) {
        this.clearUserInfo();
        this.debug.groupEnd();
        return;
      }
      sessionStorage.removeItem(StorageKeys.user);
      if (this.config.hf.enabled) {
        this.loadUserInfoAsync_hyperflow();
      } else {
        this.loadUserInfoAsync_loginInfo();
        this.loadUserInfoAsync_accountInfo();
        this.loadUserInfoAsync_accessGroups();
      }
      this.debug.groupEnd();
    }
    async loadUserInfoAsync_hyperflow() {
      this.debug.group("loadUserInfoAsync_hyperflow");
      var user = new Sa5User();
      user.user_data_loaded.email = true;
      user.user_data_loaded.account_info = true;
      user.user_data_loaded.access_groups = true;
      const hf = new Sa5UserHyperflow(this);
      await hf.initAsync();
      this.debug.debug("Caching user object [login].", user);
      this.saveUserInfoCache(user);
      this.debug.groupEnd();
    }
    async loadUserInfoAsync_loginInfo() {
      this.debug.group("loadUserInfoAsync_loginInfo");
      var user = new Sa5User();
      user.user_data_loaded.email = true;
      const userKey = await this.getUserKey();
      if (!userKey) {
        this.debug.debug("No user key for loading.");
        this.debug.groupEnd();
        return;
      }
      user.email = userKey;
      this.debug.debug("Caching user object [login].", user);
      this.saveUserInfoCache(user);
      this.debug.groupEnd();
    }
    async loadUserInfoAsync_accountInfo() {
      this.debug.group("loadUserInfoAsync_accountInfo");
      if (window.self != window.top) {
        return;
      }
      let userInfoPixel = document.createElement("iframe");
      userInfoPixel.src = "/user-account";
      userInfoPixel.id = "userInfoPixel";
      userInfoPixel.style.display = "none";
      document.body.append(userInfoPixel);
      userInfoPixel.addEventListener("load", async () => {
        this.debug.debug("Loading user account info.");
        this.debug.debug(`%c here`, "color: #ff0000; background-color: yellow;");
        var user = new Sa5User();
        user.user_data_loaded.email = true;
        user.user_data_loaded.account_info = true;
        user.user_data_loaded.custom_fields = true;
        let userAccountEmailInput = null;
        if (userInfoPixel.contentDocument) {
          userAccountEmailInput = userInfoPixel.contentDocument.querySelector("input#wf-user-account-email");
        } else if (userInfoPixel.contentWindow) {
          userAccountEmailInput = userInfoPixel.contentWindow.document.querySelector("input#wf-user-account-email");
        }
        if (!userAccountEmailInput) {
          return;
        }
        const input = userAccountEmailInput;
        const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
        Object.defineProperty(input, "value", {
          get: desc.get,
          set: function(v) {
            desc.set.call(this, v);
            if ("createEvent" in document) {
              var evt = document.createEvent("HTMLEvents");
              evt.initEvent("change", false, true);
              input.dispatchEvent(evt);
            } else {
              if (userAccountEmailInput) {
                let event = new Event("change", {
                  bubbles: true,
                  cancelable: true
                });
                userAccountEmailInput.dispatchEvent(event);
              }
            }
          }
        });
        userAccountEmailInput.addEventListener("change", async () => {
          this.debug.debug("email field load detected.");
          this.debug.debug(`waiting ${this.config.advanced.accountInfoLoadDelay}ms`);
          setTimeout(
            async () => {
              this.debug.debug(`%c USER-ACCOUNT LOADED`, "color: #ff0000; background-color: yellow;");
              const userKey = userAccountEmailInput.value;
              user.email = userKey;
              let doc = userInfoPixel.contentDocument || userInfoPixel.contentWindow?.document;
              if (doc) {
                let userNameElement = doc.querySelector("[data-wf-user-field='wf-user-field-name']");
                if (userNameElement) {
                  user.name = userNameElement.value;
                }
                let acceptCommunicationsCheckbox = doc.querySelector("#wf-user-account-accept-communications");
                if (acceptCommunicationsCheckbox) {
                  user.accept_communications = acceptCommunicationsCheckbox.checked;
                }
                let userDataFields = doc.querySelectorAll("[data-wf-user-field]");
                userDataFields.forEach((element) => {
                  const id = element.id;
                  const fieldType = element.getAttribute("data-wf-user-field-type");
                  let val = element.value;
                  if (!id)
                    return;
                  if (id.startsWith("wf-user-account-"))
                    return;
                  switch (fieldType) {
                    case "PlainText":
                    case "Email":
                    case "Link":
                    case "Option":
                      user.data[id] = val;
                      return;
                    case "Number":
                      user.data[id] = val;
                      return;
                    case "Bool":
                      let checkbox = element;
                      user.data[id] = checkbox.checked;
                      return;
                    case "FileRef":
                      break;
                  }
                });
              }
              this.debug.debug("Final version", user);
              this.debug.debug("Caching user object [account_info].", user);
              this.saveUserInfoCache(user);
            },
            this.config.advanced.accountInfoLoadDelay
          );
        });
        this.debug.groupEnd();
      });
    }
    async loadUserInfoAsync_accessGroups() {
      this.debug.group("loadUserInfoAsync_accessGroups");
      var user = new Sa5User();
      user.user_data_loaded.access_groups = true;
      if (this.config.accessGroups) {
        let accessGroupHandler = new Sa5UserAccessGroups(this);
        await accessGroupHandler.initAsync();
        user.access_groups = accessGroupHandler.accessGroups;
      } else {
        this.debug.debug("Access groups not configured.");
      }
      this.debug.debug("Caching user object [login].", user);
      this.saveUserInfoCache(user);
      this.debug.groupEnd();
    }
    saveUserInfoCache(newUserData) {
      this.debug.group("saveUserInfoCache");
      if (!this.isLoggedIn) {
        this.debug.debug("no user logged in.");
        this.debug.groupEnd();
        return null;
      }
      var userData = this.loadUserInfoCache();
      if (!userData)
        userData = new Sa5User();
      if (newUserData.user_data_loaded.email) {
        this.debug.debug("Merging user email.");
        userData.email = newUserData.email;
      }
      if (newUserData.user_data_loaded.account_info) {
        this.debug.debug("Merging user account_info.");
        userData.email = newUserData.email;
        userData.name = newUserData.name;
        userData.accept_communications = newUserData.accept_communications;
      }
      if (newUserData.user_data_loaded.custom_fields) {
        this.debug.debug("Merging user custom_fields.");
        userData.data = newUserData.data;
      }
      if (newUserData.user_data_loaded.access_groups) {
        this.debug.debug("Merging user access_groups.");
        userData.access_groups = newUserData.access_groups;
      }
      userData.user_data_loaded.email = userData.user_data_loaded.email || newUserData.user_data_loaded.email;
      userData.user_data_loaded.account_info = userData.user_data_loaded.account_info || newUserData.user_data_loaded.account_info;
      userData.user_data_loaded.custom_fields = userData.user_data_loaded.custom_fields || newUserData.user_data_loaded.custom_fields;
      userData.user_data_loaded.access_groups = userData.user_data_loaded.access_groups || newUserData.user_data_loaded.access_groups;
      this.debug.debug("new user", newUserData);
      this.debug.debug("merged", userData);
      sessionStorage.setItem(
        StorageKeys.user,
        btoa(JSON.stringify(userData))
      );
      if (this.config.dataBind) {
        this.debug.debug("databinding", userData);
        new WfuDataBinder2(
          null,
          {
            user: userData
          }
        ).bindAll();
      }
      this.onUserInfoChanged(userData);
      this.debug.groupEnd();
    }
    loadUserInfoCache() {
      this.debug.group("loadUserInfoCache");
      if (!this.isLoggedIn) {
        this.debug.debug("No user logged in.");
        this.debug.groupEnd();
        return null;
      }
      const userInfo = sessionStorage.getItem(StorageKeys.user);
      if (!userInfo) {
        this.debug.debug("No user info to load.");
        this.debug.groupEnd();
        return null;
      }
      this.debug.debug(userInfo);
      this.debug.debug("getting user.");
      const user = new Sa5User();
      user.fromJSON(
        JSON.parse(atob(userInfo))
      );
      this.debug.groupEnd();
      return user;
    }
    expandLoginButton(elem) {
      const wfLoginButton = elem.querySelector("[data-wf-user-logout]");
      elem.addEventListener("click", () => {
        if (wfLoginButton) {
          wfLoginButton.click();
        }
      });
      if (wfLoginButton) {
        wfLoginButton.addEventListener("click", (e) => {
          e.stopPropagation();
        });
      }
    }
  };
})();
//# sourceMappingURL=webflow-membership.js.map
