
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

import { Sa5CacheItemTyped } from './webflow-cache/cache-item-typed';
import { Sa5CacheItem } from './webflow-cache/cache-item';
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
// Future: expand into cacheUserKey (app) and a remote key indicating remote source changes
// problem is that might need to be by item 

//    store: Sa5CacheStorageType;
    prefix: string; 
//    val: {}; // as any { [key: string]: Sa5CacheItemBase };

    debug: boolean;

}


var defaultConfig: Sa5CacheConfig = {

    id: 'cache',
    cacheKey: null, 

    // sessionStorage | localStorage | cookies
//    store: Sa5CacheStorageType.sessionStorage, // 'sessionStorage', // ONLY supported 
    prefix: 'cache', 
//    val: {}, // Cached values  
//    val: {}, // as { [key: string]: Sa5CacheItemBase },
    
    debug: false, // Debugging mode
  
}


// Controller
export class Sa5CacheController {

    private items = new Map<string, Sa5CacheItemTyped<any>>();


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

    cacheItemKey = function(itemName) {

//        const CACHE_PREFIX = 'sa5-cache';

        return `${this.config.prefix}_${itemName}`;
    }


    addItem(name: string, item: Sa5CacheItemTyped<any>) {

        // Reference to controller
        // supports cacheKey 
        item.controller = this;

        this.items.set(name, item);
    }

    getItem<T>(name: string): Sa5CacheItemTyped<T> | undefined {

        return this.items.get(name) as Sa5CacheItemTyped<T> | undefined;
    }
/*
    async getAsync(itemName): Promise<string> {

        this.debug.group(`getAsync - "${itemName}"`);
        
        var itemHandler: Sa5CacheItem = this.config.val[itemName];
        this.debug.debug("valueHandler", itemHandler);
        
        if(!itemHandler) {
            console.error("Sa5", `No cache item handler '${itemName}'`); 
        }

        let returnValue = null;
        switch(itemHandler.config.storageType) {

            case Sa5CacheStorageType.localStorage:
                returnValue = localStorage.getItem(
                    this.cacheKey(itemName));
                break;
            case Sa5CacheStorageType.sessionStorage:
                returnValue = sessionStorage.getItem(
                    this.cacheKey(itemName));
                this.debug.debug("cached? sessionStorage.getItem", returnValue); 
                break;
            case Sa5CacheStorageType.cookies:
                break;
            
        }


        // var returnValue = sessionStorage.getItem(
        //     this.cacheKey(itemName));
//        this.debug.debug("cached? sessionStorage.getItem", returnValue); 
      
        const that = this;

        // Not cached
        // go get this value 
        if (returnValue == null || returnValue == undefined) { 
            
            // Call valueHandler function to calculate 
            returnValue = await itemHandler.config.updateFnAsync().then(r => {
                sessionStorage.setItem(
                    this.cacheKey(itemName), r);
                that.debug.debug("sessionStorage.setItem", itemName, r); 
                that.debug.debug("calculated", r); 
                return r;
                }); 

        }

        this.debug.debug("returning", returnValue); 

        this.debug.groupEnd();
        return returnValue; 
    }
*/
    clearCache() {
        // Iterate through items and clear() 
    }

}

//#endregion


// Register
Sa5Core.startup(Sa5CacheController);

// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5Cache"] = Sa5Cache;




