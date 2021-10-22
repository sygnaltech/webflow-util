
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

        // Create datalists of all data sources
        createHtmlDataList(dataSourceName, data);
    });

    // Bind all SELECTS with [wfu-bind] specified
    dataBindAllFormSelects(db);

    // Bind all INPUTS with [wfu-bind] specified
    dataBindAllFormInputs(db);

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
    elem.setAttribute("list", dataSourceName);

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
