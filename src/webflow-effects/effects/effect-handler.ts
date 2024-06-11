
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';


/*
 * WfuFormHandler class.
 */

// var defaultFormHandlerConfig = {

//     debug: false, // Debugging mode

// }


export class Sa5Effect {

    debug: Sa5Debug;
    elem: HTMLElement;
    config; // Optional config
    handler;

    constructor(elem: HTMLElement, config = {}) {

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-effect");
        this.debug.debug ("Initializing");

        this.elem = elem; 

    }

    
    init() {

//        const form = this.form;

        this.debug.debug("Init effect.");


    }

}

