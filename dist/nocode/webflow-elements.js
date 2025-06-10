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

  // src/version.ts
  var VERSION = "5.8.2";

  // src/webflow-core/events/actions/actionBase.ts
  var Sa5EventsActionBase = class {
    constructor(core, debug) {
      this.core = core;
      this.debug = debug;
    }
    getEventName(elem, attr) {
      let eventName = elem.getAttribute(attr);
      const eventNs = elem.getAttribute(attr + ":ns");
      if (eventNs)
        eventName = eventNs + "." + eventName;
      return eventName;
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

  // src/webflow-core/events/actions/actionScriptBase.ts
  var Sa5EventsActionScriptBase = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    getEventName(elem) {
      let eventName = elem.getAttribute("event");
      const eventNs = elem.getAttribute("ns");
      if (eventNs)
        eventName = eventNs + "." + eventName;
      return eventName;
    }
  };

  // src/webflow-core/events/actions/alert.ts
  var Sa5EventsActionAlert = class extends Sa5EventsActionScriptBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll('script[handler="action.alert"]');
      actionElems.forEach((elem) => {
        const eventName = this.getEventName(elem);
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

  // src/webflow-core/events/actions/class.ts
  var Sa5EventsActionClass = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll("[sa-action-class-add],[sa-action-class-remove],[sa-action-class-toggle]");
      actionElems.forEach((elem) => {
        const className = elem.getAttribute("sa-action-class-data");
        if (elem.hasAttribute("sa-action-class-add")) {
          const eventName = this.getEventName(elem, "sa-action-class-add");
          if (eventName) {
            this.core.events.addEventHandler(eventName, () => {
              this.debugTrigger("\u{1F551} add class", eventName);
              elem.classList.add(className);
            });
          }
        }
        if (elem.hasAttribute("sa-action-class-remove")) {
          const eventName = this.getEventName(elem, "sa-action-class-remove");
          if (eventName) {
            this.core.events.addEventHandler(eventName, () => {
              this.debugTrigger("\u{1F551} remove class", eventName);
              elem.classList.remove(className);
            });
          }
        }
        if (elem.hasAttribute("sa-action-class-toggle")) {
          const eventName = this.getEventName(elem, "sa-action-class-toggle");
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

  // src/webflow-core/events/actions/click.ts
  var Sa5EventsActionClick = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll("[sa-action-click]");
      actionElems.forEach((elem) => {
        const eventName = this.getEventName(elem, "sa-action-click");
        if (eventName) {
          this.core.events.addEventHandler(eventName, () => {
            this.debugTrigger("\u{1F551} click", eventName);
            elem.click();
          });
        }
      });
    }
  };

  // src/webflow-core/events/actions/visibility.ts
  var Sa5EventsActionVisibility = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll("[sa-action-display-show],[sa-action-display-hide],[sa-action-display-toggle]");
      actionElems.forEach((elem) => {
        const displayMode = elem.getAttribute("sa-attribute-display:mode") || "block";
        if (elem.hasAttribute("sa-action-display-show")) {
          const eventName = this.getEventName(elem, "sa-action-display-show");
          if (eventName) {
            this.core.events.addEventHandler(eventName, () => {
              this.debugTrigger("\u{1F551} visibility - show element", eventName);
              elem.style.display = displayMode;
            });
          }
        }
        if (elem.hasAttribute("sa-action-display-hide")) {
          const eventName = this.getEventName(elem, "sa-action-display-hide");
          if (eventName) {
            this.core.events.addEventHandler(eventName, () => {
              this.debugTrigger("\u{1F551} visibility - hide element", eventName);
              elem.style.display = "none";
            });
          }
        }
        if (elem.hasAttribute("sa-action-display-toggle")) {
          const eventName = this.getEventName(elem, "sa-action-display-toggle");
          if (eventName) {
            this.core.events.addEventHandler(eventName, () => {
              this.debugTrigger("\u{1F551} visibility - toggle element", eventName);
              elem.style.display = elem.style.display === "none" ? displayMode : "none";
            });
          }
        }
      });
    }
  };

  // src/webflow-core/events/triggers/triggerBase.ts
  var Sa5EventsTriggerBase = class {
    constructor(core, debug) {
      this.core = core;
      this.debug = debug;
    }
    getEventName(elem, attr) {
      let eventName = elem.getAttribute(attr);
      const eventNs = elem.getAttribute(attr + ":ns");
      if (eventNs)
        eventName = eventNs + "." + eventName;
      return eventName;
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

  // src/webflow-core/events/triggers/click.ts
  var Sa5EventsTriggerClick = class extends Sa5EventsTriggerBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const elems = document.querySelectorAll("[sa-trigger-click]");
      elems.forEach((elem) => {
        const eventName = this.getEventName(elem, "sa-trigger-click");
        if (eventName) {
          elem.addEventListener("click", () => {
            this.debugTrigger("\u2197 click", eventName);
            this.core.events.executeEvent(eventName);
          });
        }
      });
    }
  };

  // src/webflow-core/events/triggers/triggerScriptBase.ts
  var Sa5EventsTriggerScriptBase = class extends Sa5EventsTriggerBase {
    constructor(core, debug) {
      super(core, debug);
    }
    getEventName(elem) {
      let eventName = elem.getAttribute("event");
      const eventNs = elem.getAttribute("ns");
      if (eventNs)
        eventName = eventNs + "." + eventName;
      return eventName;
    }
    mergeConfig(defaults, overrides) {
      const result = { ...defaults };
      for (const key in overrides) {
        if (overrides[key] !== void 0 && overrides[key] !== null) {
          result[key] = overrides[key];
        }
      }
      return result;
    }
    coerceBoolean(value) {
      if (value == null || value === "" || value === false || value === 0) {
        return false;
      }
      if (typeof value === "string") {
        const normalized = value.trim().toLowerCase();
        return !(normalized === "no" || normalized === "off");
      }
      return true;
    }
  };

  // src/webflow-core/events/triggers/exit-intent.ts
  var Sa5EventsTriggerExitIntent = class extends Sa5EventsTriggerScriptBase {
    constructor(core, debug) {
      super(core, debug);
      this.exitTriggered = false;
      this.eventNames = [];
    }
    init() {
      this.setupExitIntentListener();
      const actionElems = document.querySelectorAll('script[handler="trigger.exit-intent"]');
      actionElems.forEach((elem) => {
        const eventName = this.getEventName(elem);
        if (eventName) {
          this.eventNames.push(eventName);
          try {
            const jsonData = JSON.parse(elem.textContent.trim());
          } catch (error) {
            console.error("Invalid JSON in script tag:", elem, error);
          }
        }
      });
    }
    setupExitIntentListener() {
      document.addEventListener("mouseleave", this.onMouseLeave.bind(this));
      document.addEventListener("visibilitychange", this.onVisibilityChange.bind(this));
    }
    onMouseLeave(event) {
      if (event.clientY <= 0) {
        this.triggerExitIntent("mouse-exit");
      }
    }
    onVisibilityChange() {
      if (document.hidden) {
        this.triggerExitIntent("tab-switch");
      }
    }
    triggerExitIntent(source) {
      if (this.exitTriggered)
        return;
      this.exitTriggered = true;
      this.debugTrigger(`\u{1F6AA} Exit intent detected via: ${source}`, source);
      this.eventNames.forEach((eventName) => {
        console.log(`Processing event: ${eventName}`);
        this.core.events.executeEvent(eventName);
      });
    }
  };

  // src/webflow-core/events/triggers/hover.ts
  var Sa5EventsTriggerHover = class extends Sa5EventsTriggerBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const elems = document.querySelectorAll("[sa-trigger-mouseenter],[sa-trigger-mouseleave]");
      elems.forEach((elem) => {
        if (elem.hasAttribute("sa-trigger-mouseenter")) {
          const eventName = this.getEventName(elem, "sa-trigger-mouseenter");
          if (eventName) {
            elem.addEventListener("mouseenter", () => {
              this.debugTrigger("\u2197 mouseenter", eventName);
              this.core.events.executeEvent(eventName);
            });
          }
        }
        if (elem.hasAttribute("sa-trigger-mouseleave")) {
          const eventNameOut = this.getEventName(elem, "sa-trigger-mouseleave");
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

  // src/webflow-core/events/triggers/scroll-into-view.ts
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
            const eventName = this.getEventName(elem, "sa-trigger-scrollintoview");
            if (eventName) {
              this.debugTrigger("\u2198 scroll into view", eventName);
              this.core.events.executeEvent(eventName);
              observer.unobserve(elem);
            }
          }
        });
      }, observerOptions);
      elems.forEach((elem) => observer.observe(elem));
    }
  };

  // src/webflow-core/events/triggers/timer.ts
  var Sa5EventsTriggerTimer = class extends Sa5EventsTriggerScriptBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll('script[handler="trigger.timer"]');
      actionElems.forEach((elem) => {
        const eventName = this.getEventName(elem);
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

  // src/webflow-core/events/actions/scroll-into-view.ts
  var Sa5EventsActionScrollIntoView = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll("[sa-action-scrollintoview]");
      actionElems.forEach((elem) => {
        const eventName = this.getEventName(elem, "sa-action-scrollintoview");
        if (eventName) {
          const behavior = elem.getAttribute("sa-action-scrollintoview:behavior") || "smooth";
          const block = elem.getAttribute("sa-action-scrollintoview:block") || "center";
          const inline = elem.getAttribute("sa-action-scrollintoview:inline") || "nearest";
          this.core.events.addEventHandler(eventName, () => {
            this.debugTrigger("\u{1F551} scroll into view", eventName);
            elem.scrollIntoView({
              behavior,
              block,
              inline
            });
          });
        }
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
    init(core) {
      let debug = new Sa5Debug("sa5-events");
      debug.debug(`Initializing v${VERSION}`);
      new Sa5EventsTriggerClick(core, debug).init();
      new Sa5EventsActionClick(core, debug).init();
      new Sa5EventsActionAlert(core, debug).init();
      new Sa5EventsTriggerScrollIntoView(core, debug).init();
      new Sa5EventsActionScrollIntoView(core, debug).init();
      new Sa5EventsActionClass(core, debug).init();
      new Sa5EventsTriggerTimer(core, debug).init();
      new Sa5EventsTriggerHover(core, debug).init();
      new Sa5EventsTriggerExitIntent(core, debug).init();
      new Sa5EventsActionVisibility(core, debug).init();
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
      this.initDebugMode();
      this.initAsync();
      this.events = new Sa5EventRegistry();
      this.events.init(this);
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

  // src/webflow-elements/lightbox.ts
  var Sa5Lightbox = class {
    constructor(element, config = {}) {
      this._element = element;
    }
    init() {
    }
    setCaptionToImageAlt() {
      let imgElement = this._element.querySelector("img");
      let scriptElement = this._element.querySelector("script");
      if (imgElement && scriptElement) {
        const imageAltText = imgElement.getAttribute("alt");
        const imageJSON = JSON.parse(scriptElement.innerHTML);
        imageJSON.items[0].caption = imageAltText;
        scriptElement.innerHTML = JSON.stringify(imageJSON);
        if (imageJSON.items.length > 0) {
          imgElement.setAttribute("ref-key", imageJSON.items[0].url);
        }
      }
    }
    static createNew(container, thumbnailImage, group, items = []) {
      if (items.length == 0) {
        items.push({
          _id: "66a47ce64421398ae9c33fea",
          origFileName: "",
          fileName: "",
          fileSize: 0,
          height: 1024,
          width: 1024,
          url: thumbnailImage,
          type: "image"
        });
      }
      const itemsJSON = JSON.stringify({ items, group });
      const html = `
            <a href="#" class="lightbox-link w-inline-block w-lightbox">
                <img src="${thumbnailImage}" loading="lazy" alt="">
                <script type="application/json" class="w-json">${itemsJSON}<\/script>
            </a>
        `;
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = html.trim();
      const newElement = tempContainer.firstChild;
      container.appendChild(newElement);
      return new Sa5Lightbox(newElement);
    }
    static resetLightbox() {
      window["Webflow"].require("lightbox").ready();
    }
  };
  Sa5Core.startup(Sa5Lightbox);

  // src/utils.ts
  function booleanValue(val) {
    switch (val.toLowerCase()) {
      case "false":
      case "f":
      case "":
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

  // src/webflow-elements/button.ts
  var Sa5Button = class {
    get enabled() {
      return booleanValue(
        this.element.getAttribute("wfu-button-enabled" /* ATTR_BUTTON_ENABLED */)
      );
    }
    set enabled(enabled) {
      this.element.setAttribute(
        "wfu-button-enabled" /* ATTR_BUTTON_ENABLED */,
        enabled ? "true" : "false"
      );
      this.applyEnabledState();
    }
    applyEnabledState() {
      if (this.element.hasAttribute("wfu-button-disabled-class" /* ATTR_BUTTON_DISABLED_CLASS */)) {
        let disabledClass = this.element.getAttribute("wfu-button-disabled-class" /* ATTR_BUTTON_DISABLED_CLASS */);
        if (this.enabled) {
          this.element.classList.remove(disabledClass);
        } else {
          this.element.classList.add(disabledClass);
        }
      }
    }
    constructor(element) {
      this.element = element;
      this.name = element.getAttribute("wfu-button" /* ATTR_ELEMENT_BUTTON */);
    }
    init() {
      this.applyEnabledState();
      this.element.addEventListener("click", (event) => {
        if (!this.enabled)
          event.preventDefault();
      });
      this.element.removeAttribute("wfu-preload" /* ATTR_PRELOAD */);
    }
    static create(name) {
      const elem = document.querySelector(`[${"wfu-button" /* ATTR_ELEMENT_BUTTON */}='${name}']`);
      if (elem) {
        const button = new Sa5Button(elem);
        return button;
      }
      return null;
    }
  };
  Sa5Core.startup(Sa5Button);

  // src/webflow-lightbox/caption-handler.ts
  var Sa5LightboxCaptionHandler = class {
    constructor() {
      this.lightBoxStateCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === "attributes" && mutation.target instanceof HTMLElement) {
            if (mutation.target.classList.contains("w-lightbox-noscroll")) {
              console.debug("Lightbox opened.");
              this.installLightBoxNavObserver();
            } else {
              console.debug("Lightbox closed.");
              this.uninstallLightBoxNavObserver();
            }
          }
        }
      };
      this.lightBoxNavCallback = (mutationList, observer) => {
        for (let mutation of mutationList) {
          if (mutation.target instanceof HTMLElement) {
            if (mutation.target.classList.contains("w-lightbox-content")) {
              this.setupCaption();
            }
          }
        }
      };
    }
    init() {
      let observer = new MutationObserver(this.lightBoxStateCallback);
      observer.observe(document.getElementsByTagName("html")[0], {
        childList: false,
        subtree: false,
        characterDataOldValue: false,
        attributes: true,
        attributeFilter: ["class"]
      });
    }
    installLightBoxNavObserver() {
      this.setupCaption();
      let lightboxContainer = document.querySelector(".w-lightbox-container");
      if (lightboxContainer) {
        let lightboxNavObserver = new MutationObserver(this.lightBoxNavCallback);
        const config = { childList: true, subtree: true };
        lightboxNavObserver.observe(lightboxContainer, config);
      }
    }
    uninstallLightBoxNavObserver() {
      if (this.lightboxNavObserver)
        this.lightboxNavObserver.disconnect();
    }
    setupCaption() {
      let figure = document.querySelector("figure.w-lightbox-figure");
      if (figure) {
        let img = figure.querySelector("img");
        let captionElement = figure.querySelector("figcaption");
        if (img) {
          let key = img.getAttribute("src");
          let thumb = document.querySelector(`img[ref-key='${key}']`);
          if (captionElement) {
            captionElement.remove();
          }
          if (thumb) {
            let caption = thumb.getAttribute("alt");
            if (caption) {
              let newCaption = document.createElement("figcaption");
              newCaption.textContent = caption;
              newCaption.classList.add("w-lightbox-caption");
              figure.appendChild(newCaption);
            }
          }
        }
      }
    }
  };

  // src/webflow-elements/tabs.ts
  var WebflowTabs = class {
    constructor(element) {
      this.debug = new Sa5Debug("sa5-webflow-tabs");
      this.debug.enabled = true;
      if (!element.classList.contains("w-tabs")) {
        console.error(
          `[${"wfu-tabs" /* ATTR_ELEMENT_TABS */}] is not on a tabs element`
        );
        return;
      }
      this._element = element;
      this.init();
    }
    get element() {
      return this._element;
    }
    get elementTabMenu() {
      return this._elementTabMenu;
    }
    get elementTabContent() {
      return this._elementTabContent;
    }
    get name() {
      return this._element.getAttribute("wfu-tabs" /* ATTR_ELEMENT_TABS */);
    }
    get currentNum() {
      return this.currentIndex + 1;
    }
    set currentNum(num) {
      this.currentIndex = num - 1;
    }
    get currentIndex() {
      let currentIndex = null;
      for (let i = 0; i < this._elementTabMenu.children.length; i++) {
        if (this._elementTabMenu.children[i].classList.contains("w--current")) {
          currentIndex = i;
          break;
        }
      }
      return currentIndex;
    }
    set currentIndex(index) {
      if (index < 0)
        return;
      if (index >= this.count)
        return;
      let clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      this.debug.debug("setting tab", index);
      setTimeout(() => {
        this.elementTab(index).dispatchEvent(clickEvent);
      }, 0);
    }
    get count() {
      return this._elementTabMenu.children.length;
    }
    goToTabNone() {
      this.goToTabIndexForced(null);
    }
    goToTabIndexForced(index) {
      Array.from(this._elementTabMenu.querySelectorAll(".w-tab-link")).forEach(
        (elem) => {
          elem.classList.remove("w--current");
          elem.removeAttribute("tabindex");
          elem.setAttribute("aria-selected", "true");
        }
      );
      Array.from(this._elementTabContent.querySelectorAll(".w-tab-pane")).forEach(
        (elem) => {
          elem.classList.remove("w--tab-active");
        }
      );
      if (index) {
        console.log("setting forced index", index);
        Array.from(this._elementTabMenu.querySelectorAll(`.w-tab-link:nth-child(${index + 1})`)).forEach(
          (elem) => {
            elem.classList.add("w--current");
          }
        );
        Array.from(this._elementTabContent.querySelectorAll(`.w-tab-pane:nth-child(${index + 1})`)).forEach(
          (elem) => {
            elem.classList.add("w--tab-active");
            elem.style.cssText = "style=opacity: 1; transition: opacity 300ms ease 0s;";
          }
        );
      }
    }
    getTabIndex(tab) {
      let index = Array.from(this._elementTabMenu.children).indexOf(tab);
      if (index == -1) {
        index = Array.from(this._elementTabContent.children).indexOf(tab);
      }
      if (index == -1)
        return null;
      return index;
    }
    init() {
      this._elementTabMenu = this._element.querySelector(".w-tab-menu");
      this._elementTabContent = this._element.querySelector(".w-tab-content");
      this._observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "attributes" && mutation.attributeName === "class") {
            const target = mutation.target;
            if (target.classList.contains("w--current")) {
              this.onTabChanged(this.currentIndex);
            }
          }
        }
      });
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      this._observer.observe(this._elementTabMenu, config);
      for (let elem of this._elementTabMenu.children) {
        if (elem.hasAttribute("wfu-tab-default")) {
          this.debug.debug("default");
          let defaultTabIndex = this.getTabIndex(elem);
          this.debug.debug(defaultTabIndex);
          if (defaultTabIndex != null)
            this.currentIndex = defaultTabIndex;
        }
      }
      ;
    }
    elementTab(index) {
      if (index < 0)
        return;
      if (index >= this.count)
        return;
      return this._elementTabMenu.children[index];
    }
    goTo(index) {
      this.debug.debug("goTo", index);
      this.currentIndex = index;
    }
    goToName(name) {
      this.debug.debug("goToName", name);
      let index = Array.from(this._elementTabMenu.children).findIndex(
        (child) => child.getAttribute("wfu-tab-name" /* ATTR_ELEMENT_TAB_NAME */) == name
      );
      if (index == -1) {
        console.error(`No tab found with name: ${name}`);
        return;
      }
      this.goTo(index);
    }
    goToNext() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newTabIndex = this.currentIndex + 1;
      if (newTabIndex >= this.count)
        return;
      this.goTo(newTabIndex);
    }
    goToNextLoop() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newTabIndex = this.currentIndex + 1;
      if (newTabIndex >= this.count)
        newTabIndex = 0;
      this.goTo(newTabIndex);
    }
    goToPrev() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newTabIndex = this.currentIndex - 1;
      if (newTabIndex < 0)
        return;
      this.goTo(newTabIndex);
    }
    goToPrevLoop() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newTabIndex = this.currentIndex - 1;
      if (newTabIndex < 0)
        newTabIndex = this.count - 1;
      this.goTo(newTabIndex);
    }
    goToFirst() {
      this.goTo(0);
    }
    goToLast() {
      var newTabIndex = this.count - 1;
      this.goTo(newTabIndex);
    }
    isTabChangedCallback(func) {
      if (!func)
        return false;
      return func.length === 1;
    }
    onTabChanged(index) {
      let core = Sa5Core.startup();
      core.getHandlers("tabChanged" /* EVENT_TAB_CHANGED */).forEach((func) => {
        func(this, index);
      });
    }
  };
  Sa5Core.startup(WebflowTabs);

  // src/webflow-elements/slider.ts
  var WebflowSlider = class {
    constructor(element) {
      this.debug = new Sa5Debug("sa5-webflow-slider");
      this.debug.enabled = true;
      if (!element.classList.contains("w-slider")) {
        console.error(`[${"wfu-slider" /* ATTR_ELEMENT_SLIDER */}] is not on a slider element`);
        return;
      }
      this._element = element;
      this.init();
    }
    get element() {
      return this._element;
    }
    get elementSliderMask() {
      return this._elementSliderMask;
    }
    get elementSliderNav() {
      return this._elementSliderNav;
    }
    get name() {
      return this._element.getAttribute("wfu-slider" /* ATTR_ELEMENT_SLIDER */);
    }
    get currentNum() {
      return this.currentIndex + 1;
    }
    set currentNum(num) {
      this.currentIndex = num - 1;
    }
    get currentIndex() {
      let currentIndex = null;
      currentIndex = Array.from(this._elementSliderNav.children).findIndex(
        (child) => child.classList.contains("w-active")
      );
      return currentIndex;
    }
    set currentIndex(index) {
      if (index < 0)
        return;
      if (index >= this.count)
        return;
      let clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      this.debug.debug("setting slide", index);
      let button = this.elementSliderNav.children[index];
      setTimeout(() => {
        button.dispatchEvent(clickEvent);
      }, 0);
    }
    get count() {
      return this._elementSliderNav.children.length;
    }
    getSlideIndex(slide) {
      let index = Array.from(this._elementSliderMask.children).indexOf(slide);
      if (index == -1) {
        index = Array.from(this._elementSliderNav.children).indexOf(slide);
      }
      if (index == -1)
        return null;
      return index;
    }
    init() {
      this._elementSliderMask = this._element.querySelector(".w-slider-mask");
      this._elementSliderNav = this._element.querySelector(".w-slider-nav");
      this._elementSliderArrowLeft = this._element.querySelector(".w-slider-arrow-left");
      this._elementSliderArrowRight = this._element.querySelector(".w-slider-arrow-right");
      if (this._elementSliderArrowLeft) {
        this._elementSliderArrowLeft.addEventListener("click", (event) => {
          if (!this.onSlidePrevRequest(this.currentIndex)) {
            event.preventDefault();
            event.stopPropagation();
          }
          console.log("Left arrow clicked");
        }, true);
      }
      if (this._elementSliderArrowRight) {
        this._elementSliderArrowRight.addEventListener("click", (event) => {
          if (!this.onSlideNextRequest(this.currentIndex)) {
            event.preventDefault();
            event.stopPropagation();
          }
          console.log("Right arrow clicked");
        }, true);
      }
      this._observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "attributes" && mutation.attributeName === "class") {
            const target = mutation.target;
            if (target.classList.contains("w-active")) {
              this.onSlideChanged(this.currentIndex);
            }
          }
        }
      });
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      this._observer.observe(this._elementSliderNav, config);
    }
    elementSlide(index) {
      if (index < 0)
        return;
      if (index >= this.count)
        return;
      let filteredChildren = Array.from(this._elementSliderMask.children).filter(
        (child) => child.classList.contains("w-slide")
      );
      let targetChild = filteredChildren[index];
      return targetChild;
    }
    goTo(index) {
      this.debug.debug(index);
      this.currentIndex = index;
    }
    goToName(name) {
      let index = Array.from(this._elementSliderMask.children).findIndex(
        (child) => child.getAttribute("wfu-slide-name" /* ATTR_ELEMENT_SLIDE_NAME */) == name
      );
      if (index == -1) {
        console.error(`No slide found with name: ${name}`);
        return;
      }
      this.goTo(index);
    }
    goToNext() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newSlideIndex = this.currentIndex + 1;
      if (newSlideIndex >= this.count)
        return;
      this.goTo(newSlideIndex);
    }
    goToNextLoop() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newSlideIndex = this.currentIndex + 1;
      if (newSlideIndex >= this.count)
        newSlideIndex = 0;
      this.goTo(newSlideIndex);
    }
    goToPrev() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newSlideIndex = this.currentIndex - 1;
      if (newSlideIndex < 0)
        return;
      this.goTo(newSlideIndex);
    }
    goToPrevLoop() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newSlideIndex = this.currentIndex - 1;
      if (newSlideIndex < 0)
        newSlideIndex = this.count - 1;
      this.goTo(newSlideIndex);
    }
    goToFirst() {
      this.goTo(0);
    }
    goToLast() {
      var newSlideIndex = this.count - 1;
      this.goTo(newSlideIndex);
    }
    isSlideChangedCallback(func) {
      if (!func)
        return false;
      return func.length === 1;
    }
    onSlideChanged(index) {
      let core = Sa5Core.startup();
      core.getHandlers("slideChanged" /* EVENT_SLIDE_CHANGED */).forEach((func) => {
        func(this, index);
      });
    }
    onSlideNextRequest(currentIndex) {
      let core = Sa5Core.startup();
      const handlers = core.getHandlers("slideNextRequest" /* EVENT_SLIDE_NEXT_REQUEST */);
      let nextAllowed = true;
      handlers.forEach((func) => {
        const result = func(this, currentIndex);
        if (!result) {
          nextAllowed = false;
        }
      });
      return nextAllowed;
    }
    onSlidePrevRequest(currentIndex) {
      let core = Sa5Core.startup();
      const handlers = core.getHandlers("slidePrevRequest" /* EVENT_SLIDE_PREV_REQUEST */);
      let prevAllowed = true;
      handlers.forEach((func) => {
        const result = func(this, currentIndex);
        if (!result) {
          prevAllowed = false;
        }
      });
      return prevAllowed;
    }
  };
  Sa5Core.startup(WebflowSlider);

  // src/webflow-elements/deck-controller.ts
  var Action = /* @__PURE__ */ ((Action3) => {
    Action3["First"] = "first";
    Action3["Prev"] = "prev";
    Action3["Next"] = "next";
    Action3["Last"] = "last";
    Action3["GoTo"] = "goto";
    return Action3;
  })(Action || {});
  var Sa5DeckController = class {
    constructor(element) {
      this.element = element;
      const actionValue = this.element.getAttribute("wfu-deck-action" /* ATTR_ELEMENT_DECK_ACTION */);
      if (actionValue) {
        this.action = Sa5DeckController.getActionEnum(actionValue);
        if (!this.action) {
          console.error(`Invalid wfu-deck-action value: ${actionValue}`);
        }
      }
      const targetName = element.getAttribute("wfu-deck-target" /* ATTR_ELEMENT_DECK_TARGET */);
      if (targetName) {
        this.deckName = targetName;
        const tabsElements = document.querySelectorAll(`[wfu-tabs="${targetName}"]`);
        const sliderElements = document.querySelectorAll(`[wfu-slider="${targetName}"]`);
        if (tabsElements.length + sliderElements.length > 1) {
          console.error(`Multiple elements or conflicting elements found with the target name: ${targetName}`);
        }
        if (tabsElements.length + sliderElements.length == 0) {
          console.error(`No elements found with the target name: ${targetName}`);
        }
        if (tabsElements.length === 1) {
          this.tabsElement = tabsElements[0];
          this.deck = new WebflowTabs(this.tabsElement);
        } else if (sliderElements.length === 1) {
          this.sliderElement = sliderElements[0];
          this.deck = new WebflowSlider(this.sliderElement);
        }
      } else {
        const tabsParent = this.element.closest(`[${"wfu-tabs" /* ATTR_ELEMENT_TABS */}]`);
        const sliderParent = this.element.closest(`[${"wfu-slider" /* ATTR_ELEMENT_SLIDER */}]`);
        if (tabsParent) {
          this.tabsElement = tabsParent;
          this.deck = new WebflowTabs(this.tabsElement);
        } else if (sliderParent) {
          this.sliderElement = sliderParent;
          this.deck = new WebflowSlider(this.sliderElement);
        } else {
          console.error(`No valid target element found for the wfu-deck-action element`);
        }
      }
      this.item = this.element.getAttribute("wfu-deck-action-item" /* ATTR_ELEMENT_DECK_ITEM */);
    }
    init() {
      this.element.addEventListener("click", (event) => {
        event.preventDefault();
        switch (this.action) {
          case "first" /* First */:
            this.deck.goToFirst();
            break;
          case "prev" /* Prev */:
            this.deck.goToPrev();
            break;
          case "next" /* Next */:
            this.deck.goToNext();
            break;
          case "last" /* Last */:
            this.deck.goToLast();
            break;
          case "goto" /* GoTo */:
            if (typeof this.item === "string" && !isNaN(Number(this.item))) {
              this.deck.goTo(Number(this.item) - 1);
            } else if (typeof this.item === "number") {
              this.deck.goTo(this.item - 1);
            } else {
              this.deck.goToName(this.item);
            }
            break;
          default:
            console.error(`Invalid wfu-deck-action value: ${this.action}`);
            break;
        }
      });
    }
    static getActionEnum(actionValue) {
      const lowerCaseValue = actionValue.toLowerCase();
      if (Object.keys(Action).some((key) => Action[key] === lowerCaseValue)) {
        return lowerCaseValue;
      } else {
        console.error(`Invalid wfu-deck-action value: ${actionValue}`);
        return null;
      }
    }
  };
  Sa5Core.startup(Sa5DeckController);

  // src/webflow-elements/dropdown.ts
  var Sa5DropdownType = /* @__PURE__ */ ((Sa5DropdownType2) => {
    Sa5DropdownType2["Native"] = "native";
    Sa5DropdownType2["Custom"] = "custom";
    return Sa5DropdownType2;
  })(Sa5DropdownType || {});
  var Sa5Dropdown = class {
    constructor(element) {
      this._delayMs = 100;
      this._type = "native" /* Native */;
      this.valid = false;
      this._element = element;
      this.init();
    }
    get element() {
      return this._element;
    }
    get elementToggle() {
      return this._elementToggle;
    }
    get elementList() {
      return this._elementList;
    }
    get delayMs() {
      return this._delayMs;
    }
    set delayMs(val) {
      this._delayMs = val;
    }
    async checkOpen() {
      if (!this._elementToggle) {
        return null;
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this._elementToggle?.classList.contains("w--open"));
        }, this._delayMs);
      });
    }
    init() {
      if (!this._element.classList.contains("w-dropdown")) {
        this.valid = false;
        return;
      }
      const typeAttribute = this._element.getAttribute("wfu-dropdown-type")?.toLowerCase();
      if (!typeAttribute) {
        this._type = "native" /* Native */;
      } else if (!(typeAttribute.toLowerCase() in Sa5DropdownType)) {
        this.valid = false;
        throw new Error("Invalid dropdown type");
        return;
      } else {
        this._type = Sa5DropdownType[typeAttribute.toLowerCase()];
      }
      this._elementToggle = this._element.querySelector(".w-dropdown-toggle");
      if (!this._elementToggle) {
        this.valid = false;
        return;
      }
      this._elementList = this._element.querySelector(".w-dropdown-list");
      if (!this._elementList) {
        this.valid = false;
        return;
      }
      this.valid = true;
      switch (this._element.getAttribute("wfu-dropdown-init" /* ATTR_ELEMENT_DROPDOWN_INIT */)?.toLowerCase()) {
        case "open": {
          this.open();
          break;
        }
      }
    }
    async open() {
      if (!await this.checkOpen())
        this.toggle();
    }
    async close() {
      if (await this.checkOpen())
        this.toggle();
    }
    async toggle() {
      this._elementToggle.dispatchEvent(new Event("mousedown"));
      setTimeout(() => {
        this._elementToggle.dispatchEvent(new Event("mouseup"));
      }, 1);
    }
    onOpenChanged() {
    }
  };
  Sa5Core.startup(Sa5Dropdown);
  var WebflowDropdown = class extends Sa5Dropdown {
  };
  Sa5Core.startup(WebflowDropdown);

  // src/webflow-elements/autocomplete.ts
  var Sa5Autocomplete = class extends Sa5Dropdown {
    constructor(element) {
      super(element);
      this.valid = false;
      this.init();
    }
    get elementInput() {
      return this._elementInput;
    }
    init() {
      super.init();
      this.setupListeners();
      this._elementInput = super.elementToggle.querySelector(`[${"wfu-autocomplete-input" /* ATTR_ELEMENT_AUTOCOMPLETE_INPUT */}]`);
      if (!this._elementInput) {
        this.valid = false;
        return false;
      }
      this.valid = true;
    }
    actionSiteSearch(matchingString) {
      const query = encodeURIComponent(matchingString);
      const url = `/search?query=${query}`;
      window.location.href = url;
    }
    displayMatchingElements(matchingString) {
      const listElement = super.elementList;
      const lowerCaseMatchingString = matchingString.toLowerCase();
      const elements = listElement.querySelectorAll(`[${"wfu-autocomplete-item" /* ATTR_ELEMENT_AUTOCOMPLETE_ITEM */}]`);
      elements.forEach((element) => {
        element.style.display = "none";
      });
      elements.forEach((element) => {
        const attributeValue = element.getAttribute("wfu-autocomplete-item-match" /* ATTR_ELEMENT_AUTOCOMPLETE_ITEM_MATCH */)?.toLowerCase();
        console.log(lowerCaseMatchingString, attributeValue);
        if (attributeValue && attributeValue.includes(lowerCaseMatchingString)) {
          const itemLayout = element.getAttribute("wfu-autocomplete-item-layout" /* ATTR_ELEMENT_AUTOCOMPLETE_ITEM_LAYOUT */) || "block";
          element.style.display = itemLayout;
        }
      });
    }
    setupListeners() {
      const inputElement = super.elementToggle.querySelector(`[${"wfu-autocomplete-input" /* ATTR_ELEMENT_AUTOCOMPLETE_INPUT */}]`);
      if (inputElement) {
        inputElement.addEventListener("input", () => {
          this.displayMatchingElements(inputElement.value);
          super.open();
        });
      } else {
        console.error("no input element found for autocomplete.");
      }
      const searchElement = super.elementList.querySelector(`[${"wfu-autocomplete-item-action" /* ATTR_ELEMENT_AUTOCOMPLETE_ITEM_ACTION */}=search]`);
      if (searchElement) {
        searchElement.addEventListener("click", () => {
          this.actionSiteSearch(inputElement.value);
        });
      }
    }
  };
  Sa5Core.startup(Sa5Autocomplete);

  // src/webflow-elements/accordion.ts
  var Sa5AccordionMode = /* @__PURE__ */ ((Sa5AccordionMode2) => {
    Sa5AccordionMode2["Default"] = "default";
    Sa5AccordionMode2["Interactions"] = "ix";
    return Sa5AccordionMode2;
  })(Sa5AccordionMode || {});
  var Sa5AccordionItem = class {
    get index() {
      return this.controller.itemToIndex(this);
    }
    constructor(elem, controller) {
      this.elem = elem;
      this.controller = controller;
      this.init();
    }
    init() {
      const nameAttr = this.elem.getAttribute("wfu-accordion-item");
      if (nameAttr)
        this.name = nameAttr;
      const tabElement = this.elem.querySelector("[wfu-accordion-item-tab]");
      if (tabElement) {
        this.tab = tabElement;
      } else {
        console.error("Tab element not found");
      }
      const contentElement = this.elem.querySelector("[wfu-accordion-item-content]");
      if (contentElement) {
        this.content = contentElement;
      } else {
        console.error("Content element not found");
      }
      const triggerOpen = this.elem.querySelector('[wfu-accordion-item-trigger="open"]');
      if (triggerOpen)
        this.triggerOpen = triggerOpen;
      const triggerClose = this.elem.querySelector('[wfu-accordion-item-trigger="close"]');
      if (triggerClose)
        this.triggerClose = triggerClose;
      switch (this.controller.mode) {
        case "ix" /* Interactions */:
          break;
      }
    }
    get isOpen() {
      return this === this.controller.items[this.controller.currentIndex];
    }
    open() {
      switch (this.controller.mode) {
        case "ix" /* Interactions */:
          this.triggerOpen.click();
          this.controller.onItemChanged(this.index);
          break;
        default:
          this.elem.classList.add(this.controller.classOpen);
          this.elem.classList.remove(this.controller.classClosed);
          this.tab.classList.add(this.controller.classOpen);
          this.tab.classList.remove(this.controller.classClosed);
          this.content.classList.add(this.controller.classOpen);
          this.content.classList.remove(this.controller.classClosed);
          this.controller.onItemChanged(this.index);
          break;
      }
    }
    close() {
      switch (this.controller.mode) {
        case "ix" /* Interactions */:
          this.triggerClose.click();
          break;
        default:
          this.elem.classList.add(this.controller.classClosed);
          this.elem.classList.remove(this.controller.classOpen);
          this.tab.classList.add(this.controller.classClosed);
          this.tab.classList.remove(this.controller.classOpen);
          this.content.classList.add(this.controller.classClosed);
          this.content.classList.remove(this.controller.classOpen);
          break;
      }
    }
  };
  var Sa5Accordion = class {
    constructor(element) {
      this.items = [];
      this._currentIndex = 0;
      this.mode = "default" /* Default */;
      this.classOpen = "is-open";
      this.classClosed = "is-closed";
      this.debug = new Sa5Debug("sa5-webflow-accordion");
      this.debug.enabled = true;
      this.elem = element;
      this.init();
    }
    get currentIndex() {
      return this._currentIndex;
    }
    set currentIndex(index) {
      console.log("setting current item index to", this.currentIndex, this.items.length);
      this._currentIndex = index;
      for (let i = 0; i < this.items.length; i++) {
        if (i == this._currentIndex) {
          console.log("opening item", i);
          this.items[i].open();
        } else {
          console.log("closing item", i);
          this.items[i].close();
        }
      }
    }
    get count() {
      return this.items.length;
    }
    get currentNum() {
      return this.currentIndex + 1;
    }
    set currentNum(num) {
      this.currentIndex = num - 1;
    }
    get element() {
      return this.elem;
    }
    get currentItem() {
      return this.items[this.currentIndex];
    }
    set currentItem(item) {
      this.currentIndex = this.itemToIndex(item);
    }
    itemToIndex(accordionItem) {
      let i = 0;
      let itemIndex = -1;
      this.items.forEach((item) => {
        if (accordionItem == item) {
          itemIndex = i;
          return;
        }
        i++;
      });
      if (itemIndex < 0) {
        console.error("Accordion itemtoindex item not recognized.");
      }
      return itemIndex;
    }
    init() {
      const nameAttr = this.elem.getAttribute("wfu-accordion");
      if (nameAttr)
        this.name = nameAttr;
      const modeAttr = this.elem.getAttribute("wfu-accordion-mode");
      const enumValues = Object.values(Sa5AccordionMode);
      if (modeAttr && enumValues.includes(modeAttr)) {
        this.mode = modeAttr;
      } else {
        this.mode = "default" /* Default */;
      }
      const accordionItemElems = this.elem.querySelectorAll(
        `[${"wfu-accordion-item" /* ATTR_ELEMENT_ACCORDION_ITEM */}]`
      );
      accordionItemElems.forEach((item) => {
        const accordionItem = new Sa5AccordionItem(item, this);
        this.items.push(accordionItem);
        accordionItem.tab?.addEventListener("click", () => {
          this.currentItem = accordionItem;
        });
      });
      this.currentIndex = 0;
    }
    goTo(index) {
      this.currentIndex = index;
    }
    goToName(name) {
      console.error("Accordion.goToName not yet implemented");
    }
    goToNext() {
      if (this.currentIndex < this.items.length - 1)
        this.goTo(this.currentIndex++);
    }
    goToNextLoop() {
      if (this.currentIndex == this.items.length - 1)
        this.goToFirst();
      else
        this.goTo(this.currentIndex++);
    }
    goToPrev() {
      if (this.currentIndex > 0)
        this.goTo(this.currentIndex--);
    }
    goToPrevLoop() {
      if (this.currentIndex == 0)
        this.goToLast();
      else
        this.goTo(this.currentIndex--);
    }
    goToFirst() {
      this.goTo(0);
    }
    goToLast() {
      this.goTo(this.items.length - 1);
    }
    onItemChanged(index) {
      let core = Sa5Core.startup();
      core.getHandlers("accordionChanged" /* EVENT_ACCORDION_CHANGED */).forEach((func) => {
        func(this, index);
      });
    }
  };
  var Sa5AccordionController = class {
    constructor() {
    }
    init() {
      let accordionElements = document.querySelectorAll(`[${"wfu-accordion" /* ATTR_ELEMENT_ACCORDION */}]`);
      accordionElements.forEach((element) => {
        console.log("Initializing accordion", element.getAttribute("wfu-accordion" /* ATTR_ELEMENT_ACCORDION */));
        var accordionObj = new Sa5Accordion(element);
      });
    }
  };
  Sa5Core.startup(Sa5Accordion);
  Sa5Core.startup(Sa5AccordionController);

  // src/webflow-elements/action.ts
  var Action2 = /* @__PURE__ */ ((Action3) => {
    Action3["First"] = "first";
    Action3["Last"] = "last";
    Action3["Prev"] = "prev";
    Action3["PrevLoop"] = "prevloop";
    Action3["Next"] = "next";
    Action3["NextLoop"] = "nextloop";
    Action3["GoTo"] = "goto";
    Action3["Hide"] = "hide";
    Action3["Show"] = "show";
    Action3["Toggle"] = "toggle";
    Action3["Open"] = "open";
    Action3["Close"] = "close";
    return Action3;
  })(Action2 || {});
  var Sa5ActionController = class {
    constructor(element) {
      this.element = element;
      const actionValue = this.element.getAttribute("wfu-action" /* ATTR_ELEMENT_ACTION */);
      if (actionValue) {
        this.action = Sa5ActionController.getActionEnum(actionValue);
        if (!this.action) {
          console.error(`Invalid wfu-action value: ${actionValue}`);
        }
      }
      const targetName = element.getAttribute("wfu-action-target" /* ATTR_ELEMENT_ACTION_TARGET */);
      if (targetName) {
        this.targetName = targetName;
        const selectorArray = [
          `[${"wfu-element" /* ATTR_ELEMENT */}="${targetName}"]`,
          `[${"wfu-tabs" /* ATTR_ELEMENT_TABS */}="${targetName}"]`,
          `[${"wfu-slider" /* ATTR_ELEMENT_SLIDER */}="${targetName}"]`,
          `[${"wfu-accordion" /* ATTR_ELEMENT_ACCORDION */}="${targetName}"]`
        ];
        const targetElements = document.querySelectorAll(selectorArray.join(", "));
        if (targetElements.length > 1) {
          console.error(`Multiple elements or conflicting elements found with the target name: ${targetName}`);
        }
        if (targetElements.length == 0) {
          console.error(`No elements found with the target name: ${targetName}`);
          return;
        }
        this.targetElement = targetElements[0];
      } else {
        const selectorArray = [
          `[${"wfu-element" /* ATTR_ELEMENT */}]`,
          `[${"wfu-tabs" /* ATTR_ELEMENT_TABS */}]`,
          `[${"wfu-slider" /* ATTR_ELEMENT_SLIDER */}]`,
          `[${"wfu-accordion" /* ATTR_ELEMENT_ACCORDION */}]`
        ];
        this.targetElement = this.element.closest(selectorArray.join(", "));
      }
      if (!this.targetElement) {
        console.error("Unable to locate a target element for the action");
        return;
      }
      if (this.targetElement.hasAttribute("wfu-tabs")) {
        this.deck = new WebflowTabs(this.targetElement);
      } else if (this.targetElement.hasAttribute("wfu-slider")) {
        this.deck = new WebflowSlider(this.targetElement);
      } else if (this.targetElement.hasAttribute("wfu-accordion")) {
        this.deck = new Sa5Accordion(this.targetElement);
      }
      this.item = this.element.getAttribute("wfu-deck-action-item" /* ATTR_ELEMENT_DECK_ITEM */);
    }
    init() {
      this.element.addEventListener("click", (event) => {
        event.preventDefault();
        switch (this.action) {
          case "first" /* First */:
            if (!this.deck) {
              console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
              return;
            }
            this.deck.goToFirst();
            break;
          case "prev" /* Prev */:
            if (!this.deck) {
              console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
              return;
            }
            this.deck.goToPrev();
            break;
          case "prevloop" /* PrevLoop */:
            if (!this.deck) {
              console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
              return;
            }
            this.deck.goToPrevLoop();
            break;
          case "next" /* Next */:
            if (!this.deck) {
              console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
              return;
            }
            this.deck.goToNext();
            break;
          case "nextloop" /* NextLoop */:
            if (!this.deck) {
              console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
              return;
            }
            this.deck.goToNextLoop();
            break;
          case "last" /* Last */:
            if (!this.deck) {
              console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
              return;
            }
            this.deck.goToLast();
            break;
          case "goto" /* GoTo */:
            if (!this.deck) {
              console.error(`Invalid action '${this.action}' attempted on a non-deck element.`);
              return;
            }
            if (typeof this.item === "string" && !isNaN(Number(this.item))) {
              this.deck.goTo(Number(this.item) - 1);
            } else if (typeof this.item === "number") {
              this.deck.goTo(this.item - 1);
            } else {
              this.deck.goToName(this.item);
            }
            break;
          default:
            console.error(`Invalid wfu-action value: ${this.action}`);
            break;
        }
      });
    }
    static getActionEnum(actionValue) {
      const lowerCaseValue = actionValue.toLowerCase();
      if (Object.keys(Action2).some((key) => Action2[key] === lowerCaseValue)) {
        return lowerCaseValue;
      } else {
        console.error(`Invalid wfu-action value: ${actionValue}`);
        return null;
      }
    }
  };
  Sa5Core.startup(Sa5ActionController);

  // src/nocode/webflow-elements.ts
  var init = () => {
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-elements");
    debug.debug(`Initializing v${VERSION}`);
    let tabElements = document.querySelectorAll(`[${"wfu-tabs" /* ATTR_ELEMENT_TABS */}]`);
    tabElements.forEach((element) => {
      var tabObj = new WebflowTabs(element);
    });
    let sliderElements = document.querySelectorAll(`[${"wfu-slider" /* ATTR_ELEMENT_SLIDER */}]`);
    sliderElements.forEach((element) => {
      var sliderObj = new WebflowSlider(element);
    });
    const accordionController = new Sa5AccordionController();
    accordionController.init();
    let deckControllerElements = document.querySelectorAll(`[${"wfu-deck-action" /* ATTR_ELEMENT_DECK_ACTION */}]`);
    deckControllerElements.forEach((element) => {
      var deckController = new Sa5DeckController(element);
      deckController.init();
    });
    let actionTriggerElements = document.querySelectorAll(`[${"wfu-action" /* ATTR_ELEMENT_ACTION */}]`);
    actionTriggerElements.forEach((element) => {
      var actionController = new Sa5ActionController(element);
      actionController.init();
    });
    const buttons = document.querySelectorAll(`[${"wfu-button" /* ATTR_ELEMENT_BUTTON */}]`);
    buttons.forEach((element) => {
      new Sa5Button(element).init();
    });
    const dropdowns = document.querySelectorAll(`[${"wfu-dropdown" /* ATTR_ELEMENT_DROPDOWN */}]`);
    dropdowns.forEach((element) => {
      new Sa5Dropdown(element).init();
    });
    const autocompletes = document.querySelectorAll(`[${"wfu-autocomplete" /* ATTR_ELEMENT_AUTOCOMPLETE */}]`);
    autocompletes.forEach((element) => {
      new Sa5Autocomplete(element).init();
    });
    let useLightboxCaptionHandler = false;
    const elements = document.querySelectorAll(
      Sa5Attribute.getBracketed("wfu-lightbox-captions" /* ATTR_LIGHTBOX_CAPTIONS */)
    );
    useLightboxCaptionHandler = elements.length > 0;
    elements.forEach((element) => {
      const wfuLightbox = new Sa5Lightbox(element).setCaptionToImageAlt();
    });
    if (useLightboxCaptionHandler) {
      new Sa5LightboxCaptionHandler().init();
    }
    let lightBoxCmsGroups = false;
    const groups = document.querySelectorAll(
      Sa5Attribute.getBracketed("wfu-lightbox-group" /* ATTR_LIGHTBOX_GROUP */)
    );
    lightBoxCmsGroups = groups.length > 0;
    groups.forEach((element) => {
      let groupValue = element.getAttribute(
        "wfu-lightbox-group" /* ATTR_LIGHTBOX_GROUP */
      );
      let scripts = element.querySelectorAll("script.w-json");
      scripts.forEach((script) => {
        let json = JSON.parse(script.textContent);
        json.group = groupValue;
        script.textContent = JSON.stringify(json, null, 2);
      });
    });
    if (lightBoxCmsGroups) {
      var Webflow = Webflow || [];
      Webflow.push(function() {
        Webflow.require("lightbox").ready();
      });
    }
  };
  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
//# sourceMappingURL=webflow-elements.js.map
