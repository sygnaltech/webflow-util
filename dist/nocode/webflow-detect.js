(() => {
  // src/globals.ts
  var Sa5Attribute;
  ((Sa5Attribute3) => {
    function getBracketed(attr) {
      return `[${attr}]`;
    }
    Sa5Attribute3.getBracketed = getBracketed;
  })(Sa5Attribute || (Sa5Attribute = {}));
  var Sa5Attribute = /* @__PURE__ */ ((Sa5Attribute3) => {
    Sa5Attribute3["ATTR_CORE_SCRIPT_INJECT"] = "wfu-script-load";
    Sa5Attribute3["ATTR_VIDEO"] = "wfu-video";
    Sa5Attribute3["ATTR_VIDEO_YOUTUBE_NOREL"] = "wfu-youtube-norel";
    Sa5Attribute3["ATTR_VIDEO_DATA_POSTER_URL"] = "wfu-data-poster-url";
    Sa5Attribute3["ATTR_DESIGN"] = "wfu-design";
    Sa5Attribute3["ATTR_ELEMENT"] = "wfu-element";
    Sa5Attribute3["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
    Sa5Attribute3["ATTR_ELEMENT_SLIDE_NAME"] = "wfu-slide-name";
    Sa5Attribute3["ATTR_ELEMENT_TABS"] = "wfu-tabs";
    Sa5Attribute3["ATTR_ELEMENT_TAB_NAME"] = "wfu-tab-name";
    Sa5Attribute3["ATTR_ELEMENT_BUTTON"] = "wfu-button";
    Sa5Attribute3["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
    Sa5Attribute3["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
    Sa5Attribute3["ATTR_ELEMENT_DECK_TARGET"] = "wfu-deck-target";
    Sa5Attribute3["ATTR_ELEMENT_DECK_ACTION"] = "wfu-deck-action";
    Sa5Attribute3["ATTR_ELEMENT_DECK_ITEM"] = "wfu-deck-action-item";
    Sa5Attribute3["ATTR_ELEMENT_ACTION"] = "wfu-action";
    Sa5Attribute3["ATTR_ELEMENT_ACTION_TARGET"] = "wfu-action-target";
    Sa5Attribute3["ATTR_ELEMENT_ACTION_ITEM"] = "wfu-action-item";
    Sa5Attribute3["ATTR_ELEMENT_ACTION_TRIGGER"] = "wfu-action-trigger";
    Sa5Attribute3["ATTR_ELEMENT_DROPDOWN"] = "wfu-dropdown";
    Sa5Attribute3["ATTR_ELEMENT_DROPDOWN_NAME"] = "wfu-dropdown-name";
    Sa5Attribute3["ATTR_ELEMENT_DROPDOWN_INIT"] = "wfu-dropdown-init";
    Sa5Attribute3["ATTR_ELEMENT_DROPDOWN_TYPE"] = "wfu-dropdown-type";
    Sa5Attribute3["ATTR_ELEMENT_AUTOCOMPLETE"] = "wfu-autocomplete";
    Sa5Attribute3["ATTR_ELEMENT_AUTOCOMPLETE_INPUT"] = "wfu-autocomplete-input";
    Sa5Attribute3["ATTR_ELEMENT_AUTOCOMPLETE_LIST"] = "wfu-autocomplete-list";
    Sa5Attribute3["ATTR_ELEMENT_AUTOCOMPLETE_ITEM"] = "wfu-autocomplete-item";
    Sa5Attribute3["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_ACTION"] = "wfu-autocomplete-item-action";
    Sa5Attribute3["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_MATCH"] = "wfu-autocomplete-item-match";
    Sa5Attribute3["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_LAYOUT"] = "wfu-autocomplete-item-layout";
    Sa5Attribute3["ATTR_ELEMENT_ACCORDION"] = "wfu-accordion";
    Sa5Attribute3["ATTR_ELEMENT_ACCORDION_ITEM"] = "wfu-accordion-item";
    Sa5Attribute3["ATTR_ELEMENT_ACCORDION_ITEM_TAB"] = "wfu-accordion-item-tab";
    Sa5Attribute3["ATTR_ELEMENT_ACCORDION_ITEM_CONTENT"] = "wfu-accordion-item-content";
    Sa5Attribute3["ATTR_ELEMENT_ACCORDION_CLASS_OPEN"] = "wfu-accordion-class-open";
    Sa5Attribute3["ATTR_ELEMENT_ACCORDION_CLASS_CLOSED"] = "wfu-accordion-class-closed";
    Sa5Attribute3["ATTR_DATA"] = "wfu-data";
    Sa5Attribute3["ATTR_DATA_TYPE"] = "wfu-data-type";
    Sa5Attribute3["ATTR_DATA_DSN"] = "wfu-data-dsn";
    Sa5Attribute3["ATTR_DATA_ITEM_ID"] = "wfu-data-item-id";
    Sa5Attribute3["ATTR_DATABIND"] = "wfu-bind";
    Sa5Attribute3["ATTR_DATABIND_CONTENT"] = "wfu-bind-content";
    Sa5Attribute3["ATTR_DATABIND_CONTEXT_DSN"] = "wfu-bind-dsn";
    Sa5Attribute3["ATTR_DATABIND_CONTEXT_ITEM_ID"] = "wfu-bind-item-id";
    Sa5Attribute3["ATTR_PRELOAD"] = "wfu-preload";
    Sa5Attribute3["ATTR_IX_TRIGGER"] = "wfu-ix-trigger";
    Sa5Attribute3["ATTR_IX_ID"] = "wfu-ix-id";
    Sa5Attribute3["ATTR_SORT"] = "wfu-sort";
    Sa5Attribute3["ATTR_SORT_DIR"] = "wfu-sort-dir";
    Sa5Attribute3["ATTR_SORT_TYPE"] = "wfu-sort-type";
    Sa5Attribute3["ATTR_SORT_KEY"] = "wfu-sort-key";
    Sa5Attribute3["ATTR_FILTER"] = "wfu-filter";
    Sa5Attribute3["ATTR_FILTER_MATCH"] = "wfu-filter-match";
    Sa5Attribute3["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
    Sa5Attribute3["ATTR_FILTER_FUNC"] = "wfu-filter-func";
    Sa5Attribute3["ATTR_HIDE"] = "wfu-hide";
    Sa5Attribute3["ATTR_SUPPRESS"] = "wfu-suppress";
    Sa5Attribute3["ATTR_EMAIL_ENCODED"] = "wfu-email-encoded";
    Sa5Attribute3["ATTR_404_SEARCH"] = "wfu-404-search";
    Sa5Attribute3["ATTR_FORM_HANDLER"] = "wfu-form-handler";
    Sa5Attribute3["ATTR_FORM_MESSAGE"] = "wfu-form-message";
    Sa5Attribute3["ATTR_FORM_IPINFO"] = "wfu-form-ipinfo";
    Sa5Attribute3["ATTR_FORM_SELECT"] = "wfu-form-select";
    Sa5Attribute3["ATTR_FORM_SELECT_MODE"] = "wfu-form-select-mode";
    Sa5Attribute3["ATTR_FORM_SELECT_THEME"] = "wfu-form-select-theme";
    Sa5Attribute3["ATTR_DISMISS"] = "wfu-dismiss";
    Sa5Attribute3["ATTR_DISMISS_TRIGGER"] = "wfu-dismiss-trigger";
    Sa5Attribute3["ATTR_DISMISS_CLOSE"] = "wfu-dismiss-close";
    Sa5Attribute3["ATTR_DISMISS_CLOSE_TYPE"] = "wfu-dismiss-close-type";
    Sa5Attribute3["ATTR_DISMISS_DAYS"] = "wfu-dismiss-suppress-days";
    Sa5Attribute3["ATTR_MODAL"] = "wfu-modal";
    Sa5Attribute3["ATTR_MODAL_TRIGGER_CLICK"] = "wfu-modal-trigger-click";
    Sa5Attribute3["ATTR_MODAL_STATE"] = "wfu-modal-state";
    Sa5Attribute3["ATTR_MODAL_GATE"] = "wfu-modal-gate";
    Sa5Attribute3["ATTR_MODAL_GATE_VIEW"] = "wfu-modal-gate-view";
    Sa5Attribute3["ATTR_MODAL_GATE_BUTTON"] = "wfu-modal-gate-button";
    Sa5Attribute3["ATTR_MODAL_GATE_FORM"] = "wfu-modal-gate-form";
    Sa5Attribute3["ATTR_FORMAT"] = "wfu-format";
    Sa5Attribute3["ATTR_FORMAT_DATE"] = "wfu-format-date";
    Sa5Attribute3["ATTR_FORMAT_HANDLER"] = "wfu-format-handler";
    Sa5Attribute3["ATTR_FORMAT_MODE"] = "wfu-format-mode";
    Sa5Attribute3["ATTR_FORMAT_LOCALE"] = "wfu-format-locale";
    Sa5Attribute3["ATTR_FORMAT_SUFFIX"] = "wfu-format-suffix";
    Sa5Attribute3["ATTR_COUNTUP"] = "wfu-countup";
    Sa5Attribute3["ATTR_COUNTUP_TRIGGER"] = "wfu-countup-trigger";
    Sa5Attribute3["ATTR_DEMO_LINK"] = "wfu-demo-link";
    Sa5Attribute3["ATTR_LIGHTBOX_CAPTIONS"] = "wfu-lightbox-captions";
    Sa5Attribute3["ATTR_LIGHTBOX_GROUP"] = "wfu-lightbox-group";
    Sa5Attribute3["ATTR_DECODE"] = "wfu-decode";
    Sa5Attribute3["ATTR_LIMIT_MULTIPLE"] = "wfu-limit-multiple";
    Sa5Attribute3["ATTR_LIMIT_MULTIPLE_MIN"] = "wfu-limit-multiple-min";
    Sa5Attribute3["ATTR_SHOW_LOGGED_IN"] = "wfu-show-logged-in";
    Sa5Attribute3["ATTR_HIDE_LOGGED_IN"] = "wfu-hide-logged-in";
    Sa5Attribute3["ATTR_LOGIN_BUTTON"] = "wfu-login-button";
    Sa5Attribute3["ATTR_RICHTEXT_LISTS"] = "wfu-lists";
    Sa5Attribute3["ATTR_RICHTEXT_LIST_THEME"] = "wfu-list-theme";
    Sa5Attribute3["ATTR_URL_RELATIVE_LINKS"] = "wfu-relative-links";
    Sa5Attribute3["ATTR_URL_EXTERNAL_LINKS"] = "wfu-external-links";
    Sa5Attribute3["ATTR_UI_ACCORDION"] = "wfu-ui-accordion";
    Sa5Attribute3["ATTR_RATING"] = "wfu-rating";
    Sa5Attribute3["ATTR_GIST"] = "wfu-gist";
    Sa5Attribute3["ATTR_GIST_COPY"] = "wfu-gist-copy";
    Sa5Attribute3["ATTR_LAYOUT"] = "wfu-layout";
    Sa5Attribute3["ATTR_LAYOUT_HANDLER"] = "wfu-layout-handler";
    Sa5Attribute3["ATTR_LAYOUT_TARGET"] = "wfu-layout-target";
    Sa5Attribute3["ATTR_LAYOUT_NS"] = "wfu-layout-ns";
    Sa5Attribute3["ATTR_LAYOUT_INIT"] = "wfu-layout-init";
    Sa5Attribute3["ATTR_ELEMENTGROUP_NAME"] = "wfu-element-name";
    Sa5Attribute3["ATTR_ELEMENTGROUP_GROUP"] = "wfu-element-display";
    Sa5Attribute3["ATTR_ELEMENTGROUP_DEFAULT"] = "wfu-element-default";
    Sa5Attribute3["ATTR_ELEMENTGROUP_DISPLAY"] = "wfu-element-display";
    Sa5Attribute3["ATTR_ELEMENTGROUP_TARGETGROUP"] = "wfu-element-target-group";
    Sa5Attribute3["ATTR_ELEMENTGROUP_TARGETNAME"] = "wfu-element-target-name";
    Sa5Attribute3["ATTR_ELEMENTGROUP_ACTION"] = "wfu-element-action";
    return Sa5Attribute3;
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
        console.debug(`sa5-core debug enabled (persistent).`);
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug(`sa5-core debug disabled (persistent).`);
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

  // src/webflow-core/events.ts
  var Sa5Event = class {
    constructor(name) {
      this.handlers = /* @__PURE__ */ new Set();
      this.name = name;
    }
    addHandler(handler, ...args) {
      this.handlers.add({ handler, args });
    }
    removeHandler(handler) {
      this.handlers.forEach((h) => {
        if (h.handler === handler) {
          this.handlers.delete(h);
        }
      });
    }
    execute() {
      this.handlers.forEach(({ handler, args }) => handler(...args));
    }
    hasHandlers() {
      return this.handlers.size > 0;
    }
  };
  var Sa5EventRegistry = class extends Map {
    constructor() {
      super();
    }
    getEvent(eventName) {
      return this.get(eventName);
    }
    addEvent(eventName) {
      if (!this.has(eventName)) {
        this.set(eventName, new Sa5Event(eventName));
      }
    }
    removeEvent(eventName) {
      this.delete(eventName);
    }
    executeEvent(eventName) {
      this.get(eventName)?.execute();
    }
    addEventHandler(eventName, handler, ...args) {
      if (!this.has(eventName)) {
        this.addEvent(eventName);
      }
      this.get(eventName)?.addHandler(handler, ...args);
    }
    clearHandler(eventName, handler) {
      const event = this.get(eventName);
      if (event) {
        event.removeHandler(handler);
        if (!event.hasHandlers()) {
          this.delete(eventName);
        }
      }
    }
  };

  // src/webflow-core/triggers/triggerBase.ts
  var Sa5EventsTriggerBase = class {
    constructor(core, debug) {
      this.core = core;
      this.debug = debug;
    }
    debugTrigger(triggerName, eventName, ...args) {
      const TRIGGER_STYLE = "background-color: lightblue;";
      const ARROW_STYLE = "color: red;";
      const ACTION_STYLE = "background-color: lightgreen;";
      const EVENT_STYLE = "background-color: lightgrey;";
      this.debug.debug(`%c ${triggerName}`, TRIGGER_STYLE, "%c \u2794", ARROW_STYLE, `%c ${eventName}`, EVENT_STYLE, "", ...args);
    }
    init() {
    }
  };

  // src/webflow-events/triggers/click.ts
  var Sa5EventsTriggerClick = class extends Sa5EventsTriggerBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const elems = document.querySelectorAll("[sa-trigger-click]");
      elems.forEach((elem) => {
        const eventName = elem.getAttribute("sa-trigger-click");
        if (eventName) {
          elem.addEventListener("click", () => {
            this.debugTrigger("\u2197 click", eventName);
            this.core.events.executeEvent(eventName);
          });
        }
      });
    }
  };

  // src/webflow-core/actions/actionBase.ts
  var Sa5EventsActionBase = class {
    constructor(core, debug) {
      this.core = core;
      this.debug = debug;
    }
    debugTrigger(actionName, eventName, ...args) {
      const TRIGGER_STYLE = "background-color: lightblue;";
      const ARROW_STYLE = "color: red;";
      const ACTION_STYLE = "background-color: lightgreen;";
      const EVENT_STYLE = "background-color: lightgrey;";
      this.debug.debug(`%c ${eventName}`, EVENT_STYLE, "%c \u2794", ARROW_STYLE, `%c ${actionName}`, ACTION_STYLE, "", ...args);
    }
    init() {
    }
  };

  // src/webflow-events/actions/click.ts
  var Sa5EventsActionClick = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll("[sa-action-click]");
      actionElems.forEach((elem) => {
        const eventName = elem.getAttribute("sa-action-click");
        if (eventName) {
          this.core.events.addEventHandler(eventName, () => {
            this.debugTrigger("\u{1F551} click", eventName);
            elem.click();
          });
        }
      });
    }
  };

  // src/webflow-events/actions/alert.ts
  var Sa5EventsActionAlert = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll('script[handler="action.alert"]');
      actionElems.forEach((elem) => {
        const eventName = elem.getAttribute("event");
        try {
          const jsonData = JSON.parse(elem.textContent.trim());
          if (!jsonData.message) {
            console.error("No alert message defined:", elem);
            return;
          }
          this.core.events.addEventHandler(eventName, () => {
            this.debugTrigger("\u{1F551} alert", eventName);
            alert(jsonData.message);
          });
        } catch (error) {
          console.error("Invalid JSON in script tag:", elem, error);
        }
      });
    }
  };

  // src/webflow-events/triggers/scroll-into-view.ts
  var Sa5EventsTriggerScrollIntoView = class extends Sa5EventsTriggerBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const elems = document.querySelectorAll("[sa-trigger-scrollintoview]");
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elem = entry.target;
            const eventName = elem.getAttribute("sa-trigger-scrollintoview");
            if (eventName) {
              this.debug.debug("Trigger: scroll into view", elem);
              this.core.events.executeEvent(eventName);
              observer.unobserve(elem);
            }
          }
        });
      }, observerOptions);
      elems.forEach((elem) => observer.observe(elem));
    }
  };

  // src/webflow-events/actions/class.ts
  var Sa5EventsActionClass = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll("[sa-action-class-add],[sa-action-class-remove],[sa-action-class-toggle]");
      actionElems.forEach((elem) => {
        const className = elem.getAttribute("sa-action-class-data");
        if (elem.hasAttribute("sa-action-class-add")) {
          const eventName = elem.getAttribute("sa-action-class-add");
          if (eventName) {
            this.core.events.addEventHandler(eventName, () => {
              this.debugTrigger("\u{1F551} add class", eventName);
              elem.classList.add(className);
            });
          }
        }
        if (elem.hasAttribute("sa-action-class-remove")) {
          const eventName = elem.getAttribute("sa-action-class-remove");
          if (eventName) {
            this.core.events.addEventHandler(eventName, () => {
              this.debugTrigger("\u{1F551} remove class", eventName);
              elem.classList.remove(className);
            });
          }
        }
        if (elem.hasAttribute("sa-action-class-toggle")) {
          const eventName = elem.getAttribute("sa-action-class-toggle");
          if (eventName) {
            this.core.events.addEventHandler(eventName, () => {
              this.debug.debug("Action: toggle class", elem);
              if (elem.classList.contains(className))
                elem.classList.remove(className);
              else
                elem.classList.add(className);
            });
          }
        }
      });
    }
  };

  // src/webflow-events/triggers/timer.ts
  var Sa5EventsTriggerTimer = class extends Sa5EventsTriggerBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll('script[handler="trigger.timer"]');
      actionElems.forEach((elem) => {
        const eventName = elem.getAttribute("event");
        try {
          const jsonData = JSON.parse(elem.textContent.trim());
          if (!jsonData.timer) {
            console.error("No timer defined:", elem);
            return;
          }
          const timerDuration = jsonData.timer * 1e3;
          const timerRepeat = jsonData.timerRepeat ? jsonData.timerRepeat * 1e3 : null;
          setTimeout(() => {
            this.debugTrigger("\u{1F551} timer", eventName, "(first)");
            this.core.events.executeEvent(eventName);
            if (timerRepeat) {
              setInterval(() => {
                this.debugTrigger("\u{1F551} timer", eventName, "(additional)");
                this.core.events.executeEvent(eventName);
              }, timerRepeat);
            }
          }, timerDuration);
        } catch (error) {
          console.error("Invalid JSON in script tag:", elem, error);
        }
      });
    }
  };

  // src/version.ts
  var VERSION = "5.6.0";

  // src/webflow-events/triggers/hover.ts
  var Sa5EventsTriggerHover = class extends Sa5EventsTriggerBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const elems = document.querySelectorAll("[sa-trigger-mouseenter],[sa-trigger-mouseleave]");
      elems.forEach((elem) => {
        if (elem.hasAttribute("sa-trigger-mouseenter")) {
          const eventName = elem.getAttribute("sa-trigger-mouseenter");
          if (eventName) {
            elem.addEventListener("mouseenter", () => {
              this.debugTrigger("\u2197 mouseenter", eventName);
              this.core.events.executeEvent(eventName);
            });
          }
        }
        if (elem.hasAttribute("sa-trigger-mouseleave")) {
          const eventNameOut = elem.getAttribute("sa-trigger-mouseleave");
          if (eventNameOut) {
            elem.addEventListener("mouseleave", () => {
              this.debugTrigger("\u2198 mouseleave", eventNameOut);
              this.core.events.executeEvent(eventNameOut);
            });
          }
        }
      });
    }
  };

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
      this.controllers = {};
      new Sa5Designer().init();
    }
    setController(name, controller) {
      this.controllers[name] = controller;
    }
    getHandlers(name) {
      return this.handlers.filter((item) => item[0] === name).map((item) => item[1]);
    }
    getHandler(name) {
      const item = this.handlers.find((item2) => item2[0] === name);
      return item ? item[1] : void 0;
    }
    init() {
      let debug = new Sa5Debug("sa5-events");
      debug.debug(`Initializing v${VERSION}`);
      this.initDebugMode();
      this.initAsync();
      this.events = new Sa5EventRegistry();
      new Sa5EventsTriggerClick(this, debug).init();
      new Sa5EventsActionClick(this, debug).init();
      new Sa5EventsActionAlert(this, debug).init();
      new Sa5EventsTriggerScrollIntoView(this, debug).init();
      new Sa5EventsActionClass(this, debug).init();
      new Sa5EventsTriggerTimer(this, debug).init();
      new Sa5EventsTriggerHover(this, debug).init();
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

  // src/webflow-cache.ts
  var defaultConfig = {
    id: "cache",
    cacheKey: null,
    prefix: "cache",
    debug: false
  };
  var Sa5CacheController = class {
    constructor(customConfig = {}) {
      this.items = /* @__PURE__ */ new Map();
      this.cacheItemKey = function(itemName) {
        return `${this.config.prefix}_${itemName}`;
      };
      this.config = { ...defaultConfig, ...customConfig };
      this.debug = new Sa5Debug("sa5-cache");
      this.debug.enabled = this.config.debug;
      if (this.config.cacheKey) {
      }
    }
    addItem(name, item) {
      item.controller = this;
      this.items.set(name, item);
    }
    getItem(name) {
      return this.items.get(name);
    }
    clearCache() {
    }
  };
  Sa5Core.startup(Sa5CacheController);

  // src/webflow-cache/cache-item-typed.ts
  var defaultConfig2 = {
    name: void 0,
    storageType: 0 /* sessionStorage */,
    storageExpiry: null,
    updateFnAsync: void 0,
    debug: false
  };
  var Sa5CacheItemTyped = class {
    constructor(customConfig = {}) {
      this.debug = new Sa5Debug("sa5-cache-item");
      this.config = { ...defaultConfig2, ...customConfig };
      this.debug.enabled = this.config.debug;
    }
    getCookie(name) {
      const encodedName = encodeURIComponent(name);
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${encodedName}=`);
      if (parts.length === 2) {
        const cookieValue = parts.pop().split(";").shift();
        return cookieValue ? decodeURIComponent(cookieValue) : null;
      }
      return null;
    }
    setCookie(name, val) {
      let cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
      if (this.config.storageExpiry) {
        cookieValue += `;expires=${this.config.storageExpiry.toUTCString()}`;
      }
      cookieValue += `;path=/`;
      document.cookie = cookieValue;
    }
    async getAsync() {
      let val = await this.getAsyncFromCache();
      if (!val) {
        val = await this.getAsyncFromSource();
      }
      return val;
    }
    async setAsync(val) {
      this.setAsyncToCache(val);
    }
    async setAsyncToCache(val) {
      switch (this.config.storageType) {
        case 1 /* localStorage */:
          localStorage.setItem(
            this.controller.cacheItemKey(this.config.name),
            JSON.stringify(val)
          );
          break;
        case 0 /* sessionStorage */:
          sessionStorage.setItem(
            this.controller.cacheItemKey(this.config.name),
            JSON.stringify(val)
          );
          break;
        case 2 /* cookies */:
          this.setCookie(
            this.controller.cacheItemKey(this.config.name),
            JSON.stringify(val)
          );
          this.config.storageExpiry;
          break;
      }
    }
    async getAsyncFromCache() {
      let itemData = null;
      switch (this.config.storageType) {
        case 1 /* localStorage */:
          itemData = localStorage.getItem(
            this.controller.cacheItemKey(this.config.name)
          );
          break;
        case 0 /* sessionStorage */:
          itemData = sessionStorage.getItem(
            this.controller.cacheItemKey(this.config.name)
          );
          this.debug.debug("cached? sessionStorage.getItem", itemData);
          break;
        case 2 /* cookies */:
          itemData = this.getCookie(
            this.controller.cacheItemKey(
              this.config.name
            )
          );
          break;
      }
      return JSON.parse(itemData);
    }
    async getAsyncFromSource() {
      return await this.config.updateFnAsync().then((r) => {
        this.setAsync(r);
        this.debug.debug("sessionStorage.setItem", this.config.name, r);
        this.debug.debug("calculated", r);
        return r;
      });
    }
  };

  // src/webflow-detect/geo-handlers/geo-handler-base.ts
  var GeoHandlerBase = class {
    constructor(token = null) {
      this.token = token;
    }
    get info() {
      return {
        ip: this.userInfoRaw.ip,
        country: this.userInfoRaw.countryCode,
        city: null,
        region: null,
        postal: null,
        timezone: null
      };
    }
    async getInfoAsync() {
    }
  };

  // src/webflow-detect/geo-handlers/ip-info.ts
  var IPInfo = class extends GeoHandlerBase {
    get info() {
      return {
        ip: this.userInfoRaw.ip,
        country: this.userInfoRaw.countryCode,
        city: null,
        region: null,
        postal: null,
        timezone: null
      };
    }
    constructor(token = null) {
      super(token);
    }
    async getInfoAsync() {
      const request = await fetch(`https://ipinfo.io/json?token=${this.token}`);
      this.userInfoRaw = await request.json();
      console.log(
        this.userInfoRaw
      );
      return this.userInfoRaw;
    }
  };

  // src/webflow-detect/routing-rules.ts
  var Sa5RoutingRules = class {
    constructor(detectController) {
      this.detectController = detectController;
    }
    load(rules) {
      this.rules = rules;
      for (const rule of rules) {
        switch (rule.type) {
          case "geo-country": {
            this.detectController.countries = new Map(
              rule.route
            );
            break;
          }
        }
      }
    }
  };

  // src/webflow-detect.ts
  var Sa5Detect = class {
    constructor() {
      this.countries = /* @__PURE__ */ new Map([]);
      this.routingRules = new Sa5RoutingRules(this);
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 3);
      this.cache = new Sa5CacheController({
        id: "sa5-detect",
        cacheKey: "af92b71b-d0cf-4ad5-a06c-97327215af8a",
        prefix: "_sa5"
      });
      this.cache.addItem(
        "userInfo",
        new Sa5CacheItemTyped({
          name: "userInfo",
          storageType: 2 /* cookies */,
          storageExpiry: expiry,
          updateFnAsync: this.getUserInfoAsync
        })
      );
    }
    async userInfo() {
      const info = await this.cache.getItem("userInfo").getAsync();
      return info;
    }
    async getUserInfoAsync() {
      const IP_INFO_TOKEN = "37cce46c605631";
      const ipInfo = new IPInfo(IP_INFO_TOKEN);
      let rawInfo = await ipInfo.getInfoAsync();
      const info = {
        ip: rawInfo.ip,
        country: rawInfo.country,
        city: rawInfo.city,
        region: rawInfo.region,
        postal: rawInfo.postal,
        timezone: rawInfo.timezone
      };
      console.log(
        info.ip,
        info.country
      );
      return info;
    }
    detectGeographicZone() {
    }
    isCountryInList(countryCode) {
      return this.countries.has(countryCode);
    }
    getPathForCountry(countryCode) {
      console.log("getPathForCountry", countryCode);
      console.log(this.countries);
      return this.countries.get(countryCode);
    }
    async applyDetectContextAsync() {
      let userInfo = await this.cache.getItem("userInfo").getAsync();
      let path = this.getPathForCountry(userInfo.country);
      for (const item of this.routingRules.rules) {
        if (item.path === window.location.pathname) {
          if (item.type === "geo-country") {
            for (const [country, path2] of item.route) {
              if (userInfo.country == country) {
                if (window.location.pathname != path2)
                  window.location.href = path2;
              }
            }
          }
        }
      }
    }
  };

  // src/nocode/webflow-detect.ts
  (async () => {
    console.log("DETECT");
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-detect");
    debug.debug(`Initializing v${VERSION}`);
    let detect = new Sa5Detect();
    let routingRules = window["sa5-route" /* GLOBAL_ROUTE */];
    if (routingRules)
      detect.routingRules.load(routingRules);
    await detect.applyDetectContextAsync();
  })();
  var init = async () => {
  };
  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
//# sourceMappingURL=webflow-detect.js.map
