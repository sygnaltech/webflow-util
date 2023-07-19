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
  window["sa5"] = window["sa5"] || {};
  window["sa5"]["Sa5Video"] = WebflowVideo;
})();
//# sourceMappingURL=webflow-video.js.map
