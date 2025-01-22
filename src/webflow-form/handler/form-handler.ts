
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';


/*
 * WfuFormHandler class.
 */

var defaultFormHandlerConfig = {

    debug: false, // Debugging mode

}


export class WfuFormHandler {

    debug: Sa5Debug;
    form: Sa5Form;
    config; // Optional config
    handler;

    constructor(form: Sa5Form, config = {}) {

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-form-handler");
        this.debug.debug ("Initializing");

        this.form = form; 

        let action = this.form.formElement.getAttribute("action");
        this.debug.debug("action", action);

        // Get the Webflow wait message
        let waitMessage = this.form.formElement.querySelector("input[type=submit]")
            .getAttribute("data-wait");

    }

    handleResponseJSON(data, requestStatus, response) {

        // requestStatus is 'success' any time the webhook
        // successfully responded ( low-level )

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485
        this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
        this.debug.debug(`Webhook response execution status: ${requestStatus}`);
        this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);

        // if (response.status >= 200 && response.status < 300) { 
        //     this.form.setMode(WebflowFormMode.Success);
        // } else {
        //     this.form.setMode(WebflowFormMode.Error);
        // }

        if (response.status >= 200 && response.status < 300) { 
            this.form.setMode(WebflowFormMode.Success, 
                data?.message);

            this.form.onFormSubmitSuccess(data);

        } else {

            this.form.setMode(WebflowFormMode.Error, 
                data?.message);

            this.form.onFormSubmitFail(data);

        }

    }

    handleResponseText(data, requestStatus, response) {

        this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
        this.debug.debug(`Webhook response status: ${requestStatus}`);
        this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);

        // if (response.status >= 200 && response.status < 300) { 
        //     this.form.setMode(WebflowFormMode.Success);
        // } else {
        //     this.form.setMode(WebflowFormMode.Error);
        // }

        if (response.status >= 200 && response.status < 300) { 
            this.form.setMode(WebflowFormMode.Success, 
                data?.message);

            this.form.onFormSubmitSuccess(data);

        } else {
            this.form.setMode(WebflowFormMode.Error, 
                data?.message);

            this.form.onFormSubmitFail(data);

        } 

    }

    handleFailResponse(jqxhr, settings, ex) {

        this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
        this.debug.debug(`Webhook response FAILED settings: ${settings}`);
        this.debug.debug(`Webhook response FAILED ex: ${ex}`);

        this.form.setMode(WebflowFormMode.Error);

    }

    formDataToJson(formElement: HTMLFormElement): string {
        let formData = new FormData(formElement);
        let jsonObject: { [key: string]: FormDataEntryValue; } = {};
    
        for (const [key, value] of formData.entries()) {
            jsonObject[key] = value;
        }
    
        return JSON.stringify(jsonObject);
    }
    
    init() {

        const form = this.form;

        this.debug.debug("WFU Handle Form submit to webhook (success response).");

        this.form.formElement.addEventListener('submit', async (e) => {

            e.preventDefault();

            // Display "Please Wait" message  
            this.form.setSubmitButtonWaitMessage();






            this.debug.debug("Posting data.");
            this.debug.debug(`Webhook - ${this.form.formElement.getAttribute("action")}`);

            // Post to hook,
            // Capture & handle result
            let formData = new FormData(this.form.formElement);

// console.log(json);  // Outputs the JSON string

//console.log(this.form.formElement.action);

//console.log(formData); 

//console.log("sending data");

            fetch(this.form.formElement.action, {
                method: 'POST', // TODO: change to form's? 
                body: formData
            })
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return response
                        .json()
                        .then(data => this.handleResponseJSON(data, "success", response));
                } else {
                    return response
                        .text()
                        .then(data => this.handleResponseText(data, "success", response));
                }
            })
            .catch((error) => this.handleFailResponse(error, "error", error));
            // .finally(() => {
            //     // Any cleanup code goes here
            // });

            return false;
        });

    }

}

/* 
// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
    }
}
*/