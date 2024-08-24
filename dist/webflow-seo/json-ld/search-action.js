(() => {
  // src/webflow-seo/json-ld/entry-point.ts
  var LdJsonEntryPoint = class {
    constructor(urlTemplate = void 0) {
      this["@type"] = "EntryPoint";
      this.urlTemplate = urlTemplate;
    }
  };

  // src/webflow-seo/json-ld/search-action.ts
  var LdJsonSearchAction = class {
    constructor(queryInput = void 0) {
      this["@context"] = "https://schema.org";
      this["@type"] = "SearchAction";
      this.queryInput = queryInput;
      this.target = new LdJsonEntryPoint();
    }
  };
})();
//# sourceMappingURL=search-action.js.map
