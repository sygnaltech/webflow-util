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

  // src/globals.ts
  var Sa5Attribute;
  ((Sa5Attribute2) => {
    function getBracketed(attr) {
      return `[${attr}]`;
    }
    Sa5Attribute2.getBracketed = getBracketed;
  })(Sa5Attribute || (Sa5Attribute = {}));
  var Sa5Attribute = /* @__PURE__ */ ((Sa5Attribute2) => {
    Sa5Attribute2["ATTR_DESIGN"] = "wfu-design";
    Sa5Attribute2["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
    Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
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
    Sa5Attribute2["ATTR_FILTER"] = "wfu-filter";
    Sa5Attribute2["ATTR_FILTER_MATCH"] = "wfu-filter-match";
    Sa5Attribute2["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
    Sa5Attribute2["ATTR_FILTER_FUNC"] = "wfu-filter-func";
    return Sa5Attribute2;
  })(Sa5Attribute || {});

  // src/webflow-core/designer.ts
  var Sa5Designer = class {
    constructor() {
    }
    init() {
      this.removeDesignTimeElements();
    }
    removeDesignTimeElements() {
      console.log("designer clean");
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

  // src/webflow-core/tabs.ts
  var WebflowTabs = class {
    constructor(element) {
      this.debug = new Sa5Debug("sa5-webflow-tabs");
      this.debug.enabled = true;
      if (!element.classList.contains("w-tabs")) {
        console.error("[wfu-tabs] is not on a tabs element");
        return;
      }
      this._element = element;
      this.init();
    }
    get element() {
      return this._element;
    }
    get elementTabMenu() {
      return this._elementTabMenu;
    }
    get elementTabContent() {
      return this._elementTabContent;
    }
    get currentNum() {
      return this.currentIndex + 1;
    }
    set currentNum(num) {
      this.currentIndex = num - 1;
    }
    get currentIndex() {
      let currentIndex = null;
      for (let i = 0; i < this._elementTabMenu.children.length; i++) {
        if (this._elementTabMenu.children[i].classList.contains("w--current")) {
          currentIndex = i;
          break;
        }
      }
      return currentIndex;
    }
    set currentIndex(index) {
      if (index < 0)
        return;
      if (index >= this.count)
        return;
      let clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      this.debug.debug("setting tab", index);
      setTimeout(() => {
        this.elementTab(index).dispatchEvent(clickEvent);
      }, 0);
    }
    get count() {
      return this._elementTabMenu.children.length;
    }
    goToTabNone() {
      this.goToTabIndexForced(null);
    }
    goToTabIndexForced(index) {
      Array.from(this._elementTabMenu.querySelectorAll(".w-tab-link")).forEach(
        (elem) => {
          elem.classList.remove("w--current");
          elem.removeAttribute("tabindex");
          elem.setAttribute("aria-selected", "true");
        }
      );
      Array.from(this._elementTabContent.querySelectorAll(".w-tab-pane")).forEach(
        (elem) => {
          elem.classList.remove("w--tab-active");
        }
      );
      if (index) {
        console.log("setting forced index", index);
        Array.from(this._elementTabMenu.querySelectorAll(`.w-tab-link:nth-child(${index + 1})`)).forEach(
          (elem) => {
            elem.classList.add("w--current");
          }
        );
        Array.from(this._elementTabContent.querySelectorAll(`.w-tab-pane:nth-child(${index + 1})`)).forEach(
          (elem) => {
            elem.classList.add("w--tab-active");
            elem.style.cssText = "style=opacity: 1; transition: opacity 300ms ease 0s;";
          }
        );
      }
    }
    getTabIndex(tab) {
      let index = Array.from(this._elementTabMenu.children).indexOf(tab);
      if (index == -1) {
        index = Array.from(this._elementTabContent.children).indexOf(tab);
      }
      if (index == -1)
        return null;
      return index;
    }
    init() {
      this._elementTabMenu = this._element.querySelector(".w-tab-menu");
      this._elementTabContent = this._element.querySelector(".w-tab-content");
      for (let elem of this._elementTabMenu.children) {
        if (elem.hasAttribute("wfu-tab-default")) {
          this.debug.debug("default");
          let defaultTabIndex = this.getTabIndex(elem);
          this.debug.debug(defaultTabIndex);
          if (defaultTabIndex != null)
            this.currentIndex = defaultTabIndex;
        }
      }
      ;
    }
    elementTab(index) {
      if (index < 0)
        return;
      if (index >= this.count)
        return;
      return this._elementTabMenu.children[index];
    }
    goToIndex(index) {
      this.debug.debug(index);
      this.currentIndex = index;
    }
    goToNext() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newTabIndex = this.currentIndex + 1;
      if (newTabIndex >= this.count)
        newTabIndex = 0;
      this.goToIndex(newTabIndex);
    }
    goToPrev() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newTabIndex = this.currentIndex - 1;
      if (newTabIndex < 0)
        newTabIndex = this.count - 1;
      this.goToIndex(newTabIndex);
    }
    goToFirst() {
      this.goToIndex(0);
    }
    goToLast() {
      var newTabIndex = this.count - 1;
      this.goToIndex(newTabIndex);
    }
    onTabChanged() {
    }
  };
  Sa5Core.startup(WebflowTabs);
})();
//# sourceMappingURL=tabs.js.map
