
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Adds capabilities to Webflow Forms and form elements.
 */

import { getDataSource } from './webflow-data-collectionlist.js';

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

export var setFormHandlerZapier = function (elem) {

    // Catch any submits on forms
    // Which post to Zapier-webhooks 
    $(elem).submit(function () {

        var form = $(this);

        console.debug("WFU Handle Form submit to Zapier webhook.")

        // Get the Zapier webhook Url
        var hook = $(form).attr("action");
        console.debug(`webhook: ${hook}`);

        // Get the Webflow wait message
        var waitMessage = $(form).children("input[type=submit]").attr("data-wait");
        console.debug(`waitMessage: ${waitMessage}`);

        // Get form post data 
        //    var data = $(form).serialize();

        // Post to hook,
        // Capture & handle result
        $.post(
            hook,
            $(form).serialize(),
            function (data) {

                console.debug(`Webhook result: ${data.status}`);

                if (data.status == "success") {
                    setWebflowFormMode($(form), WebflowFormMode.Success);
                } else {
                    setWebflowFormMode($(form), WebflowFormMode.Error);
                }

            })
            .done(function () {
            })
            .fail(function () {
            })
            .always(function () {
            });

        return false;
    });

}

export const WebflowFormMode = {
    Active: 0,
    Success: 1,
    Error: 2
}

export var setWebflowFormMode = function (form, mode) {

    var success = $(form).siblings("div.w-form-done");
    var error = $(form).siblings("div.w-form-fail");

    switch (mode) {
        case WebflowFormMode.Active:
            console.debug("Change Webflow form mode to active.");
            $(form).css("display", "block");
            $(success).css("display", "none");
            $(error).css("display", "none");
            break;
        case WebflowFormMode.Success:
            console.debug("Change Webflow form mode to success (done).");
            $(form).css("display", "none");
            $(success).css("display", "block");
            $(error).css("display", "none");
            break;
        case WebflowFormMode.Error:
            console.debug("Change Webflow form mode to error.");
            $(form).css("display", "none");
            $(success).css("display", "none");
            $(error).css("display", "block");
            break;
    }

}
