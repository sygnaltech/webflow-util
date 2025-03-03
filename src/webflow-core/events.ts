
/*
 * webflow-core 
 * Events 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Debug Utilities 
 * 
 */

import { VERSION } from "../version";



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
}




