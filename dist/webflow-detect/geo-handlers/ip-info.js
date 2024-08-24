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

  // src/webflow-detect/geo-handlers/ip-info.ts
  var IPInfo = class extends GeoHandlerBase {
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
    constructor(token = null) {
      super(token);
    }
    async getInfoAsync() {
      const request = await fetch(`https://ipinfo.io/json?token=${this.token}`);
      this.userInfoRaw = await request.json();
      console.log(
        this.userInfoRaw
      );
      return this.userInfoRaw;
    }
  };
})();
//# sourceMappingURL=ip-info.js.map
