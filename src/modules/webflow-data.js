
// v2.1
// Sygnal Technology Group
// http://sygnal.com

import { csvToObjects } from './webflow-data-csv.js';

export var getCsv = function (url) {

    var csv = null;

    $.ajax({
        url: url,
        async: false, // deprecated
        success: function (csvd) {

            csv = csvd;

        },
        dataType: "text",
        complete: function () {
            // call a function on complete
        }
    });

    return csv;
}

export var csvToJson = function (csvd, prettyprint = false) {

    var items = csvToObjects(csvd);

    var json = JSON.stringify(
        items,
        null,
        prettyprint ? 2 : 0 // pretty print
    );

    return json;
}

export var getCsvAsJson = function (url, prettyprint = false) {

    var json = null;

    $.ajax({
        url: url,
        async: false, // deprecated
        success: function (csvd) {

            var items = csvToObjects(csvd);

            json = JSON.stringify(
                items,
                null,
                prettyprint ? 2 : 0 // pretty print
            );

        },
        dataType: "text",
        complete: function () {
            // call a function on complete
        }
    });

    return json;
}

