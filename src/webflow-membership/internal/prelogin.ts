





class WebflowUsysPreLogin extends WebflowUsysRequest {

    constructor() {
        super();
    }

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

    override get requestObj(): object {
        return [
            {
                operationName: "GetFieldValidations",
                variables: {
                },
                query: this.requestGql
            }
        ];
    }

}





/* pre-login

RETURN- 

[
    {
        "data": {
            "site": {
                "usysFieldSchema": [
                    {
                        "id": "64d87962b64386e9d1c8f3f2272ea6dd",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    },
                    {
                        "id": "529d1f65a23043357827f868353bf984",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    },
                    {
                        "id": "44601c805dcd048f9cbdef44a46d2733",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    },
                    {
                        "id": "5d71d9974ebc3981e82f0ef14d5dea50",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    },
                    {
                        "id": "e8425a6e7236f911814288ad29c7a4f9",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    },
                    {
                        "id": "055a06a11d3108c2592ae05ee2b764e7",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    },
                    {
                        "id": "58c376876d2a4d2bd2babd258bc06b25",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    },
                    {
                        "id": "b9ae40771aa5eefb929fcf097960ead3",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    },
                    {
                        "id": "a508c7d1ca416d106667fea3d5151540",
                        "required": false,
                        "validations": null,
                        "__typename": "usys_field_schema"
                    }
                ],
                "__typename": "site"
            }
        }
    }
]









*/

