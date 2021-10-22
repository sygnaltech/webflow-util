
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Adds capabilities to Webflow Forms and form elements.
 */

import { getDataSource } from './webflow-data-collectionlist.js';

export var getElemType = function (elem) {

    // <select> element
    // listbox or drop-down list
    if (elem instanceof HTMLSelectElement) {
        return 'select';
    }

    if (elem instanceof HTMLInputElement) {
        return 'input';
    }

    // This is an unknown and unsupported element type
    // for databinding
    return 'unknown';
}

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

    dataBindAllFormSelects(db);
    dataBindAllFormInputs(db);

}

export var dataBindAllFormInputs = function (db) {

    // Find all elements which specify a data-source
    // for data binding
    //    var dataBoundElements = $('input[data-source]');
    var dataBoundElements = $('input[wfu-bind]');

    // Iterate and bind each individually
    $.each(dataBoundElements, function (i, elem) {
        dataBindFormInput(elem, db);
    })

}

export var dataBindAllFormSelects = function (db) {

    // Find all elements which specify a data-source
    // for data binding
    //    var dataBoundElements = $('[data-source]');
    var dataBoundElements = $('select[wfu-bind]');

    // Iterate and bind each individually
    $.each(dataBoundElements, function (i, elem) {
        dataBindFormSelect(elem, db);
    })

}

// Note, db note really needed, kept for consistency
export var dataBindFormInput = function (elem, db) {

    console.log('binding form INPUT.');

    // Determine element type
//    var elemType = getElemType(elem);

    // Get the data-source name
    var dataSourceName = elem.getAttribute('wfu-bind'); // wfu-bind
//    var dataSource = elem.getAttribute('data-source'); // wfu-bind
    console.log(`wfu-bind = ${dataSourceName}`);

    // Handle missing source specification
    if (!dataSourceName) {
        console.warn('dataBound element found with no datasource specified.');
        return;
    }

    // Validate that it's an INPUT?


    elem.setAttribute("list", dataSourceName);

}

export var dataBindFormSelect = function (elem, db) {

    // Determine element type
    var elemType = getElemType(elem);

    // Get the data-source name
    var dataSourceName = elem.getAttribute('wfu-bind');
//    var dataSource = elem.getAttribute('data-source');

    // Handle missing source specification
    if (!dataSourceName) {
        console.warn('dataBound element found with no datasource specified.');
        return;
    }

    // Get data (build data source)
    var data = getDataSource(dataSourceName);

    // Validate it's a SELECT?

    // Do data binding
    $.each(data, function (key, entry) {

        // create new option element
        var opt = document.createElement('option');

        // create text node to add to option element (opt)
//        console.log(entry.text);

        // HTML Decode JSON for Select Option element
        var decodedText = $("<textarea/>").html(entry.text).val();
//        console.log(decodedText);

        opt.appendChild(document.createTextNode(decodedText));

        // set value property of opt
        opt.value = entry.id;

        // add opt to end of select box (sel)
        elem.appendChild(opt);

    })

}
