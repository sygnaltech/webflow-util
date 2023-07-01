
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

export class WfuCore {

    init() {

        this.initDebugMode();

    }

    initDebugMode() {

        const debugParamKey = 'debug'; // ?debug=true

        // if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        //     console.log('Running in a browser environment');
        // } else {
        //     console.log('Not running in a browser environment');
        // }

//        var wfuDebugValue = Boolean(localStorage.setItem('wfuDebug', 'true')); 

        let params = new URLSearchParams(window.location.search);
        let hasDebug = params.has(debugParamKey);

        if (hasDebug) {
            let wfuDebug = new WfuDebug(`wfu init`);
            wfuDebug.persistentDebug = this.stringToBoolean(params.get(debugParamKey));
        }

    }

    stringToBoolean(str: string): boolean {
        const truthyValues: string[] = ['1', 'true', 'yes'];
        const falsyValues: string[] = ['0', 'false', 'no'];
      
        if (truthyValues.indexOf(str.toLowerCase()) !== -1) {
            return true;
        // } else if (falsyValues.indexOf(str.toLowerCase()) !== -1) {
        //     return false;
        } else {
            return false;
        }
    }

}

export class WfuDebug {
    
    private localStorageDebugFlag: string = 'wfuDebug';

    private _enabled: boolean = false;
    private _label: string;

    // Get or set WFU persistent debug state
    // which is stored in localStorage. 
    get persistentDebug(): boolean {
        return Boolean(localStorage.getItem(this.localStorageDebugFlag)); 
    }
    set persistentDebug(active: boolean) {
        if (active) {
            localStorage.setItem(this.localStorageDebugFlag, "true");
            console.debug ("WFU persistent debug enabled.");
        } else {
            localStorage.removeItem(this.localStorageDebugFlag); 
            console.debug ("WFU persistent debug disabled.");
        }
    }

    // Enable/disable debugging 
    get enabled(): boolean {

        // localStorage is checked for a debug flag, to enable remote debug enabling 
        // Any non-null string value will resolve to TRUE here, including the string "false" 
        var wfuDebugValue = Boolean(localStorage.getItem(this.localStorageDebugFlag)); 

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


