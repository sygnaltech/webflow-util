
/*
 * webflow-form
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Adds capabilities to Webflow Forms and form elements.
 */

import { getDataSource } from './webflow-data-collectionlist.js';

var getElemType = function (elem) {

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

export var dataBindAllFormInputs = function () {

    // Find all elements which specify a data-source
    // for data binding
    var dataBoundElements = $('input[data-source]');

    // Iterate and bind each individually
    $.each(dataBoundElements, function (i, elem) {
        dataBindFormInput(elem);
    })

}

export var dataBindFormInput = function (elem) {

    console.log('binding.');

    // Determine element type
    var elemType = getElemType(elem);

    // Get the data-source name
    var dataSource = elem.getAttribute('data-source'); // wfu-bind
    console.log(`dataSource = ${dataSource}`);

    // Handle missing source specification
    if (!dataSource) {
        console.warn('dataBound element found with no datasource specified.');
        return;
    }

    // Get data (build data source)
    var data = getDataSource(dataSource);

    console.log(elemType);

    // Do data binding
    switch (elemType) {
        case 'input':
            {
                console.log(elemType);

                var datalist = document.createElement('datalist');
                datalist.setAttribute("id", dataSource);

                console.log(elemType);

                console.log(data);

                console.log(JSON.stringify(data, 2));

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

                document.body.appendChild(datalist);

                elem.setAttribute("list", dataSource);

            break;
            }
        default:

//            if (vars.logging)
//                console.warn('Unable to databind unknown element type.');

            break;
    }

}

export var dataBindAllFormSelects = function () {

    // Find all elements which specify a data-source
    // for data binding
    var dataBoundElements = $('[data-source]');

    // Iterate and bind each individually
    $.each(dataBoundElements, function (i, elem) {
        dataBindFormSelect(elem);
    })

}

export var dataBindFormSelect = function (elem) {

    // Determine element type
    var elemType = getElemType(elem);

    // Get the data-source name
    var dataSource = elem.getAttribute('data-source');

    // Handle missing source specification
    if (!dataSource) {
        console.warn('dataBound element found with no datasource specified.');
        return;
    }

    // Get data (build data source)
    var data = getDataSource(dataSource);

    // Do data binding
    switch (elemType) {
        case 'select':
            $.each(data, function (key, entry) {

                // create new option element
                var opt = document.createElement('option');

                // create text node to add to option element (opt)
                console.log(entry.text);

                // HTML Decode JSON for Select Option element
                var decodedText = $("<textarea/>").html(entry.text).val();
                console.log(decodedText);

                opt.appendChild(document.createTextNode(decodedText));

                // set value property of opt
                opt.value = entry.id;

                // add opt to end of select box (sel)
                elem.appendChild(opt);

            })

            break;
        default:

//            if (vars.logging)
//                console.warn('Unable to databind unknown element type.');

            break;
    }

}
