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

  // src/version.ts
  var VERSION = "5.8.4";

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

  // src/webflow-form/checkbox.ts
  var Sa5FormCheckbox = class {
    constructor(elem, config = {}) {
      this.checkbox = elem;
      this.config = config;
    }
    init() {
    }
    process() {
      if (!this.checkbox.checked && this.isCandidateForRemoval()) {
        this.checkbox.parentNode?.removeChild(
          this.checkbox
        );
      }
    }
    isCandidateForRemoval() {
      let element = this.checkbox;
      while (element) {
        if (element.hasAttribute("wfu-form-checkbox") && element.getAttribute("wfu-form-checkbox") === "remove-unchecked") {
          return true;
        }
        element = element.parentElement;
      }
      return false;
    }
  };

  // src/webflow-form.ts
  var Sa5Form = class {
    get redirect() {
      return this.formElement.getAttribute("redirect");
    }
    constructor(element, config = {}) {
      this.config = {
        formSubmitSuccessCallback: config.formSubmitSuccessCallback,
        formSubmitFailCallback: config.formSubmitFailCallback,
        debug: config.debug ?? false
      };
      this.debug = new Sa5Debug("sa5-form");
      this.debug.debug("Initializing");
      if (element.tagName == "FORM")
        this.formBlockElement = element.parentElement;
      else
        this.formBlockElement = element;
      this.formElement = this.formBlockElement.querySelector("form");
      this.isValid = true;
      const submitButton = this.formElement.querySelector('input[type="submit"]');
      this.submitButtonReadyMessage = submitButton?.getAttribute("value");
      this.submitButtonWaitMessage = submitButton?.getAttribute("data-wait");
    }
    onFormSubmitSuccess(data) {
      let core = Sa5Core.startup();
      const formSubmitSuccess = core.getHandlers("formSubmitSuccess" /* EVENT_FORM_SUBMIT_SUCCESS */);
      formSubmitSuccess.forEach((f) => {
        f(this, data);
      });
    }
    onFormSubmitFail(data) {
      let core = Sa5Core.startup();
      const formSubmitFail = core.getHandlers("formSubmitFail" /* EVENT_FORM_SUBMIT_FAIL */);
      formSubmitFail.forEach((f) => {
        f(this, data);
      });
    }
    init() {
      console.log("INIT FORM");
      let core = Sa5Core.startup();
      this.formElement.addEventListener("submit", (event) => {
        if (!this.formElement.checkValidity()) {
          event.preventDefault();
          this.formElement.reportValidity();
          return;
        }
        this.preSubmit();
      });
    }
    preSubmit() {
      const checkboxes = this.formElement.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach((elem) => {
        let checkbox = new Sa5FormCheckbox(elem);
        checkbox.process();
      });
    }
    setSubmitButtonWaitMessage() {
      console.log("wait message");
      const submitButtons = this.formElement.querySelectorAll('input[type="submit"]');
      submitButtons.forEach((button) => {
        const message = this.submitButtonWaitMessage;
        if (message) {
          button.value = message;
        }
      });
    }
    setSubmitButtonReadyMessage() {
      console.log("ready message");
      const submitButtons = this.formElement.querySelectorAll('input[type="submit"]');
      submitButtons.forEach((button) => {
        const message = this.submitButtonReadyMessage;
        if (message) {
          button.value = message;
        }
      });
    }
    setMode(mode, message = "") {
      this.debug.debug("setting mode.", mode, message);
      let success = this.formBlockElement.querySelector("div.w-form-done");
      let error = this.formBlockElement.querySelector("div.w-form-fail");
      switch (mode) {
        case 0 /* Active */:
          this.formElement.style.display = "block";
          success.style.display = "none";
          error.style.display = "none";
          this.setSubmitButtonReadyMessage();
          break;
        case 1 /* Success */:
          if (this.redirect) {
            this.debug.debug("Redirecting to " + this.redirect);
            this.setSubmitButtonReadyMessage();
            window.location.href = this.redirect;
            return;
          }
          let successMessage = success.querySelector(
            Sa5Attribute.getBracketed("wfu-form-message" /* ATTR_FORM_MESSAGE */)
          );
          if (successMessage)
            successMessage.innerHTML = message;
          this.formElement.style.display = "none";
          success.style.display = "block";
          error.style.display = "none";
          this.setSubmitButtonReadyMessage();
          break;
        case 2 /* Error */:
          let errorMessage = error.querySelector(
            Sa5Attribute.getBracketed("wfu-form-message" /* ATTR_FORM_MESSAGE */)
          );
          if (errorMessage)
            errorMessage.innerHTML = message;
          this.formElement.style.display = "block";
          success.style.display = "none";
          error.style.display = "block";
          this.setSubmitButtonReadyMessage();
          break;
      }
    }
  };
  Sa5Core.startup(Sa5Form);

  // src/webflow-form/form-select.ts
  var Sa5FormSelectMode = /* @__PURE__ */ ((Sa5FormSelectMode2) => {
    Sa5FormSelectMode2["Default"] = "default";
    Sa5FormSelectMode2["Toggle"] = "toggle";
    return Sa5FormSelectMode2;
  })(Sa5FormSelectMode || {});
  var Sa5FormSelect = class {
    constructor(element) {
      this._mode = "default" /* Default */;
      this.valid = false;
      this._element = element;
    }
    get element() {
      return this._element;
    }
    init() {
      if (!this._element.classList.contains("w-select")) {
        console.error("sa5-core", "atteibute is not on a select element");
        this.valid = false;
        return;
      }
      const modeAttribute = this._element.getAttribute("wfu-form-select-mode" /* ATTR_FORM_SELECT_MODE */)?.toLowerCase();
      if (!modeAttribute) {
        this._mode = "default" /* Default */;
      } else if (Object.values(Sa5FormSelectMode).includes(modeAttribute)) {
        this._mode = modeAttribute;
      } else {
        this.valid = false;
        throw new Error("Invalid select mode");
      }
      this.valid = true;
      switch (this._mode) {
        case "toggle" /* Toggle */:
          this._element.addEventListener("mousedown", (event) => {
            event.preventDefault();
            const option = event.target;
            if (option.tagName === "OPTION") {
              option.selected = !option.selected;
            }
          });
          break;
        case "default" /* Default */:
        default:
          break;
      }
    }
  };
  Sa5Core.startup(Sa5FormSelect);

  // src/webflow-form/handler/form-handler.ts
  var WfuFormHandler = class {
    constructor(form, config = {}) {
      this.debug = new Sa5Debug("sa5-form-handler");
      this.debug.debug("Initializing");
      this.form = form;
      let action = this.form.formElement.getAttribute("action");
      this.debug.debug("action", action);
      let waitMessage = this.form.formElement.querySelector("input[type=submit]").getAttribute("data-wait");
    }
    handleResponseJSON(data, requestStatus, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response execution status: ${requestStatus}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(
          1 /* Success */,
          data?.message
        );
        this.form.onFormSubmitSuccess(data);
      } else {
        this.form.setMode(
          2 /* Error */,
          data?.message
        );
        this.form.onFormSubmitFail(data);
      }
    }
    handleResponseText(data, requestStatus, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${requestStatus}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(
          1 /* Success */,
          data?.message
        );
        this.form.onFormSubmitSuccess(data);
      } else {
        this.form.setMode(
          2 /* Error */,
          data?.message
        );
        this.form.onFormSubmitFail(data);
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      this.form.setMode(2 /* Error */);
    }
    formDataToJson(formElement) {
      let formData = new FormData(formElement);
      let jsonObject = {};
      for (const [key, value] of formData.entries()) {
        jsonObject[key] = value;
      }
      return JSON.stringify(jsonObject);
    }
    init() {
      const form = this.form;
      this.debug.debug("WFU Handle Form submit to webhook (success response).");
      this.form.formElement.addEventListener("submit", async (e) => {
        e.preventDefault();
        this.form.setSubmitButtonWaitMessage();
        this.debug.debug("Posting data.");
        this.debug.debug(`Webhook - ${this.form.formElement.getAttribute("action")}`);
        let formData = new FormData(this.form.formElement);
        fetch(this.form.formElement.action, {
          method: "POST",
          body: formData
        }).then((response) => {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json().then((data) => this.handleResponseJSON(data, "success", response));
          } else {
            return response.text().then((data) => this.handleResponseText(data, "success", response));
          }
        }).catch((error) => this.handleFailResponse(error, "error", error));
        return false;
      });
    }
  };

  // src/webflow-form/handler/basin-handler.ts
  var WfuFormHandlerBasin = class extends WfuFormHandler {
    constructor(form, config = {}) {
      console.log("BASIN HANDLER.");
      super(form, config);
    }
  };

  // src/webflow-form/handler/make-handler.ts
  var WfuFormHandlerMake = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponseText(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(
          1 /* Success */,
          response.responseText?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          response.responseText?.message
        );
      }
    }
    handleResponseJSON(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      const responseJSON = JSON.stringify(data);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(
          1 /* Success */,
          responseJSON?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          responseJSON?.message
        );
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      if (jqxhr.status == 400) {
        console.error(jqxhr.responseText);
        this.form.setMode(
          2 /* Error */,
          jqxhr.responseJSON?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          jqxhr.responseJSON?.message
        );
      }
    }
  };

  // src/webflow-form/handler/n8n-handler.ts
  var WfuFormHandlerN8N = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      if (jqxhr.status == 400) {
        console.error(jqxhr.responseText);
        this.form.setMode(
          2 /* Error */,
          jqxhr.responseJSON?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          jqxhr.responseJSON?.message
        );
      }
    }
  };

  // src/webflow-form/handler/zapier-handler.ts
  var WfuFormHandlerZapier = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponseJSON(data, status, response) {
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Zapier result: ${data.status}`);
      if (data.status == "success") {
        this.form.setMode(1 /* Success */);
      } else {
        this.form.setMode(2 /* Error */);
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
    }
  };

  // src/webflow-form/handler/success-handler.ts
  var WfuFormHandlerSuccess = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponseJSON(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      this.form.setMode(1 /* Success */);
    }
    handleResponseText(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      this.form.setMode(1 /* Success */);
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      this.form.setMode(2 /* Error */);
    }
  };

  // src/webflow-form/handler/form-handler-factory.ts
  var WfuFormHandlerFactory = class {
    constructor(form, config = {}) {
    }
    static create(form, config = {}) {
      var handler;
      let type = form.formBlockElement.getAttribute(
        "wfu-form-handler" /* ATTR_FORM_HANDLER */
      );
      switch (type) {
        case "zapier":
          handler = new WfuFormHandlerZapier(form, config);
          break;
        case "n8n":
          handler = new WfuFormHandlerN8N(form, config);
          break;
        case "make":
          handler = new WfuFormHandlerMake(form, config);
          break;
        case "basin":
          handler = new WfuFormHandlerBasin(form, config);
          break;
        case "success":
          handler = new WfuFormHandlerSuccess(form, config);
          break;
        case "other":
        case "":
          handler = new WfuFormHandler(form, config);
          break;
        default:
          console.error(`Unknown wfu-form-handler ${type}`);
          break;
      }
      return handler;
    }
    static createFromElement(elem) {
      let form = new Sa5Form(elem);
      if (!form.isValid) {
        console.error("Cannot only instantiate Sa5 form handler from a Form element.");
      }
      return WfuFormHandlerFactory.create(form);
    }
  };

  // src/webflow-form/ip-info.ts
  var Sa5FormIPInfo = class {
    constructor(form, config = {}) {
      this.prefix = "ip";
      this.handler = this;
      this.form = form;
      this.config = config;
    }
    init() {
      const handler = this.handler;
      console.debug("WFU append IP Info to form.");
      fetch("https://get.geojs.io/v1/ip/geo.json").then((response) => response.json()).then((data) => {
        const fields = ["ip", "continent_code", "address", "country", "country-code", "region", "city", "timezone", "latitude", "longitude"];
        fields.forEach((field) => {
          if (data[field]) {
            let input = document.createElement("input");
            input.type = "hidden";
            input.name = `${handler.prefix}-${field}`;
            input.value = data[field];
            this.form.formElement.appendChild(input);
          }
        });
      }).catch((error) => console.error("Error:", error));
    }
    static createFromElement(elem) {
      let form = new Sa5Form(elem);
      if (!form.isValid) {
        console.error("Cannot only instantiate IP Info from a Form element.");
      }
      return new Sa5FormIPInfo(form);
    }
  };

  // src/nocode/webflow-form.ts
  var init = () => {
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-form");
    debug.debug(`Initializing v${VERSION}`);
    document.querySelectorAll("[wfu-form]").forEach((element) => {
      let form = new Sa5Form(element);
      form.init();
    });
    document.querySelectorAll(
      Sa5Attribute.getBracketed("wfu-form-ipinfo" /* ATTR_FORM_IPINFO */)
    ).forEach((element) => {
      Sa5FormIPInfo.createFromElement(element).init();
    });
    debug.debug("Checking for forms", Sa5Attribute.getBracketed("wfu-form-handler" /* ATTR_FORM_HANDLER */));
    const formsHandled = document.querySelectorAll(
      `div[wfu-form-handler]`
    );
    console.log(formsHandled);
    formsHandled.forEach((element) => {
      debug.debug("Form detected, installing form handler.");
      WfuFormHandlerFactory.createFromElement(element).init();
    });
    const formSelects = document.querySelectorAll(
      `select[${"wfu-form-select" /* ATTR_FORM_SELECT */}]`
    );
    console.log(formSelects);
    formSelects.forEach((element) => {
      const select = new Sa5FormSelect(element);
      select.init();
    });
  };
  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
//# sourceMappingURL=webflow-form.js.map
