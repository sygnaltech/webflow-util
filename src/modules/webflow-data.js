
/*
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Data-processing functions.
 */

import { csvToObjects } from './webflow-data-csv.js';

export class Database {
    data = new Map();

    getDataSource = function (dataSourceName) {
        return this.data.get(dataSourceName);
    }

    getCountOfRecords = function (dataSourceName) {
        return this.getDataSource(dataSourceName).length;
    }

}


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

