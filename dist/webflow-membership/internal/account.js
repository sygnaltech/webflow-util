(() => {
  // src/webflow-membership/internal/account.ts
  var WebflowUsysGetAccount = class extends WebflowUsysRequest {
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
    get requestGql2() {
      return `
            query FetchUser {
                site {
                    siteUser {
                        createdOn
                        data {
                            email: email(id: "email")
                            name: plainText(id: "name")
                            acceptCommunications: bool(id: "accept-communications")
                            f_5d71d9974ebc3981e82f0ef14d5dea50: plainText(id: "5d71d9974ebc3981e82f0ef14d5dea50")
                            f_44601c805dcd048f9cbdef44a46d2733: plainText(id: "44601c805dcd048f9cbdef44a46d2733")
                            f_58c376876d2a4d2bd2babd258bc06b25: bool(id: "58c376876d2a4d2bd2babd258bc06b25")
                            f_b9ae40771aa5eefb929fcf097960ead3: link(id: "b9ae40771aa5eefb929fcf097960ead3")
                            f_a508c7d1ca416d106667fea3d5151540: link(id: "a508c7d1ca416d106667fea3d5151540")
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
          "operationName": "GetFieldValidations",
          "variables": {},
          "query": this.requestGql
        },
        {
          "operationName": "FetchUser",
          "variables": {},
          "query": this.requestGql2
        }
      ];
    }
  };
})();
//# sourceMappingURL=account.js.map
