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

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
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

  // src/webflow-core/slider.ts
  var WebflowSlider = class {
    constructor(element) {
      this.debug = new Sa5Debug("sa5-webflow-slider");
      this.debug.enabled = true;
      if (!element.classList.contains("w-slider")) {
        console.error("[wfu-slider] is not on a slider element");
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
        console.log(index, button);
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
    onSlideChanged() {
    }
  };
  Sa5Core.startup(WebflowSlider);
})();
//# sourceMappingURL=slider.js.map
