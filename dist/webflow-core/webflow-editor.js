(() => {
  // src/webflow-core/webflow-editor.ts
  var Sa5Editor = class {
    get isEditorMode() {
      return document.documentElement.getAttribute("data-wf-mode") === "editor";
    }
    detectEditorMode() {
      if (document.title.startsWith("Editor:")) {
        console.debug("Editor mode");
        document.documentElement.setAttribute("data-wf-mode", "editor");
      } else {
        console.debug("NOT Editor mode");
        document.documentElement.removeAttribute("data-wf-mode");
      }
    }
    constructor(config = null) {
      config = config || {};
      this.config = config;
      this.init();
    }
    init() {
      let titleElement = document.getElementsByTagName("title")[0];
      let observer = new MutationObserver((mutations) => {
        this.detectEditorMode();
      });
      observer.observe(titleElement, { childList: true });
    }
  };
})();
//# sourceMappingURL=webflow-editor.js.map
