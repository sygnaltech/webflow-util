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

  // src/webflow-data/webflow-collectionlist-data.ts
  var prepareCollectionListDataSource = (dataSource) => {
    let data = dataSource.querySelectorAll("script");
    console.log(`items = ${data.length}`);
    let items = [];
    data.forEach((elem) => {
      items.push(elem.textContent || "");
    });
    let json = "[" + items.join() + "]";
    return JSON.parse(json);
  };

  // src/modules/webflow-data-csv.js
  RegExp.escape = function(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  };
  var defaults = {
    separator: ",",
    delimiter: '"',
    headers: true
  };
  var splitLines = function(csv, options) {
    if (!csv) {
      return void 0;
    }
    options = options || {};
    const separator = options.separator || $.csv.defaults.separator;
    const delimiter = options.delimiter || $.csv.defaults.delimiter;
    options.state = options.state || {};
    if (!options.state.rowNum) {
      options.state.rowNum = 1;
    }
    const entries = [];
    let state = 0;
    let entry = "";
    let exit = false;
    function endOfLine() {
      state = 0;
      if (options.start && options.state.rowNum < options.start) {
        entry = "";
        options.state.rowNum++;
        return;
      }
      if (options.onParseEntry === void 0) {
        entries.push(entry);
      } else {
        const hookVal = options.onParseEntry(entry, options.state);
        if (hookVal !== false) {
          entries.push(hookVal);
        }
      }
      entry = "";
      if (options.end && options.state.rowNum >= options.end) {
        exit = true;
      }
      options.state.rowNum++;
    }
    const escSeparator = RegExp.escape(separator);
    const escDelimiter = RegExp.escape(delimiter);
    let match = /(D|S|\n|\r|[^DS\r\n]+)/;
    let matchSrc = match.source;
    matchSrc = matchSrc.replace(/S/g, escSeparator);
    matchSrc = matchSrc.replace(/D/g, escDelimiter);
    match = new RegExp(matchSrc, "gm");
    csv.replace(match, function(m0) {
      if (exit) {
        return;
      }
      switch (state) {
        case 0:
          if (m0 === separator) {
            entry += m0;
            state = 0;
            break;
          }
          if (m0 === delimiter) {
            entry += m0;
            state = 1;
            break;
          }
          if (m0 === "\n") {
            endOfLine();
            break;
          }
          if (/^\r$/.test(m0)) {
            break;
          }
          entry += m0;
          state = 3;
          break;
        case 1:
          if (m0 === delimiter) {
            entry += m0;
            state = 2;
            break;
          }
          entry += m0;
          state = 1;
          break;
        case 2: {
          const prevChar = entry.substr(entry.length - 1);
          if (m0 === delimiter && prevChar === delimiter) {
            entry += m0;
            state = 1;
            break;
          }
          if (m0 === separator) {
            entry += m0;
            state = 0;
            break;
          }
          if (m0 === "\n") {
            endOfLine();
            break;
          }
          if (m0 === "\r") {
            break;
          }
          throw Error("CSVDataError: Illegal state [Row:" + options.state.rowNum + "]");
        }
        case 3:
          if (m0 === separator) {
            entry += m0;
            state = 0;
            break;
          }
          if (m0 === "\n") {
            endOfLine();
            break;
          }
          if (m0 === "\r") {
            break;
          }
          if (m0 === delimiter) {
            throw Error("CSVDataError: Illegal quote [Row:" + options.state.rowNum + "]");
          }
          throw Error("CSVDataError: Illegal state [Row:" + options.state.rowNum + "]");
        default:
          throw Error("CSVDataError: Unknown state [Row:" + options.state.rowNum + "]");
      }
    });
    if (entry !== "") {
      endOfLine();
    }
    return entries;
  };
  var parseEntry = function(csv, options) {
    const separator = options.separator;
    const delimiter = options.delimiter;
    if (!options.state.rowNum) {
      options.state.rowNum = 1;
    }
    if (!options.state.colNum) {
      options.state.colNum = 1;
    }
    const entry = [];
    let state = 0;
    let value = "";
    function endOfValue() {
      if (options.onParseValue === void 0) {
        entry.push(value);
      } else {
        const hook = options.onParseValue(value, options.state);
        if (hook !== false) {
          entry.push(hook);
        }
      }
      value = "";
      state = 0;
      options.state.colNum++;
    }
    if (!options.match) {
      const escSeparator = RegExp.escape(separator);
      const escDelimiter = RegExp.escape(delimiter);
      const match = /(D|S|\n|\r|[^DS\r\n]+)/;
      let matchSrc = match.source;
      matchSrc = matchSrc.replace(/S/g, escSeparator);
      matchSrc = matchSrc.replace(/D/g, escDelimiter);
      options.match = new RegExp(matchSrc, "gm");
    }
    csv.replace(options.match, function(m0) {
      switch (state) {
        case 0:
          if (m0 === separator) {
            value += "";
            endOfValue();
            break;
          }
          if (m0 === delimiter) {
            state = 1;
            break;
          }
          if (m0 === "\n" || m0 === "\r") {
            break;
          }
          value += m0;
          state = 3;
          break;
        case 1:
          if (m0 === delimiter) {
            state = 2;
            break;
          }
          value += m0;
          state = 1;
          break;
        case 2:
          if (m0 === delimiter) {
            value += m0;
            state = 1;
            break;
          }
          if (m0 === separator) {
            endOfValue();
            break;
          }
          if (m0 === "\n" || m0 === "\r") {
            break;
          }
          throw Error("CSVDataError: Illegal State [Row:" + options.state.rowNum + "][Col:" + options.state.colNum + "]");
        case 3:
          if (m0 === separator) {
            endOfValue();
            break;
          }
          if (m0 === "\n" || m0 === "\r") {
            break;
          }
          if (m0 === delimiter) {
            throw Error("CSVDataError: Illegal Quote [Row:" + options.state.rowNum + "][Col:" + options.state.colNum + "]");
          }
          throw Error("CSVDataError: Illegal Data [Row:" + options.state.rowNum + "][Col:" + options.state.colNum + "]");
        default:
          throw Error("CSVDataError: Unknown State [Row:" + options.state.rowNum + "][Col:" + options.state.colNum + "]");
      }
    });
    endOfValue();
    return entry;
  };
  var toArray = function(csv, options, callback) {
    if (options !== void 0 && typeof options === "function") {
      if (callback !== void 0) {
        return console.error("You cannot 3 arguments with the 2nd argument being a function");
      }
      callback = options;
      options = {};
    }
    options = options !== void 0 ? options : {};
    const config = {};
    config.callback = callback !== void 0 && typeof callback === "function" ? callback : false;
    config.separator = "separator" in options ? options.separator : defaults.separator;
    config.delimiter = "delimiter" in options ? options.delimiter : defaults.delimiter;
    const state = options.state !== void 0 ? options.state : {};
    options = {
      delimiter: config.delimiter,
      separator: config.separator,
      onParseEntry: options.onParseEntry,
      onParseValue: options.onParseValue,
      state
    };
    const entry = parseEntry(csv, options);
    if (!config.callback) {
      return entry;
    } else {
      config.callback("", entry);
    }
  };
  var csvToObjects = function(csv, options, callback) {
    if (options !== void 0 && typeof options === "function") {
      if (callback !== void 0) {
        return console.error("You cannot 3 arguments with the 2nd argument being a function");
      }
      callback = options;
      options = {};
    }
    options = options !== void 0 ? options : {};
    const config = {};
    config.callback = callback !== void 0 && typeof callback === "function" ? callback : false;
    config.separator = "separator" in options ? options.separator : defaults.separator;
    config.delimiter = "delimiter" in options ? options.delimiter : defaults.delimiter;
    config.headers = "headers" in options ? options.headers : defaults.headers;
    options.start = "start" in options ? options.start : 1;
    if (config.headers) {
      options.start++;
    }
    if (options.end && config.headers) {
      options.end++;
    }
    let lines = [];
    let data = [];
    options = {
      delimiter: config.delimiter,
      separator: config.separator,
      onPreParse: options.onPreParse,
      onParseEntry: options.onParseEntry,
      onParseValue: options.onParseValue,
      onPostParse: options.onPostParse,
      start: options.start,
      end: options.end,
      state: {
        rowNum: 1,
        colNum: 1
      },
      match: false,
      transform: options.transform
    };
    const headerOptions = {
      delimiter: config.delimiter,
      separator: config.separator,
      start: 1,
      end: 1,
      state: {
        rowNum: 1,
        colNum: 1
      },
      headers: true
    };
    if (options.onPreParse !== void 0) {
      csv = options.onPreParse(csv, options.state);
    }
    const headerLine = splitLines(csv, headerOptions);
    const headers = toArray(headerLine[0], headerOptions);
    lines = splitLines(csv, options);
    options.state.colNum = 1;
    if (headers) {
      options.state.rowNum = 2;
    } else {
      options.state.rowNum = 1;
    }
    for (let i = 0, len = lines.length; i < len; i++) {
      const entry = toArray(lines[i], options);
      const object = {};
      for (let j = 0; j < headers.length; j++) {
        object[headers[j]] = entry[j];
      }
      if (options.transform !== void 0) {
        data.push(options.transform.call(void 0, object));
      } else {
        data.push(object);
      }
      options.state.rowNum++;
    }
    if (options.onPostParse !== void 0) {
      data = options.onPostParse(data, options.state);
    }
    if (!config.callback) {
      return data;
    } else {
      config.callback("", data);
    }
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

  // src/modules/webflow-data.js
  var getCsvAsData = function(url) {
    var data = null;
    $.ajax({
      url,
      async: false,
      success: function(csvd) {
        data = csvToObjects(csvd);
      },
      dataType: "text",
      complete: function() {
      }
    });
    return data;
  };

  // src/webflow-data/google-sheet-data.ts
  var loadGoogleSheetFromSpec2 = function(spec) {
    switch (spec.version) {
      default:
      case "1":
        return getCsvAsData(spec.url);
        break;
    }
  };

  // src/webflow-data/database.ts
  var Database = class {
    constructor() {
      this.data = /* @__PURE__ */ new Map();
      this.normalizeKey = function(key) {
        return key.toLowerCase();
      };
      this.add = function(key, json) {
        key = this.normalizeKey(key);
        if (typeof json == "string") {
          json = JSON.parse(json);
        }
        this.data.set(key, json);
      };
      this.getData = function(key) {
        key = this.normalizeKey(key);
        return this.data.get(key);
      };
      this.getDataSource = this.getData;
      this.getCountOfRecords = function(dataSourceName) {
        return this.getDataSource(dataSourceName).length;
      };
      this.getDictionary = function(dataSourceName, keyField, valueField) {
        var dict = /* @__PURE__ */ new Map();
        var ds = this.getDataSource(dataSourceName);
        for (var i = 0; i < ds.length; i++) {
          dict.set(
            ds[i][keyField],
            ds[i][valueField]
          );
        }
        console.log(dict);
        return dict;
      };
      this.getDictionaryFromRow = function(dataSourceName, row) {
        var dict = /* @__PURE__ */ new Map();
        var ds = this.getDataSource(dataSourceName);
        for (const v in ds[row]) {
          dict.set(
            v,
            ds[row][v]
          );
        }
        return dict;
      };
    }
  };

  // src/webflow-data.ts
  var Datastore = class {
    constructor() {
      this.store = {};
    }
    init() {
      this.init_dbs();
    }
    loadDataItem(elem) {
      let data = this.loadDataItem_v2(
        elem
      );
    }
    loadDataItem_v2(elem) {
      const dsn = elem.getAttribute("wfu-data-dsn" /* ATTR_DATA_DSN */);
      const id = elem.getAttribute("wfu-data-item-id" /* ATTR_DATA_ITEM_ID */);
      let dataObject = JSON.parse(elem.innerText);
      if (!this.store[dsn])
        this.store[dsn] = new Database();
      this.store[dsn].add(id, dataObject);
    }
    init_dbs() {
      let dataSources = document.querySelectorAll(
        `script[type=${"wfu-data-item" /* SCRIPT_TYPE_DATA_ITEM */}]`
      );
      dataSources.forEach((elem) => {
        this.loadDataItem(elem);
      });
    }
    loadData(name) {
      let dataSource = document.querySelector(
        `[${"wfu-data" /* ATTR_DATA */}='${name}']`
      );
      if (!dataSource) {
        console.warn(`Datasource: '${name}' does not exist`);
        return;
      }
      let dataSourceType = dataSource.getAttribute("wfu-data-type" /* ATTR_DATA_TYPE */);
      console.log(`preparing data - ${dataSourceType}`);
      switch (dataSourceType) {
        case "collection-list":
          return prepareCollectionListDataSource(dataSource);
        case "json":
          break;
        case "google-sheet":
          return loadGoogleSheetFromSpec2(
            JSON.parse(
              dataSource.textContent || ""
            )
          );
        default:
          console.error(`Data-source type: '${dataSourceType}' unknown`);
          break;
      }
    }
    async getCsv(url) {
      let csv = null;
      try {
        const response = await fetch(url);
        if (response.ok) {
          csv = await response.text();
        } else {
          console.error(`Error fetching CSV: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error fetching CSV: ${error}`);
      }
      return csv;
    }
    csvToData(csvd) {
      let items = null;
      return items;
    }
    async getCsvAsData(url) {
      let data = null;
      try {
        const response = await fetch(url);
        if (response.ok) {
          const csvd = await response.text();
        } else {
          console.error(`Error fetching CSV: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error fetching CSV: ${error}`);
      }
      return data;
    }
    getDictionaryFromDataRow(data, rowIndex) {
      var dict = /* @__PURE__ */ new Map();
      for (const v in data[rowIndex]) {
        dict.set(
          v,
          data[rowIndex][v]
        );
      }
      return dict;
    }
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
        let ds = new Datastore();
        let dict = ds.getDictionaryFromDataRow(data, row);
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
