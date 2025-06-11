(() => {
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
    Sa5Attribute2["ATTR_ELEMENT"] = "wfu-element";
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
    Sa5Attribute2["ATTR_ELEMENT_ACTION"] = "wfu-action";
    Sa5Attribute2["ATTR_ELEMENT_ACTION_TARGET"] = "wfu-action-target";
    Sa5Attribute2["ATTR_ELEMENT_ACTION_ITEM"] = "wfu-action-item";
    Sa5Attribute2["ATTR_ELEMENT_ACTION_TRIGGER"] = "wfu-action-trigger";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN"] = "wfu-dropdown";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_NAME"] = "wfu-dropdown-name";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_INIT"] = "wfu-dropdown-init";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_TYPE"] = "wfu-dropdown-type";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE"] = "wfu-autocomplete";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_INPUT"] = "wfu-autocomplete-input";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_LIST"] = "wfu-autocomplete-list";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM"] = "wfu-autocomplete-item";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_ACTION"] = "wfu-autocomplete-item-action";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_MATCH"] = "wfu-autocomplete-item-match";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_LAYOUT"] = "wfu-autocomplete-item-layout";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION"] = "wfu-accordion";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM"] = "wfu-accordion-item";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM_TAB"] = "wfu-accordion-item-tab";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM_CONTENT"] = "wfu-accordion-item-content";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_CLASS_OPEN"] = "wfu-accordion-class-open";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_CLASS_CLOSED"] = "wfu-accordion-class-closed";
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
    Sa5Attribute2["ATTR_EMAIL_ENCODED"] = "wfu-email-encoded";
    Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
    Sa5Attribute2["ATTR_FORM_HANDLER"] = "wfu-form-handler";
    Sa5Attribute2["ATTR_FORM_MESSAGE"] = "wfu-form-message";
    Sa5Attribute2["ATTR_FORM_IPINFO"] = "wfu-form-ipinfo";
    Sa5Attribute2["ATTR_FORM_SELECT"] = "wfu-form-select";
    Sa5Attribute2["ATTR_FORM_SELECT_MODE"] = "wfu-form-select-mode";
    Sa5Attribute2["ATTR_FORM_SELECT_THEME"] = "wfu-form-select-theme";
    Sa5Attribute2["ATTR_DISMISS"] = "wfu-dismiss";
    Sa5Attribute2["ATTR_DISMISS_TRIGGER"] = "wfu-dismiss-trigger";
    Sa5Attribute2["ATTR_DISMISS_CLOSE"] = "wfu-dismiss-close";
    Sa5Attribute2["ATTR_DISMISS_CLOSE_TYPE"] = "wfu-dismiss-close-type";
    Sa5Attribute2["ATTR_DISMISS_DAYS"] = "wfu-dismiss-suppress-days";
    Sa5Attribute2["ATTR_MODAL"] = "wfu-modal";
    Sa5Attribute2["ATTR_MODAL_TRIGGER_CLICK"] = "wfu-modal-trigger-click";
    Sa5Attribute2["ATTR_MODAL_STATE"] = "wfu-modal-state";
    Sa5Attribute2["ATTR_MODAL_GATE"] = "wfu-modal-gate";
    Sa5Attribute2["ATTR_MODAL_GATE_VIEW"] = "wfu-modal-gate-view";
    Sa5Attribute2["ATTR_MODAL_GATE_BUTTON"] = "wfu-modal-gate-button";
    Sa5Attribute2["ATTR_MODAL_GATE_FORM"] = "wfu-modal-gate-form";
    Sa5Attribute2["ATTR_FORMAT"] = "wfu-format";
    Sa5Attribute2["ATTR_FORMAT_DATE"] = "wfu-format-date";
    Sa5Attribute2["ATTR_FORMAT_HANDLER"] = "wfu-format-handler";
    Sa5Attribute2["ATTR_FORMAT_MODE"] = "wfu-format-mode";
    Sa5Attribute2["ATTR_FORMAT_LOCALE"] = "wfu-format-locale";
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
    Sa5Attribute2["ATTR_LAYOUT_NS"] = "wfu-layout-ns";
    Sa5Attribute2["ATTR_LAYOUT_INIT"] = "wfu-layout-init";
    Sa5Attribute2["ATTR_ELEMENTGROUP_NAME"] = "wfu-element-name";
    Sa5Attribute2["ATTR_ELEMENTGROUP_GROUP"] = "wfu-element-display";
    Sa5Attribute2["ATTR_ELEMENTGROUP_DEFAULT"] = "wfu-element-default";
    Sa5Attribute2["ATTR_ELEMENTGROUP_DISPLAY"] = "wfu-element-display";
    Sa5Attribute2["ATTR_ELEMENTGROUP_TARGETGROUP"] = "wfu-element-target-group";
    Sa5Attribute2["ATTR_ELEMENTGROUP_TARGETNAME"] = "wfu-element-target-name";
    Sa5Attribute2["ATTR_ELEMENTGROUP_ACTION"] = "wfu-element-action";
    return Sa5Attribute2;
  })(Sa5Attribute || {});

  // src/storage-utils.ts
  var StorageUtils = class {
    static get localStorageAvailable() {
      try {
        const test = "__test__";
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
    static get sessionStorageAvailable() {
      try {
        const test = "__test__";
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
    static get cookiesAvailable() {
      try {
        const test = "__test__=1";
        document.cookie = test + "; path=/";
        const cookies = document.cookie;
        const available = cookies.includes("__test__=1");
        document.cookie = "__test__=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        return available;
      } catch {
        return false;
      }
    }
  };

  // src/webflow-core/debug.ts
  var Sa5Debug = class {
    constructor(label) {
      this.localStorageDebugFlag = "sa5-debug";
      this._enabled = false;
      this._label = label;
    }
    get persistentDebug() {
      return StorageUtils.localStorageAvailable ? Boolean(localStorage.getItem(this.localStorageDebugFlag)) : false;
    }
    set persistentDebug(active) {
      if (!StorageUtils.localStorageAvailable)
        return;
      if (active) {
        localStorage.setItem(this.localStorageDebugFlag, "true");
        console.debug(`sa5-core debug enabled (persistent).`);
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug(`sa5-core debug disabled (persistent).`);
      }
    }
    get enabled() {
      if (!StorageUtils.localStorageAvailable)
        return false;
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
    debug2(...args) {
      if (this.enabled)
        console.debug.apply(console, [this._label, ...args]);
    }
    debug(...args) {
      if (this.enabled) {
        let formattedMessage = "";
        let styles = [];
        for (let i = 0; i < args.length; i++) {
          if (typeof args[i] === "string" && args[i].includes("%c") && typeof args[i + 1] === "string") {
            formattedMessage += args[i] + " ";
            styles.push(args[i + 1]);
            i++;
          } else {
            formattedMessage += "%c" + args[i] + " ";
            styles.push("");
          }
        }
        console.debug(formattedMessage.trim(), ...styles);
      }
    }
    static getStyleString(elem) {
      let styleString = "";
      for (let i = 0; i < elem.style.length; i++) {
        const property = elem.style[i];
        const value = elem.style.getPropertyValue(property);
        styleString += `${property}: ${value}; `;
      }
      return styleString;
    }
  };

  // src/version.ts
  var VERSION = "5.8.3";

  // src/webflow-modal/dismiss.ts
  var Sa5Dismiss = class {
    constructor(element) {
      this._element = element;
      this.debug = new Sa5Debug("sa5-dismiss");
      this.debug.debug(`Initializing v${VERSION}`);
    }
    getKeyName() {
      return `wfu-dismiss_${this._name}`;
    }
    isDismissed() {
      const dismissed = getCookie(
        this.getKeyName()
      );
      this.debug.debug("is-dismissed", this._name, this.getKeyName(), dismissed);
      return dismissed;
    }
    dismiss(duration) {
      this.debug.debug("dismissed", this._name, this.getKeyName(), duration);
      setCookie(
        this.getKeyName(),
        "true",
        {
          expires: duration
        }
      );
    }
    unDismiss() {
      removeCookie(
        this.getKeyName()
      );
    }
    init() {
      this._name = this._element.getAttribute(
        "wfu-dismiss" /* ATTR_DISMISS */
      ) || "default";
      if (this.isDismissed()) {
        this._element.remove();
        return;
      }
      this._element.removeAttribute(
        "wfu-dismiss-trigger" /* ATTR_DISMISS_TRIGGER */
      );
      const selector = Sa5Attribute.getBracketed("wfu-dismiss-close" /* ATTR_DISMISS_CLOSE */);
      const nodes = Array.from(this._element.querySelectorAll(selector));
      if (this._element.matches(selector)) {
        nodes.unshift(this._element);
      }
      nodes.forEach((element) => {
        this.debug.debug("Installing close button.");
        element.addEventListener("click", () => {
          this.debug.debug("Close button clicked.");
          const modalClose = element;
          const modal = modalClose.closest(
            Sa5Attribute.getBracketed("wfu-dismiss" /* ATTR_DISMISS */)
          );
          const modalCloseType = modal.getAttribute(
            "wfu-dismiss-close-type" /* ATTR_DISMISS_CLOSE_TYPE */
          ) || "auto";
          const modalSuppressDuration = parseFloat(modal.getAttribute(
            "wfu-dismiss-suppress-days" /* ATTR_DISMISS_DAYS */
          )) || 9999;
          this.dismiss(
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
      this._element.removeAttribute("wfu-preload" /* ATTR_PRELOAD */);
    }
  };
})();
/*! typescript-cookie v1.0.6 | MIT */
//# sourceMappingURL=dismiss.js.map
