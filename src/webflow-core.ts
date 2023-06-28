
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
    
    private _enabled: boolean = false;
    private _label: string;

    // Enable/disable debugging 
    get enabled(): boolean {

        // localStorage is checked for a debug flag, to enable remote debug enabling 
        // Any non-null string value will resolve to TRUE here, including the string "false" 
        var wfuDebugValue = Boolean(localStorage.getItem('wfuDebug')); 

        // Or this with the current debug state
        // If either is enabled, debugging is on 
        wfuDebugValue = wfuDebugValue || this._enabled; 

        return wfuDebugValue;
    }
    set enabled(active: boolean) {
        this._enabled = active;
    }

    // Initialize
    constructor(label: string) {

        // Save the label, for console logging
        this._label = label;

    }

    // Start a console log group
    group(name) {
        if (this.enabled)
            console.group(name);
    }

    // End a console log group
    groupEnd() {
        if (this.enabled)
            console.groupEnd();
    }

    // Log debug data to the console
    debug(...args: any[]): void {

        if (this.enabled)
            // Unlimited arguments in a JavaScript function
            // https://stackoverflow.com/a/6396066
            console.debug(this._label, ...args); 
            
    }

}


