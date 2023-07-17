(() => {
  // src/webflow-core/tabs.ts
  var WebflowTabs = class {
    constructor(element) {
      this.init(element);
    }
    init(element) {
      this.element = element;
      console.log("init.");
      this.elementTabMenu = element.querySelector(".w-tab-menu");
      this.elementTabContent = element.querySelector(".w-tab-content");
      console.log("count", this.tabCount());
      console.log("index", this.currentTabIndex());
    }
    setTab(index) {
      if (index < 0)
        return;
      if (index >= this.tabCount())
        return;
      let clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      });
      this.getTab(index).dispatchEvent(clickEvent);
    }
    getTab(index) {
      if (index < 0)
        return;
      if (index >= this.tabCount())
        return;
      return this.elementTabMenu.children[index];
    }
    tabCount() {
      return this.elementTabMenu.children.length;
    }
    currentTabIndex() {
      let currentIndex = null;
      for (let i = 0; i < this.elementTabMenu.children.length; i++) {
        if (this.elementTabMenu.children[i].classList.contains("w--current")) {
          currentIndex = i;
          break;
        }
      }
      return currentIndex;
    }
    onClick() {
    }
    currentTab() {
    }
    nextTab() {
      var newTab = this.currentTabIndex() + 1;
      if (newTab >= this.tabCount())
        newTab = 0;
      console.log(newTab);
      this.setTab(newTab);
    }
    prevTab() {
      var newTab = this.currentTabIndex() - 1;
      if (newTab < 0)
        newTab = this.tabCount() - 1;
      console.log(newTab);
      this.setTab(newTab);
    }
    firstTab() {
      this.setTab(0);
    }
    lastTab() {
      var newTab = this.tabCount() - 1;
      this.setTab(newTab);
    }
  };
  window["WebflowTabs"] = WebflowTabs;
})();
//# sourceMappingURL=tabs.js.map
