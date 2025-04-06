
/*
 * webflow-trigger
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Scripts Utilities
 */

import { Sa5Attribute } from "../../globals";
import { booleanValue } from "../../utils";
import { Sa5Core } from "../../webflow-core";
import { Sa5Debug } from "../debug";
import { Sa5EventsTriggerBase } from "./triggerBase";




export class Sa5EventsTriggerScriptBase extends Sa5EventsTriggerBase {

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug); 

    }

    getEventName(elem: HTMLElement): string {

        // Get event name
        let eventName: string = elem.getAttribute('event');

        // Get and prepend ns, if specified 
        const eventNs: string = elem.getAttribute('ns'); 
        if(eventNs)
            eventName = eventNs + '.' + eventName; 

        return eventName;
    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
