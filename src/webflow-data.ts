
/*
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Data-processing functions.
 */

//import { csvToObjects } from './webflow-data/webflow-data-csv';
import { prepareCollectionListDataSource } from './webflow-data/webflow-collectionlist-data';
import { loadGoogleSheetFromSpec } from './webflow-data/google-sheet-data';
import { HtmlBuilder } from './webflow-html-builder.js';

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
export const loadAllData = () => {
    // Find all elements which specify a data-source for data binding
    let dataSources = document.querySelectorAll('[wfu-data]');
    console.log(`sources found = ${dataSources.length}`);

    let db = new Database();

    // Iterate and bind each individually
    dataSources.forEach((elem: HTMLElement) => {
        console.log(`processing source - ${elem.getAttribute("wfu-data")}`);

        let data = loadData(
            elem.getAttribute("wfu-data")!
        );

        // add to database
        db.data.set(
            elem.getAttribute("wfu-data")!,
            data
        );
    });

    return db;
}

export const loadData = (name: string) => {
    // Find all elements which identify themselves as a data-source
    let dataSource = document.querySelector(`*[wfu-data='${name}']`);
    if (!dataSource) {
        console.warn(`Datasource: '${name}' does not exist`);
        return;
    }

    // Get data type
    let dataSourceType = dataSource.getAttribute("wfu-data-type");
    console.log(`preparing data - ${dataSourceType}`);

    switch (dataSourceType) {
        case 'collection-list': // Webflow collection list
            return prepareCollectionListDataSource(dataSource as HTMLElement);
        case 'json': // static json chunk
            break;
        case 'google-sheet': // Google sheet link
            return loadGoogleSheetFromSpec(
                JSON.parse(
                    dataSource.textContent || ""
                )
            );
        default:
            console.error(`Data-source type: '${dataSourceType}' unknown`);
            break;
    }
}
export const getCsv = async (url: string): Promise<string | null> => {
    let csv: string | null = null;

    try {
        const response = await fetch(url);
        if (response.ok) {
            csv = await response.text();
        } else {
            console.error(`Error fetching CSV: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error fetching CSV: ${error}`);
    }

    return csv;
}

export const csvToData = (csvd: string): any[] => { 
    let items = null; // BUG: csvToObjects(csvd);

    //let json = JSON.stringify(
    //    items,
    //    null,
    //    prettyprint ? 2 : 0 // pretty print
    //);

    return items;
}


/* Return Csv as JSON objects
 * 
 */
export const getCsvAsData = async (url: string): Promise<any[] | null> => {
    let data: any[] | null = null;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const csvd = await response.text();
// BUG:            data = csvToObjects(csvd);
        } else {
            console.error(`Error fetching CSV: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error fetching CSV: ${error}`);
    }

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



