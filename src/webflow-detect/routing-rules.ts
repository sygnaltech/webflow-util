import { Sa5Detect } from "../webflow-detect";



export class Sa5RoutingRules {

    rules: any[];
    private detectController: Sa5Detect;

    constructor(detectController: Sa5Detect) {
        this.detectController = detectController;
    }

    load(rules: any[]) {

        this.rules = rules;
            
        // Iterate through each item in the 'sa5_route' array
        for (const rule of rules) {
            // Check if the type is 'geo-country'

            switch (rule.type) {
                case 'geo-country': {

                    this.detectController.countries = new Map(
                        rule.route
                    );

                    // // Iterate through each route in the 'route' array
                    // for (const [country, path] of item.route) {
                    //     // Process each country and path
                    //     console.log(`Country: ${country}, Path: ${path}`);
                        
                    //     // Add your conditional processing logic here
                    // }

                    break;
                }
            }
        }
    }

}

/* 

    window['sa5_route'] = [{
        type: 'geo-country',
        path: '/',
        route: [
            ["NZ", "/nz"],
            ["AU", "/au"],
            ["US", "/us"],
            ["GB", "/gb"],
        ]
    }]
    
    ,
    {
        type: 'geo-city',
        route: [
            ["NZ", "/nz"],
            ["AU", "/au"],
            ["US", "/us"],
            ["GB", "/gb"],
        ]
    },
    {
        type: 'ua-browser',
        route: [
            ["android", "/android"],
            ["ios", "/ios"],
        ]
    },
];
*/
// Add onready like user data
// Add data binding 


    // detect.countries.set("NZ", "/nz");
    // detect.countries.set("AU", "/au");
    // detect.countries.set("US", "/us");
    // detect.countries.set("GB", "/gb");
