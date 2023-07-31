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
  var Sa5Form = class {
    constructor(element) {
      let debug = new Sa5Debug("sa5-form");
      debug.debug("Initializing");
      if (element.tagName == "FORM")
        this.formBlockElement = element.parentElement;
      else
        this.formBlockElement = element;
      console.debug(this.formBlockElement);
      this.formElement = this.formBlockElement.querySelector("form");
      this.isValid = true;
      console.debug(this.formElement);
    }
    init() {
    }
    setMode(mode, message = "") {
      this.debug.debug("setting form mode.");
      let success = this.formBlockElement.querySelector("div.w-form-done");
      let error = this.formBlockElement.querySelector("div.w-form-fail");
      switch (mode) {
        case 0 /* Active */:
          this.debug.debug("Change Webflow form mode to active.");
          this.formElement.style.display = "block";
          success.style.display = "none";
          error.style.display = "none";
          break;
        case 1 /* Success */:
          this.debug.debug("Change Webflow form mode to success (done).");
          success.querySelector("[wfu-form-message]").innerHTML = message;
          this.formElement.style.display = "none";
          success.style.display = "block";
          error.style.display = "none";
          break;
        case 2 /* Error */:
          this.debug.debug("Change Webflow form mode to error.");
          error.querySelector("[wfu-form-message]").innerHTML = message;
          this.formElement.style.display = "none";
          success.style.display = "none";
          error.style.display = "block";
          break;
      }
    }
  };

  // src/webflow-form/ip-info.ts
  var Sa5FormIPInfo = class {
    constructor(form, config = {}) {
      this.prefix = "ip";
      this.handler = this;
      this.form = form;
      this.config = config;
    }
    init() {
      const handler = this.handler;
      console.debug("WFU append IP Info to form.");
      fetch("https://get.geojs.io/v1/ip/geo.json").then((response) => response.json()).then((data) => {
        const fields = ["address", "country", "country-code", "region", "city", "timezone", "latitude", "longitude"];
        fields.forEach((field) => {
          let input = document.createElement("input");
          input.type = "hidden";
          input.name = `${handler.prefix}-${field}`;
          input.value = data[field];
          this.form.formElement.appendChild(input);
        });
      }).catch((error) => console.error("Error:", error));
    }
    static createFromElement(elem) {
      let form = new Sa5Form(elem);
      if (!form.isValid) {
        console.error("Cannot only instantiate IP Info from a Form element.");
      }
      return new Sa5FormIPInfo(form);
    }
  };
})();
//# sourceMappingURL=ip-info.js.map
