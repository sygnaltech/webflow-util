
/**
 * SA5
 * webflow-detect
 * 
 * Prototype project
 * https://detect-location.webflow.io/ 
 * https://webflow.com/design/detect-location?pageId=64e82fd6ad1f15554ee84f49 
 */


//import IPinfoWrapper, { IPinfo, AsnResponse } from "node-ipinfo";

import { Sa5CacheStorageType, Sa5CacheController } from "./webflow-cache";
import { Sa5CacheItem } from "./webflow-cache/cache-item";
import { Sa5CacheItemTyped } from "./webflow-cache/cache-item-typed";
import { GeoHandlerInfo } from "./webflow-detect/geo-handlers/geo-handler-base";
import { IPInfo } from "./webflow-detect/geo-handlers/ip-info";
import { Sa5RoutingRules } from "./webflow-detect/routing-rules";

type Zone = "Asia" | "Europe" | "North America" | "South America" | "Africa" | "Oceania" | "Antarctica";

const countryToContinent: Record<string, Zone> = {
    "CN": "Asia",
    "JP": "Asia",
    "IN": "Asia",
    // ... other Asian countries

    "FR": "Europe",
    "DE": "Europe",
    "GB": "Europe",
    // ... other European countries

    "US": "North America",
    "CA": "North America",
    "MX": "North America",
    // ... other North American countries

    "BR": "South America",
    "AR": "South America",
    // ... other South American countries

    "ZA": "Africa",
    "EG": "Africa",
    // ... other African countries

    "AU": "Oceania",
    "NZ": "Oceania",
    // ... other Oceania countries

    "AQ": "Antarctica"
    // ... other countries
};

type CountryPathMap = Map<string, string>;

const COOKIE_NAME = 'userInfo'; 

export class Sa5Detect {

    // Internal cache handler
    private cache: Sa5CacheController;

    routingRules: Sa5RoutingRules;

    async userInfo(): Promise<GeoHandlerInfo> {

        const info: GeoHandlerInfo = await this.cache.getItem("userInfo").getAsync() as GeoHandlerInfo;

        // if(!info)
        //     return null;

        // let userInfo: GeoHandlerInfo = JSON.parse(info);

        return info;
    }

    // Map for redirection
    countries: CountryPathMap = new Map([
    ]);

    constructor() {

        this.routingRules = new Sa5RoutingRules(this); 

        // Expiry: 3 days 
        // BUG: ?? 
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 3);

        // Setup cached values
        this.cache = new Sa5CacheController({
            id: 'sa5-detect',
            cacheKey: 'af92b71b-d0cf-4ad5-a06c-97327215af8a',
            prefix: '_sa5'
          });

          this.cache.addItem(
            "userInfo", // ref name 
            new Sa5CacheItemTyped<GeoHandlerInfo>({
                name: "userInfo", // internal cookie name - can autogen  
                storageType: Sa5CacheStorageType.cookies,
                storageExpiry: expiry,
                updateFnAsync: this.getUserInfoAsync   
            }));

    }

    private async getUserInfoAsync(): Promise<GeoHandlerInfo> {

        // 37cce46c605631
        const IP_INFO_TOKEN = '37cce46c605631';
        const ipInfo = new IPInfo(IP_INFO_TOKEN); 

        let rawInfo: any = await ipInfo.getInfoAsync();

        const info: GeoHandlerInfo = {
            ip: rawInfo.ip,
            country: rawInfo.country,
            city: rawInfo.city,
            region: rawInfo.region,
            postal: rawInfo.postal,
            timezone: rawInfo.timezone,        
        }

        // const request = await fetch(`https://ipinfo.io/json?token=${IP_INFO_TOKEN}`); 
        // this.userInfo = await request.json()
        
        console.log(
            info.ip, 
            info.country
            ); 

        return info;
    }
    
    detectGeographicZone() {

        /*
    const continent = countryToContinent[jsonResponse.country];
    console.log(`The country ${jsonResponse.country} is in ${continent}.`);


    // Usage
    const currentCountry = jsonResponse.country;
    if (isCountryInList(currentCountry)) {
        console.log(`${currentCountry} is in the list.`);
    } else {
        console.log(`${currentCountry} is not in the list.`);
    }
    */
    }

    
    // Function to check if a country is in the list
    private isCountryInList(countryCode: string): boolean {
        return this.countries.has(countryCode);
    } 

    private getPathForCountry(countryCode: string): string | undefined {

console.log("getPathForCountry", countryCode);
console.log(this.countries); 

        return this.countries.get(countryCode);
    }

    // Home should be 

    async applyDetectContextAsync() {

//        console.log(this.countries);

        let userInfo: GeoHandlerInfo = await this.cache.getItem<GeoHandlerInfo>("userInfo").getAsync();

//        console.log("APPLYING CONTEXT.");

  //      console.log(userInfo);

        let path = this.getPathForCountry(userInfo.country);

    //    console.log("path", path); 

        /**
         * Route via redirect, if appropriate 
         */

        // Look for a matching rule, by path 
        for (const item of this.routingRules.rules) {

    //        console.log(item.path, window.location.pathname)

            // If path matches current location
            // TODO: expand on this, make it optional
            if (item.path === window.location.pathname) {

                // Check if the type is 'geo-country'
                if (item.type === 'geo-country') {
                    // Iterate through each route in the 'route' array
                    for (const [country, path] of item.route) {

                        if (userInfo.country == country) 

                            // Redirect 
                            if (window.location.pathname != path)
                                window.location.href = path;

                        // Process each country and path 
//                        console.log(`Country: ${country}, Path: ${path}`);
                        
                        // Add your conditional processing logic here
                    }
                }

            }
        }

        // if(path) {
        //     if (window.location.pathname != path)
        //         window.location.href = path;
        // }

        // Apply hide/show filter on elements 

        // Allow override context change on country

    }

}