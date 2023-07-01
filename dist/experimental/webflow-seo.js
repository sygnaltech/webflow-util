(() => {
  // src/experimental/webflow-seo.ts
  function formatDate(date) {
    if (!(date || void 0))
      return void 0;
    return new Date(date);
  }
  var LdJsonEntryPoint = class {
    constructor(urlTemplate = void 0) {
      this["@type"] = "EntryPoint";
      this.urlTemplate = urlTemplate;
    }
  };
  window["LdJsonEntryPoint"] = LdJsonEntryPoint;
  var LdJsonSearchAction = class {
    constructor(queryInput = void 0) {
      this["@context"] = "https://schema.org";
      this["@type"] = "SearchAction";
      this.queryInput = queryInput;
      this.target = new LdJsonEntryPoint();
    }
  };
  window["LdJsonSearchAction"] = LdJsonSearchAction;
  var LdJsonWebSite = class {
    constructor(name = void 0, url = void 0) {
      this["@type"] = "WebSite";
      this.name = name;
      this.url = url;
    }
    toJSON() {
      return {
        "@content": "https://schema.org",
        "@type": this["@type"],
        name: this.name,
        url: this.url,
        potentialAction: this.potentialAction
      };
    }
    generate() {
      console.log(JSON.stringify(this, null, 2));
      const template = document.createElement("script");
      template.setAttribute("type", "application/ld+json");
      template.innerHTML = JSON.stringify(this, null, 2);
      document.body.appendChild(template);
    }
  };
  window["LdJsonWebSite"] = LdJsonWebSite;
  var LdJsonPerson = class {
    constructor(name = void 0, url = void 0) {
      this["@type"] = "Person";
      this.name = name;
      this.url = url;
    }
  };
  window["LdJsonPerson"] = LdJsonPerson;
  var LdJsonArticle = class {
    constructor() {
      this.author = [];
      this.addAuthor = function(name = void 0, url = void 0) {
        this.author.push(new LdJsonPerson(name, url));
      };
      this.setFallbackImage = function(url) {
        this.image = this.image || url;
      };
      this.generate = function() {
        console.log(JSON.stringify(this, null, 2));
        const template = document.createElement("script");
        template.setAttribute("type", "application/ld+json");
        template.textContent = JSON.stringify(this, null, 2);
        document.head.appendChild(template);
        console.log("appended.");
      };
      this["@type"] = "Article";
    }
    toJSON() {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: this.headline,
        dependencies: this.dependencies,
        proficiencyLevel: this.proficiencyLevel || void 0,
        alternativeHeadline: this.alternativeHeadline,
        image: this.image,
        author: this.author,
        award: this.award,
        editor: this.editor,
        genre: this.genre,
        keywords: this.keywords,
        wordcount: this.wordcount,
        publisher: this.publisher,
        url: this.url,
        dateCreated: formatDate(this.dateCreated),
        dateModified: formatDate(this.dateModified),
        datePublished: formatDate(this.datePublished),
        description: this.description,
        articleBody: this.articleBody
      };
    }
  };
  window["LdJsonArticle"] = LdJsonArticle;
})();
//# sourceMappingURL=webflow-seo.js.map
