(() => {
  // src/webflow-url/query.ts
  var WfuQuery = class {
    constructor() {
    }
    init() {
      const urlParams = new URLSearchParams(window.location.search);
      if (Array.from(urlParams).length == 0)
        return;
      const that = this;
      let elements = Array.from(
        document.querySelectorAll("*[wfu-query-param], a")
      );
      elements.forEach((element) => {
        let wfuQueryParam = element.getAttribute("wfu-query-param");
        if (element.tagName.toLowerCase() === "input" && wfuQueryParam) {
          element.value = urlParams.get(wfuQueryParam) || "";
        } else if (element.tagName.toLowerCase() === "a") {
        } else if (wfuQueryParam) {
          element.textContent = urlParams.get(wfuQueryParam) || "";
        }
      });
    }
    processLink(linkElem) {
      const urlParams = new URLSearchParams(window.location.search);
      if (linkElem.getAttribute("href") == null)
        return;
      var hrefParts = linkElem.getAttribute("href").split("?");
      var hrefBase = hrefParts[0];
      var hrefQuery = hrefParts[1];
      const newParams = new URLSearchParams(hrefQuery);
      if (linkElem.getAttribute("wfu-query-param") == "-") {
      } else if (linkElem.getAttribute("wfu-query-param") == "*" || linkElem.getAttribute("wfu-query-param") == void 0 || linkElem.hasAttribute("wfu-query-param") == false) {
        for (let p of urlParams) {
          newParams.set(p[0], urlParams.get(p[0]));
        }
        ;
        var newHref = hrefBase + "?" + newParams.toString();
        linkElem.setAttribute("href", newHref);
      } else {
        var overrideParams = linkElem.getAttribute("wfu-query-param").split(",");
        for (let p of overrideParams) {
          if (urlParams.get(p) != null)
            newParams.set(p, urlParams.get(p));
        }
        ;
        var newHref = hrefBase + "?" + newParams.toString();
        linkElem.setAttribute("href", newHref);
      }
    }
  };
})();
//# sourceMappingURL=query.js.map
