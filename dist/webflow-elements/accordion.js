(() => {
  // src/webflow-elements/accordion.ts
  var WebflowAccordion = class {
    get element() {
      return this._element;
    }
    get elementTabMenu() {
      return this._elementTabMenu;
    }
    get elementTabContent() {
      return this._elementTabContent;
    }
    get tabIndex() {
      let currentIndex = null;
      for (let i = 0; i < this._elementTabMenu.children.length; i++) {
        if (this._elementTabMenu.children[i].classList.contains("w--current")) {
          currentIndex = i;
          break;
        }
      }
      return currentIndex;
    }
    set tabIndex(index) {
      if (index < 0)
        return;
      if (index >= this.tabCount)
        return;
      let clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      this.elementTab(index).dispatchEvent(clickEvent);
    }
    get tabCount() {
      return this._elementTabMenu.children.length;
    }
    constructor(element) {
      this.init(element);
    }
    init(element) {
      const accordionBtns = document.querySelectorAll("[wfu-ui-accordion=header]");
      accordionBtns.forEach((accordion) => {
        accordion.onclick = function() {
          accordion.classList.toggle("is-open");
          let content = accordion.nextElementSibling;
          console.log(content);
          if (content.style.maxHeight) {
            content.style.maxHeight = "auto";
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.style.maxHeight);
          }
        };
      });
    }
    init2(element) {
      if (!element.classList.contains("w-tabs")) {
        console.error("[wfu-tabs] is not on a tabs element");
        return;
      }
      console.log("init.");
      this._element = element;
      this._elementTabMenu = element.querySelector(".w-tab-menu");
      this._elementTabContent = element.querySelector(".w-tab-content");
      console.log("count", this.tabCount);
      console.log("index", this.tabIndex);
    }
    elementTab(index) {
      if (index < 0)
        return;
      if (index >= this.tabCount)
        return;
      return this._elementTabMenu.children[index];
    }
    goToTabIndex(index) {
      console.log(index);
      this.tabIndex = index;
    }
    goToNextTab() {
      if (this.tabIndex == null) {
        this.tabIndex = 0;
        return;
      }
      var newTabIndex = this.tabIndex + 1;
      if (newTabIndex >= this.tabCount)
        newTabIndex = 0;
      this.goToTabIndex(newTabIndex);
    }
    goToPrevTab() {
      if (this.tabIndex == null) {
        this.tabIndex = 0;
        return;
      }
      var newTabIndex = this.tabIndex - 1;
      if (newTabIndex < 0)
        newTabIndex = this.tabCount - 1;
      this.goToTabIndex(newTabIndex);
    }
    goToFirstTab() {
      this.goToTabIndex(0);
    }
    goToLastTab() {
      var newTabIndex = this.tabCount - 1;
      this.goToTabIndex(newTabIndex);
    }
    onTabChanged() {
    }
  };
})();
//# sourceMappingURL=accordion.js.map
