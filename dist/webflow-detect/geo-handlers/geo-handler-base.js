(() => {
  // src/webflow-detect/geo-handlers/geo-handler-base.ts
  var GeoHandlerBase = class {
    constructor(token = null) {
      this.token = token;
    }
    get info() {
      return {
        ip: this.userInfoRaw.ip,
        country: this.userInfoRaw.countryCode,
        city: null,
        region: null,
        postal: null,
        timezone: null
      };
    }
    async getInfoAsync() {
    }
  };
})();
//# sourceMappingURL=geo-handler-base.js.map
