(() => {
  // src/storage-utils.ts
  var StorageUtils = class {
    static get localStorageAvailable() {
      try {
        const test = "__test__";
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
    static get sessionStorageAvailable() {
      try {
        const test = "__test__";
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
      } catch {
        return false;
      }
    }
    static get cookiesAvailable() {
      try {
        const test = "__test__=1";
        document.cookie = test + "; path=/";
        const cookies = document.cookie;
        const available = cookies.includes("__test__=1");
        document.cookie = "__test__=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        return available;
      } catch {
        return false;
      }
    }
  };

  // src/webflow-core/debug.ts
  var Sa5Debug = class {
    constructor(label) {
      this.localStorageDebugFlag = "sa5-debug";
      this._enabled = false;
      this._label = label;
    }
    get persistentDebug() {
      return StorageUtils.localStorageAvailable ? Boolean(localStorage.getItem(this.localStorageDebugFlag)) : false;
    }
    set persistentDebug(active) {
      if (!StorageUtils.localStorageAvailable)
        return;
      if (active) {
        localStorage.setItem(this.localStorageDebugFlag, "true");
        console.debug(`sa5-core debug enabled (persistent).`);
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug(`sa5-core debug disabled (persistent).`);
      }
    }
    get enabled() {
      if (!StorageUtils.localStorageAvailable)
        return false;
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
    debug2(...args) {
      if (this.enabled)
        console.debug.apply(console, [this._label, ...args]);
    }
    debug(...args) {
      if (this.enabled) {
        let formattedMessage = "";
        let styles = [];
        for (let i = 0; i < args.length; i++) {
          if (typeof args[i] === "string" && args[i].includes("%c") && typeof args[i + 1] === "string") {
            formattedMessage += args[i] + " ";
            styles.push(args[i + 1]);
            i++;
          } else {
            formattedMessage += "%c" + args[i] + " ";
            styles.push("");
          }
        }
        console.debug(formattedMessage.trim(), ...styles);
      }
    }
    static getStyleString(elem) {
      let styleString = "";
      for (let i = 0; i < elem.style.length; i++) {
        const property = elem.style[i];
        const value = elem.style.getPropertyValue(property);
        styleString += `${property}: ${value}; `;
      }
      return styleString;
    }
  };

  // src/webflow-gallery/engine/simple-collage.ts
  var Sa5GalleryEngineSimpleCollage = class {
    constructor(gallery, config = {}) {
      this.gallery = gallery;
      this.debug = new Sa5Debug("sa5-gallery-engine-simple-collage");
      this.debug.debug("Initializing");
    }
    layout() {
      const layoutElement = this.gallery.elem;
      const children = Array.from(layoutElement.children);
      const totalColumns = 12;
      const getRandomSpan = (remainingColumns, previousRowSpans2) => {
        const possibleSpans = [4, 6, 8];
        const validSpans = possibleSpans.filter((span) => span <= remainingColumns && !previousRowSpans2.includes(span));
        return validSpans[Math.floor(Math.random() * validSpans.length)];
      };
      let currentRowColumns = 0;
      let previousRowSpans = [];
      let currentRowSpans = [];
      children.forEach((child, index) => {
        let colSpan;
        if (index === children.length - 1 || currentRowColumns + 4 > totalColumns) {
          colSpan = totalColumns - currentRowColumns;
        } else {
          colSpan = getRandomSpan(totalColumns - currentRowColumns, previousRowSpans);
          if (!colSpan) {
            colSpan = getRandomSpan(totalColumns - currentRowColumns, []);
          }
        }
        child.style.gridColumn = `span ${colSpan}`;
        currentRowColumns += colSpan;
        currentRowSpans.push(colSpan);
        if (currentRowColumns === totalColumns) {
          currentRowColumns = 0;
          previousRowSpans = [...currentRowSpans];
          currentRowSpans = [];
        }
      });
    }
  };
})();
//# sourceMappingURL=simple-collage.js.map
