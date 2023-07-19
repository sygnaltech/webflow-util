(() => {
  // src/webflow-core/debug.ts
  var Sa5Debug = class {
    constructor(label) {
      this.localStorageDebugFlag = "sa5-debug";
      this._enabled = false;
      this._label = label;
    }
    get persistentDebug() {
      return Boolean(localStorage.getItem(this.localStorageDebugFlag));
    }
    set persistentDebug(active) {
      if (active) {
        localStorage.setItem(this.localStorageDebugFlag, "true");
        console.debug("sa5-core debug enabled (persistent).");
      } else {
        localStorage.removeItem(this.localStorageDebugFlag);
        console.debug("sa5-core debug disabled (persistent).");
      }
    }
    get enabled() {
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
    debug(...args) {
      if (this.enabled)
        console.debug(this._label, ...args);
    }
  };

  // src/webflow-blog/github-gist.ts
  var GitHubGist = class {
    constructor() {
    }
    init() {
      this.initCopyGist();
    }
    initCopyGist() {
      document.querySelectorAll("[wfu-gist-copy]").forEach((el) => {
        el.addEventListener("click", (e) => {
          let a = el.getAttribute("wfu-gist-copy");
          let gist = document.querySelector(`[wfu-gist="${a}"]`);
          if (gist !== null) {
            this.copyToClipboard(this.getGistCode(gist));
          }
        });
      });
    }
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
      }, (err) => {
        console.error("Could not copy text: ", err);
      });
    }
    getGistCode(el) {
      var _a;
      if (!el)
        return;
      let code = ((_a = el.querySelector(".gist-file")) == null ? void 0 : _a.textContent) || "";
      let cleanString = code.replace(/\n\s*\n/g, "\n");
      let lines = cleanString.split("\n");
      lines = lines.slice(0, -4);
      let finalString = lines.join("\n");
      let finalLines = finalString.split("\n").map((line) => {
        return line.startsWith("          ") ? line.slice(10) : line;
      });
      let trimmedString = finalLines.join("\n");
      return trimmedString;
    }
  };
  window["GitHubGist"] = GitHubGist;

  // src/webflow-blog.ts
  var Sa5Blog = class {
    constructor() {
      this.debug = new Sa5Debug("sa5-blog");
    }
    init() {
      this.debug.debug("Initializing SA5 Blog");
      var gitHubGist = new GitHubGist();
      gitHubGist.initCopyGist();
    }
  };
  window["sa5"] = window["sa5"] || {};
  window["sa5"]["Sa5Blog"] = Sa5Blog;
})();
//# sourceMappingURL=webflow-blog.js.map
