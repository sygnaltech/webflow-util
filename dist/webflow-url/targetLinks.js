(() => {
  // src/webflow-url/targetLinks.ts
  var WfuTargetLinks = class {
    constructor(element) {
      this._element = element;
    }
    init() {
      let elements = Array.from(
        document.querySelectorAll("a[href^='http://']:not([target]), a[href^='https://']:not([target])")
      );
      elements.forEach((element) => {
        let href = element.getAttribute("href");
        if (href) {
          console.debug(`retargeting ${href}.`);
          element.setAttribute("target", "_blank");
        }
      });
    }
  };
})();
//# sourceMappingURL=targetLinks.js.map
