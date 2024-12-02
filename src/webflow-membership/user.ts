
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Member Information Utilities
 */

import { XXH64 } from '../webflow-crypto';
import { toTitleCase, getCookie } from '../utils';
//import { WfuDebug } from './webflow-core.js';

import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

    


/*
 * User class.
 */

//import Md5 from "crypto-api/src/hasher/md5";
export class Sa5User {

    // Track what data has been loaded
    user_data_loaded = {
        email: false,
        account_info: false,
        custom_fields: false,
        access_groups: false,
        direct: false,
    };

    // Webflow data
    user_id; // Webflow user_id

    get user_id_alt() {
        if (!this.email)
            return undefined;

        return XXH64.hash(this.email);
    }

    accept_communications;

    email;

    name;

    get name_short_clean() {

        if (!this.email)
            return undefined;

        // if (this.email == {}) 
        //     return undefined;

        return this.email.split("@")[0];
    }
    get name_short() { // @ segment of email

        if (!this.email)
            return undefined;

        return this.name_short_clean + '@';
    }
    get name_short_tcase() {

        if (!this.email)
            return undefined;

        return toTitleCase(this.name_short_clean);
    }
   
    // access-groups
    access_groups = [];

    // User data
    data = {}; // = new Map();

    // Meta data
    meta = {}; //  = new Map(); 

    // Raw data
    raw = {}; 

    // Direct data 
    direct = {}; 

    constructor() {

    }

    isLoggedIn = function() {

        return getCookie("wf_loggedin") || false;
    }

    fromJSON(json) {

        if (!json)
            return; // no data to load 

        this.user_id = json.user_id;
        this.name = json.name;
        this.email = json.email;

        this.accept_communications = json.accept_communications; 
        this.access_groups = json.access_groups;

        this.data = json.data;

        this.user_data_loaded.email = json.user_data_loaded.email;
        this.user_data_loaded.account_info = json.user_data_loaded.account_info;
        this.user_data_loaded.custom_fields = json.user_data_loaded.custom_fields;
        this.user_data_loaded.access_groups = json.user_data_loaded.access_groups;

        this.raw = json.raw; 
        
    }

    /** 
    toJSON2() {
        return {
            "user_id": this.user_id,
            "name": this.name,
            "email": this.email,
            "accept_communications": this.accept_communications,
            "access_groups": this.access_groups, 
            "user_data_loaded": {
                "email": this.email,
                "account_info": this.account_info,
                "custom_fields": this.custom_fields,
                "access_groups": this.access_groups
            }
        }
    }
    */

}

