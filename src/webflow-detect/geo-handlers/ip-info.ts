
        // https://ipinfo.io/developers

import { GeoHandlerBase, GeoHandlerInfo } from "./geo-handler-base";

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

//const IP_INFO_TOKEN = '37cce46c605631';

export class IPInfo extends GeoHandlerBase {



    get info(): GeoHandlerInfo {
        return {
            ip: this.userInfoRaw.ip,
            country: this.userInfoRaw.countryCode,
            city: null,
            region: null,
            postal: null,
            timezone: null,
        }
    }


    constructor(token: string = null) {
        super(token);
    }

    async getInfoAsync(): Promise<any> {

        const request = await fetch(`https://ipinfo.io/json?token=${this.token}`); 
        this.userInfoRaw = await request.json()
        


        console.log(
            this.userInfoRaw 
            ); 

        return this.userInfoRaw; 

    }

}