


import { WfuFormHandler, WebflowFormMode } from './form-handler';
import { Sa5Form } from '../../webflow-form';



export class WfuFormHandlerN8N extends WfuFormHandler {

    constructor(form: Sa5Form, config) {
        super(form, config); // call the super class constructor and pass in the name parameter
    }

    handleResponse(data, status, xhr) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485
        super.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
        super.debug.debug(`Webhook response status: ${status}`);
        super.debug.debug(`Webhook response xhr: ${JSON.stringify(xhr)}`);

        if (xhr.status >= 200 && xhr.status < 300) { 
            super.handler.setWebflowFormMode(
                WebflowFormMode.Success, xhr.responseJSON?.message);
        } else {
            super.handler.setWebflowFormMode(
                WebflowFormMode.Error, xhr.responseJSON?.message);
        }

    }

    handleFailResponse(jqxhr, settings, ex) {

        super.debug.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
        super.debug.debug(`Webhook response FAILED settings: ${settings}`);
        super.debug.debug(`Webhook response FAILED ex: ${ex}`);

        // Webhook is off - Webhook is temporarily disabled.
        // ? Scenario is off
        if (jqxhr.status == 400) {
            console.error(jqxhr.responseText);
            // use default error message, or maybe "Service unavailable." 
            super.handler.setWebflowFormMode(
                WebflowFormMode.Error, jqxhr.responseJSON?.message);
        } else {
            super.handler.setWebflowFormMode(
                WebflowFormMode.Error, jqxhr.responseJSON?.message);
        }

    } 
    
}



