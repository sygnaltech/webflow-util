
/*
 * webflow-core
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
import { Sa5EventsTriggerScriptBase } from "./triggerScriptBase";




export class Sa5EventsTriggerExitIntent extends Sa5EventsTriggerScriptBase {

    private exitTriggered: boolean = false; 

    // Initialize
    constructor(core: Sa5Core, debug: Sa5Debug) {

        super(core, debug);
        
    }

    init() {
        // Attach exit intent detection
        this.setupExitIntentListener();

        // Prepare click actions 
        const actionElems = document.querySelectorAll<HTMLScriptElement>('script[handler="trigger.exit-intent"]');
        actionElems.forEach((elem: HTMLElement) => {

            const eventName = this.getEventName(elem); 
 
            try {
                // Parse the JSON content inside the script tag
                const jsonData = JSON.parse(elem.textContent.trim());
        
//                this.debugTrigger("🕑 timer", eventName); 
                this.debugTrigger("🕑 Exit Intent Registered", eventName);                
                this.core.events.executeEvent(eventName);

            } catch (error) {
                console.error("Invalid JSON in script tag:", elem, error);
            }

        });

    }

    private setupExitIntentListener() {
        document.addEventListener("mouseleave", this.onMouseLeave.bind(this));
        document.addEventListener("visibilitychange", this.onVisibilityChange.bind(this));
    }

    private onMouseLeave(event: MouseEvent) {
        if (event.clientY <= 0) {
            this.triggerExitIntent("mouse-exit");
        }
    }

    private onVisibilityChange() {
        if (document.hidden) {
            this.triggerExitIntent("tab-switch");
        }
    }

    private triggerExitIntent(source: string) {
        if (this.exitTriggered) return; // Prevent multiple triggers
        this.exitTriggered = true;

        const eventName = "exit-intent"; // Can be customized dynamically
        this.debugTrigger(`🚪 Exit intent detected via: ${source}`, eventName);
        this.core.events.executeEvent(eventName);
    }

}


// Export class to SA5 API
// Sa5Core.startup(Sa5Button);
