(() => {
  // src/webflow-membership/hyperflow.ts
  var Sa5UserHyperflow = class {
    constructor(membership) {
      this.accessGroups = [];
      this.membership = membership;
    }
    async initAsync() {
      console.log("initAsync");
      console.log(await this.getCurrentUserAsync());
    }
    async getCurrentUserAsync() {
      const response = await fetch(
        `${this.membership.config.hf.currentUserUrl}`
      );
      console.log("STATUS:", response.status);
      const raw = await response.json();
      console.log(raw);
    }
  };
})();
//# sourceMappingURL=hyperflow.js.map
