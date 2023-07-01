
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


import { WfuDebug } from './webflow-core';


//#region WfuCacheItem

enum CacheStorage {

    sessionStorage,
    localStorage,
    cookies

}


interface WfuCacheConfig {

    store: CacheStorage;
    prefix: string;
    val: {};

    debug: boolean;

}


var defaultConfig: WfuCacheConfig = {

    // sessionStorage | localStorage | cookies
    store: CacheStorage.sessionStorage, // 'sessionStorage', // ONLY supported 
    prefix: 'cache', 
    val: {}, // Cached values 

    debug: false, // Debugging mode
  
}


export class WfuCache {

//    console = new WfuDebug("wfu-cache");

    config: WfuCacheConfig; // Optional config
    debug: WfuDebug; 
 
    constructor(customConfig = {}) {

        //        this.config = $.extend({}, defaultWfuCacheConfig, config);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug = new WfuDebug("wfu-cache");
        this.debug.enabled = this.config.debug; 

    }

    cacheKey = function(key) {
        return `${this.config.prefix}_${key}`;
    }

    async getAsync(valueName) {

        this.debug.group(`getAsync - "${valueName}"`);
        
        var valueHandler = this.config.val[valueName];
        this.debug.debug("valueHandler", valueHandler);
        
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

}

//#endregion

//#region WfuCache


window["WfuCache"] = WfuCache;





