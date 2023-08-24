

export type GeoHandlerInfo = {
    ip: string;
    country: string;
    city: string;

    //latitude
    //longitude

    region: string;
    postal: string;
    timezone: string;

}

export abstract class GeoHandlerBase {

    userInfoRaw: any;

    token: string;

    constructor(token: string = null) {
        this.token = token;
    }

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

    // Retrieve user info from a service
    // then normalize it
    async getInfoAsync(): Promise<any> {
        
    };

}