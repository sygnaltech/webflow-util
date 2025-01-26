

/*
 * webflow-kiosk
 * Activity detection 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';




interface Sa5KioskActivityConfig {

//    breakpointChangedCallback?: BreakpointChangedCallback; 

}



export class Sa5KioskActivity {

    config: Sa5KioskActivityConfig;
    elem: HTMLElement; 

    constructor(element: HTMLElement, config: Partial<Sa5KioskActivityConfig> = {}) {

        this.elem = element; 
// console.log(this.elem)
        // Merge configs, with defaults
        this.config = {
        }

        let core: Sa5Core = Sa5Core.startup(); 

    }

    init() {

        // Initialize the lazy-loading functionality
//        this.setupTemplateRendering();

    }

}

