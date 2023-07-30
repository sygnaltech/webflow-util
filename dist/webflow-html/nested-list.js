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
      let listWrapper = document.createElement("div");
      listWrapper.setAttribute(
        "wfu-list-theme",
        this._element.getAttribute("wfu-list-theme") || "default"
      );
      listWrapper.appendChild(
        this.createNestedListFromArray(this._element.nodeName, items)
      );
      this._element.replaceWith(
        listWrapper
      );
    }
    createNestedListFromArray(listElementType = "UL", items) {
      let root = document.createElement(listElementType);
      root.setAttribute("role", "list");
      root.classList.add(`wfu-list-level-1`);
      let currentParent = root;
      let parents = [root];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const li = document.createElement("li");
        switch (item.mode) {
          case "pro":
            li.classList.add("wfu-pro");
            break;
          case "con":
            li.classList.add("wfu-con");
            break;
        }
        if (item.text) {
          let span = document.createElement("span");
          span.textContent = item.text;
          switch (item.mode) {
            case "pro":
              span.classList.add("wfu-pro");
              break;
            case "con":
              span.classList.add("wfu-con");
              break;
          }
          li.appendChild(span);
        }
        if (item.indent > parents.length) {
          for (let j = parents.length; j < item.indent; j++) {
            if (!parents[j - 1].lastChild) {
              const newLI = document.createElement("li");
              parents[j - 1].appendChild(newLI);
            }
            const newUL = document.createElement(listElementType);
            let newULparent = parents[j - 1].lastChild || parents[j - 1];
            newUL.classList.add(`wfu-list-level-${j + 1}`);
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
