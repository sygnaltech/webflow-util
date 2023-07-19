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
  window["sa5"] = window["sa5"] || {};
  window["sa5"]["Sa5Demo"] = WebflowInfo;
})();
//# sourceMappingURL=webflow-demo.js.map
