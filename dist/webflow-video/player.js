(() => {
  // src/webflow-video/player.ts
  var WfuVideoPlayer = class {
    constructor(element) {
      console.log("player constructor", element);
      if (element) {
        let videoName = element.getAttribute("wfu-video");
        this.name = videoName;
        this.element = element;
        console.log("video name is", this.name);
      }
    }
    init() {
    }
  };
})();
//# sourceMappingURL=player.js.map
