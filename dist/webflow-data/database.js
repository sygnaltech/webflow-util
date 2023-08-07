(() => {
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
})();
//# sourceMappingURL=database.js.map
