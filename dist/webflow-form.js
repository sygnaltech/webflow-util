(() => {
  // src/webflow-core/debug.ts
  var Sa5Debug = class {
    constructor(label) {
      this.localStorageDebugFlag = "sa5-debug";
      this._enabled = false;
      this._label = label;
    }
    get persistentDebug() {
      return Boolean(localStorage.getItem(this.localStorageDebugFlag));
    }
    set persistentDebug(active) {
      if (active) {
        localStorage.setItem(this.localStorageDebugFlag, "true");
        console.debug("sa5-core debug enabled (persistent).");
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug("sa5-core debug disabled (persistent).");
      }
    }
    get enabled() {
      var wfuDebugValue = Boolean(localStorage.getItem(this.localStorageDebugFlag));
      wfuDebugValue = wfuDebugValue || this._enabled;
      return wfuDebugValue;
    }
    set enabled(active) {
      this._enabled = active;
    }
    group(name) {
      if (this.enabled)
        console.group(name);
    }
    groupEnd() {
      if (this.enabled)
        console.groupEnd();
    }
    debug(...args) {
      if (this.enabled)
        console.debug(this._label, ...args);
    }
  };

  // src/webflow-form.ts
  var WebflowFormMode = /* @__PURE__ */ ((WebflowFormMode2) => {
    WebflowFormMode2[WebflowFormMode2["Active"] = 0] = "Active";
    WebflowFormMode2[WebflowFormMode2["Success"] = 1] = "Success";
    WebflowFormMode2[WebflowFormMode2["Error"] = 2] = "Error";
    return WebflowFormMode2;
  })(WebflowFormMode || {});
  var Sa5Form = class {
    get redirect() {
      return this.formElement.getAttribute("redirect");
    }
    constructor(element) {
      this.debug = new Sa5Debug("sa5-form");
      this.debug.debug("Initializing");
      if (element.tagName == "FORM")
        this.formBlockElement = element.parentElement;
      else
        this.formBlockElement = element;
      this.formElement = this.formBlockElement.querySelector("form");
      this.isValid = true;
    }
    init() {
    }
    submitButtonWaitMessage() {
      const submitButtons = this.formElement.querySelectorAll('input[type="submit"]');
      submitButtons.forEach((button) => {
        const waitMessage = button.getAttribute("data-wait");
        if (waitMessage) {
          button.value = waitMessage;
        }
      });
    }
    setMode(mode, message = "") {
      this.debug.debug("setting mode.", mode, message);
      if (this.redirect) {
        console.log("redirecting");
        this.submitButtonWaitMessage();
        window.location.href = this.redirect;
        return;
      }
      let success = this.formBlockElement.querySelector("div.w-form-done");
      let error = this.formBlockElement.querySelector("div.w-form-fail");
      switch (mode) {
        case 0 /* Active */:
          this.formElement.style.display = "block";
          success.style.display = "none";
          error.style.display = "none";
          break;
        case 1 /* Success */:
          let successMessage = error.querySelector("[wfu-form-message]");
          if (successMessage)
            successMessage.innerHTML = message;
          this.formElement.style.display = "none";
          success.style.display = "block";
          error.style.display = "none";
          break;
        case 2 /* Error */:
          let errorMessage = error.querySelector("[wfu-form-message]");
          if (errorMessage)
            errorMessage.innerHTML = message;
          this.formElement.style.display = "none";
          success.style.display = "none";
          error.style.display = "block";
          break;
      }
    }
  };
})();
//# sourceMappingURL=webflow-form.js.map
