



class WebflowUsysGetAccount extends WebflowUsysRequest {

    constructor() {
        super(); 
    }

//    mutation UserLogoutRequest {\n  usysDestroySession {\n    ok\n    __typename\n  }\n}\n
    override get requestGql(): string {
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

    get requestGql2(): string {
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

    override get requestObj(): object {
        return [
            {
                "operationName": "GetFieldValidations",
                "variables": {},
                "query": this.requestGql,
            },
            {
                "operationName": "FetchUser",
                "variables": {},
                "query": this.requestGql2
            }
        ];
    }

}


/* account


[{"operationName":"GetFieldValidations","variables":{},"query":"query GetFieldValidations {\n  site {\n    usysFieldSchema {\n      id\n      required\n      validations {\n        minLength\n        maxLength\n        min\n        max\n        step\n        extensions\n        options {\n          slug\n          name\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"},{"operationName":"FetchUser","variables":{},"query":"query FetchUser {\n  site {\n    siteUser {\n      createdOn\n      data {\n        email: email(id: \"email\")\n        name: plainText(id: \"name\")\n        acceptCommunications: bool(id: \"accept-communications\")\n        f_5d71d9974ebc3981e82f0ef14d5dea50: plainText(id: \"5d71d9974ebc3981e82f0ef14d5dea50\")\n        f_44601c805dcd048f9cbdef44a46d2733: plainText(id: \"44601c805dcd048f9cbdef44a46d2733\")\n        f_58c376876d2a4d2bd2babd258bc06b25: bool(id: \"58c376876d2a4d2bd2babd258bc06b25\")\n        f_b9ae40771aa5eefb929fcf097960ead3: link(id: \"b9ae40771aa5eefb929fcf097960ead3\")\n        f_a508c7d1ca416d106667fea3d5151540: link(id: \"a508c7d1ca416d106667fea3d5151540\")\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}]

[
    {
        "operationName": "GetFieldValidations",
        "variables": {},
        "query": "query GetFieldValidations {\n  site {\n    usysFieldSchema {\n      id\n      required\n      validations {\n        minLength\n        maxLength\n        min\n        max\n        step\n        extensions\n        options {\n          slug\n          name\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
    },
    {
        "operationName": "FetchUser",
        "variables": {},
        "query": "query FetchUser {\n  site {\n    siteUser {\n      createdOn\n      data {\n        email: email(id: \"email\")\n        name: plainText(id: \"name\")\n        acceptCommunications: bool(id: \"accept-communications\")\n        f_5d71d9974ebc3981e82f0ef14d5dea50: plainText(id: \"5d71d9974ebc3981e82f0ef14d5dea50\")\n        f_44601c805dcd048f9cbdef44a46d2733: plainText(id: \"44601c805dcd048f9cbdef44a46d2733\")\n        f_58c376876d2a4d2bd2babd258bc06b25: bool(id: \"58c376876d2a4d2bd2babd258bc06b25\")\n        f_b9ae40771aa5eefb929fcf097960ead3: link(id: \"b9ae40771aa5eefb929fcf097960ead3\")\n        f_a508c7d1ca416d106667fea3d5151540: link(id: \"a508c7d1ca416d106667fea3d5151540\")\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
    }
]



[
    {
        "operationName": "GetFieldValidations",
        "variables": {},
        "query": 
    },
    {
        "operationName": "FetchUser",
        "variables": {},
        "query": 
    }
]





*/