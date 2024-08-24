(() => {
  // src/webflow-membership/internal/prelogin.ts
  var WebflowUsysPreLogin = class extends WebflowUsysRequest {
    constructor() {
      super();
    }
    get requestGql() {
      return `
            query GetFieldValidations {
                site {
                    usysFieldSchema {
                        id
                        required
                        validations {
                            minLength
                            maxLength
                            min
                            max
                            step
                            extensions
                            options {
                                slug
                                name
                                __typename
                            }
                            __typename
                        }
                        __typename
                    }
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
//# sourceMappingURL=prelogin.js.map
