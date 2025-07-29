(() => {
  // src/version.ts
  var VERSION = "5.8.5";

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
})();
//# sourceMappingURL=events.js.map
