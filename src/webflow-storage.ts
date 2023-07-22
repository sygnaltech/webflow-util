
/*
 * webflow-storage 
 * Storage Utilities 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Cookies, webStorage, ... 
 */

import { Sa5Core } from './webflow-core'
import { Sa5Debug } from './webflow-core/debug';


//#region WfuCacheItem

enum StorageMethod {

    sessionStorage,
    localStorage,
    cookies

}


interface Sa5StorageConfig {

    storageMethod: StorageMethod;
    // prefix: string;
    // val: {};

    // debug: boolean;

}


var defaultConfig: Sa5StorageConfig = {

    // sessionStorage | localStorage | cookies
    storageMethod: StorageMethod.sessionStorage, // 'sessionStorage', // ONLY supported 
    // prefix: 'cache', 
    // val: {}, // Cached values 

    // debug: false, // Debugging mode
  
}


export class Sa5Storage {

//    console = new WfuDebug("wfu-cache");

    config: Sa5StorageConfig; // Optional config
    debug: Sa5Debug; 
 
    constructor(customConfig = {}) {

        //        this.config = $.extend({}, defaultWfuCacheConfig, config);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug = new Sa5Debug("sa5-storage");
//        this.debug.enabled = this.config.debug; 

    }

    // cacheKey = function(key) {
    //     return `${this.config.prefix}_${key}`;
    // }

    setValue(key: string, value: string) { 

        sessionStorage.setItem( 
            key, value);

    }


// add cookies npm lib 

    getValue(key: string) {

        switch(this.config.storageMethod) {
            case StorageMethod.cookies:

            // window.getCookie = window.getCookie || function(name) {
            //     var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            //     if (match) return match[2];
            // }


                break;
            case StorageMethod.localStorage:
                break;
            case StorageMethod.sessionStorage:
                break;
        }

        return sessionStorage.getItem(
            key
            );

    }

    // async getValueAsync(key: string) {

    //     this.debug.group(`getAsync - "${key}"`);
        
    //     // var valueHandler = this.config.val[valueName];
    //     // this.debug.debug("valueHandler", valueHandler);
        
    //     var returnValue = sessionStorage.getItem(key
    //         );
      
    //     const that = this;

    //     this.debug.debug("returning", returnValue); 

    //     this.debug.groupEnd();
    //     return returnValue; 
    // }

}

//#endregion


// Register
Sa5Core.startup(Sa5Storage);

// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5Cache"] = Sa5Cache;




