
/*
 * webflow-trigger
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




export class Sa5EventsTriggerBase {

    core: Sa5Core;
    debug: Sa5Debug; 
    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        this.core = core;
        this.debug = debug; 

    }

    getEventName(elem: HTMLElement, attr: string): string {

        // Get event name
        let eventName: string = elem.getAttribute(attr);

        // Get and prepend ns, if specified 
        const eventNs: string = elem.getAttribute(attr + ':ns'); 
        if(eventNs)
            eventName = eventNs + '.' + eventName; 

        return eventName;
    }
    
    debugTrigger(triggerName: string, eventName: string, ...args: any[]) {

        const TRIGGER_STYLE = "background-color: lightblue;"; 
        const ARROW_STYLE = "color: red;";
        const ACTION_STYLE = "background-color: lightgreen;";
        const EVENT_STYLE = "background-color: lightgrey;";

        this.debug.debug(`%c ${triggerName}`, TRIGGER_STYLE, '%c ➔', ARROW_STYLE, `%c ${eventName}`, EVENT_STYLE, '', ...args);                 
        
    }

    init() {

    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
