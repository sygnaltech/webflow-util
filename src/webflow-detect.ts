
//import IPinfoWrapper, { IPinfo, AsnResponse } from "node-ipinfo";


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

//    countries = new Set(["NZ", "AU", "US", "GB"]);

    userInfo: any;

    countries: CountryPathMap = new Map([
    ]);

    constructor() {
        // const countries: CountryPathMap = new Map([
        //     ["NZ", "/nz"],
        //     ["AU", "/au"],
        //     ["US", "/us"],
        //     ["GB", "/gb"]
        // ]);
    }

    async getUserInfo() {

        // https://ipinfo.io/developers

        // 37cce46c605631
        const IP_INFO_TOKEN = '37cce46c605631';

//        const ipinfoWrapper = new IPinfoWrapper(IP_INFO_TOKEN);

        // ipinfoWrapper.lookupIp(null).then((response: IPinfo) => {
        //     console.log(response);
        // });

        // ipinfoWrapper.lookupIp("1.1.1.1").then((response: IPinfo) => {
        //     console.log(response);
        // });
        
        // ipinfoWrapper.lookupASN("AS7922").then((response: AsnResponse) => {
        //     console.log(response);
        // });


        const request = await fetch(`https://ipinfo.io/json?token=${IP_INFO_TOKEN}`); 
        this.userInfo = await request.json()
        
        console.log(
            this.userInfo.ip, 
            this.userInfo.country
            ); 


    }
    
    loadOrGetUserInfo() {
        this.loadUserInfo();

        if(!this.userInfo) {
            this.getUserInfo();
            this.saveUserInfo(); 
        }

    }

    saveUserInfo() {
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1); // Set the expiry date to 1 month from now

        const serializedUserInfo = JSON.stringify(this.userInfo);
        document.cookie = `userInfo=${encodeURIComponent(serializedUserInfo)};expires=${expiryDate.toUTCString()};path=/`;
    }

    loadUserInfo() {
        const allCookies = document.cookie.split('; ');
        for (const cookie of allCookies) {
            const [name, value] = cookie.split('=');
            if (name === 'userInfo') {
                this.userInfo = JSON.parse(decodeURIComponent(value));
                return this.userInfo;
            }
        }
        return null;
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
    isCountryInList(countryCode: string): boolean {
        return this.countries.has(countryCode);
    } 

    getPathForCountry(countryCode: string): string | undefined {

        return this.countries.get(countryCode);
    }


    handleRedirect() {

    }

    // Home should be 

    applyDetectContext() {

        let path = this.getPathForCountry(this.userInfo.country);

        // Redirect  
        if(path) {
            if (window.location.pathname != path)
                window.location.pathname = path;
        }

        // Apply hide/show filter on elements 

        // Allow override context change on country

    }

}