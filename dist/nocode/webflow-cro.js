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

  // src/webflow-cro/source.ts
  var Sa5Source = class {
    constructor(storageType = "session") {
      this.storageKey = "sa5-cro_data";
      this.storage = storageType === "local" ? localStorage : sessionStorage;
      this.data = this.load() || {};
    }
    init() {
    }
    setSourceParam(key, value) {
      this.data[key] = value;
      this.save();
    }
    getSourceParam(key) {
      return this.data[key];
    }
    save() {
      console.log("save");
      this.storage.setItem(this.storageKey, JSON.stringify(this.data));
    }
    load() {
      const storedData = this.storage.getItem(this.storageKey);
      return storedData ? JSON.parse(storedData) : {};
    }
    exists() {
      return this.storage.getItem(this.storageKey) !== null;
    }
    clear() {
      this.storage.removeItem(this.storageKey);
      this.data = {};
    }
  };

  // src/webflow-cro.ts
  var referrerUTMMappings = [
    { hostname: "www.google.com", utm_source: "google", utm_medium: "organic" },
    { hostname: "www.google.co.nz", utm_source: "google", utm_medium: "organic" },
    { hostname: "*.google.*", utm_source: "google", utm_medium: "organic" },
    { hostname: "*.youtube.com", utm_source: "youtube", utm_medium: "social" },
    { hostname: "youtube.com", utm_source: "youtube", utm_medium: "social" },
    { hostname: "www.bing.com", utm_source: "bing", utm_medium: "organic" },
    { hostname: "www.facebook.com", utm_source: "facebook", utm_medium: "social" },
    { hostname: "duckduckgo.com", utm_source: "duckduckgo", utm_medium: "organic" },
    { hostname: "www.linkedin.com", utm_source: "linkedin", utm_medium: "social" }
  ];
  var Sa5Cro = class {
    constructor(config, storageType = "session") {
      this.config = config;
      this.debug = new Sa5Debug("sa5-cro");
      this.debug.enabled = this.config.debug;
      this.dataHandler = new Sa5Source(storageType);
    }
    init() {
      this.debug.debug("sa5-cro init.");
      this.captureSource();
      console.log("capturesource");
      this.processConversionEventConfigs();
    }
    captureSource() {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
      let hasUTM = false;
      utmParams.forEach((param) => {
        if (urlParams.has(param)) {
          hasUTM = true;
        }
      });
      if (hasUTM) {
        this.debug.debug("UTM parameters detected, clearing existing data and capturing new UTM data.");
        this.dataHandler.clear();
        this.dataHandler.data.explicit = true;
        this.dataHandler.data.referer = document.referrer;
        utmParams.forEach((param) => {
          const value = urlParams.get(param);
          if (value) {
            this.dataHandler.setSourceParam(param, value);
            this.debug.debug(`Captured ${param}: ${value}`);
          }
        });
      } else if (!this.dataHandler.exists()) {
        this.debug.debug("No UTM parameters detected and no existing UTM data. Attempting to infer source.");
        this.inferSourceFromReferrer();
        this.dataHandler.data.referer = document.referrer;
      } else {
        this.debug.debug("No UTM parameters detected, but existing UTM data found in storage.");
      }
    }
    inferSourceFromReferrer() {
      const referrer = document.referrer;
      this.applyUTMFromReferrer(referrer);
    }
    applyUTMFromReferrer(referrer) {
      if (!referrer) {
        this.debug.debug("No referrer detected. Unable to apply UTM data.");
        return;
      }
      const url = new URL(referrer);
      const hostname = url.hostname;
      const exactMatch = referrerUTMMappings.find((mapping) => !mapping.hostname.includes("*") && mapping.hostname === hostname);
      if (exactMatch) {
        this.applyUTMMapping(exactMatch);
        return;
      }
      const wildcardMatch = referrerUTMMappings.find((mapping) => {
        if (mapping.hostname.includes("*")) {
          const regexPattern = new RegExp(`^${mapping.hostname.replace(/\*/g, ".*")}$`);
          return regexPattern.test(hostname);
        }
        return false;
      });
      if (wildcardMatch) {
        this.applyUTMMapping(wildcardMatch);
      } else {
        this.debug.debug("No matching UTM data found for referrer.");
      }
    }
    applyUTMMapping(utmMapping) {
      this.dataHandler.setSourceParam("utm_source", utmMapping.utm_source);
      this.dataHandler.setSourceParam("utm_medium", utmMapping.utm_medium);
      if (utmMapping.utm_campaign !== void 0) {
        this.dataHandler.setSourceParam("utm_campaign", utmMapping.utm_campaign);
      }
      if (utmMapping.utm_term !== void 0) {
        this.dataHandler.setSourceParam("utm_term", utmMapping.utm_term);
      }
      if (utmMapping.utm_content !== void 0) {
        this.dataHandler.setSourceParam("utm_content", utmMapping.utm_content);
      }
      this.debug.debug(`Applied UTM data from referrer: ${JSON.stringify(utmMapping)}`);
    }
    processConversionEventConfigs() {
      const configElements = document.querySelectorAll('script[type="application/sa5+json"]');
      configElements.forEach((configElement) => {
        try {
          const configContent = JSON.parse(configElement.textContent || "{}");
          if (configContent["@type"] === "ConversionEvent") {
            const parentForm = configElement.closest("form");
            if (parentForm) {
              this.processFormConversionEventConfig(parentForm, configContent);
            } else {
              this.triggerConversionEvent(configContent);
            }
          }
        } catch (error) {
          console.error("Error processing config:", configElement, error);
        }
      });
    }
    processFormConversionEventConfig(formElement, scriptContent) {
      const createHiddenInput = (name, value) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = `xtr_${name}`;
        input.value = value;
        return input;
      };
      const hiddenInputs = [];
      if (scriptContent.type) {
        hiddenInputs.push(createHiddenInput("type", scriptContent.type));
      }
      if (scriptContent.item) {
        hiddenInputs.push(createHiddenInput("item", scriptContent.item));
      }
      if (scriptContent.url) {
        hiddenInputs.push(createHiddenInput("url", scriptContent.url));
      }
      const transactionId = this.getTransactionId(scriptContent);
      if (transactionId !== void 0) {
        hiddenInputs.push(createHiddenInput("transactionId", transactionId));
        const redirectPath = formElement.getAttribute("redirect");
        if (redirectPath) {
          const redirectUrl = new URL(redirectPath, window.location.origin);
          redirectUrl.searchParams.append("transactionId", transactionId);
          formElement.setAttribute("redirect", redirectUrl.toString());
        }
      }
      if (this.dataHandler.exists) {
        if (this.dataHandler.data.referrer) {
          hiddenInputs.push(createHiddenInput("referrer", this.dataHandler.data.referrer));
        }
        const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
        utmFields.forEach((utm) => {
          if (this.dataHandler.data[utm]) {
            hiddenInputs.push(createHiddenInput(utm, this.dataHandler.data[utm]));
          }
        });
      }
      hiddenInputs.forEach((input) => {
        formElement.appendChild(input);
      });
    }
    getTransactionId(scriptContent) {
      const transactionIdType = scriptContent.transactionIdType || "literal";
      switch (transactionIdType) {
        case "query":
          const params = new URLSearchParams(window.location.search);
          const queryTransactionId = params.get(scriptContent.transactionId);
          if (queryTransactionId) {
            return queryTransactionId;
          }
          console.warn("Transaction ID not found in query string");
          return void 0;
        case "literal":
          return scriptContent.transactionId;
        case "none":
          return void 0;
        case "auto":
          return crypto.randomUUID();
        default:
          console.warn(`Unknown transaction ID type: ${transactionIdType}`);
          return void 0;
      }
    }
    triggerConversionEvent(scriptContent) {
      let url = new URL(scriptContent.url);
      url.searchParams.append("type", scriptContent.type);
      url.searchParams.append("item", scriptContent.item);
      const transactionId = this.getTransactionId(scriptContent);
      if (transactionId !== void 0) {
        url.searchParams.append("transactionId", transactionId);
      }
      const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
      utmFields.forEach((utm) => {
        if (scriptContent[utm]) {
          url.searchParams.append(utm, scriptContent[utm]);
        }
      });
      fetch(url.toString(), {
        method: "GET",
        mode: "no-cors"
      }).then(() => {
        this.debug.debug(`Conversion event triggered: ${url.toString()}`);
      }).catch((error) => {
        console.error("Error triggering conversion event:", error);
      });
    }
  };
  Sa5Core.startup(Sa5Cro);

  // src/nocode/webflow-cro.ts
  var init = () => {
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-cro");
    debug.enabled = true;
    debug.debug(`Initializing v${VERSION}`);
    let obj = new Sa5Cro({}).init();
  };
  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
//# sourceMappingURL=webflow-cro.js.map
