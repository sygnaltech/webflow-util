(() => {
  // src/webflow-membership/access-groups.ts
  var Sa5UserAccessGroups = class {
    constructor(membership) {
      this.accessGroups = [];
      this.membership = membership;
    }
    async initAsync() {
      console.log("initAsync");
      console.log(await this.getAccessGroupsAsync());
    }
    async getAccessGroupsAsync() {
      this.accessGroups = [];
      for (let group of this.membership.config.accessGroups) {
        let hasAccess = await this.checkAccessGroupAsync(group);
        if (hasAccess)
          this.accessGroups.push(group);
      }
      return this.accessGroups;
    }
    async checkAccessGroupAsync(accessGroupCode) {
      const response = await fetch(
        `${this.membership.config.accessGroupsFolder}/${accessGroupCode}`
      );
      console.log(`redirected: ${response.redirected}`);
      console.log("STATUS:", response.status);
      if (!response.redirected) {
        console.log(`Has access group ${accessGroupCode}`);
        return true;
      }
      if (response.status != 200) {
        console.warn("SA5", `Memberships configuration error- access group ${accessGroupCode} is not queryable.`);
      }
      console.log(`Not logged in, or no access to ${accessGroupCode}`);
      return false;
    }
  };
})();
//# sourceMappingURL=access-groups.js.map
