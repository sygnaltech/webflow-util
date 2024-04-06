(() => {
  // src/webflow-finsweet/fs-load.ts
  window.fsAttributes = window.fsAttributes || [];
  var Sa5FinsweetLoad = class {
    constructor(config = {}) {
      this.config = config;
    }
    sortRandom() {
      if (!window.listInstance) {
        console.log("listInstance is not defined.");
        return;
      }
      const { items } = window.listInstance;
      console.log("items", items);
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffleArray(items);
      window.listInstance.renderItems();
    }
    init() {
      window.fsAttributes.push([
        "cmsload",
        (listInstances) => {
          console.log("cmsload Successfully loaded!");
          const [listInstance] = listInstances;
          window.listInstance = listInstance;
          this.sortRandom();
          listInstance.on("renderitems", (renderedItems) => {
            console.log("renderedItems", renderedItems);
          });
        }
      ]);
      document.addEventListener("DOMContentLoaded", () => {
        const sortButton = document.getElementById("sort");
        sortButton?.addEventListener("click", this.sortRandom);
      });
    }
  };

  // src/webflow-finsweet.ts
  var Sa5Finsweet = class {
    constructor() {
      this.fsLoad = new Sa5FinsweetLoad();
    }
    init() {
      this.fsLoad.init();
    }
  };
})();
//# sourceMappingURL=webflow-finsweet.js.map
