
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


import { WfuDebug } from '../webflow-core';




interface WfuCacheItemConfig {

    store: string;
    name: string;
    updateFnAsync: string; 
    
    debug: boolean;

}


var defaultConfig: WfuCacheItemConfig = {

    store: "sessionStorage", // | localStorage 
    name: undefined, 
    updateFnAsync: undefined,   

    debug: false, // Debugging mode

}


export class WfuCacheItem {

    config: WfuCacheItemConfig; // Optional config
    debug: WfuDebug; 
 
    constructor(customConfig = {}) {

        // Merge configs
//        this.config = Object.assign({}, defaultConfig, customConfig);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug.enabled = this.config.debug; 

    }

}








