
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Designer Utilities
 */

import { Sa5Attribute } from "../globals";



export class Sa5Designer {

    constructor() {

    }

    init() {
        this.removeDesignTimeElements();
    }

    // Remove any element tagged for design-time-only
    // used typically for in-designer <style> elements
    // in HTML Embeds. 
    removeDesignTimeElements() {

// console.log("designer clean"); 

        const elements: NodeListOf<HTMLElement> = document.querySelectorAll(
            Sa5Attribute.getBracketed(Sa5Attribute.ATTR_DESIGN)
            );

        elements.forEach(element => {
            element.remove();
        });

    }

}


