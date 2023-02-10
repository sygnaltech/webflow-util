
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
  
    debug: false, // Debugging mode

} 

export class WfuCacheItem {

    console = new WfuDebug();

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultWfuCacheItemConfig, config);

        this.console.enabled = this.config.debug; 

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

    async getAsync(value) {

//      console.log("getAsync", value);
      
      var valueHandler = this.config.val[value];
//      console.log("valueHandler", valueHandler);
      
      var v  = sessionStorage.getItem(value);
      // console.log("sessionStorage.getItem", v); 
      
      // No current value
      if (v == null || v == undefined) { 

        // console.log("updateFnAsync");
        
        valueHandler.config.updateFnAsync().then(r => {
          sessionStorage.setItem(value, r);
          // console.log("sessionStorage.setItem", value, r); 
          return r;
        }); 
//        console.debug("no such var");   
      } else {
        // console.log("value found", v); 
      }

      return v; 
    }

}




