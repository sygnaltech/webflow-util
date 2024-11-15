(() => {
  // src/globals.ts
  var Sa5Attribute;
  ((Sa5Attribute2) => {
    function getBracketed(attr) {
      return `[${attr}]`;
    }
    Sa5Attribute2.getBracketed = getBracketed;
  })(Sa5Attribute || (Sa5Attribute = {}));
  var Sa5Attribute = /* @__PURE__ */ ((Sa5Attribute2) => {
    Sa5Attribute2["ATTR_CORE_SCRIPT_INJECT"] = "wfu-script-load";
    Sa5Attribute2["ATTR_VIDEO"] = "wfu-video";
    Sa5Attribute2["ATTR_VIDEO_YOUTUBE_NOREL"] = "wfu-youtube-norel";
    Sa5Attribute2["ATTR_VIDEO_DATA_POSTER_URL"] = "wfu-data-poster-url";
    Sa5Attribute2["ATTR_DESIGN"] = "wfu-design";
    Sa5Attribute2["ATTR_ELEMENT"] = "wfu-element";
    Sa5Attribute2["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
    Sa5Attribute2["ATTR_ELEMENT_SLIDE_NAME"] = "wfu-slide-name";
    Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
    Sa5Attribute2["ATTR_ELEMENT_TAB_NAME"] = "wfu-tab-name";
    Sa5Attribute2["ATTR_ELEMENT_BUTTON"] = "wfu-button";
    Sa5Attribute2["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
    Sa5Attribute2["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
    Sa5Attribute2["ATTR_ELEMENT_DECK_TARGET"] = "wfu-deck-target";
    Sa5Attribute2["ATTR_ELEMENT_DECK_ACTION"] = "wfu-deck-action";
    Sa5Attribute2["ATTR_ELEMENT_DECK_ITEM"] = "wfu-deck-action-item";
    Sa5Attribute2["ATTR_ELEMENT_ACTION"] = "wfu-action";
    Sa5Attribute2["ATTR_ELEMENT_ACTION_TARGET"] = "wfu-action-target";
    Sa5Attribute2["ATTR_ELEMENT_ACTION_ITEM"] = "wfu-action-item";
    Sa5Attribute2["ATTR_ELEMENT_ACTION_TRIGGER"] = "wfu-action-trigger";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN"] = "wfu-dropdown";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_NAME"] = "wfu-dropdown-name";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_INIT"] = "wfu-dropdown-init";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_TYPE"] = "wfu-dropdown-type";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE"] = "wfu-autocomplete";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_INPUT"] = "wfu-autocomplete-input";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_LIST"] = "wfu-autocomplete-list";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM"] = "wfu-autocomplete-item";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_ACTION"] = "wfu-autocomplete-item-action";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_MATCH"] = "wfu-autocomplete-item-match";
    Sa5Attribute2["ATTR_ELEMENT_AUTOCOMPLETE_ITEM_LAYOUT"] = "wfu-autocomplete-item-layout";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION"] = "wfu-accordion";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM"] = "wfu-accordion-item";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM_TAB"] = "wfu-accordion-item-tab";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_ITEM_CONTENT"] = "wfu-accordion-item-content";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_CLASS_OPEN"] = "wfu-accordion-class-open";
    Sa5Attribute2["ATTR_ELEMENT_ACCORDION_CLASS_CLOSED"] = "wfu-accordion-class-closed";
    Sa5Attribute2["ATTR_DATA"] = "wfu-data";
    Sa5Attribute2["ATTR_DATA_TYPE"] = "wfu-data-type";
    Sa5Attribute2["ATTR_DATA_DSN"] = "wfu-data-dsn";
    Sa5Attribute2["ATTR_DATA_ITEM_ID"] = "wfu-data-item-id";
    Sa5Attribute2["ATTR_DATABIND"] = "wfu-bind";
    Sa5Attribute2["ATTR_DATABIND_CONTENT"] = "wfu-bind-content";
    Sa5Attribute2["ATTR_DATABIND_CONTEXT_DSN"] = "wfu-bind-dsn";
    Sa5Attribute2["ATTR_DATABIND_CONTEXT_ITEM_ID"] = "wfu-bind-item-id";
    Sa5Attribute2["ATTR_PRELOAD"] = "wfu-preload";
    Sa5Attribute2["ATTR_IX_TRIGGER"] = "wfu-ix-trigger";
    Sa5Attribute2["ATTR_IX_ID"] = "wfu-ix-id";
    Sa5Attribute2["ATTR_SORT"] = "wfu-sort";
    Sa5Attribute2["ATTR_SORT_DIR"] = "wfu-sort-dir";
    Sa5Attribute2["ATTR_SORT_TYPE"] = "wfu-sort-type";
    Sa5Attribute2["ATTR_SORT_KEY"] = "wfu-sort-key";
    Sa5Attribute2["ATTR_FILTER"] = "wfu-filter";
    Sa5Attribute2["ATTR_FILTER_MATCH"] = "wfu-filter-match";
    Sa5Attribute2["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
    Sa5Attribute2["ATTR_FILTER_FUNC"] = "wfu-filter-func";
    Sa5Attribute2["ATTR_HIDE"] = "wfu-hide";
    Sa5Attribute2["ATTR_SUPPRESS"] = "wfu-suppress";
    Sa5Attribute2["ATTR_EMAIL_ENCODED"] = "wfu-email-encoded";
    Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
    Sa5Attribute2["ATTR_FORM_HANDLER"] = "wfu-form-handler";
    Sa5Attribute2["ATTR_FORM_MESSAGE"] = "wfu-form-message";
    Sa5Attribute2["ATTR_FORM_IPINFO"] = "wfu-form-ipinfo";
    Sa5Attribute2["ATTR_FORM_SELECT"] = "wfu-form-select";
    Sa5Attribute2["ATTR_FORM_SELECT_MODE"] = "wfu-form-select-mode";
    Sa5Attribute2["ATTR_FORM_SELECT_THEME"] = "wfu-form-select-theme";
    Sa5Attribute2["ATTR_DISMISS"] = "wfu-dismiss";
    Sa5Attribute2["ATTR_DISMISS_TRIGGER"] = "wfu-dismiss-trigger";
    Sa5Attribute2["ATTR_DISMISS_CLOSE"] = "wfu-dismiss-close";
    Sa5Attribute2["ATTR_DISMISS_CLOSE_TYPE"] = "wfu-dismiss-close-type";
    Sa5Attribute2["ATTR_DISMISS_DAYS"] = "wfu-dismiss-suppress-days";
    Sa5Attribute2["ATTR_MODAL"] = "wfu-modal";
    Sa5Attribute2["ATTR_MODAL_TRIGGER_CLICK"] = "wfu-modal-trigger-click";
    Sa5Attribute2["ATTR_MODAL_STATE"] = "wfu-modal-state";
    Sa5Attribute2["ATTR_FORMAT"] = "wfu-format";
    Sa5Attribute2["ATTR_FORMAT_DATE"] = "wfu-format-date";
    Sa5Attribute2["ATTR_FORMAT_HANDLER"] = "wfu-format-handler";
    Sa5Attribute2["ATTR_FORMAT_MODE"] = "wfu-format-mode";
    Sa5Attribute2["ATTR_FORMAT_LOCALE"] = "wfu-format-locale";
    Sa5Attribute2["ATTR_FORMAT_SUFFIX"] = "wfu-format-suffix";
    Sa5Attribute2["ATTR_COUNTUP"] = "wfu-countup";
    Sa5Attribute2["ATTR_COUNTUP_TRIGGER"] = "wfu-countup-trigger";
    Sa5Attribute2["ATTR_DEMO_LINK"] = "wfu-demo-link";
    Sa5Attribute2["ATTR_LIGHTBOX_CAPTIONS"] = "wfu-lightbox-captions";
    Sa5Attribute2["ATTR_LIGHTBOX_GROUP"] = "wfu-lightbox-group";
    Sa5Attribute2["ATTR_DECODE"] = "wfu-decode";
    Sa5Attribute2["ATTR_LIMIT_MULTIPLE"] = "wfu-limit-multiple";
    Sa5Attribute2["ATTR_LIMIT_MULTIPLE_MIN"] = "wfu-limit-multiple-min";
    Sa5Attribute2["ATTR_SHOW_LOGGED_IN"] = "wfu-show-logged-in";
    Sa5Attribute2["ATTR_HIDE_LOGGED_IN"] = "wfu-hide-logged-in";
    Sa5Attribute2["ATTR_LOGIN_BUTTON"] = "wfu-login-button";
    Sa5Attribute2["ATTR_RICHTEXT_LISTS"] = "wfu-lists";
    Sa5Attribute2["ATTR_RICHTEXT_LIST_THEME"] = "wfu-list-theme";
    Sa5Attribute2["ATTR_URL_RELATIVE_LINKS"] = "wfu-relative-links";
    Sa5Attribute2["ATTR_URL_EXTERNAL_LINKS"] = "wfu-external-links";
    Sa5Attribute2["ATTR_UI_ACCORDION"] = "wfu-ui-accordion";
    Sa5Attribute2["ATTR_RATING"] = "wfu-rating";
    Sa5Attribute2["ATTR_GIST"] = "wfu-gist";
    Sa5Attribute2["ATTR_GIST_COPY"] = "wfu-gist-copy";
    Sa5Attribute2["ATTR_LAYOUT"] = "wfu-layout";
    Sa5Attribute2["ATTR_LAYOUT_HANDLER"] = "wfu-layout-handler";
    Sa5Attribute2["ATTR_LAYOUT_TARGET"] = "wfu-layout-target";
    Sa5Attribute2["ATTR_LAYOUT_NS"] = "wfu-layout-ns";
    Sa5Attribute2["ATTR_LAYOUT_INIT"] = "wfu-layout-init";
    Sa5Attribute2["ATTR_ELEMENTGROUP_NAME"] = "wfu-element-name";
    Sa5Attribute2["ATTR_ELEMENTGROUP_GROUP"] = "wfu-element-display";
    Sa5Attribute2["ATTR_ELEMENTGROUP_DEFAULT"] = "wfu-element-default";
    Sa5Attribute2["ATTR_ELEMENTGROUP_DISPLAY"] = "wfu-element-display";
    Sa5Attribute2["ATTR_ELEMENTGROUP_TARGETGROUP"] = "wfu-element-target-group";
    Sa5Attribute2["ATTR_ELEMENTGROUP_TARGETNAME"] = "wfu-element-target-name";
    Sa5Attribute2["ATTR_ELEMENTGROUP_ACTION"] = "wfu-element-action";
    return Sa5Attribute2;
  })(Sa5Attribute || {});

  // src/version.ts
  var VERSION = "5.4.22";

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
        console.debug(`sa5-core debug enabled (persistent).`);
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug(`sa5-core debug disabled (persistent).`);
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
    static getStyleString(elem) {
      let styleString = "";
      for (let i = 0; i < elem.style.length; i++) {
        const property = elem.style[i];
        const value = elem.style.getPropertyValue(property);
        styleString += `${property}: ${value}; `;
      }
      return styleString;
    }
  };

  // src/webflow-core/designer.ts
  var Sa5Designer = class {
    constructor() {
    }
    init() {
      this.removeDesignTimeElements();
    }
    removeDesignTimeElements() {
      const elements = document.querySelectorAll(
        Sa5Attribute.getBracketed("wfu-design" /* ATTR_DESIGN */)
      );
      elements.forEach((element) => {
        element.remove();
      });
    }
  };

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
      new Sa5Designer().init();
    }
    getHandlers(name) {
      return this.handlers.filter((item) => item[0] === name).map((item) => item[1]);
    }
    getHandler(name) {
      const item = this.handlers.find((item2) => item2[0] === name);
      return item ? item[1] : void 0;
    }
    init() {
      this.initDebugMode();
      this.initAsync();
    }
    async initAsync() {
      this.initScriptInjectionsAsync();
    }
    async initScriptInjectionsAsync() {
      document.addEventListener("DOMContentLoaded", () => {
        const loadSrcScripts = document.querySelectorAll(
          `script[${"wfu-script-load" /* ATTR_CORE_SCRIPT_INJECT */}]`
        );
        loadSrcScripts.forEach((script) => {
          const loadSrcUrl = script.getAttribute("wfu-script-load" /* ATTR_CORE_SCRIPT_INJECT */);
          if (loadSrcUrl) {
            fetch(loadSrcUrl).then((response) => response.text()).then((jsContent) => {
              const newScript = document.createElement("script");
              newScript.textContent = jsContent;
              script.replaceWith(newScript);
            }).catch((error) => {
              console.error("Error loading script:", error);
            });
          }
        });
      });
    }
    initDebugMode() {
      const debugParamKey = "debug";
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
      let sa5instance = window["sa5"];
      var core;
      if (sa5instance?.constructor?.name == "Sa5Core") {
        core = sa5instance;
      } else {
        core = new Sa5Core();
        core.init();
        if (Array.isArray(sa5instance))
          core.handlers = sa5instance;
        window["sa5"] = core;
        window["Sa5"] = window["sa5"];
      }
      if (module) {
        window["sa5"][module.name] = module;
      }
      return core;
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

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

  // src/webflow-form.ts
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
      console.log("init form");
      this.formElement.addEventListener("submit", (event) => {
        console.log("form submitted");
        if (!this.formElement.checkValidity()) {
          event.preventDefault();
          this.formElement.reportValidity();
          return;
        }
        console.log("form is valid");
        this.preSubmit();
      });
    }
    preSubmit() {
      const checkboxes = this.formElement.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach((elem) => {
        let checkbox = new Sa5FormCheckbox(elem);
        checkbox.process();
      });
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
      let success = this.formBlockElement.querySelector("div.w-form-done");
      let error = this.formBlockElement.querySelector("div.w-form-fail");
      switch (mode) {
        case 0 /* Active */:
          this.formElement.style.display = "block";
          success.style.display = "none";
          error.style.display = "none";
          break;
        case 1 /* Success */:
          if (this.redirect) {
            console.log("redirecting");
            this.submitButtonWaitMessage();
            window.location.href = this.redirect;
            return;
          }
          let successMessage = error.querySelector(
            Sa5Attribute.getBracketed("wfu-form-message" /* ATTR_FORM_MESSAGE */)
          );
          if (successMessage)
            successMessage.innerHTML = message;
          this.formElement.style.display = "none";
          success.style.display = "block";
          error.style.display = "none";
          break;
        case 2 /* Error */:
          let errorMessage = error.querySelector(
            Sa5Attribute.getBracketed("wfu-form-message" /* ATTR_FORM_MESSAGE */)
          );
          if (errorMessage)
            errorMessage.innerHTML = message;
          this.formElement.style.display = "none";
          success.style.display = "none";
          error.style.display = "block";
          break;
      }
    }
  };
  Sa5Core.startup(Sa5Form);

  // src/webflow-form/form-select.ts
  var Sa5FormSelectMode = /* @__PURE__ */ ((Sa5FormSelectMode2) => {
    Sa5FormSelectMode2["Default"] = "default";
    Sa5FormSelectMode2["Toggle"] = "toggle";
    return Sa5FormSelectMode2;
  })(Sa5FormSelectMode || {});
  var Sa5FormSelect = class {
    constructor(element) {
      this._mode = "default" /* Default */;
      this.valid = false;
      this._element = element;
    }
    get element() {
      return this._element;
    }
    init() {
      if (!this._element.classList.contains("w-select")) {
        console.error("sa5-core", "atteibute is not on a select element");
        this.valid = false;
        return;
      }
      const modeAttribute = this._element.getAttribute("wfu-form-select-mode" /* ATTR_FORM_SELECT_MODE */)?.toLowerCase();
      if (!modeAttribute) {
        this._mode = "default" /* Default */;
      } else if (Object.values(Sa5FormSelectMode).includes(modeAttribute)) {
        this._mode = modeAttribute;
      } else {
        this.valid = false;
        throw new Error("Invalid select mode");
      }
      this.valid = true;
      switch (this._mode) {
        case "toggle" /* Toggle */:
          this._element.addEventListener("mousedown", (event) => {
            event.preventDefault();
            const option = event.target;
            if (option.tagName === "OPTION") {
              option.selected = !option.selected;
            }
          });
          break;
        case "default" /* Default */:
        default:
          break;
      }
    }
  };
  Sa5Core.startup(Sa5FormSelect);

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
    handleResponseJSON(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(1 /* Success */);
      } else {
        this.form.setMode(2 /* Error */);
      }
    }
    handleResponseText(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(1 /* Success */);
      } else {
        this.form.setMode(2 /* Error */);
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      this.form.setMode(2 /* Error */);
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
      this.form.formElement.addEventListener("submit", async (e) => {
        e.preventDefault();
        this.debug.debug("Posting data.");
        this.debug.debug(`Webhook - ${this.form.formElement.getAttribute("action")}`);
        let formData = new FormData(this.form.formElement);
        fetch(this.form.formElement.action, {
          method: "POST",
          body: formData
        }).then((response) => {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json().then((data) => this.handleResponseJSON(data, "success", response));
          } else {
            return response.text().then((data) => this.handleResponseText(data, "success", response));
          }
        }).catch((error) => this.handleFailResponse(error, "error", error));
        return false;
      });
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
    handleResponseText(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(
          1 /* Success */,
          response.responseText?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          response.responseText?.message
        );
      }
    }
    handleResponseJSON(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(
          1 /* Success */,
          response.responseJSON?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          response.responseJSON?.message
        );
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      if (jqxhr.status == 400) {
        console.error(jqxhr.responseText);
        this.form.setMode(
          2 /* Error */,
          jqxhr.responseJSON?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          jqxhr.responseJSON?.message
        );
      }
    }
  };

  // src/webflow-form/handler/n8n-handler.ts
  var WfuFormHandlerN8N = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponseJSON(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      if (response.status >= 200 && response.status < 300) {
        this.form.setMode(
          1 /* Success */,
          response.responseJSON?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          response.responseJSON?.message
        );
      }
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      if (jqxhr.status == 400) {
        console.error(jqxhr.responseText);
        this.form.setMode(
          2 /* Error */,
          jqxhr.responseJSON?.message
        );
      } else {
        this.form.setMode(
          2 /* Error */,
          jqxhr.responseJSON?.message
        );
      }
    }
  };

  // src/webflow-form/handler/zapier-handler.ts
  var WfuFormHandlerZapier = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponseJSON(data, status, response) {
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

  // src/webflow-form/handler/success-handler.ts
  var WfuFormHandlerSuccess = class extends WfuFormHandler {
    constructor(form, config) {
      super(form, config);
    }
    handleResponseJSON(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      this.form.setMode(1 /* Success */);
    }
    handleResponseText(data, status, response) {
      this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
      this.debug.debug(`Webhook response status: ${status}`);
      this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);
      this.form.setMode(1 /* Success */);
    }
    handleFailResponse(jqxhr, settings, ex) {
      this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
      this.debug.debug(`Webhook response FAILED settings: ${settings}`);
      this.debug.debug(`Webhook response FAILED ex: ${ex}`);
      this.form.setMode(2 /* Error */);
    }
  };

  // src/webflow-form/handler/form-handler-factory.ts
  var WfuFormHandlerFactory = class {
    constructor(form, config = {}) {
    }
    static create(form, config = {}) {
      var handler;
      let type = form.formBlockElement.getAttribute(
        "wfu-form-handler" /* ATTR_FORM_HANDLER */
      );
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
        case "success":
          handler = new WfuFormHandlerSuccess(form, config);
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
    let core = Sa5Core.startup();
    let debug = new Sa5Debug("sa5-form");
    debug.debug(`Initializing v${VERSION}`);
    document.querySelectorAll("[wfu-form]").forEach((element) => {
      let form = new Sa5Form(element);
      form.init();
    });
    document.querySelectorAll(
      Sa5Attribute.getBracketed("wfu-form-ipinfo" /* ATTR_FORM_IPINFO */)
    ).forEach((element) => {
      Sa5FormIPInfo.createFromElement(element).init();
    });
    debug.debug("Checking for forms", Sa5Attribute.getBracketed("wfu-form-handler" /* ATTR_FORM_HANDLER */));
    const formsHandled = document.querySelectorAll(
      `div[wfu-form-handler]`
    );
    console.log(formsHandled);
    formsHandled.forEach((element) => {
      debug.debug("Form detected, installing form handler.");
      WfuFormHandlerFactory.createFromElement(element).init();
    });
    const formSelects = document.querySelectorAll(
      `select[${"wfu-form-select" /* ATTR_FORM_SELECT */}]`
    );
    console.log(formSelects);
    formSelects.forEach((element) => {
      const select = new Sa5FormSelect(element);
      select.init();
    });
  };
  if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
//# sourceMappingURL=webflow-form.js.map
