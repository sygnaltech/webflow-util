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
    Sa5Attribute2["ATTR_VIDEO_DATA_POSTER_URL"] = "wfu-data-poster-url";
    Sa5Attribute2["ATTR_DESIGN"] = "wfu-design";
    Sa5Attribute2["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
    Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
    Sa5Attribute2["ATTR_ELEMENT_BUTTON"] = "wfu-button";
    Sa5Attribute2["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
    Sa5Attribute2["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
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

  // src/webflow-elements/lightbox.ts
  var Sa5Lightbox = class {
    constructor(element, config = {}) {
      this._element = element;
    }
    init() {
      this.setCaptionToImageAlt();
    }
    setCaptionToImageAlt() {
      let imgElement = this._element.querySelector("img");
      let scriptElement = this._element.querySelector("script");
      if (imgElement && scriptElement) {
        const imageAltText = imgElement.getAttribute("alt");
        const imageJSON = JSON.parse(scriptElement.innerHTML);
        imageJSON.items[0].caption = imageAltText;
        scriptElement.innerHTML = JSON.stringify(imageJSON);
        imgElement.setAttribute("ref-key", imageJSON.items[0].url);
      }
    }
  };

  // src/utils.ts
  function booleanValue(val) {
    switch (val.toLowerCase()) {
      case "false":
      case "f":
      case "0":
      case "no":
      case "off":
      case void 0:
      case "undefined":
      case null:
      case "null":
        return false;
      default:
        return true;
    }
  }

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

  // src/webflow-elements/button.ts
  var Sa5Button = class {
    get enabled() {
      return booleanValue(
        this.element.getAttribute("wfu-button-enabled" /* ATTR_BUTTON_ENABLED */)
      );
    }
    set enabled(enabled) {
      this.element.setAttribute(
        "wfu-button-enabled" /* ATTR_BUTTON_ENABLED */,
        enabled ? "true" : "false"
      );
      this.applyEnabledState();
    }
    applyEnabledState() {
      if (this.element.hasAttribute("wfu-button-disabled-class" /* ATTR_BUTTON_DISABLED_CLASS */)) {
        let disabledClass = this.element.getAttribute("wfu-button-disabled-class" /* ATTR_BUTTON_DISABLED_CLASS */);
        if (this.enabled) {
          this.element.classList.remove(disabledClass);
        } else {
          this.element.classList.add(disabledClass);
        }
      }
    }
    constructor(element) {
      this.element = element;
      this.name = element.getAttribute("wfu-button" /* ATTR_ELEMENT_BUTTON */);
    }
    init() {
      this.applyEnabledState();
      this.element.addEventListener("click", (event) => {
        if (!this.enabled)
          event.preventDefault();
      });
      this.element.removeAttribute("wfu-preload" /* ATTR_PRELOAD */);
    }
    static create(name) {
      const elem = document.querySelector(`[${"wfu-button" /* ATTR_ELEMENT_BUTTON */}='${name}']`);
      if (elem) {
        const button = new Sa5Button(elem);
        return button;
      }
      return null;
    }
  };
  Sa5Core.startup(Sa5Button);

  // src/webflow-lightbox/caption-handler.ts
  var Sa5LightboxCaptionHandler = class {
    constructor() {
      this.lightBoxStateCallback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === "attributes" && mutation.target instanceof HTMLElement) {
            if (mutation.target.classList.contains("w-lightbox-noscroll")) {
              console.debug("Lightbox opened.");
              this.installLightBoxNavObserver();
            } else {
              console.debug("Lightbox closed.");
              this.uninstallLightBoxNavObserver();
            }
          }
        }
      };
      this.lightBoxNavCallback = (mutationList, observer) => {
        for (let mutation of mutationList) {
          if (mutation.target instanceof HTMLElement) {
            if (mutation.target.classList.contains("w-lightbox-content")) {
              this.setupCaption();
            }
          }
        }
      };
    }
    init() {
      let observer = new MutationObserver(this.lightBoxStateCallback);
      observer.observe(document.getElementsByTagName("html")[0], {
        childList: false,
        subtree: false,
        characterDataOldValue: false,
        attributes: true,
        attributeFilter: ["class"]
      });
    }
    installLightBoxNavObserver() {
      this.setupCaption();
      let lightboxContainer = document.querySelector(".w-lightbox-container");
      if (lightboxContainer) {
        let lightboxNavObserver = new MutationObserver(this.lightBoxNavCallback);
        const config = { childList: true, subtree: true };
        lightboxNavObserver.observe(lightboxContainer, config);
      }
    }
    uninstallLightBoxNavObserver() {
      if (this.lightboxNavObserver)
        this.lightboxNavObserver.disconnect();
    }
    setupCaption() {
      let figure = document.querySelector("figure.w-lightbox-figure");
      if (figure) {
        let img = figure.querySelector("img");
        let captionElement = figure.querySelector("figcaption");
        if (img) {
          let key = img.getAttribute("src");
          let thumb = document.querySelector(`img[ref-key='${key}']`);
          if (captionElement) {
            captionElement.remove();
          }
          if (thumb) {
            let caption = thumb.getAttribute("alt");
            if (caption) {
              let newCaption = document.createElement("figcaption");
              newCaption.textContent = caption;
              newCaption.classList.add("w-lightbox-caption");
              figure.appendChild(newCaption);
            }
          }
        }
      }
    }
  };

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
    goToIndex(index) {
      this.debug.debug(index);
      this.currentIndex = index;
    }
    goToNext() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newSlideIndex = this.currentIndex + 1;
      if (newSlideIndex >= this.count)
        newSlideIndex = 0;
      this.goToIndex(newSlideIndex);
    }
    goToPrev() {
      if (this.currentIndex == null) {
        this.currentIndex = 0;
        return;
      }
      var newSlideIndex = this.currentIndex - 1;
      if (newSlideIndex < 0)
        newSlideIndex = this.count - 1;
      this.goToIndex(newSlideIndex);
    }
    goToFirst() {
      this.goToIndex(0);
    }
    goToLast() {
      var newSlideIndex = this.count - 1;
      this.goToIndex(newSlideIndex);
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

  // src/nocode/webflow-elements.ts
  var init = () => {
    let tabElements = document.querySelectorAll(`[${"wfu-tabs" /* ATTR_ELEMENT_TABS */}]`);
    tabElements.forEach((element) => {
      var tabObj = new WebflowTabs(element);
    });
    let sliderElements = document.querySelectorAll(`[${"wfu-slider" /* ATTR_ELEMENT_SLIDER */}]`);
    sliderElements.forEach((element) => {
      var sliderObj = new WebflowSlider(element);
    });
    const buttons = document.querySelectorAll(`[${"wfu-button" /* ATTR_ELEMENT_BUTTON */}]`);
    buttons.forEach((element) => {
      new Sa5Button(element).init();
    });
    let useLightboxCaptionHandler = false;
    const elements = document.querySelectorAll("[wfu-lightbox-captions]");
    useLightboxCaptionHandler = elements.length > 0;
    elements.forEach((element) => {
      const wfuLightbox = new Sa5Lightbox(element).init();
    });
    if (useLightboxCaptionHandler) {
      new Sa5LightboxCaptionHandler().init();
    }
    let lightBoxCmsGroups = false;
    const groups = document.querySelectorAll("[wfu-lightbox-group]");
    lightBoxCmsGroups = groups.length > 0;
    groups.forEach((element) => {
      let groupValue = element.getAttribute("wfu-lightbox-group");
      let scripts = element.querySelectorAll("script.w-json");
      scripts.forEach((script) => {
        let json = JSON.parse(script.textContent);
        json.group = groupValue;
        script.textContent = JSON.stringify(json, null, 2);
      });
    });
    if (lightBoxCmsGroups) {
      var Webflow = Webflow || [];
      Webflow.push(function() {
        Webflow.require("lightbox").ready();
      });
    }
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-elements.js.map
