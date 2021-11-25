
/*
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Data-processing functions.
 */

import { csvToObjects } from './webflow-data-csv.js';

export class Database {
    data = new Map();

    // Add specified JSON document under key.
    add = function (key, json) {

        // Convert string to JSON
        if (typeof json == 'string') {
            json = JSON.parse(json);
        }

        this.data.set(key, json);
    }

    getDataSource = function (dataSourceName) {
        return this.data.get(dataSourceName);
    }
    
    getCountOfRecords = function (dataSourceName) {
        return this.getDataSource(dataSourceName).length;
    }

    // TEST:
    getDictionary = function (dataSourceName, keyField, valueField) {
        var dict = new Map();

        var ds = this.getDataSource(dataSourceName);

//        console.log(ds);

        for (var i = 0; i < ds.length; i++)
        {
//            console.log(`${0}: ${ds.length} ${ds[i].keyField} / ${ds[i].valueField}`);
            dict.set(
                ds[i][keyField],
                ds[i][valueField]
            );
        }

        console.log(dict);
        return dict;
    }

    // TEST:
    getDictionaryFromRow = function (dataSourceName, row) {
        var dict = new Map();

        var ds = this.getDataSource(dataSourceName);

        for (const v in ds[row]) {
            dict.set(
                v,
                ds[row][v]
            );
        }

        return dict;
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

