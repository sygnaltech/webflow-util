
import { Sa5Core } from '../../webflow-core';
import { Sa5Debug } from '../../webflow-core/debug';
import { Sa5Form, WebflowFormMode } from '../../webflow-form';

import { WfuFormHandlerBasin } from './basin-handler';
import { WfuFormHandlerMake } from './make-handler';
import { WfuFormHandlerN8N } from './n8n-handler';
import { WfuFormHandlerZapier } from './zapier-handler';


/*
 * WfuFormHandler class.
 */

var defaultFormHandlerConfig = {

    debug: false, // Debugging mode

}


export class WfuFormHandler {

    debug: Sa5Debug;
    form: Sa5Form;

    formBlock;
    config; // Optional config
    action;
    waitMessage;
    handler;

    // static get WebflowFormMode() {
    //     return WebflowFormMode;
    // }

    constructor(form: Sa5Form, config) {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-form-handler");
        debug.debug ("Initializing");

        this.handler = this;

//        this.config = $.extend({}, defaultFormHandlerConfig, config);

//        this.debug.enabled = this.config.debug; 

        // Resolve Form Block pointer
        // if ($(elem).is("form"))
        //     this.formBlock = $(elem).parent();
        // else
        //     this.formBlock = $(elem);
        // this.debug.debug(this.formBlock);

        // // Resolve ancillary pointers
        // this.form = this.formBlock.children("form");
        // this.debug.debug(this.form);

        this.action = this.form.formElement.getAttribute("action");
        this.debug.debug("action", this.action);

        // Get the Webflow wait message
        this.waitMessage = this.form.formElement.querySelector("input[type=submit]")
            .getAttribute("data-wait");
        this.debug.debug(`waitMessage: ${this.waitMessage}`);

    }


    handleResponse(data, status, xhr) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.debug.debug(`Webhook response status: ${status}`);

        // Assume success
        this.form.setMode(WebflowFormMode.Success);

    }

    handleFailResponse(jqxhr, settings, ex) {

        this.debug.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
        this.debug.debug(`Webhook response FAILED settings: ${settings}`);
        this.debug.debug(`Webhook response FAILED ex: ${ex}`);

    }

    init() {

        const handler = this.handler;
        const form = this.form;

        this.debug.debug("WFU Handle Form submit to webhook (success response).");

        const that = this;

        // Catch any submits on forms
        // Which post to Zapier-webhooks 

        this.form.formElement.addEventListener('submit', (e) => {

            e.preventDefault();

            // Get form post data
            //    var data = $(form).serialize();

            that.debug.debug("Posting data.");
            that.debug.debug(`Webhook - ${this.form.formElement.getAttribute("action")}`);
            that.debug.debug(`Data - ${this.form.formElement.serialize()}`);

            // Post to hook,
            // Capture & handle result
            let formData = new FormData(this.form.formElement);
            fetch(this.form.formElement.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => handler.handleResponse(data, "success")) //, response))
            .catch((error) => handler.handleFailResponse(error, "error", error));
            // .finally(() => {
            //     // Any cleanup code goes here
            // });



            // $.post(
            //     form.attr("action"),
            //     form.serialize(),
            //     function (data, status, xhr) {
            //         that.handleResponse(data, status, xhr); 
            //     }.bind(handler)
            //     )
            //     .done(function () {
            //     })
            //     .fail(function (jqxhr, settings, ex) {
            //         that.handleFailResponse(jqxhr, settings, ex); 
            //     })
            //     .always(function () {
            //     });

            return false;
        });

    }

    static create(form: Sa5Form, config = {}) {
        //type, elem, config) {
        var handler;

        let type = form.formElement.getAttribute("wfu-form-handler"); 

        switch (type) {
            case "zapier":

                handler = new WfuFormHandlerZapier(form, config);
                handler.init();

                break;
            case "n8n":

                handler = new WfuFormHandlerN8N(form, config);
                handler.init();

                break;
            case "make":

                handler = new WfuFormHandlerMake(form, config);
                handler.init();

                break;
            case "basin":

                handler = new WfuFormHandlerBasin(form, config);
                handler.init();

                break;
            case "other":
            case "": // unspecified 

                handler = new WfuFormHandler(form, config);
                handler.init();

                break;
            default:

                console.error(`Unknown wfu-form-handler ${type}`);

                break;
        }

        return handler;
    }

    static createFromElement(elem: HTMLElement) {

        let form: Sa5Form = new Sa5Form(elem);

        // if form is valid
        if (!form.isValid) {
            console.error("Cannot only instantiate Sa5 form handler from a Form element."); 
        }

        return WfuFormHandler.create(form); 

    }

}

/* 
// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
    }
}
*/