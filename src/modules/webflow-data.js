
/*
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Data-processing functions.
 */

import { csvToObjects } from './webflow-data-csv.js';
import { prepareCollectionListDataSource } from '../datasources/webflow-collectionlist-data.js';
import { loadGoogleSheetFromSpec } from '../datasources/google-sheet-data.js';

export class Database {
    data = new Map();

    normalizeKey = function (key) {
        return key.toLowerCase();
    }

    // Add specified JSON document under key.
    add = function (key, json) {

        key = this.normalizeKey(key);

        // Convert string to JSON
        if (typeof json == 'string') {
            json = JSON.parse(json);
        }

        this.data.set(key, json);
    }

    getData = function (key) {

        key = this.normalizeKey(key);

        return this.data.get(key);
    }
    getDataSource = this.getData; // obsolete

    getCountOfRecords = function (dataSourceName) {
        return this.getDataSource(dataSourceName).length;
    }

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

/* Loads all data sources
 * tagged with [wfu-data]
 */
export var loadAllData = function () {

    // Find all elements which specify a data-source
    // for data binding
    var dataSources = $('*[wfu-data]');

    console.log(`sources found = ${dataSources.length}`);

    var db = new Database();

    // Iterate and bind each individually
    $.each(dataSources, function (i, elem) {

        console.log(`processing source - ${elem.getAttribute("wfu-data")}`);

        var data = loadData(
            elem.getAttribute("wfu-data")
        );

        // add to database
        db.data.set(
            elem.getAttribute("wfu-data"),
            data
        );
    })

    return db;
}

export var loadData = function (name) {

    // Find all elements which identify themselves
    // as a data-source
    var dataSource = $(`*[wfu-data='${name}']`);
    if (!dataSource) {
        console.warn(`Datasource: '${name}' does not exist`);
        return;
    }

    // Get data type
    var dataSourceType = $(dataSource).attr("wfu-data-type");
    console.log(`preparing data - ${dataSourceType}`);

    switch (dataSourceType) {
        case 'collection-list': // Webflow collection list
            return prepareCollectionListDataSource(dataSource);
            break;
        case 'json': // static json chunk
            break;
        case 'google-sheet': // Google sheet link
            return loadGoogleSheetFromSpec(
                JSON.parse(
                    $(dataSource).text()
                )
            );
            break;
        default:
            console.error(`Data-source type: '${dataSourceType}' unknown`);
            break;
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

export var csvToData = function (csvd) { 

    var items = csvToObjects(csvd);

    //var json = JSON.stringify(
    //    items,
    //    null,
    //    prettyprint ? 2 : 0 // pretty print
    //);

    return items;
}

/* Return Csv as JSON objects
 * 
 */
export var getCsvAsData = function (url) {

    var data = null;

    $.ajax({
        url: url,
        async: false, // deprecated
        success: function (csvd) {

            data = csvToObjects(csvd);

            //json = JSON.stringify(
            //    items,
            //    null,
            //    prettyprint ? 2 : 0 // pretty print
            //);

        },
        dataType: "text",
        complete: function () {
            // call a function on complete
        }
    });

    return data;
}

export var getDictionaryFromDataRow = function (data, rowIndex) {
    var dict = new Map();

    for (const v in data[rowIndex]) {
        dict.set(
            v,
            data[rowIndex][v]
        );
    }

    return dict;
}
