
/*
 * webflow-core 
 * Events 
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Debug Utilities 
 * 
 */

import { VERSION } from "../version";
import { Sa5Core } from "../webflow-core";
import { Sa5EventsActionAlert } from "./events/actions/alert";
import { Sa5EventsActionClass } from "./events/actions/class";
import { Sa5EventsActionClick } from "./events/actions/click";
import { Sa5EventsActionVisibility } from "./events/actions/visibility";
import { Sa5Debug } from "./debug";
import { Sa5EventsTriggerClick } from "./events/triggers/click";
import { Sa5EventsTriggerExitIntent } from "./events/triggers/exit-intent";
import { Sa5EventsTriggerHover } from "./events/triggers/hover";
import { Sa5EventsTriggerScrollIntoView } from "./events/triggers/scroll-into-view";
import { Sa5EventsTriggerTimer } from "./events/triggers/timer";



export class Sa5Event {
    private handlers: Set<{ handler: Function; args: any[] }>; 
    name: string;

    constructor(name: string) {
        this.handlers = new Set();
        this.name = name; 
    }

    addHandler(handler: Function, ...args: any[]): void {
        this.handlers.add({ handler, args });
    }

    removeHandler(handler: Function): void {
        this.handlers.forEach(h => {
            if (h.handler === handler) {
                this.handlers.delete(h);
            }
        });
    }

    execute(): void { 
        this.handlers.forEach(({ handler, args }) => handler(...args));
    }

    hasHandlers(): boolean {
        return this.handlers.size > 0;
    }
}

export class Sa5EventRegistry extends Map<string, Sa5Event> {
    constructor() {
        super();
    }

    getEvent(eventName: string): Sa5Event | undefined {
        return this.get(eventName);
    }

    addEvent(eventName: string): void {
        if (!this.has(eventName)) {
            this.set(eventName, new Sa5Event(eventName)); 
        }
    }

    removeEvent(eventName: string): void {
        this.delete(eventName);
    }

    executeEvent(eventName: string): void {
        this.get(eventName)?.execute();
    }

    addEventHandler(eventName: string, handler: Function, ...args: any[]): void {
        if (!this.has(eventName)) {
            this.addEvent(eventName);
        }
        this.get(eventName)?.addHandler(handler, ...args);
    }

    clearHandler(eventName: string, handler: Function): void {
        const event = this.get(eventName);
        if (event) {
            event.removeHandler(handler);
            if (!event.hasHandlers()) {
                this.delete(eventName); // Clean up if no handlers remain
            }
        }
    }

    init(core: Sa5Core) {
        
        // Initialize debugging
        let debug = new Sa5Debug("sa5-events");
        debug.debug (`Initializing v${VERSION}`);
        
        // Prepare click trigger & action 
        (new Sa5EventsTriggerClick(core, debug)).init();  
        (new Sa5EventsActionClick(core, debug)).init(); 

        // Prepare alert action
        (new Sa5EventsActionAlert(core, debug)).init(); 

        // Prepare Scroll-into-view trigger 
        (new Sa5EventsTriggerScrollIntoView(core, debug)).init(); 

        // Prepare Class adder action 
        (new Sa5EventsActionClass(core, debug)).init(); 

        // Prepare timer trigger  
        (new Sa5EventsTriggerTimer(core, debug)).init();      
        
        // Prepare mouseover triggers 
        (new Sa5EventsTriggerHover(core, debug)).init(); 

        // Prepare exit intent trigger 
        (new Sa5EventsTriggerExitIntent(core, debug)).init(); 

        // Prepare visibility actions 
        (new Sa5EventsActionVisibility(core, debug)).init(); 

    }

}




