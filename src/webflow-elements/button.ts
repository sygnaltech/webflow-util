
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Scripts Utilities
 */

import { Sa5Attribute } from "../globals";
import { booleanValue } from "../utils";
import { Sa5Core } from "../webflow-core";




export class Sa5Button {

    element: HTMLElement;
    name: string;

    get enabled(): boolean {

        // TODO: test falsy, truthy, and null and "" and "null"
        return booleanValue(
            this.element.getAttribute(Sa5Attribute.ATTR_BUTTON_ENABLED) 
        )

    }
    set enabled(enabled: boolean) {

        this.element.setAttribute(
            Sa5Attribute.ATTR_BUTTON_ENABLED, 
            enabled ? "true" : "false" 
            );

        this.applyEnabledState();

    }

    private applyEnabledState() {

        // Disabled styling
        if (this.element.hasAttribute(Sa5Attribute.ATTR_BUTTON_DISABLED_CLASS)) {
            let disabledClass = this.element.getAttribute(Sa5Attribute.ATTR_BUTTON_DISABLED_CLASS);

            if(this.enabled) { 
                // Remove disabled class styling, if specified
                this.element.classList.remove(disabledClass);
            } else {
                // Add disabled class styling 
                this.element.classList.add(disabledClass);
            }
                
        }
    }

    // Initialize
    constructor(element: HTMLElement) {

        this.element = element; 
        this.name = element.getAttribute(Sa5Attribute.ATTR_ELEMENT_BUTTON); 

        // should be an A element 

    }

    init() {

// console.log("init button");

        this.applyEnabledState(); 

        // Determine initial enabled / disabled state
        this.element.addEventListener("click", (event) => {
            // block button click 
            if (!this.enabled) 
                event.preventDefault();
            
//            console.log("button clicked."); 
            
        });


        this.element.removeAttribute(Sa5Attribute.ATTR_PRELOAD);

    }

    static create(name: string): Sa5Button {

        const elem = document.querySelector(`[${Sa5Attribute.ATTR_ELEMENT_BUTTON}='${name}']`) as HTMLElement; 
        if (elem) {
            const button = new Sa5Button(elem);

            return button; 
        } 

        return null;
    }

}


// Export class to SA5 API
Sa5Core.startup(Sa5Button);
