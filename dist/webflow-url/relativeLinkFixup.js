(() => {
  // src/webflow-url/relativeLinkFixup.ts
  var WfuRelativeLinkFixup = class {
    constructor(element) {
      this._element = element;
    }
    init() {
      let elems = Array.from(
        this._element.querySelectorAll(
          "a[href^='http://.' i], a[href^='https://.' i], a[href^='http://?' i], a[href^='https://?' i]"
        )
      );
      elems.forEach((elem) => {
        let href = elem.getAttribute("href");
        if (href) {
          if (href.startsWith("http://."))
            href = href.substring(8);
          if (href.startsWith("https://."))
            href = href.substring(9);
          if (href.startsWith("http://?"))
            href = href.substring(7);
          if (href.startsWith("https://?"))
            href = href.substring(8);
          elem.setAttribute("href", href);
        }
      });
      let elements = Array.from(
        this._element.querySelectorAll("a[href*='//self/' i], a[href$='//self' i]")
      );
      elements.forEach((element) => {
        let originalHref = element.getAttribute("href");
        if (originalHref) {
          const originalUrl = new URL(originalHref);
          let relativeHref = originalUrl.pathname + originalUrl.search + originalUrl.hash;
          element.setAttribute("href", relativeHref);
        }
      });
    }
  };
})();
//# sourceMappingURL=relativeLinkFixup.js.map
