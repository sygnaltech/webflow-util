


import { WfuFormHandler } from './form-handler';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';



export class WfuFormHandlerN8N extends WfuFormHandler {

    constructor(form: Sa5Form, config) {
        super(form, config); // call the super class constructor and pass in the name parameter
    }

//     handleResponseJSON(data, requestStatus, response) {

//         // requestStatus is 'success' any time the webhook
//         // successfully responded ( low-level )

//         // How to access the correct `this` inside a callback 
//         // https://stackoverflow.com/a/20279485
//         this.debug.debug(`Webhook response data: ${JSON.stringify(data)}`);
//         this.debug.debug(`Webhook response status: ${requestStatus}`);
//         this.debug.debug(`Webhook response xhr: ${JSON.stringify(response)}`);

// //        const responseJSON: any = JSON.stringify(data);
// //console.log("N8N response", responseJSON)

// console.log("DATA", data);
// console.log("MESSAGE", data?.message);

//         if (response.status >= 200 && response.status < 300) { 
//             this.form.setMode(WebflowFormMode.Success, 
//                 data?.message);

//             this.form.onFormSubmitSuccess(data);

//         } else {
//             this.form.setMode(WebflowFormMode.Error, 
//                 data?.message);

//             this.form.onFormSubmitFail(data);

//         }

//     }

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



