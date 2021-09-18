
// import { hello } from './lib/jquery.csv.js';

// v2.1
// Sygnal Technology Group
// http://sygnal.com

import { WebflowDataUtil } from './webflow-data.js';

export var WebflowTableUtil = function (options) {

    const version = 'v2.1';

    this.getVersion = function () {
        return version;
    }

    // Option variables
    var vars = {
        logging: true,
    };

    var root = this;

    // Constructor
    this.construct = function (options) {
        $.extend(vars, options);

        console.log("test1");

        if (vars.logging)
            console.log("Started Sygnal Util " + version);

    };

    function isNotEmpty(row) {
        return row !== "";
    }

    //// polyfill `.filter()` for ECMAScript <5.1
    //// `f` must be pure (not modify original array).
    //if (!Array.prototype.filter) {
    //    Array.prototype.filter = function (f) {
    //        "use strict";
    //        var p = arguments[1];
    //        var o = Object(this);
    //        var len = o.length;
    //        for (var i = 0; i < len; i++) {
    //            if (i in o) {
    //                var v = o[i];
    //                f.call(p, v, i, o);
    //            }
    //        }

    //        return this;
    //    };
    //}

    this.BuildTableFromCSVUrl = function (elem, url) {

        var webflowDataUtil = new WebflowDataUtil({
            logging: true, // enable logging to console
        });

        webflowDataUtil.getCSV(url).then(function (response) {

            root.BuildTableFromCSV(elem, response);

        }, function (error) {
            console.error(error);
        });

    }

    this.BuildTableFromCSV = function (elem, csv) {

        var webflowDataUtil = new WebflowDataUtil({
            logging: true, // enable logging to console
        });

        var json = webflowDataUtil.csvToJson(csv);

        root.BuildTableFromJSON(elem, json);

    }

    this.BuildTableFromJSON = function (elem, json) {

        root.BuildTableFromArray(
            elem,
            JSON.parse(json)
        );
    }

    // Assumes array is uniform, with the same fields in each item.
    this.BuildTableFromArray = function (elem, arr, headers = null) {

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

    //this.BuildTableFromCSV = function (elem, csv) {

    //    // Split rows
    //    var allRows = csv.split(/\r?\n|\r/).filter(isNotEmpty);

    //    var table = '<table>';
    //    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    //        if (singleRow === 0) {
    //            table += '<thead>';
    //            table += '<tr>';
    //        } else {
    //            table += '<tr>';
    //        }

    //        // Split fields
    //        var rowCells = allRows[singleRow].split(',');

    //        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
    //            if (singleRow === 0) {
    //                table += '<th>';
    //                table += rowCells[rowCell];
    //                table += '</th>';
    //            } else {
    //                table += '<td>';
    //                table += rowCells[rowCell];
    //                table += '</td>';
    //            }
    //        }
    //        if (singleRow === 0) {
    //            table += '</tr>';
    //            table += '</thead>';
    //            table += '<tbody>';
    //        } else {
    //            table += '</tr>';
    //        }
    //    }
    //    table += '</tbody>';
    //    table += '</table>';

    //    // Apply HTML to element
    //    elem.html(table);

    //}

}
