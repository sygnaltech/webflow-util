(() => {
  // src/webflow-components.ts
  var CoreComponent = class {
    constructor(scriptElement) {
      this.root = scriptElement.parentElement.parentElement;
    }
    init() {
      this.applyDynamicAttrs();
    }
    applyDynamicAttrs() {
      const allElements = this.root.querySelectorAll("*");
      for (const el of [this.root, ...allElements]) {
        for (const attr of Array.from(el.attributes)) {
          const name = attr.name;
          const val = attr.value;
          if (name.startsWith("x:") && name.endsWith(":bool-truthy")) {
            const actualAttr = name.slice(2, -12);
            if (this.isTruthy(val)) {
              el.setAttribute(actualAttr, "");
            } else {
              el.removeAttribute(actualAttr);
            }
          }
          if (name.startsWith("x:") && name.endsWith(":from")) {
            const targetAttr = name.slice(2, -5);
            const match = val.match(/^([+-])\[(.+)\]$/);
            if (!match)
              continue;
            const direction = match[1];
            const sourceAttr = match[2];
            let sibling = null;
            if (direction === "+")
              sibling = el.nextElementSibling;
            if (direction === "-")
              sibling = el.previousElementSibling;
            if (!sibling)
              continue;
            const sourceValue = sibling.getAttribute(sourceAttr);
            if (sourceValue !== null) {
              el.setAttribute(targetAttr, sourceValue);
            } else {
              el.removeAttribute(targetAttr);
            }
          }
        }
      }
    }
    cleanupDirectives() {
      const allElements = this.root.querySelectorAll("*");
      for (const el of [this.root, ...allElements]) {
        if (el.hasAttribute("cc-remove")) {
          el.remove();
          continue;
        }
        if (el.hasAttribute("cc-unwrap")) {
          const parent = el.parentElement;
          if (!parent)
            continue;
          while (el.firstChild) {
            parent.insertBefore(el.firstChild, el);
          }
          el.remove();
        }
      }
    }
    isTruthy(value) {
      if (!value)
        return false;
      const v = value.trim().toLowerCase();
      return !["", "0", "no", "off", "false"].includes(v);
    }
  };
  window.CC = CoreComponent;
})();
//# sourceMappingURL=webflow-components.js.map
