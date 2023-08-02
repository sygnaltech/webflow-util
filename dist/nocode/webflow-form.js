(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

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

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
    }
    init() {
      this.initDebugMode();
    }
    initDebugMode() {
      const debugParamKey = "sa-debug";
      let params = new URLSearchParams(window.location.search);
      let hasDebug = params.has(debugParamKey);
      if (hasDebug) {
        let wfuDebug = new Sa5Debug(`sa5 init`);
        wfuDebug.persistentDebug = this.stringToBoolean(params.get(debugParamKey));
      }
    }
    stringToBoolean(str) {
      const truthyValues = ["1", "true", "yes"];
      const falsyValues = ["0", "false", "no"];
      if (truthyValues.indexOf(str.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    }
    static startup(module = null) {
      var _a;
      let sa5instance = window["sa5"];
      if (!(((_a = sa5instance == null ? void 0 : sa5instance.constructor) == null ? void 0 : _a.name) == "Sa5Core")) {
        var core = new Sa5Core();
        if (Array.isArray(sa5instance))
          core.handlers = window["sa5"];
        window["sa5"] = core;
        window["Sa5"] = window["sa5"];
      }
      if (module) {
        window["sa5"][module.name] = module;
      }
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

  // src/webflow-form.ts
  var Sa5Form = class {
    constructor(element) {
      this.debug = new Sa5Debug("sa5-form");
      this.debug.debug("Initializing");
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
      this.debug.debug("setting mode.", mode, message);
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

  // src/webflow-form/handler/form-handler.ts
  var WfuFormHandler = class {
    constructor(form, config = {}) {
      this.debug = new Sa5Debug("sa5-form-handler");
      this.debug.debug("Initializing");
      this.form = form;
      let action = this.form.formElement.getAttribute("action");
      this.debug.debug("action", action);
      let waitMessage = this.form.formElement.querySelector("input[type=submit]").getAttribute("data-wait");
      this.debug.debug(`waitMessage: ${waitMessage}`);
    }
    handleResponse(data, status, xhr) {
      console.log("response", data);
      this.debug.debug(`Webhook response status: ${status}`);
      this.form.setMode(1 /* Success */);
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
    }
    formDataToJson(formElement) {
      let formData = new FormData(formElement);
      let jsonObject = {};
      for (const [key, value] of formData.entries()) {
        jsonObject[key] = value;
      }
      return JSON.stringify(jsonObject);
    }
    init() {
      const form = this.form;
      this.debug.debug("WFU Handle Form submit to webhook (success response).");
      console.log("init form handler.");
      this.form.formElement.addEventListener("submit", (e) => __async(this, null, function* () {
        e.preventDefault();
        this.debug.debug("Posting data.");
        this.debug.debug(`Webhook - ${this.form.formElement.getAttribute("action")}`);
        let formData = new FormData(this.form.formElement);
        console.log("sending data");
        fetch(this.form.formElement.action, {
          method: "POST",
          body: formData
        }).then((response) => response.json()).then((data) => this.handleResponse(data, "success", null)).catch((error) => this.handleFailResponse(error, "error", error));
        return false;
      }));
    }
  };

  // src/webflow-form/handler/basin-handler.ts
  var WfuFormHandlerBasin = class extends WfuFormHandler {
    constructor(form, config = {}) {
      console.log("BASIN HANDLER.");
      super(form, config);
    }
  };

  // src/webflow-form/handler/make-handler.ts
  var WfuFormHandlerMake = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponse(data, status, xhr) {
      var _a, _b;
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(xhr)}`);
      if (xhr.status >= 200 && xhr.status < 300) {
        this.form.setMode(
          1 /* Success */,
          (_a = xhr.responseJSON) == null ? void 0 : _a.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          (_b = xhr.responseJSON) == null ? void 0 : _b.message
        );
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      var _a, _b;
      this.debug.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      if (jqxhr.status == 400) {
        console.error(jqxhr.responseText);
        this.form.setMode(
          2 /* Error */,
          (_a = jqxhr.responseJSON) == null ? void 0 : _a.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          (_b = jqxhr.responseJSON) == null ? void 0 : _b.message
        );
      }
    }
  };

  // src/webflow-form/handler/n8n-handler.ts
  var WfuFormHandlerN8N = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponse(data, status, xhr) {
      var _a, _b;
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(xhr)}`);
      if (xhr.status >= 200 && xhr.status < 300) {
        this.form.setMode(
          1 /* Success */,
          (_a = xhr.responseJSON) == null ? void 0 : _a.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          (_b = xhr.responseJSON) == null ? void 0 : _b.message
        );
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      var _a, _b;
      this.debug.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      if (jqxhr.status == 400) {
        console.error(jqxhr.responseText);
        this.form.setMode(
          2 /* Error */,
          (_a = jqxhr.responseJSON) == null ? void 0 : _a.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          (_b = jqxhr.responseJSON) == null ? void 0 : _b.message
        );
      }
    }
  };

  // src/webflow-form/handler/zapier-handler.ts
  var WfuFormHandlerZapier = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponse(data, status, xhr) {
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Zapier result: ${data.status}`);
      if (data.status == "success") {
        this.form.setMode(1 /* Success */);
      } else {
        this.form.setMode(2 /* Error */);
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
    }
  };

  // src/webflow-form/handler/form-handler-factory.ts
  var WfuFormHandlerFactory = class {
    constructor(form, config = {}) {
    }
    static create(form, config = {}) {
      var handler;
      let type = form.formBlockElement.getAttribute("wfu-form-handler");
      switch (type) {
        case "zapier":
          handler = new WfuFormHandlerZapier(form, config);
          break;
        case "n8n":
          handler = new WfuFormHandlerN8N(form, config);
          break;
        case "make":
          handler = new WfuFormHandlerMake(form, config);
          break;
        case "basin":
          handler = new WfuFormHandlerBasin(form, config);
          break;
        case "other":
        case "":
          handler = new WfuFormHandler(form, config);
          break;
        default:
          console.error(`Unknown wfu-form-handler ${type}`);
          break;
      }
      return handler;
    }
    static createFromElement(elem) {
      let form = new Sa5Form(elem);
      if (!form.isValid) {
        console.error("Cannot only instantiate Sa5 form handler from a Form element.");
      }
      return WfuFormHandlerFactory.create(form);
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
        const fields = ["ip", "continent_code", "address", "country", "country-code", "region", "city", "timezone", "latitude", "longitude"];
        fields.forEach((field) => {
          if (data[field]) {
            let input = document.createElement("input");
            input.type = "hidden";
            input.name = `${handler.prefix}-${field}`;
            input.value = data[field];
            this.form.formElement.appendChild(input);
          }
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

  // src/nocode/webflow-form.ts
  var init = () => {
    new Sa5Core().init();
    let debug = new Sa5Debug("sa5-form");
    debug.debug("Initializing");
    document.querySelectorAll("[wfu-form-ipinfo]").forEach((element) => {
      Sa5FormIPInfo.createFromElement(element).init();
    });
    document.querySelectorAll("[wfu-form-handler]").forEach((element) => {
      console.log("installing form handler.");
      WfuFormHandlerFactory.createFromElement(element).init();
    });
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-form.js.map
