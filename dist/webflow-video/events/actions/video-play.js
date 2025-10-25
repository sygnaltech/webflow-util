(() => {
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

  // src/webflow-video/events/actions/video-play.ts
  var Sa5EventsActionVideoPlay = class extends Sa5EventsActionBase {
    constructor(core, debug) {
      super(core, debug);
    }
    init() {
      const actionElems = document.querySelectorAll("[sa-action-video-play]");
      actionElems.forEach((elem) => {
        const eventName = this.getEventName(elem, "sa-action-modal-play");
        const videoName = elem.getAttribute("wfu-video");
        if (eventName) {
          this.core.events.addEventHandler(eventName, () => {
            this.debugTrigger("\u{1F551} play video", eventName);
            const videoController = this.core.controllers["videos"];
          });
        }
      });
    }
  };
})();
//# sourceMappingURL=video-play.js.map
