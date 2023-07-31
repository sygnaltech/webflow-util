


import { WfuFormHandler, WebflowFormMode } from './form-handler';
import { Sa5Form } from '../../webflow-form';



export class WfuFormHandlerZapier extends WfuFormHandler {

    constructor(form: Sa5Form, config) {
        super(form, config); // call the super class constructor and pass in the name parameter
    }

    handleResponse(data, status, xhr) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        super.debug.debug(`Webhook response status: ${status}`);

        super.debug.debug(`Zapier result: ${data.status}`);

        if (data.status == "success") {
            super.handler.setWebflowFormMode(
                WebflowFormMode.Success);
        } else {
            super.handler.setWebflowFormMode(
                WebflowFormMode.Error);
        }

    }

    handleFailResponse(jqxhr, settings, ex) {

        super.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
        super.debug.debug(`Webhook response FAILED settings: ${settings}`);
        super.debug.debug(`Webhook response FAILED ex: ${ex}`);


    } 
    
}



