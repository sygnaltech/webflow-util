
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Debug Utilities
 */

import { VERSION } from "../version";



export class Sa5Debug {
    
    private localStorageDebugFlag: string = 'sa5-debug';

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
            console.debug (`sa5-core debug enabled (persistent).`);
        } else {
            localStorage.removeItem(this.localStorageDebugFlag); 
            console.debug (`sa5-core debug disabled (persistent).`);
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

    /**
     * Returns the HTML style string
     * @param elem The element to return the string for 
     * @returns 
     */
    static getStyleString(elem: HTMLElement): string {

        let styleString = '';
    
        for (let i = 0; i < elem.style.length; i++) {
            const property = elem.style[i];
            const value = elem.style.getPropertyValue(property);
            styleString += `${property}: ${value}; `;
        }
    
        return styleString; 
    }

}


