(() => {
  // src/webflow-html/nested-list.ts
  var Sa5NestedList = class {
    constructor(listElement, config = null) {
      this._element = listElement;
      this.config = config;
    }
    processNestedList() {
      const content = this._element.innerHTML;
      const data = new DOMParser().parseFromString(content, "text/html").body.childNodes;
      let items = [];
      data.forEach((el, i) => {
        var _a;
        if (el.nodeName !== "LI")
          return;
        let item = {
          indent: 1,
          mode: "",
          text: ((_a = el.textContent) == null ? void 0 : _a.trim()) || ""
        };
        const LIST_DEPTH_LIMIT = 10;
        for (let j = 1; j < LIST_DEPTH_LIMIT; j++) {
          if (item.text.startsWith(">")) {
            item.text = item.text.substring(1).trim();
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
        items.push(item);
      });
      this._element.replaceWith(
        this.createList(this._element.nodeName, items)
      );
    }
    createList(listElementType = "UL", items) {
      let root = document.createElement(listElementType);
      root.setAttribute("role", "list");
      let currentParent = root;
      let parents = [root];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const li = document.createElement("li");
        li.textContent = item.text;
        if (item.mode == "pro")
          li.classList.add("wfu-pro");
        if (item.mode == "con")
          li.classList.add("wfu-con");
        if (item.indent > parents.length) {
          for (let j = parents.length; j < item.indent; j++) {
            const newUL = document.createElement(listElementType);
            let newULparent = parents[j - 1].lastChild || parents[j - 1];
            newULparent.appendChild(newUL);
            parents.push(newUL);
          }
        } else if (item.indent < parents.length) {
          parents = parents.slice(0, item.indent);
        }
        parents[parents.length - 1].appendChild(li);
      }
      return root;
    }
  };
})();
//# sourceMappingURL=nested-list.js.map
