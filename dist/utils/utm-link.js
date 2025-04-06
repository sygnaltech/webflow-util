(() => {
  // src/utils/utm-link.ts
  var Sa5UtmLink = class {
    constructor(link) {
      this.elem = link;
    }
    init() {
      this.elem.href = Sa5UtmLink.applyUTMParametersFromAttrs(this.elem.href, this.elem);
    }
    static applyUTMParametersFromAttrs(urlString, utmElem) {
      const url = new URL(urlString);
      const params = url.searchParams;
      const utmAttributes = {
        "wfu-link-utm-source": "utm_source",
        "wfu-link-utm-medium": "utm_medium",
        "wfu-link-utm-campaign": "utm_campaign",
        "wfu-link-utm-content": "utm_content"
      };
      for (const [customAttr, utmParam] of Object.entries(utmAttributes)) {
        const attrValue = utmElem.getAttribute(customAttr);
        if (attrValue) {
          params.set(utmParam, encodeURIComponent(attrValue));
        }
      }
      return url.toString();
    }
  };
})();
//# sourceMappingURL=utm-link.js.map
