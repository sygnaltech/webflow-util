(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };

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

  // src/webflow-core.ts
  var Sa5Core = class {
    constructor() {
      this.handlers = [];
    }
    init() {
      this.initDebugMode();
    }
    initDebugMode() {
      const debugParamKey = "sa-debug";
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
      if (!(sa5instance?.constructor?.name == "Sa5Core")) {
        var core = new Sa5Core();
        if (Array.isArray(sa5instance))
          core.handlers = window["sa5"];
        window["sa5"] = core;
        window["Sa5"] = window["sa5"];
      }
      if (module) {
        window["sa5"][module.name] = module;
      }
    }
    push(o) {
      this.handlers.push(o);
    }
  };
  Sa5Core.startup();

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

  // src/datasources/webflow-collectionlist-data.js
  var prepareCollectionListDataSource = function(dataSource) {
    var data = $(dataSource).find("script");
    console.log(`items = ${data.length}`);
    var items = [];
    data.each(function(index, elem) {
      items.push(elem.textContent);
    });
    var json = "[" + items.join() + "]";
    return JSON.parse(json);
  };

  // src/datasources/google-sheet-data.js
  var loadGoogleSheetFromSpec = function(spec) {
    switch (spec.version) {
      default:
      case "1":
        return getCsvAsData(spec.url);
        break;
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
  var Database = class {
    constructor() {
      __publicField(this, "data", /* @__PURE__ */ new Map());
      __publicField(this, "normalizeKey", function(key) {
        return key.toLowerCase();
      });
      __publicField(this, "add", function(key, json) {
        key = this.normalizeKey(key);
        if (typeof json == "string") {
          json = JSON.parse(json);
        }
        this.data.set(key, json);
      });
      __publicField(this, "getData", function(key) {
        key = this.normalizeKey(key);
        return this.data.get(key);
      });
      __publicField(this, "getDataSource", this.getData);
      __publicField(this, "getCountOfRecords", function(dataSourceName) {
        return this.getDataSource(dataSourceName).length;
      });
      __publicField(this, "getDictionary", function(dataSourceName, keyField, valueField) {
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
      });
      __publicField(this, "getDictionaryFromRow", function(dataSourceName, row) {
        var dict = /* @__PURE__ */ new Map();
        var ds = this.getDataSource(dataSourceName);
        for (const v in ds[row]) {
          dict.set(
            v,
            ds[row][v]
          );
        }
        return dict;
      });
    }
  };
  var loadAllData = function() {
    var dataSources = $("*[wfu-data]");
    console.log(`sources found = ${dataSources.length}`);
    var db = new Database();
    $.each(dataSources, function(i, elem) {
      console.log(`processing source - ${elem.getAttribute("wfu-data")}`);
      var data = loadData(
        elem.getAttribute("wfu-data")
      );
      db.data.set(
        elem.getAttribute("wfu-data"),
        data
      );
    });
    return db;
  };
  var loadData = function(name) {
    var dataSource = $(`*[wfu-data='${name}']`);
    if (!dataSource) {
      console.warn(`Datasource: '${name}' does not exist`);
      return;
    }
    var dataSourceType = $(dataSource).attr("wfu-data-type");
    console.log(`preparing data - ${dataSourceType}`);
    switch (dataSourceType) {
      case "collection-list":
        return prepareCollectionListDataSource(dataSource);
        break;
      case "json":
        break;
      case "google-sheet":
        return loadGoogleSheetFromSpec(
          JSON.parse(
            $(dataSource).text()
          )
        );
        break;
      default:
        console.error(`Data-source type: '${dataSourceType}' unknown`);
        break;
    }
  };
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

  // src/modules/webflow-core.js
  var __enabled;
  var WfuDebug = class {
    constructor() {
      __privateAdd(this, __enabled, false);
    }
    get enabled() {
      return localStorage.getItem("wfuDebug") || __privateGet(this, __enabled);
    }
    set enabled(active) {
      __privateSet(this, __enabled, active);
    }
    group(name) {
      if (this.enabled)
        console.group(name);
    }
    groupEnd() {
      if (this.enabled)
        console.groupEnd();
    }
    debug() {
      if (this.enabled)
        console.debug(...arguments);
    }
  };
  __enabled = new WeakMap();

  // src/modules/webflow-form.js
  var createHtmlDataList = function(dataSourceName, data) {
    var datalist = document.createElement("datalist");
    datalist.setAttribute("id", dataSourceName);
    console.log(`creating dataList '${dataSourceName}'`);
    console.log(data);
    $.each(data, function(key, entry) {
      console.log(`iterate`);
      var opt = document.createElement("option");
      console.log(entry.text);
      var decodedText = $("<textarea/>").html(entry.text).val();
      opt.setAttribute("value", decodedText);
      datalist.appendChild(opt);
    });
    console.log(datalist);
    document.body.appendChild(datalist);
  };
  var dataBindAllForms = function(db) {
    db.data.forEach((data, dataSourceName) => {
      createHtmlDataList(
        createDsnMoniker(dataSourceName),
        data
      );
    });
    dataBindAllFormSelects(db);
    dataBindAllFormInputs(db);
  };
  var createDsnMoniker = function(dsn) {
    return `wfu-dsn__${dsn}`;
  };
  var dataBindAllFormInputs = function(db) {
    var dataBoundElements = $("input[wfu-bind]");
    $.each(dataBoundElements, function(i, elem) {
      dataBindFormInput(elem, db);
    });
  };
  var dataBindAllFormSelects = function(db) {
    var dataBoundElements = $("select[wfu-bind]");
    $.each(dataBoundElements, function(i, elem) {
      dataBindFormSelect(elem, db);
    });
  };
  var dataBindFormInput = function(elem, db) {
    if (!(elem instanceof HTMLInputElement)) {
      console.error(`Attempted to INPUT databind a non-INPUT element.`);
      return;
    }
    var dataSourceName = elem.getAttribute("wfu-bind");
    console.log(`wfu-bind = ${dataSourceName}`);
    if (!dataSourceName) {
      console.warn("dataBound element found with no datasource specified.");
      return;
    }
    elem.setAttribute(
      "list",
      createDsnMoniker(dataSourceName)
    );
  };
  var dataBindFormSelect = function(elem, db) {
    if (!(elem instanceof HTMLSelectElement)) {
      console.error(`Attempted to SELECT databind a non-SELECT element.`);
      return;
    }
    var dataSourceName = elem.getAttribute("wfu-bind");
    if (!dataSourceName) {
      console.warn("dataBound element found with no datasource specified.");
      return;
    }
    $.each(db.data.get(dataSourceName), function(key, entry) {
      var opt = document.createElement("option");
      var decodedText = $("<textarea/>").html(entry.text).val();
      opt.appendChild(document.createTextNode(decodedText));
      opt.value = entry.id;
      elem.appendChild(opt);
    });
  };

  // src/nocode/webflow-data.ts
  var init = () => {
    new Sa5Core().init();
    let debug = new Sa5Debug("sa5-data");
    debug.debug("Initializing");
    var db = loadAllData();
    dataBindAllForms(db);
  };
  document.addEventListener("DOMContentLoaded", init);
})();
//# sourceMappingURL=webflow-data.js.map
