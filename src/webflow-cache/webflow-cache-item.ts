
/*
 * webflow-cache-item 
 * Cache Utilities 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Cache Utilities 
 * An advanced utility for retriving and caching values online, for maximum performance.
 */


import { Sa5Debug } from '../webflow-core';




interface Sa5CacheItemConfig {

    store: string;
    name: string;
    updateFnAsync: string; 
    
    debug: boolean;

}


var defaultConfig: Sa5CacheItemConfig = {

    store: "sessionStorage", // | localStorage 
    name: undefined, 
    updateFnAsync: undefined,   

    debug: false, // Debugging mode

}


export class Sa5CacheItem {

    config: Sa5CacheItemConfig; // Optional config
    debug: Sa5Debug; 
 
    constructor(customConfig = {}) {

        this.debug = new Sa5Debug("sa5-cache-item");

        // Merge configs
//        this.config = Object.assign({}, defaultConfig, customConfig);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug.enabled = this.config.debug; 

    }

}



// window["WfuCacheItem"] = WfuCacheItem;




