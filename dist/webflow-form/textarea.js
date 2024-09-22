(() => {
  // src/webflow-form/textarea.ts
  var Sa5FormTextarea = class {
    constructor(elem, config = {}) {
      this.textarea = elem;
      this.config = config;
    }
    init() {
    }
    process() {
      return;
      if (this.checkPreserveLineBreaks()) {
        var modifiedText = this.textarea.value.replace(/(\r\n|\r|\n)/g, "\\n\\n");
        this.textarea.value = modifiedText;
      }
    }
    checkPreserveLineBreaks() {
      return false;
      let element = this.textarea;
      while (element) {
        if (element.hasAttribute("wfu-form-textarea") && element.getAttribute("wfu-form-textarea") === "preserve-linebreaks") {
          return true;
        }
        element = element.parentElement;
      }
      return false;
    }
  };
})();
//# sourceMappingURL=textarea.js.map
