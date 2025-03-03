
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Scripts Utilities
 */

import { Sa5Attribute } from "../../globals";
import { booleanValue } from "../../utils";
import { Sa5Core } from "../../webflow-core";
import { Sa5Debug } from "../debug";




export class Sa5EventsActionBase {

    core: Sa5Core;
    debug: Sa5Debug; 
    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        this.core = core;
        this.debug = debug; 

    }

    debugTrigger(actionName: string, eventName: string, ...args: any[]) {

        const TRIGGER_STYLE = "background-color: lightblue;"; 
        const ARROW_STYLE = "color: red;";
        const ACTION_STYLE = "background-color: lightgreen;";
        const EVENT_STYLE = "background-color: lightgrey;";
        
        this.debug.debug(`%c ${eventName}`, EVENT_STYLE, '%c ➔', ARROW_STYLE, `%c ${actionName}`, ACTION_STYLE, '', ...args);                 
        
    }

    init() {

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
