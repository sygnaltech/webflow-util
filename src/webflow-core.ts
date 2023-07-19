
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Core Utilities
 */



// export interface Sa5Handler {
//     [0]: string;
//     [1]: Function;
// }


import { Sa5Debug } from './webflow-core/debug'

/*
 * Debugging class.
 */

export class Sa5Core {

    init() {

        this.initDebugMode();

    }

    // Auto-enable debug
    // based on ?sa-debug=true querystring param
    initDebugMode() {

        const debugParamKey = 'sa-debug'; // ?sa-debug=true

//        var wfuDebugValue = Boolean(localStorage.setItem('wfuDebug', 'true')); 

        let params = new URLSearchParams(window.location.search);
        let hasDebug = params.has(debugParamKey);

        if (hasDebug) {
            let wfuDebug = new Sa5Debug(`sa5 init`);
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




// Register
window["sa5"] = window["sa5"] || {};
window["sa5"]["Sa5Core"] = Sa5Core;
