(() => {
  // src/webflow-html/collection-list.ts
  var Sa5CollectionList = class {
    constructor(elem, config = null) {
      this.config = config;
      this._element = elem;
    }
    init() {
    }
    sort() {
      console.group("SORT");
      const list = this._element;
      const mode = list.getAttribute("wfu-sort") || "default";
      const dir = list.getAttribute("wfu-sort-dir") || "asc";
      const sortType = list.getAttribute("wfu-sort-type") || "string";
      const items = Array.from(list.children);
      console.debug(`WFU sorting ${mode} ${sortType} ${dir} (${items.length} children)`);
      console.debug({
        name: "WFU sorting",
        mode,
        sortType,
        dir,
        children: `${items.length} children`
      });
      if (dir == "random") {
        items.sort(() => Math.random() - 0.5);
      } else {
        items.sort((a, b) => {
          var _a, _b;
          const key1 = a.getAttribute("wfu-sort-key") || ((_a = a.querySelector("[wfu-sort-key]")) == null ? void 0 : _a.getAttribute("wfu-sort-key")) || "";
          const key2 = b.getAttribute("wfu-sort-key") || ((_b = b.querySelector("[wfu-sort-key]")) == null ? void 0 : _b.getAttribute("wfu-sort-key")) || "";
          let sortResult = 1;
          switch (sortType) {
            case "date":
              sortResult = new Date(key1) < new Date(key2) ? -1 : 1;
              console.debug(`comparing dates ${key1} ${key2} = ${sortResult}`);
              break;
            case "number":
              sortResult = Number(key1) < Number(key2) ? -1 : 1;
              console.debug(`comparing numbers ${key1} ${key2} = ${sortResult}`);
              break;
            case "semver":
              break;
            case "string":
            default:
              sortResult = key1.localeCompare(key2);
              console.debug(`comparing strings ${key1} ${key2} = ${sortResult}`);
              break;
          }
          if (dir != "asc") {
            sortResult = sortResult * -1;
          }
          return sortResult;
        });
      }
      while (list.firstChild) {
        list.firstChild.remove();
      }
      items.forEach((item) => list.appendChild(item));
      list.removeAttribute("wfu-sort");
      console.groupEnd();
    }
  };
})();
//# sourceMappingURL=collection-list.js.map
