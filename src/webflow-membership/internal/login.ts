


class WebflowUsysLogin extends WebflowUsysRequest {

    username: string;
    password: string;

    constructor() {
        super(); 
    }

    override get requestGql(): string {
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

    override get requestObj(): object {
        return [
            {
                operationName: "UserLoginRequest",
                variables: {
                    email: this.username,
                    authPassword: this.password,
                },
                query: this.requestGql
            }
        ];
    }

}



// var login_request = [
//     {
//         operationName: "UserLoginRequest",
//         variables: {
//             email: "useremail",
//             authPassword: 'pwd'
//         },
//         query: login_gql
//     }
// ]


/* login

csrf

request
[
    {
        "operationName": "UserLoginRequest",
        "variables": {
            "email": "mike@sygnal.com",
            "authPassword": "test1234"
        },
        "query": "mutation UserLoginRequest($email: String!, $authPassword: String!) {\n  usysCreateSession(email: $email, authPassword: $authPassword) {\n    user {\n      id\n      email\n      createdOn\n      emailVerified\n      __typename\n    }\n    __typename\n  }\n}\n"
    }
]



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






*/

