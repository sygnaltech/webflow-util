
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Adds capabilities to Webflow Forms and form elements.
 */

import { getDataSource } from './webflow-data-collectionlist.js';
import { WfuDebug } from './webflow-core.js';

// Creates an HTML <DATALIST> for binding.
// Data source assumes array of objects, with a per-item value of 'name'
export var createHtmlDataList = function (dataSourceName, data) {

    var datalist = document.createElement('datalist');
    datalist.setAttribute("id", dataSourceName);

//    console.log(elemType);

    console.log(`creating dataList '${dataSourceName}'`);
    console.log(data);

//    console.log(JSON.stringify(data, 2));

    $.each(data, function (key, entry) {
        console.log(`iterate`);

        // create new option element
        var opt = document.createElement('option');

        // create text node to add to option element (opt)
        console.log(entry.text);

        // HTML Decode JSON for Select Option element
        var decodedText = $("<textarea/>").html(entry.text).val();
        //                console.log(decodedText);

        opt.setAttribute("value", decodedText);

        //                opt.appendChild(document.createTextNode(decodedText));

        // set value property of opt
        //                opt.value = entry.id;

        // add opt to end of select box (sel)
        datalist.appendChild(opt);

    });

    console.log(datalist);

    document.body.appendChild(datalist);

}

export var dataBindAllForms = function (db) {

    // Create datalists from all data sources
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
    db.data.forEach((data, dataSourceName) => {

        // Create HTML datalists of all data sources
        // for data binding
        createHtmlDataList(
            createDsnMoniker(dataSourceName), // creates a more unique name to avoid element ID conflicts
            data
        );
    });

    // Bind all SELECTS with [wfu-bind] specified
    dataBindAllFormSelects(db);

    // Bind all INPUTS with [wfu-bind] specified
    dataBindAllFormInputs(db);

}

// Creates a more unique version of a DataSource name (DSN)
// to ensure it won't conflict with element IDs
export var createDsnMoniker = function (dsn) {
    return `wfu-dsn__${dsn}`;
}

// Bind all INPUTS with [wfu-bind] specified
export var dataBindAllFormInputs = function (db) {

    // Find all INPUTS with [wfu-bind] specified
    var dataBoundElements = $('input[wfu-bind]');

    // Iterate and bind each individually
    $.each(dataBoundElements, function (i, elem) {
        dataBindFormInput(elem, db);
    })

}

// Bind all SELECTS with [wfu-bind] specified
export var dataBindAllFormSelects = function (db) {

    // Find all SELECTS with [wfu-bind] specified
    var dataBoundElements = $('select[wfu-bind]');

    // Iterate and bind each individually
    $.each(dataBoundElements, function (i, elem) {
        dataBindFormSelect(elem, db);
    })

}

// Note, db not really needed for INPUT binding,
// since they are bound to the DATALIST elements already created.
// However kept in the call for pattern consistency
export var dataBindFormInput = function (elem, db) {

    // Validate element type
    if (!(elem instanceof HTMLInputElement)) {
        console.error(`Attempted to INPUT databind a non-INPUT element.`);
        return;
    }

    // Get the data-source name
    var dataSourceName = elem.getAttribute('wfu-bind');
    console.log(`wfu-bind = ${dataSourceName}`);

    // Handle missing source specification
    if (!dataSourceName) {
        console.warn('dataBound element found with no datasource specified.');
        return;
    }

    // Add HTML attribute that connects the INPUT
    // to the DATALIST
    elem.setAttribute(
        "list",
        createDsnMoniker(dataSourceName)
    );

}

export var dataBindFormSelect = function (elem, db) {

    // Validate element type
    if (!(elem instanceof HTMLSelectElement)) {
        console.error(`Attempted to SELECT databind a non-SELECT element.`);
        return;
    }

    // Get the data-source name
    var dataSourceName = elem.getAttribute('wfu-bind');

    // Handle missing source specification
    if (!dataSourceName) {
        console.warn('dataBound element found with no datasource specified.');
        return;
    }

    // Do data binding
    $.each((db.data.get(dataSourceName)), function (key, entry) {

        // create new option element
        var opt = document.createElement('option');

        // create text node to add to option element (opt)
        // HTML Decode JSON for Select Option element
        var decodedText = $("<textarea/>").html(entry.text).val(); // HTML Decode text
        opt.appendChild(document.createTextNode(decodedText));

        // set value property of opt
        opt.value = entry.id;

        // add opt to end of select box (sel)
        elem.appendChild(opt);

    });

}



/*
 * WfuFormHandler class.
 */

var defaultFormHandlerConfig = {

    debug: false, // Debugging mode

}

export const WebflowFormMode = {
    Active: 0,
    Success: 1,
    Error: 2
}

export class WfuFormHandler {

    console = new WfuDebug();

    formBlock;
    config; // Optional config
    form;
    action;
    waitMessage;
    handler;

    static get WebflowFormMode() {
        return WebflowFormMode;
    }

    constructor(elem, config) {

        this.handler = this;

        this.config = $.extend({}, defaultFormHandlerConfig, config);

        this.console.enabled = this.config.debug; 

        // Resolve Form Block pointer
        if ($(elem).is("form"))
            this.formBlock = $(elem).parent();
        else
            this.formBlock = $(elem);
        this.console.debug(this.formBlock);

        // Resolve ancillary pointers
        this.form = this.formBlock.children("form");
        this.console.debug(this.form);

        this.action = this.form.attr("action");
        this.console.debug(this.action);

        // Get the Webflow wait message
        this.waitMessage = $(this.form).children("input[type=submit]").attr("data-wait");
        this.console.debug(`waitMessage: ${this.waitMessage}`);

    }

    // es6 call class methods from within same class
    // https://stackoverflow.com/a/36248405

    setWebflowFormMode (mode, message) {

        this.console.debug("setting form mode.");

        var success = $(this.form).siblings("div.w-form-done");
        var error = $(this.form).siblings("div.w-form-fail");

        switch (mode) {
            case WebflowFormMode.Active:
                this.console.debug("Change Webflow form mode to active.");
                $(this.form).css("display", "block");
                $(success).css("display", "none");
                $(error).css("display", "none");
                break;
            case WebflowFormMode.Success:
                this.console.debug("Change Webflow form mode to success (done).");
                $(success).children("*[wfu-form-message]").html(message);
                $(this.form).css("display", "none");
                $(success).css("display", "block");
                $(error).css("display", "none");
                break;
            case WebflowFormMode.Error:
                this.console.debug("Change Webflow form mode to error.");
                $(error).children("*[wfu-form-message]").html(message);
                $(this.form).css("display", "none");
                $(success).css("display", "none");
                $(error).css("display", "block");
                break;
        }

    }

    handleResponse(data, status, xhr) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.console.debug(`Webhook response status: ${status}`);

        // Assume success
        this.setWebflowFormMode(WebflowFormMode.Success);

    }

    handleFailResponse(jqxhr, settings, ex) {

        this.console.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
        this.console.debug(`Webhook response FAILED settings: ${settings}`);
        this.console.debug(`Webhook response FAILED ex: ${ex}`);

    }

    init() {

        const handler = this.handler;
        const form = this.form;

        this.console.debug("WFU Handle Form submit to webhook (success response).");

        const that = this;

        // Catch any submits on forms
        // Which post to Zapier-webhooks 
        $(this.form).submit(function (e) {

            e.preventDefault();

            // Get form post data
            //    var data = $(form).serialize();

            that.console.debug("Posting data.");
            that.console.debug(`Webhook - ${form.attr("action")}`);
            that.console.debug(`Data - ${form.serialize()}`);

            // Post to hook,
            // Capture & handle result
            $.post(
                form.attr("action"),
                form.serialize(),
                function (data, status, xhr) {
                    that.handleResponse(data, status, xhr); 
                }.bind(handler)
                )
                .done(function () {
                })
                .fail(function (jqxhr, settings, ex) {
                    that.handleFailResponse(jqxhr, settings, ex); 
                })
                .always(function () {
                });

            return false;
        });

    }

}






export class WfuFormHandlerN8N extends WfuFormHandler {

    constructor(elem, config) {
        super(elem, config); // call the super class constructor and pass in the name parameter
    }

    handleResponse(data, status, xhr) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.console.debug(`Webhook response data: ${JSON.stringify(data)}`);
        this.console.debug(`Webhook response status: ${status}`);
        this.console.debug(`Webhook response xhr: ${JSON.stringify(xhr)}`);

        if (xhr.status >= 200 && xhr.status < 300) { 
            handler.setWebflowFormMode(WebflowFormMode.Success, xhr.responseJSON?.message);
        } else {
            handler.setWebflowFormMode(WebflowFormMode.Error, xhr.responseJSON?.message);
        }

    }

    handleFailResponse(jqxhr, settings, ex) {

        this.console.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
        this.console.debug(`Webhook response FAILED settings: ${settings}`);
        this.console.debug(`Webhook response FAILED ex: ${ex}`);

        // Webhook is off - Webhook is temporarily disabled.
        // ? Scenario is off
        if (jqxhr.status == 400) {
            console.error(jqxhr.responseText);
            // use default error message, or maybe "Service unavailable." 
            handler.setWebflowFormMode(WebflowFormMode.Error, jqxhr.responseJSON?.message);
        } else {
            handler.setWebflowFormMode(WebflowFormMode.Error, jqxhr.responseJSON?.message);
        }

    } 
    
}

export class WfuFormHandlerZapier extends WfuFormHandler {

    constructor(elem, config) {
        super(elem, config); // call the super class constructor and pass in the name parameter
    }

    handleResponse(data, status, xhr) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.console.debug(`Webhook response status: ${status}`);

        this.console.debug(`Zapier result: ${data.status}`);

        if (data.status == "success") {
            handler.setWebflowFormMode(WebflowFormMode.Success);
        } else {
            handler.setWebflowFormMode(WebflowFormMode.Error);
        }

    }

    handleFailResponse(jqxhr, settings, ex) { 

        this.console.debug(`Webhook response FAILED jqxhr: ${jqxhr}`);
        this.console.debug(`Webhook response FAILED settings: ${settings}`);
        this.console.debug(`Webhook response FAILED ex: ${ex}`);

    }

}

export class WfuFormHandlerMake extends WfuFormHandler {

    constructor(elem, config) {
        super(elem, config); // call the super class constructor and pass in the name parameter
    }

    handleResponse(data, status, xhr) {

        // How to access the correct `this` inside a callback 
        // https://stackoverflow.com/a/20279485

        this.console.debug(`Webhook response data: ${JSON.stringify(data)}`);
        this.console.debug(`Webhook response status: ${status}`);
        this.console.debug(`Webhook response xhr: ${JSON.stringify(xhr)}`);

        if (xhr.status >= 200 && xhr.status < 300) { 
            handler.setWebflowFormMode(WebflowFormMode.Success, xhr.responseJSON?.message);
        } else {
            handler.setWebflowFormMode(WebflowFormMode.Error, xhr.responseJSON?.message);
        }

    }

    handleFailResponse(jqxhr, settings, ex) { 

        this.console.debug(`Webhook response FAILED jqxhr: ${JSON.stringify(jqxhr)}`);
        this.console.debug(`Webhook response FAILED settings: ${settings}`);
        this.console.debug(`Webhook response FAILED ex: ${ex}`);

        // Webhook is off - Webhook is temporarily disabled.
        // ? Scenario is off
        if (jqxhr.status == 400) {
            console.error(jqxhr.responseText);
            // use default error message, or maybe "Service unavailable." 
            handler.setWebflowFormMode(WebflowFormMode.Error, jqxhr.responseJSON?.message);
        } else {
            handler.setWebflowFormMode(WebflowFormMode.Error, jqxhr.responseJSON?.message);
        }

    }

}

export class WfuFormHandlerBasin extends WfuFormHandler {

    constructor(elem, config) {
        super(elem, config); // call the super class constructor and pass in the name parameter
    }

}

// https://dev.to/sanderdebr/js-es6-design-patterns-factory-3a3g 
export const WfuFormHandlerFactory = {
    create: function (type, elem, config) {
        var handler;

        switch (type) {
            case "zapier":

                handler = new WfuFormHandlerZapier($(this));
                handler.init();

                break;
            case "n8n":

                handler = new WfuFormHandlerN8N($(this));
                handler.init();

                break;
            case "make":

                handler = new WfuFormHandlerMake($(this));
                handler.init();

                break;
            case "basin":

                handler = new WfuFormHandlerBasin(elem);
                handler.init();

                break;
            case "other":
            case "": // unspecified 

                handler = new WfuFormHandler($(this));
                handler.init();

                break;
            default:

                console.error(`Unknown wfu-form-handler ${handlerName}`);

                break;
        }

        return handler;
    }
}
