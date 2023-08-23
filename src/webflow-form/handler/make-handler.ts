


import { WfuFormHandler } from './form-handler';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';



export class WfuFormHandlerMake extends WfuFormHandler {

    constructor(form: Sa5Form, config) {
        super(form, config); // call the super class constructor and pass in the name parameter
    }


    
    handleResponseText(data, status, response) {


//        console.log("TEXT response ")
        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
        this.debug.debug(`Webhook response status: ${status}`);
        this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);

// in debug mode prefix title with icon? 
// need a logo for sygnal attributes? 


// 200 Accepted

        if (response.status >= 200 && response.status < 300) { 
//            console.log("setting success mode"); 
            this.form.setMode(WebflowFormMode.Success, 
                response.responseText?.message);
        } else {
            this.form.setMode(WebflowFormMode.Error, 
                response.responseText?.message);
        }

    }

    handleResponseJSON(data, status, response) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
        this.debug.debug(`Webhook response status: ${status}`);
        this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);

// in debug mode prefix title with icon? 
// need a logo for sygnal attributes? 



//        console.log("xhr.status", response.status);
// 200 Accepted

        if (response.status >= 200 && response.status < 300) { 
            this.form.setMode(WebflowFormMode.Success, 
                response.responseJSON?.message);
        } else {
            this.form.setMode(WebflowFormMode.Error, 
                response.responseJSON?.message);
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



