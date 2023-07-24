
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

    public handlers = [];

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

    static startup(module: any | null = null) {

//        console.debug("sa5core", "startup");

//        console.debug("INITIALIZING SA5CORE");
//        console.log(window["sa5"]);
        
        let sa5instance = window['sa5'];

        // Initialize Sa5Core if needed
        if(!(sa5instance?.constructor?.name == "Sa5Core")) {

    //         if(window["sa5"])
    // console.log("name", window["sa5"].name);

            var core = new Sa5Core();

            // Absorb handlers
            if(Array.isArray(sa5instance))
                core.handlers = window["sa5"];

            window["sa5"] = core;
            window["Sa5"] = window["sa5"];
            console.log("post", window["sa5"] instanceof Sa5Core);

        } 

        // Add new module
        //window["sa5"] = window["sa5"] || []; // {};
        if (module) {

            console.debug("Registered module", module.name); 

            window["sa5"][module.name] = module;
            console.log(window["sa5"][module.name]);
        }

        // instance.constructor.name

    }

    // Add new handlers
    push(o) {
        this.handlers.push(o);
    }

}



Sa5Core.startup();
// Register
//window["sa5"] = window["sa5"] || []; // {};
//window["sa5"]["Sa5Core"] = Sa5Core;
