
// v2.1
// Sygnal Technology Group
// http://sygnal.com

import { getCsv, csvToJson } from './webflow-data.js';

    //function isNotEmpty(row) {
    //    return row !== "";
    //}

export var renderTableFromCsvUrl = function (elem, url) {

    //var webflowDataUtil = new WebflowDataUtil({
    //    logging: true, // enable logging to console
    //});

    var csv = getCsv(url);
    //.then(function (response) {

        renderTableFromCsv(elem, csv);

    //}, function (error) {
    //    console.error(error);
    //});

}

export var renderTableFromCsv = function (elem, csv) {

    //var webflowDataUtil = new WebflowDataUtil({
    //    logging: true, // enable logging to console
    //});

    var json = csvToJson(csv);

    renderTableFromJson(elem, json);

}

export var renderTableFromJson = function (elem, json) {

    renderTableFromArray(
        elem,
        JSON.parse(json)
    );
}

// Assumes array is uniform, with the same fields in each item.
export var renderTableFromArray = function (elem, arr, headers = null) {

    // If no header specified, 
    // infer Header Row automatically from first array item
    if (headers === null) {
        var headers = [];

        for (var key in arr[0]) {
            if (arr[0].hasOwnProperty(key)) {
                console.log($`{key} = {val}`, key, arr[0][key]);
                headers.push(key);
            }
        }
    }

    console.log($`Headers = {val}`, headers);

    var html = '<table>';

    // Header
    html += '<thead>';
    html += '<tr>';
    for (var key in headers) {
        html += '<th>';
        html += headers[key]; // HTML-encoded
        html += '</th>';
    }
    html += '</tr>';
    html += '</thead>';


    html += '<tbody>';
    for (var row = 1; row < arr.length; row++) {

        html += '<tr>';
        for (var key in headers) {
            html += '<td>';
            html += arr[row][headers[key]]; // HTML-encoded
            html += '</td>';
        }
        html += '</tr>';
    }
    html += '</tbody>';

    html += '</table>';

    // Apply HTML to element
    elem.html(html);

}

