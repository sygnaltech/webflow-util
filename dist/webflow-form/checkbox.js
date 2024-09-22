(() => {
  // src/webflow-form/checkbox.ts
  var Sa5FormCheckbox = class {
    constructor(elem, config = {}) {
      this.checkbox = elem;
      this.config = config;
    }
    init() {
    }
    process() {
      if (!this.checkbox.checked && this.isCandidateForRemoval()) {
        this.checkbox.parentNode?.removeChild(
          this.checkbox
        );
      }
    }
    isCandidateForRemoval() {
      let element = this.checkbox;
      while (element) {
        if (element.hasAttribute("wfu-form-checkbox") && element.getAttribute("wfu-form-checkbox") === "remove-unchecked") {
          return true;
        }
        element = element.parentElement;
      }
      return false;
    }
  };
})();
//# sourceMappingURL=checkbox.js.map
