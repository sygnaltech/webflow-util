(() => {
  // src/utils.ts
  var expandMacrosInText = (text, dict) => {
    const replacer = (match, p1, p2, p3, offset, string) => {
      return dict.get(p2) || "";
    };
    text = text.replace(
      /{\s*(?<cmd>\w*)\s*\{\s*(?<params>\w*)\s*\}\s*(?<options>\w*)\s*\}/g,
      replacer
    );
    return text;
  };

  // src/modules/webflow-data-csv.js
  RegExp.escape = function(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  };

  // src/modules/webflow-html.js
  (function($2) {
    $2.fn.shuffle = function() {
      var allElems = this.get(), getRandom = function(max) {
        return Math.floor(Math.random() * max);
      }, shuffled = $2.map(allElems, function() {
        var random = getRandom(allElems.length), randEl = $2(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
      });
      this.each(function(i) {
        $2(this).replaceWith($2(shuffled[i]));
      });
      return $2(shuffled);
    };
  })(jQuery);

  // src/webflow-data.ts
  var getDictionaryFromDataRow2 = function(data, rowIndex) {
    var dict = /* @__PURE__ */ new Map();
    for (const v in data[rowIndex]) {
      dict.set(
        v,
        data[rowIndex][v]
      );
    }
    return dict;
  };

  // src/webflow-html-builder.ts
  var HtmlBuilder2 = class {
    constructor() {
      this.html = [];
      this.render = function() {
        return this.html.join("");
      };
    }
    add(html) {
      this.html.push(html);
    }
    addTemplate(templateEl, data) {
      let template = templateEl.innerHTML;
      console.log(`addTemplate`);
      console.log(template);
      console.log(data);
      for (let row = 0; row < data.length; row++) {
        let dict = getDictionaryFromDataRow2(data, row);
        let item = expandMacrosInText(
          template,
          dict
        );
        console.log(item);
        this.add(item);
      }
    }
  };
})();
//# sourceMappingURL=webflow-html-builder.js.map
