
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Core Utilities
 */



/*
 * Debugging class.
 */

export class WfuDebug {
    
    enabled = false; 

    group(name) {
        if (this.enabled)
            console.group(name);
    }

    groupEnd() {
        if (this.enabled)
            console.groupEnd();
    }

    // Unlimited arguments in a JavaScript function
    // https://stackoverflow.com/a/6396066
    debug() {
        if (this.enabled)
            console.debug(...arguments); 
    }

}


