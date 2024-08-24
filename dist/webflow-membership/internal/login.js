(() => {
  // src/webflow-membership/internal/login.ts
  var WebflowUsysLogin = class extends WebflowUsysRequest {
    constructor() {
      super();
    }
    get requestGql() {
      return `
            mutation UserLoginRequest($email: String!, $authPassword: String!) {
                usysCreateSession(email: $email, authPassword: $authPassword) {
                user {
                    id
                    email
                    createdOn
                    emailVerified
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
          operationName: "UserLoginRequest",
          variables: {
            email: this.username,
            authPassword: this.password
          },
          query: this.requestGql
        }
      ];
    }
  };
})();
//# sourceMappingURL=login.js.map
