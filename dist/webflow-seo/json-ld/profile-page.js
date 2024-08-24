(() => {
  // src/webflow-seo/json-ld/profile-page.ts
  var LdJsonProfilePage = class {
    constructor(name = void 0) {
      this["@type"] = "ProfilePage";
      this.name = name;
    }
    toJSON() {
      return {
        "@content": "https://schema.org",
        "@type": this["@type"],
        name: this.name
      };
    }
  };
})();
//# sourceMappingURL=profile-page.js.map
