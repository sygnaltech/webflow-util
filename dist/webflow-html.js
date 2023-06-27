(() => {
  // src/webflow-html/dynamic-attributes.ts
  var WfuHtmlDynamicAttributes = class {
    constructor(config) {
      this.config = config;
    }
    Process() {
      console.log(this.config);
      console.debug("Dynamic attributes processed 1.");
      var allElements = document.querySelectorAll("*");
      allElements.forEach(function(element) {
        for (var i = 0; i < element.attributes.length; i++) {
          var attr = element.attributes[i];
          if (attr.name.startsWith("x-")) {
            var newAttrName = attr.name.slice(2);
            element.setAttribute(newAttrName, attr.value);
          }
        }
      });
    }
  };

  // src/webflow-html.ts
  var WfuHtml = class {
    constructor(config) {
      this.config = config;
    }
    Process() {
      console.log("WFU-HTML Lib");
      if (this.config.dynamicAttributes) {
        let obj = new WfuHtmlDynamicAttributes({});
        obj.Process();
      }
    }
  };
})();
//# sourceMappingURL=webflow-html.js.map
