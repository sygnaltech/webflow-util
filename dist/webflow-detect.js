(() => {
  // src/webflow-detect.ts
  var Sa5Detect = class {
    constructor() {
      this.countries = /* @__PURE__ */ new Map([]);
    }
    async getUserInfo() {
      const IP_INFO_TOKEN = "37cce46c605631";
      const request = await fetch(`https://ipinfo.io/json?token=${IP_INFO_TOKEN}`);
      this.userInfo = await request.json();
      console.log(
        this.userInfo.ip,
        this.userInfo.country
      );
    }
    loadOrGetUserInfo() {
      this.loadUserInfo();
      if (!this.userInfo) {
        this.getUserInfo();
        this.saveUserInfo();
      }
    }
    saveUserInfo() {
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      const serializedUserInfo = JSON.stringify(this.userInfo);
      document.cookie = `userInfo=${encodeURIComponent(serializedUserInfo)};expires=${expiryDate.toUTCString()};path=/`;
    }
    loadUserInfo() {
      const allCookies = document.cookie.split("; ");
      for (const cookie of allCookies) {
        const [name, value] = cookie.split("=");
        if (name === "userInfo") {
          this.userInfo = JSON.parse(decodeURIComponent(value));
          return this.userInfo;
        }
      }
      return null;
    }
    detectGeographicZone() {
    }
    isCountryInList(countryCode) {
      return this.countries.has(countryCode);
    }
    getPathForCountry(countryCode) {
      return this.countries.get(countryCode);
    }
    handleRedirect() {
    }
    applyDetectContext() {
      let path = this.getPathForCountry(this.userInfo.country);
      if (path) {
        if (window.location.pathname != path)
          window.location.pathname = path;
      }
    }
  };
})();
//# sourceMappingURL=webflow-detect.js.map
