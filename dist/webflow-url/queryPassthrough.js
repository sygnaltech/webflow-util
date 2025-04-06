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

  // src/webflow-url/queryPassthrough.ts
  var Sa5QueryPassthrough = class {
    constructor(config = {}) {
      this.config = {
        ignorePatterns: config.ignorePatterns ?? [
          /_page$/
        ],
        overwriteExisting: config.overwriteExisting ?? false,
        internalOnly: config.internalOnly ?? true
      };
      this.debug = new Sa5Debug("sa5-url-querypassthrough");
      this.debug.debug("Initializing");
      this.debug.debug("Config:", this.config);
    }
    init() {
      document.addEventListener("click", (event) => {
        const target = event.target;
        const anchor = target.closest("a");
        this.debug.debug("Link clicked", anchor);
        if (!anchor)
          return;
        if (!anchor.hasAttribute("href")) {
          this.debug.debug("Link ignored - no href", anchor);
          return;
        }
        if (anchor.href.startsWith("mailto:")) {
          this.debug.debug("Link ignored - mailto:", anchor);
          return;
        }
        if (anchor.href.startsWith("tel:")) {
          this.debug.debug("Link ignored - tel:", anchor);
          return;
        }
        if (anchor.getAttribute("wfu-url-passthrough") == "ignore") {
          this.debug.debug("Link click ignored (explicit ignore setting).");
          return;
        }
        const currentPageParams = new URLSearchParams(window.location.search);
        const currentPageHash = window.location.hash;
        const anchorParams = new URLSearchParams(anchor.search);
        const anchorUrl = new URL(anchor.href);
        if (anchorUrl.hash) {
          if (anchorUrl.pathname == window.location.pathname) {
            this.debug.debug("Link click ignored (hash, same page).");
            return;
          }
        }
        if (this.config.internalOnly) {
          this.debug.debug("checking internalOnly");
          const isRelativeOrSameHost = !anchorUrl.host || anchorUrl.host === window.location.host;
          if (!isRelativeOrSameHost) {
            this.debug.debug("Found external link, skipping");
            return;
          }
        }
        event.preventDefault();
        this.debug.debug("Overriding default link handling.");
        let newParams = new URLSearchParams(anchorUrl.searchParams);
        this.debug.debug(newParams);
        for (const [key, value] of currentPageParams) {
          if (this.shouldIgnoreKey(key))
            continue;
          if (anchorParams.has(key) && !this.config.overwriteExisting)
            continue;
          newParams.set(key, value);
        }
        let newUrl = new URL(anchorUrl);
        if (newParams.size > 0) {
          this.debug.debug("Appending querystring params to passthrough");
          newParams.forEach((value, key) => {
            newUrl.searchParams.set(key, value);
          });
        }
        this.debug.debug("Final URL for navigation", newUrl.href);
        if (anchor.target)
          window.open(newUrl.href, anchor.target);
        else
          window.location.href = newUrl.href;
      });
    }
    shouldIgnoreKey(key) {
      for (const pattern of this.config.ignorePatterns) {
        if (typeof pattern === "string") {
          if (pattern === key) {
            return true;
          }
        } else if (pattern instanceof RegExp) {
          if (pattern.test(key)) {
            return true;
          }
        }
      }
      return false;
    }
  };
})();
//# sourceMappingURL=queryPassthrough.js.map
