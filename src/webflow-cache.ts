
/*
 * webflow-cache 
 * Cache Utilities 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Cache Utilities 
 * An advanced utility for retriving and caching values online, for maximum performance.
 */

import { Sa5Core } from './webflow-core'

import { Sa5Debug } from './webflow-core/debug';


//#region WfuCacheItem

export enum Sa5CacheStorageType {

    sessionStorage,
    localStorage,
    cookies

}


interface Sa5CacheConfig {

    id: string, // Cache instance identifier
    cacheKey: string, // Cache validation key 

    store: Sa5CacheStorageType;
    prefix: string;
    val: {};

    debug: boolean;

}


var defaultConfig: Sa5CacheConfig = {

    id: 'cache',
    cacheKey: null, 

    // sessionStorage | localStorage | cookies
    store: Sa5CacheStorageType.sessionStorage, // 'sessionStorage', // ONLY supported 
    prefix: 'cache', 
    val: {}, // Cached values 

    debug: false, // Debugging mode
  
}


export class Sa5Cache {

//    console = new WfuDebug("wfu-cache");

    config: Sa5CacheConfig; // Optional config
    debug: Sa5Debug; 
 
    constructor(customConfig = {}) {

        //        this.config = $.extend({}, defaultWfuCacheConfig, config);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug = new Sa5Debug("sa5-cache");
        this.debug.enabled = this.config.debug; 

        // Verify cache is valid, if existing
        // clear if not 
        if(this.config.cacheKey) {

        }

    }

    cacheKey = function(key) {
        return `${this.config.prefix}_${key}`;
    }

    async getAsync(valueName): Promise<string> {

        this.debug.group(`getAsync - "${valueName}"`);
        
        var valueHandler = this.config.val[valueName];
        this.debug.debug("valueHandler", valueHandler);
        
        if(!valueHandler) {
            console.error("Sa5", `No cache value handler '${valueName}'`); 
        }

        var returnValue = sessionStorage.getItem(
            this.cacheKey(valueName));
        this.debug.debug("cached? sessionStorage.getItem", returnValue); 
      
        const that = this;

        // Not cached
        // go get this value 
        if (returnValue == null || returnValue == undefined) { 
            
            // Call valueHandler function to calculate 
            returnValue = await valueHandler.config.updateFnAsync().then(r => {
                sessionStorage.setItem(
                    this.cacheKey(valueName), r);
                that.debug.debug("sessionStorage.setItem", valueName, r); 
                that.debug.debug("calculated", r); 
                return r;
                }); 

        }

        this.debug.debug("returning", returnValue); 

        this.debug.groupEnd();
        return returnValue; 
    }

    clearCache() {
        // Iterate through items and clear() 
    }

}

//#endregion


// Register
Sa5Core.startup(Sa5Cache);

// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5Cache"] = Sa5Cache;




