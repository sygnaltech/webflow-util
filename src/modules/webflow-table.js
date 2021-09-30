
/*
 * Sygnal Technology Group
 * http://sygnal.com
 */

import { getCsv, csvToJson } from './webflow-data.js';
import { encodeHtml } from './webflow-html.js';

var tableRenderOptions = {
    encodeHtml: true,
    theme: 'default',
    headers: null,
    responsive: true,
    striped: false,
    bordered: true,
    backgroundColor: null // transparent
}

export var renderTableFromCsvUrl = function (elem, url, options = {}) {

    //var webflowDataUtil = new WebflowDataUtil({
    //    logging: true, // enable logging to console
    //});

    var csv = getCsv(url);
    //.then(function (response) {

    renderTableFromCsv(
        elem,
        csv,
        options
    );

    //}, function (error) {
    //    console.error(error);
    //});

}

export var renderTableFromCsv = function (elem, csv, options = {}) {

    //var webflowDataUtil = new WebflowDataUtil({
    //    logging: true, // enable logging to console
    //});

    var json = csvToJson(csv);

    renderTableFromJson(
        elem,
        json,
        options
    );

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

    // Consolidate options + defaults into settings
    var settings = $.extend({}, tableRenderOptions, options);


    // dynamically add theme CSS
    // e.g. <link href="https://localhost/dist/theme/table1/table.css" rel="stylesheet" type="text/css" />
    // BUG: prevent multiple loads
    if (settings.theme) {
        var stylesheet = $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: `https://localhost/dist/theme/${settings.theme}/table.css`
        });
    stylesheet.appendTo("head");
    }



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

    // Putting all clases on DIV for simplicity
    var divClass = [];
    if (settings.responsive)
        divClass.push('wfu-table-responsive'); // div
    divClass.push('wfu-table'); // table
    if (settings.striped)
        divClass.push('wfu-striped'); // table
    if (settings.bordered)
        divClass.push('wfu-bordered'); // table

    var divStyle = [];
    if (settings.backgroundColor)
        divStyle.push(`background-color: ${settings.backgroundColor}`);

    html.push("<!-- Sygnal Webflow Utils -->");
    html.push(`<div class='${divClass.join(" ")}' style='${divStyle.join("; ")}'>`);
    
    //if (options.responsive ?? tableRenderOptions.responsive)
    //if (options.theme ?? tableRenderOptions.theme)
    //if (options.encodeHtml ?? tableRenderOptions.encodeHtml)

    html.push('<table>');

    // Header
    html.push('<thead>');
    html.push('<tr>');
    for (var key in headers) {
        html.push('<th>');
        if (settings.encodeHtml)
            html.push(encodeHtml(headers[key])); // HTML-encoded
        else
            html.push(headers[key]); 
        html.push('</th>');
    }
    html.push('</tr>');
    html.push('</thead>');

    // Body
    html.push('<tbody>');
    for (var row = 0; row < arr.length; row++) {

        html.push('<tr>');
        for (var key in headers) {
            html.push('<td>');
            if (settings.encodeHtml)
                html.push(encodeHtml(arr[row][headers[key]])); // HTML-encoded
            else
                html.push(arr[row][headers[key]]); 
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

