
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
// import { Sa5Form, WebflowFormMode } from '../../webflow-form';


/*
 * WfuDateHandler class.
 */

var defaultDateHandlerConfig = {

    debug: false, // Debugging mode

}


export class WfuDateHandler {

    debug: Sa5Debug;
//    form: Sa5Form;
    config; // Optional config
    handler;
    formatString: string;

    constructor(config = {}) {

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-date-handler");
        this.debug.debug ("Initializing");

        // this.form = form; 

        // let action = this.form.formElement.getAttribute("action");
        // this.debug.debug("action", action);

        // // Get the Webflow wait message
        // let waitMessage = this.form.formElement.querySelector("input[type=submit]")
        //     .getAttribute("data-wait");
        // this.debug.debug(`waitMessage: ${waitMessage}`);

    }
    
    // exec() {



    // }

    formatDate(date: Date): string {

        return null;
    }

}

/* 
// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
    }
}
*/