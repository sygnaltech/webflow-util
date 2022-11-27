
/*
 * webflow-track
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Tracking Utilities
 */


/*
 * Tracker class.
 */

var defaultConfig = {
    method: 'webStorage', // cookie ( not yet implemented )
    prefix: 'track' 
}

export class WfuTracker {

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultConfig, config);

    }

    trackKey = function(key) {
        return `${this.config.prefix}_${key}`;
    }

    track = function(key, val) {
        if (this.config.method == "webStorage")
            sessionStorage.setItem(`${this.trackKey(key)}`, 
                val || "true");
        else
            document.cookie = `${this.config.prefix}_${key}=${val || "true"}`; 

    }

    untrack = function(key) {
        if (this.config.method == "webStorage")
            sessionStorage.removeItem(`${this.trackKey(key)}`); 
        else
            document.cookie =  
                `${this.trackKey(key)}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
    } 

    isTracked = function(key) {
        if (this.config.method == "webStorage")
          return sessionStorage.getItem(`${this.trackKey(key)}`); 
        else {
            return document.cookie
                .split('; ')
                .find((row) => row.startsWith(`${this.trackKey(key)}`))
                ?.split('=')[1];
        }
    }

    reset = function() {
        if (this.config.method == "webStorage") 
            // Should clear only track_ items 
            sessionStorage.clear();  
        else {
            untrack("page-visited");
            untrack("button-clicked");
            untrack("referrer");
        } 
    }

}


