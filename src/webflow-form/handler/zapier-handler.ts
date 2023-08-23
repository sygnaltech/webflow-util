


import { WfuFormHandler } from './form-handler';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';



export class WfuFormHandlerZapier extends WfuFormHandler {

    constructor(form: Sa5Form, config) {
        super(form, config); // call the super class constructor and pass in the name parameter
    }

    handleResponseJSON(data, status, response) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.debug.debug(`Webhook response status: ${status}`);
        this.debug.debug(`Zapier result: ${data.status}`);

        if (data.status == "success") {
            this.form.setMode(WebflowFormMode.Success);
        } else {
            this.form.setMode(WebflowFormMode.Error);
        }

    }

    handleFailResponse(jqxhr, settings, ex) {

//console.log("what"); 

        this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
        this.debug.debug(`Webhook response FAILED settings: ${settings}`);
        this.debug.debug(`Webhook response FAILED ex: ${ex}`);


    } 
    
}



