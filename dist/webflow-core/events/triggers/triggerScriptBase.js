(() => {
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
})();
//# sourceMappingURL=triggerScriptBase.js.map
