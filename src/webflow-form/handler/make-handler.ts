


import { WfuFormHandler } from './form-handler';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';



export class WfuFormHandlerMake extends WfuFormHandler {

    constructor(form: Sa5Form, config) {
        super(form, config); // call the super class constructor and pass in the name parameter
    }

    handleResponse(data, status, xhr) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
        this.debug.debug(`Webhook response status: ${status}`);
        this.debug.debug(`Webhook response xhr: ${JSON.stringify(xhr)}`);

        if (xhr.status >= 200 && xhr.status < 300) { 
            this.form.setMode(WebflowFormMode.Success, 
                xhr.responseJSON?.message);
        } else {
            this.form.setMode(WebflowFormMode.Error, 
                xhr.responseJSON?.message);
        }

    }

    handleFailResponse(jqxhr, settings, ex) {

        this.debug.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
        this.debug.debug(`Webhook response FAILED settings: ${settings}`);
        this.debug.debug(`Webhook response FAILED ex: ${ex}`);

        // Webhook is off - Webhook is temporarily disabled.
        // ? Scenario is off
        if (jqxhr.status == 400) {
            console.error(jqxhr.responseText);
            // use default error message, or maybe "Service unavailable." 
            this.form.setMode(WebflowFormMode.Error, 
                jqxhr.responseJSON?.message);
        } else {
            this.form.setMode(WebflowFormMode.Error, 
                jqxhr.responseJSON?.message);
        }

    } 
    
}



