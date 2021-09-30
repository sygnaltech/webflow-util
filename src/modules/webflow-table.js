
// v2.1
// Sygnal Technology Group
// http://sygnal.com

import { getCsv, csvToJson } from './webflow-data.js';
import { encodeHtml } from './webflow-html.js';

    //function isNotEmpty(row) {
    //    return row !== "";
    //}

// https://www.w3.org/wiki/JavaScript_best_practices#Allow_for_configuration_and_translation
//let renderOptions = {
//    allowHtml: false,
//    headers: null
//}

var tableRenderOptions = {
    encodeHtml: true,
    theme: 'table1',
    headers: null,
    responsive: true
}

export var renderTableFromCsvUrl = function (elem, url, options = {}) {

    //var webflowDataUtil = new WebflowDataUtil({
    //    logging: true, // enable logging to console
    //});

    var csv = getCsv(url);
    //.then(function (response) {

        renderTableFromCsv(elem, csv, options);

    //}, function (error) {
    //    console.error(error);
    //});

}

export var renderTableFromCsv = function (elem, csv, options = {}) {

    //var webflowDataUtil = new WebflowDataUtil({
    //    logging: true, // enable logging to console
    //});

    var json = csvToJson(csv);

    renderTableFromJson(elem, json, options);

}

export var renderTableFromJson = function (elem, json, options = {}) {

    renderTableFromArray(
        elem,
        JSON.parse(json),
        options
    );
}

// Assumes array is uniform, with the same fields in each item.
export var renderTableFromArray = function (elem, arr, options = {}) {

    var settings = $.extend({}, tableRenderOptions, options);

    // If no header specified, 
    // infer Header Row automatically from first array item
    if (settings.headers === null) {
        var headers = [];

        for (var key in arr[0]) {
            if (arr[0].hasOwnProperty(key)) {
                console.log($`{key} = {val}`, key, arr[0][key]);
                headers.push(key);
            }
        }
    }

    console.log(settings);

    console.log($`Headers = {val}`, headers);

    var html = [];
    html.push('<div>');

    settings

    //if (options.responsive ?? tableRenderOptions.responsive)
    //if (options.theme ?? tableRenderOptions.theme)
    //if (options.encodeHtml ?? tableRenderOptions.encodeHtml)

    html.push('<table>');

    // Header
    html.push('<thead>');
    html.push('<tr>');
    for (var key in headers) {
        html.push('<th>');
        html.push(encodeHtml(headers[key])); // HTML-encoded
        html.push('</th>');
    }
    html.push('</tr>');
    html.push('</thead>');


    html.push('<tbody>');
    for (var row = 0; row < arr.length; row++) {

        html.push('<tr>');
        for (var key in headers) {
            html.push('<td>');
            html.push(encodeHtml(arr[row][headers[key]])); // HTML-encoded
            html.push('</td>');
        }
        html.push('</tr>');
    }
    html.push('</tbody>');

    html.push('</table>');

    html.push('</div>');

    // Apply HTML to element
    elem.html(html.join(''));

}

