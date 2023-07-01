(() => {
  // src/webflow-video.ts
  var WebflowVideo = class {
    constructor() {
    }
    processAllDataPosterUrls() {
      const elements = document.querySelectorAll(`div[wfu-data-poster-url]`);
      elements.forEach((element) => {
        element.setAttribute(
          "data-poster-url",
          element.getAttribute("wfu-data-poster-url")
        );
      });
    }
  };

  // src/webflow-core.ts
  var WfuDebug = class {
    constructor(label) {
      this._enabled = false;
      this._label = label;
    }
    get enabled() {
      var wfuDebugValue = Boolean(localStorage.getItem("wfuDebug"));
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

  // src/nocode/webflow-video.ts
  var init = () => {
    let debug = new WfuDebug("wfu-video");
    debug.debug("Initializing");
    const webflowVideo = new WebflowVideo();
    webflowVideo.processAllDataPosterUrls();
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-video.js.map
