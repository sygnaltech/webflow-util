(() => {
  // src/webflow-membership/internal/logout.ts
  var WebflowUsysLogout = class extends WebflowUsysRequest {
    constructor() {
      super();
    }
    get requestGql() {
      return `
            mutation UserLogoutRequest {
                usysDestroySession {
                    ok
                    __typename
                }
            }
        `;
    }
    get requestObj() {
      return [
        {
          operationName: "GetFieldValidations",
          variables: {},
          query: this.requestGql
        }
      ];
    }
  };
})();
//# sourceMappingURL=logout.js.map
