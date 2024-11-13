(() => {
  // src/webflow-cro/source.ts
  var Sa5Source = class {
    constructor(storageType = "session") {
      this.storageKey = "sa5_utm_data";
      this.storage = storageType === "local" ? localStorage : sessionStorage;
      this.data = this.load() || {};
    }
    init() {
    }
    setSourceParam(key, value) {
      this.data[key] = value;
      this.save();
    }
    getSourceParam(key) {
      return this.data[key];
    }
    save() {
      this.storage.setItem(this.storageKey, JSON.stringify(this.data));
    }
    load() {
      const storedData = this.storage.getItem(this.storageKey);
      return storedData ? JSON.parse(storedData) : {};
    }
    exists() {
      return this.storage.getItem(this.storageKey) !== null;
    }
    clear() {
      this.storage.removeItem(this.storageKey);
      this.data = {};
    }
  };
})();
//# sourceMappingURL=source.js.map
