
/*
 * webflow-trigger
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Scripts Utilities
 */

import { Sa5Attribute } from "../../../globals";
import { booleanValue } from "../../../utils";
import { Sa5Core } from "../../../webflow-core";
import { Sa5Debug } from "../../debug";
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

    // Deep merge configuration
    protected mergeConfig(defaults: Record<string, any>, overrides: Record<string, any>): Record<string, any> {
        const result = { ...defaults };
        for (const key in overrides) {
            if (overrides[key] !== undefined && overrides[key] !== null) {
                result[key] = overrides[key];
            }
        }
        return result;
    }

    // Coerce anything to boolean, except for: false, 0, "no", "off", blank, null, or undefined
    protected coerceBoolean(value: any): boolean {
        if (value == null || value === "" || value === false || value === 0) {
            return false;
        }
        if (typeof value === 'string') {
            const normalized = value.trim().toLowerCase();
            return !(normalized === "no" || normalized === "off");
        }
        return true;
    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
