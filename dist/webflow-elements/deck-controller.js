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
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN"] = "wfu-dropdown";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_NAME"] = "wfu-dropdown-name";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_INIT"] = "wfu-dropdown-init";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_TYPE"] = "wfu-dropdown-type";
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
    Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
    Sa5Attribute2["ATTR_FORM_HANDLER"] = "wfu-form-handler";
    Sa5Attribute2["ATTR_FORM_MESSAGE"] = "wfu-form-message";
    Sa5Attribute2["ATTR_FORM_IPINFO"] = "wfu-form-ipinfo";
    Sa5Attribute2["ATTR_MODAL"] = "wfu-modal";
    Sa5Attribute2["ATTR_MODAL_TRIGGER"] = "wfu-modal-trigger";
    Sa5Attribute2["ATTR_MODAL_CLOSE"] = "wfu-modal-close";
    Sa5Attribute2["ATTR_MODAL_CLOSE_TYPE"] = "wfu-modal-close-type";
    Sa5Attribute2["ATTR_MODAL_SUPPRESS_DAYS"] = "wfu-modal-suppress-days";
    Sa5Attribute2["ATTR_FORMAT"] = "wfu-format";
    Sa5Attribute2["ATTR_FORMAT_DATE"] = "wfu-format-date";
    Sa5Attribute2["ATTR_FORMAT_HANDLER"] = "wfu-format-handler";
    Sa5Attribute2["ATTR_FORMAT_MODE"] = "wfu-format-mode";
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
    Sa5Attribute2["ATTR_LAYOUT_ZONE"] = "wfu-layout-zone";
    return Sa5Attribute2;
  })(Sa5Attribute || {});

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

  // src/webflow-elements/slider.ts
  var WebflowSlider = class {
    constructor(element) {
      this.debug = new Sa5Debug("sa5-webflow-slider");
      this.debug.enabled = true;
      if (!element.classList.contains("w-slider")) {
        console.error(`[${"wfu-slider" /* ATTR_ELEMENT_SLIDER */}] is not on a slider element`);
        return;
      }
      this._element = element;
      this.init();
    }
    get element() {
      return this._element;
    }
    get elementSliderMask() {
      return this._elementSliderMask;
    }
    get elementSliderNav() {
      return this._elementSliderNav;
    }
    get name() {
      return this._element.getAttribute("wfu-slider" /* ATTR_ELEMENT_SLIDER */);
    }
    get currentNum() {
      return this.currentIndex + 1;
    }
    set currentNum(num) {
      this.currentIndex = num - 1;
    }
    get currentIndex() {
      let currentIndex = null;
      currentIndex = Array.from(this._elementSliderNav.children).findIndex(
        (child) => child.classList.contains("w-active")
      );
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
      this.debug.debug("setting slide", index);
      let button = this.elementSliderNav.children[index];
      setTimeout(() => {
        button.dispatchEvent(clickEvent);
      }, 0);
    }
    get count() {
      return this._elementSliderNav.children.length;
    }
    getSlideIndex(slide) {
      let index = Array.from(this._elementSliderMask.children).indexOf(slide);
      if (index == -1) {
        index = Array.from(this._elementSliderNav.children).indexOf(slide);
      }
      if (index == -1)
        return null;
      return index;
    }
    init() {
      this._elementSliderMask = this._element.querySelector(".w-slider-mask");
      this._elementSliderNav = this._element.querySelector(".w-slider-nav");
      this._observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "attributes" && mutation.attributeName === "class") {
            const target = mutation.target;
            if (target.classList.contains("w-active")) {
              this.onSlideChanged(this.currentIndex);
            }
          }
        }
      });
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      this._observer.observe(this._elementSliderNav, config);
    }
    elementSlide(index) {
      if (index < 0)
        return;
      if (index >= this.count)
        return;
      let filteredChildren = Array.from(this._elementSliderMask.children).filter(
        (child) => child.classList.contains("w-slide")
      );
      let targetChild = filteredChildren[index];
      return targetChild;
    }
    goTo(index) {
      this.debug.debug(index);
      this.currentIndex = index;
    }
    goToName(name) {
      let index = Array.from(this._elementSliderMask.children).findIndex(
        (child) => child.getAttribute("wfu-slide-name" /* ATTR_ELEMENT_SLIDE_NAME */) == name
      );
      if (index == -1) {
        console.error(`No slide found with name: ${name}`);
        return;
      }
      this.goTo(index);
    }
    goToNext() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newSlideIndex = this.currentIndex + 1;
      if (newSlideIndex >= this.count)
        newSlideIndex = 0;
      this.goTo(newSlideIndex);
    }
    goToPrev() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newSlideIndex = this.currentIndex - 1;
      if (newSlideIndex < 0)
        newSlideIndex = this.count - 1;
      this.goTo(newSlideIndex);
    }
    goToFirst() {
      this.goTo(0);
    }
    goToLast() {
      var newSlideIndex = this.count - 1;
      this.goTo(newSlideIndex);
    }
    isSlideChangedCallback(func) {
      if (!func)
        return false;
      return func.length === 1;
    }
    onSlideChanged(index) {
      let core = Sa5Core.startup();
      core.getHandlers("slideChanged" /* EVENT_SLIDE_CHANGED */).forEach((func) => {
        func(this, index);
      });
    }
  };
  Sa5Core.startup(WebflowSlider);

  // src/webflow-elements/tabs.ts
  var WebflowTabs = class {
    constructor(element) {
      this.debug = new Sa5Debug("sa5-webflow-tabs");
      this.debug.enabled = true;
      if (!element.classList.contains("w-tabs")) {
        console.error(
          `[${"wfu-tabs" /* ATTR_ELEMENT_TABS */}] is not on a tabs element`
        );
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
    get name() {
      return this._element.getAttribute("wfu-tabs" /* ATTR_ELEMENT_TABS */);
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
      this._observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "attributes" && mutation.attributeName === "class") {
            const target = mutation.target;
            if (target.classList.contains("w--current")) {
              this.onTabChanged(this.currentIndex);
            }
          }
        }
      });
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      this._observer.observe(this._elementTabMenu, config);
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
    goTo(index) {
      this.debug.debug("goTo", index);
      this.currentIndex = index;
    }
    goToName(name) {
      this.debug.debug("goToName", name);
      let index = Array.from(this._elementTabMenu.children).findIndex(
        (child) => child.getAttribute("wfu-tab-name" /* ATTR_ELEMENT_TAB_NAME */) == name
      );
      if (index == -1) {
        console.error(`No tab found with name: ${name}`);
        return;
      }
      this.goTo(index);
    }
    goToNext() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newTabIndex = this.currentIndex + 1;
      if (newTabIndex >= this.count)
        newTabIndex = 0;
      this.goTo(newTabIndex);
    }
    goToPrev() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newTabIndex = this.currentIndex - 1;
      if (newTabIndex < 0)
        newTabIndex = this.count - 1;
      this.goTo(newTabIndex);
    }
    goToFirst() {
      this.goTo(0);
    }
    goToLast() {
      var newTabIndex = this.count - 1;
      this.goTo(newTabIndex);
    }
    isTabChangedCallback(func) {
      if (!func)
        return false;
      return func.length === 1;
    }
    onTabChanged(index) {
      let core = Sa5Core.startup();
      core.getHandlers("tabChanged" /* EVENT_TAB_CHANGED */).forEach((func) => {
        func(this, index);
      });
    }
  };
  Sa5Core.startup(WebflowTabs);

  // src/webflow-elements/deck-controller.ts
  var Action = /* @__PURE__ */ ((Action2) => {
    Action2["First"] = "first";
    Action2["Prev"] = "prev";
    Action2["Next"] = "next";
    Action2["Last"] = "last";
    Action2["GoTo"] = "goto";
    return Action2;
  })(Action || {});
  var Sa5DeckController = class {
    constructor(element) {
      this.element = element;
      const actionValue = this.element.getAttribute("wfu-deck-action" /* ATTR_ELEMENT_DECK_ACTION */);
      if (actionValue) {
        this.action = Sa5DeckController.getActionEnum(actionValue);
        if (!this.action) {
          console.error(`Invalid wfu-deck-action value: ${actionValue}`);
        }
      }
      const targetName = element.getAttribute("wfu-deck-target" /* ATTR_ELEMENT_DECK_TARGET */);
      if (targetName) {
        this.deckName = targetName;
        const tabsElements = document.querySelectorAll(`[wfu-tabs="${targetName}"]`);
        const sliderElements = document.querySelectorAll(`[wfu-slider="${targetName}"]`);
        if (tabsElements.length + sliderElements.length > 1) {
          console.error(`Multiple elements or conflicting elements found with the target name: ${targetName}`);
        }
        if (tabsElements.length + sliderElements.length == 0) {
          console.error(`No elements found with the target name: ${targetName}`);
        }
        if (tabsElements.length === 1) {
          this.tabsElement = tabsElements[0];
          this.deck = new WebflowTabs(this.tabsElement);
        } else if (sliderElements.length === 1) {
          this.sliderElement = sliderElements[0];
          this.deck = new WebflowSlider(this.sliderElement);
        }
      } else {
        const tabsParent = this.element.closest(`[${"wfu-tabs" /* ATTR_ELEMENT_TABS */}]`);
        const sliderParent = this.element.closest(`[${"wfu-slider" /* ATTR_ELEMENT_SLIDER */}]`);
        if (tabsParent) {
          this.tabsElement = tabsParent;
          this.deck = new WebflowTabs(this.tabsElement);
        } else if (sliderParent) {
          this.sliderElement = sliderParent;
          this.deck = new WebflowSlider(this.sliderElement);
        } else {
          console.error(`No valid target element found for the wfu-deck-action element`);
        }
      }
      this.item = this.element.getAttribute("wfu-deck-action-item" /* ATTR_ELEMENT_DECK_ITEM */);
    }
    init() {
      this.element.addEventListener("click", (event) => {
        event.preventDefault();
        switch (this.action) {
          case "first" /* First */:
            this.deck.goToFirst();
            break;
          case "prev" /* Prev */:
            this.deck.goToPrev();
            break;
          case "next" /* Next */:
            this.deck.goToNext();
            break;
          case "last" /* Last */:
            this.deck.goToLast();
            break;
          case "goto" /* GoTo */:
            if (typeof this.item === "string" && !isNaN(Number(this.item))) {
              this.deck.goTo(Number(this.item) - 1);
            } else if (typeof this.item === "number") {
              this.deck.goTo(this.item - 1);
            } else {
              this.deck.goToName(this.item);
            }
            break;
          default:
            console.error(`Invalid wfu-deck-action value: ${this.action}`);
            break;
        }
      });
    }
    static getActionEnum(actionValue) {
      const lowerCaseValue = actionValue.toLowerCase();
      if (Object.keys(Action).some((key) => Action[key] === lowerCaseValue)) {
        return lowerCaseValue;
      } else {
        console.error(`Invalid wfu-deck-action value: ${actionValue}`);
        return null;
      }
    }
  };
  Sa5Core.startup(Sa5DeckController);
})();
//# sourceMappingURL=deck-controller.js.map
