(() => {
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
    Sa5Attribute2["ATTR_VIDEO_YOUTUBE_NOREL"] = "wfu-youtube-norel";
    Sa5Attribute2["ATTR_VIDEO_DATA_POSTER_URL"] = "wfu-data-poster-url";
    Sa5Attribute2["ATTR_DESIGN"] = "wfu-design";
    Sa5Attribute2["ATTR_ELEMENT_SLIDER"] = "wfu-slider";
    Sa5Attribute2["ATTR_ELEMENT_SLIDE_NAME"] = "wfu-slide-name";
    Sa5Attribute2["ATTR_ELEMENT_TABS"] = "wfu-tabs";
    Sa5Attribute2["ATTR_ELEMENT_TAB_NAME"] = "wfu-tab-name";
    Sa5Attribute2["ATTR_ELEMENT_BUTTON"] = "wfu-button";
    Sa5Attribute2["ATTR_BUTTON_ENABLED"] = "wfu-button-enabled";
    Sa5Attribute2["ATTR_BUTTON_DISABLED_CLASS"] = "wfu-button-disabled-class";
    Sa5Attribute2["ATTR_ELEMENT_DECK_TARGET"] = "wfu-deck-target";
    Sa5Attribute2["ATTR_ELEMENT_DECK_ACTION"] = "wfu-deck-action";
    Sa5Attribute2["ATTR_ELEMENT_DECK_ITEM"] = "wfu-deck-action-item";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN"] = "wfu-dropdown";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_NAME"] = "wfu-dropdown-name";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_INIT"] = "wfu-dropdown-init";
    Sa5Attribute2["ATTR_ELEMENT_DROPDOWN_TYPE"] = "wfu-dropdown-type";
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
    Sa5Attribute2["ATTR_SORT_DIR"] = "wfu-sort-dir";
    Sa5Attribute2["ATTR_SORT_TYPE"] = "wfu-sort-type";
    Sa5Attribute2["ATTR_SORT_KEY"] = "wfu-sort-key";
    Sa5Attribute2["ATTR_FILTER"] = "wfu-filter";
    Sa5Attribute2["ATTR_FILTER_MATCH"] = "wfu-filter-match";
    Sa5Attribute2["ATTR_FILTER_EVAL"] = "wfu-filter-eval";
    Sa5Attribute2["ATTR_FILTER_FUNC"] = "wfu-filter-func";
    Sa5Attribute2["ATTR_HIDE"] = "wfu-hide";
    Sa5Attribute2["ATTR_SUPPRESS"] = "wfu-suppress";
    Sa5Attribute2["ATTR_404_SEARCH"] = "wfu-404-search";
    Sa5Attribute2["ATTR_FORM_HANDLER"] = "wfu-form-handler";
    Sa5Attribute2["ATTR_FORM_MESSAGE"] = "wfu-form-message";
    Sa5Attribute2["ATTR_FORM_IPINFO"] = "wfu-form-ipinfo";
    Sa5Attribute2["ATTR_MODAL"] = "wfu-modal";
    Sa5Attribute2["ATTR_MODAL_TRIGGER"] = "wfu-modal-trigger";
    Sa5Attribute2["ATTR_MODAL_CLOSE"] = "wfu-modal-close";
    Sa5Attribute2["ATTR_MODAL_CLOSE_TYPE"] = "wfu-modal-close-type";
    Sa5Attribute2["ATTR_MODAL_SUPPRESS_DAYS"] = "wfu-modal-suppress-days";
    Sa5Attribute2["ATTR_FORMAT"] = "wfu-format";
    Sa5Attribute2["ATTR_FORMAT_DATE"] = "wfu-format-date";
    Sa5Attribute2["ATTR_FORMAT_HANDLER"] = "wfu-format-handler";
    Sa5Attribute2["ATTR_FORMAT_MODE"] = "wfu-format-mode";
    Sa5Attribute2["ATTR_FORMAT_SUFFIX"] = "wfu-format-suffix";
    Sa5Attribute2["ATTR_COUNTUP"] = "wfu-countup";
    Sa5Attribute2["ATTR_COUNTUP_TRIGGER"] = "wfu-countup-trigger";
    Sa5Attribute2["ATTR_DEMO_LINK"] = "wfu-demo-link";
    Sa5Attribute2["ATTR_LIGHTBOX_CAPTIONS"] = "wfu-lightbox-captions";
    Sa5Attribute2["ATTR_LIGHTBOX_GROUP"] = "wfu-lightbox-group";
    Sa5Attribute2["ATTR_DECODE"] = "wfu-decode";
    Sa5Attribute2["ATTR_LIMIT_MULTIPLE"] = "wfu-limit-multiple";
    Sa5Attribute2["ATTR_LIMIT_MULTIPLE_MIN"] = "wfu-limit-multiple-min";
    Sa5Attribute2["ATTR_SHOW_LOGGED_IN"] = "wfu-show-logged-in";
    Sa5Attribute2["ATTR_HIDE_LOGGED_IN"] = "wfu-hide-logged-in";
    Sa5Attribute2["ATTR_LOGIN_BUTTON"] = "wfu-login-button";
    Sa5Attribute2["ATTR_RICHTEXT_LISTS"] = "wfu-lists";
    Sa5Attribute2["ATTR_RICHTEXT_LIST_THEME"] = "wfu-list-theme";
    Sa5Attribute2["ATTR_URL_RELATIVE_LINKS"] = "wfu-relative-links";
    Sa5Attribute2["ATTR_URL_EXTERNAL_LINKS"] = "wfu-external-links";
    Sa5Attribute2["ATTR_UI_ACCORDION"] = "wfu-ui-accordion";
    Sa5Attribute2["ATTR_RATING"] = "wfu-rating";
    Sa5Attribute2["ATTR_GIST"] = "wfu-gist";
    Sa5Attribute2["ATTR_GIST_COPY"] = "wfu-gist-copy";
    Sa5Attribute2["ATTR_LAYOUT"] = "wfu-layout";
    Sa5Attribute2["ATTR_LAYOUT_HANDLER"] = "wfu-layout-handler";
    Sa5Attribute2["ATTR_LAYOUT_TARGET"] = "wfu-layout-target";
    Sa5Attribute2["ATTR_LAYOUT_ZONE"] = "wfu-layout-zone";
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
      if (this.type != "sygnal/sa5-data" /* SCRIPT_TYPE_SA5_DATA_ITEM */) {
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
        `script[type='${"sygnal/sa5-data" /* SCRIPT_TYPE_SA5_DATA_ITEM */}']`
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
})();
//# sourceMappingURL=webflow-data.js.map
