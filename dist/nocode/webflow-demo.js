(() => {
  // src/webflow-demo.ts
  var WebflowInfo = class {
    constructor() {
      this.siteId = document.documentElement.getAttribute("data-wf-site");
      this.pageId = document.documentElement.getAttribute("data-wf-page");
    }
    getWebflowPreviewLink(url) {
      var _a;
      const parsedUrl = new URL(url);
      parsedUrl.searchParams.set("pageId", (_a = this.pageId) != null ? _a : "");
      return parsedUrl.href;
    }
    updateHrefToWebflowPreviewLink(linkElem) {
      var parsedUrl = linkElem.href;
      var modifiedUrl = this.getWebflowPreviewLink(parsedUrl != null ? parsedUrl : "");
      linkElem.href = modifiedUrl;
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

  // src/nocode/webflow-demo.ts
  var init = () => {
    let debug = new WfuDebug("wfu-demo");
    debug.debug("Initializing");
    const webflowInfo = new WebflowInfo();
    const elements = document.querySelectorAll("a[wfu-demo-link]");
    elements.forEach((element) => {
      webflowInfo.updateHrefToWebflowPreviewLink(element);
    });
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-demo.js.map
