(() => {
  // src/webflow-core/scripts.ts
  var Sa5Scripts = class {
    constructor() {
    }
    install(src, type = null, async = false, defer = false, installPos = "head" /* head */) {
      var script = document.createElement("script");
      script.src = src;
      script.type = type;
      script.async = async;
      script.defer = defer;
      console.log("installing script", script);
      switch (installPos) {
        case "headStart" /* headStart */:
          document.head.insertBefore(script, document.head.firstChild);
          break;
        case "head" /* head */:
        case "headEnd" /* headEnd */:
          document.head.appendChild(script);
          break;
        case "bodyStart" /* bodyStart */:
          document.body.insertBefore(script, document.body.firstChild);
          break;
        case "body" /* body */:
        case "bodyEnd" /* bodyEnd */:
          document.body.appendChild(script);
          break;
      }
    }
  };
})();
//# sourceMappingURL=scripts.js.map
