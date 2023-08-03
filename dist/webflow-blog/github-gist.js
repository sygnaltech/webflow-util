(() => {
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
      if (!el)
        return;
      let code = el.querySelector(".gist-file")?.textContent || "";
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
})();
//# sourceMappingURL=github-gist.js.map
