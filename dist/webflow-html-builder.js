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

  // src/globals.ts
  var Sa5Attribute;
  ((Sa5Attribute2) => {
    function getBracketed(attr) {
      return `[${attr}]`;
    }
    Sa5Attribute2.getBracketed = getBracketed;
  })(Sa5Attribute || (Sa5Attribute = {}));
  var Sa5Attribute = /* @__PURE__ */ ((Sa5Attribute2) => {
    Sa5Attribute2["ATTR_CORE_SCRIPT_INJECT"] = "wfu-script-load";
    Sa5Attribute2["ATTR_VIDEO"] = "wfu-video";
    Sa5Attribute2["ATTR_VIDEO_DATA_POSTER_URL"] = "wfu-data-poster-url";
    Sa5Attribute2["ATTR_DESIGN"] = "wfu-design";
    Sa5Attribute2["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
    Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
    Sa5Attribute2["ATTR_ELEMENT_BUTTON"] = "wfu-button";
    Sa5Attribute2["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
    Sa5Attribute2["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
    Sa5Attribute2["ATTR_DATA"] = "wfu-data";
    Sa5Attribute2["ATTR_DATA_TYPE"] = "wfu-data-type";
    Sa5Attribute2["ATTR_DATA_DSN"] = "wfu-data-dsn";
    Sa5Attribute2["ATTR_DATA_ITEM_ID"] = "wfu-data-item-id";
    Sa5Attribute2["ATTR_DATABIND"] = "wfu-bind";
    Sa5Attribute2["ATTR_DATABIND_CONTENT"] = "wfu-bind-content";
    Sa5Attribute2["ATTR_DATABIND_CONTEXT_DSN"] = "wfu-bind-dsn";
    Sa5Attribute2["ATTR_DATABIND_CONTEXT_ITEM_ID"] = "wfu-bind-item-id";
    Sa5Attribute2["ATTR_PRELOAD"] = "wfu-preload";
    Sa5Attribute2["ATTR_IX_TRIGGER"] = "wfu-ix-trigger";
    Sa5Attribute2["ATTR_IX_ID"] = "wfu-ix-id";
    Sa5Attribute2["ATTR_SORT"] = "wfu-sort";
    Sa5Attribute2["ATTR_FILTER"] = "wfu-filter";
    Sa5Attribute2["ATTR_FILTER_MATCH"] = "wfu-filter-match";
    Sa5Attribute2["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
    Sa5Attribute2["ATTR_FILTER_FUNC"] = "wfu-filter-func";
    return Sa5Attribute2;
  })(Sa5Attribute || {});

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

  // src/webflow-core/designer.ts
  var Sa5Designer = class {
    constructor() {
    }
    init() {
      this.removeDesignTimeElements();
    }
    removeDesignTimeElements() {
      const elements = document.querySelectorAll(
        Sa5Attribute.getBracketed("wfu-design" /* ATTR_DESIGN */)
      );
      elements.forEach((element) => {
        element.remove();
      });
    }
  };

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
      new Sa5Designer().init();
    }
    getHandlers(name) {
      return this.handlers.filter((item) => item[0] === name).map((item) => item[1]);
    }
    getHandler(name) {
      const item = this.handlers.find((item2) => item2[0] === name);
      return item ? item[1] : void 0;
    }
    init() {
      this.initDebugMode();
      this.initAsync();
    }
    async initAsync() {
      this.initScriptInjectionsAsync();
    }
    async initScriptInjectionsAsync() {
      document.addEventListener("DOMContentLoaded", () => {
        const loadSrcScripts = document.querySelectorAll(
          `script[${"wfu-script-load" /* ATTR_CORE_SCRIPT_INJECT */}]`
        );
        loadSrcScripts.forEach((script) => {
          const loadSrcUrl = script.getAttribute("wfu-script-load" /* ATTR_CORE_SCRIPT_INJECT */);
          if (loadSrcUrl) {
            fetch(loadSrcUrl).then((response) => response.text()).then((jsContent) => {
              const newScript = document.createElement("script");
              newScript.textContent = jsContent;
              script.replaceWith(newScript);
            }).catch((error) => {
              console.error("Error loading script:", error);
            });
          }
        });
      });
    }
    initDebugMode() {
      const debugParamKey = "debug";
      let params = new URLSearchParams(window.location.search);
      let hasDebug = params.has(debugParamKey);
      if (hasDebug) {
        let wfuDebug = new Sa5Debug(`sa5 init`);
        wfuDebug.persistentDebug = this.stringToBoolean(params.get(debugParamKey));
      }
    }
    stringToBoolean(str) {
      const truthyValues = ["1", "true", "yes"];
      const falsyValues = ["0", "false", "no"];
      if (truthyValues.indexOf(str.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    }
    static startup(module = null) {
      let sa5instance = window["sa5"];
      var core;
      if (sa5instance?.constructor?.name == "Sa5Core") {
        core = sa5instance;
      } else {
        core = new Sa5Core();
        core.init();
        if (Array.isArray(sa5instance))
          core.handlers = sa5instance;
        window["sa5"] = core;
        window["Sa5"] = window["sa5"];
      }
      if (module) {
        window["sa5"][module.name] = module;
      }
      return core;
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

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

  // src/webflow-data/sa5-data.ts
  var Sa5Data = class {
    constructor(elem) {
      this.elem = elem;
      this.init();
    }
    init() {
      if (this.elem.nodeName != "SCRIPT") {
        console.error("Invalid element for Sa5Data. Must be a SCRIPT element.", this.elem);
        return;
      }
      this.type = this.elem.getAttribute("type");
      if (this.type != "sygnal/sa5-data-proto" /* SCRIPT_TYPE_SA5_DATA_ITEM */) {
        console.error("Invalid element type for Sa5Data.", this.elem);
        return;
      }
      let data = this.elem.innerText;
      this.value = this.parse(data);
    }
    parse(content) {
      const root = {};
      const stack = [root];
      const lines = content.split("\n");
      let currentKey = null;
      let currentType = "string";
      let currentValue = null;
      let isMultiLineValue = false;
      for (let line of lines) {
        const indentation = line.search(/\S/);
        line = line.trim();
        if (!line)
          continue;
        while (stack.length - 1 > indentation) {
          stack.pop();
        }
        if (isMultiLineValue) {
          if (line.endsWith(">")) {
            currentValue += "\n" + line.slice(0, -1);
            if (currentKey !== null && currentValue !== null) {
              stack[stack.length - 1][currentKey] = currentValue || null;
            }
            isMultiLineValue = false;
            currentValue = null;
            currentKey = null;
            currentType = "string";
            continue;
          } else {
            currentValue += "\n" + line;
            continue;
          }
        }
        const delimiterMatch = line.match(/:(\$|#|\?|:|)/);
        if (!delimiterMatch)
          continue;
        const delimiter = delimiterMatch[1];
        const parts = line.split(delimiterMatch[0]);
        const key = parts[0].trim();
        let value = parts.slice(1).join(":").trim();
        switch (delimiter) {
          case "":
          case "$":
            if (value.startsWith("<") && !value.endsWith(">")) {
              isMultiLineValue = true;
              currentKey = key;
              currentValue = value.slice(1);
              continue;
            } else if (value.startsWith("<") && value.endsWith(">")) {
              value = value.slice(1, -1);
            }
            value = value || null;
            break;
          case "#":
            value = value ? parseFloat(value) : null;
            break;
          case "?":
            value = value ? value.toLowerCase() === "true" : null;
            break;
          case ":":
            const newObj = {};
            stack[stack.length - 1][key] = newObj;
            stack.push(newObj);
            continue;
        }
        stack[stack.length - 1][key] = value;
      }
      return root;
    }
  };

  // src/webflow-data.ts
  var Sa5Datastore = class {
    constructor(config = {}) {
      this.store = {};
      this.config = {
        datastoreLoadedCallback: config.datastoreLoadedCallback,
        debug: config.debug ?? false
      };
    }
    isDatastoreLoadedCallback(func) {
      if (!func)
        return false;
      return func.length === 1;
    }
    init() {
      this.init_dbs();
      let core = Sa5Core.startup();
      const datastoreLoaded = core.getHandler("datastoreLoaded" /* EVENT_DATASTORE_LOADED */);
      if (this.isDatastoreLoadedCallback(datastoreLoaded)) {
        this.config.datastoreLoadedCallback = datastoreLoaded;
      }
      if (this.config.datastoreLoadedCallback) {
        this.config.datastoreLoadedCallback(this);
      }
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
    loadDataItem_sa5Data(elem) {
      const dsn = elem.getAttribute("wfu-data-dsn" /* ATTR_DATA_DSN */);
      const id = elem.getAttribute("wfu-data-item-id" /* ATTR_DATA_ITEM_ID */);
      let i = new Sa5Data(elem);
      let dataObject = i.value;
      console.log("dataObject", dataObject);
      if (!this.store[dsn])
        this.store[dsn] = new Database();
      this.store[dsn].add(id, dataObject);
    }
    init_dbs() {
      let sa5DataSources = document.querySelectorAll(
        `script[type='${"sygnal/sa5-data-proto" /* SCRIPT_TYPE_SA5_DATA_ITEM */}']`
      );
      sa5DataSources.forEach((elem) => {
        this.loadDataItem_sa5Data(elem);
      });
      let dataSources = document.querySelectorAll(
        `script[type='${"wfu-data-item" /* SCRIPT_TYPE_DATA_ITEM */}']`
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
        let ds = new Sa5Datastore();
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
