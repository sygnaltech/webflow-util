
/*
 * webflow-cache
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Cache Utilities 
 * An advanced utility for retriving and caching values online, for maximum performance.
 */

// import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js';
import { WfuDebug } from './webflow-core.js';


var defaultWfuCacheItemConfig = {

    store: "sessionStorage", // | localStorage 
    name: undefined, 
    updateFnAsync: undefined,   
  
} 

export class WfuCacheItem {

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultWfuCacheItemConfig, config);

    }

}

var defaultWfuCacheConfig = {

    debug: false, // Debugging mode

    val: {}, // Cached values 
  
}

export class WfuCache {

    console = new WfuDebug();

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultWfuCacheConfig, config);

        this.console.enabled = this.config.debug; 

    }

    async getAsync(valueName) {

        this.console.group(`getAsync - "${valueName}"`);
        
        var valueHandler = this.config.val[valueName];
        this.console.debug("valueHandler", valueHandler);
        
        var returnValue = sessionStorage.getItem(valueName);
        this.console.debug("cached? sessionStorage.getItem", returnValue); 
      
        const that = this;

        // Not cached
        // go get this value 
        if (returnValue == null || returnValue == undefined) { 
            
            // Call valueHandler function to calculate 
            returnValue = await valueHandler.config.updateFnAsync().then(r => {
                sessionStorage.setItem(valueName, r);
                that.console.debug("sessionStorage.setItem", valueName, r); 
                that.console.debug("calculated", r); 
                return r;
                }); 

        }

        this.console.debug("returning", returnValue); 

        this.console.groupEnd();
        return returnValue; 
    }

}




