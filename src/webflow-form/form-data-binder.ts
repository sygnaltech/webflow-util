
/*
 * form-data-binder
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * For capturing sender IP info,
 * and appending to a form.
 */

import { Sa5Form } from "../webflow-form";
// import { getDataSource } from './webflow-data-collectionlist.js';

export class Sa5FormDataBinder {

    config; // Optional config

    handler;

    form: Sa5Form;
//    prefix = "ip";

    constructor(form: Sa5Form, config) {
        
        this.form = form;
        
        this.handler = this;

        this.config = config;

    }
/* 
    // Creates an HTML <DATALIST> for binding.
    // Data source assumes array of objects, with a per-item value of 'name'
    createHtmlDataList(dataSourceName, data) {

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

    // Creates a more unique version of a DataSource name (DSN)
    // to ensure it won't conflict with element IDs
    createDsnMoniker(dsn) {
        return `wfu-dsn__${dsn}`;
    }

    // Bind all INPUTS with [wfu-bind] specified
    dataBindAllFormInputs(db) {

        // Find all INPUTS with [wfu-bind] specified
        var dataBoundElements = $('input[wfu-bind]');

        // Iterate and bind each individually
        $.each(dataBoundElements, function (i, elem) {
            dataBindFormInput(elem, db);
        })

    }

    // Bind all SELECTS with [wfu-bind] specified
    dataBindAllFormSelects(db) {

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
    dataBindFormInput(elem, db) {

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

    dataBindFormSelect(elem, db) {

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


    appendIPInfo() {

        const handler = this.handler;
        const form = this.form;

        console.debug("WFU append IP Info to form.");

        // Get GeoIP info
        // and append in hidden fields 
        $.getJSON(
            "https://get.geojs.io/v1/ip/geo.json",
            function (data) {

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-address`,
                value: data.ip
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-country`,
                value: data.country
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-country-code`,
                value: data.country_code
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-region`,
                value: data.region
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-city`,
                value: data.city
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-timezone`,
                value: data.timezone
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-latitude`,
                value: data.latitude
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-longitude`,
                value: data.longitude
            }).appendTo(form);

        });

    }
*/
}
