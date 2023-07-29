(() => {
  // src/webflow-html/nested-list.ts
  var Sa5NestedList = class {
    constructor(listElement, config = null) {
      this._element = listElement;
      this.config = config;
    }
    processNestedLists() {
      const content = this._element.innerHTML;
      const data = new DOMParser().parseFromString(content, "text/html").body.childNodes;
      const items = [];
      data.forEach((el, i) => {
        var _a;
        if (el.nodeName !== "LI")
          return;
        let item = {
          indent: 1,
          mode: "",
          text: ((_a = el.textContent) == null ? void 0 : _a.trim()) || ""
        };
        items.push(item);
        const limit = 10;
        for (let j = 1; j < limit; j += 1) {
          if (item.text.startsWith("&gt;")) {
            item.text = item.text.substring(4).trim();
            item.indent++;
          } else if (item.text.startsWith("+")) {
            item.text = item.text.substring(1).trim();
            item.mode = "pro";
          } else if (item.text.startsWith("-")) {
            item.text = item.text.substring(1).trim();
            item.mode = "con";
          } else {
            break;
          }
        }
      });
    }
  };
})();
//# sourceMappingURL=nested-list.js.map
