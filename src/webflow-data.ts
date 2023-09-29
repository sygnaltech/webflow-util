
/*
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Data-processing functions.
 */ 

import { Sa5Core } from './webflow-core';
import { Sa5Debug } from './webflow-core/debug';

//import { csvToObjects } from './webflow-data/webflow-data-csv';
import { prepareCollectionListDataSource } from './webflow-data/webflow-collectionlist-data';
// import { loadGoogleSheetFromSpec } from './webflow-data/google-sheet-data';
//import { HtmlBuilder } from './webflow-html-builder.js';
import { Database } from './webflow-data/database';
import { Sa5Attribute, Sa5GlobalEvent, Sa5ScriptType } from './globals';

import { Sa5Data } from './webflow-data/sa5-data';


type DatabaseStore = {
    [key: string]: Database;
};

type DataItem = {
    dsn: string, 
    version: string,
    id: string,
    item: any,
}


type DatastoreLoadedCallback = (dataStore: Sa5Datastore) => void;




interface Sa5DatastoreConfig {
//    loadUserInfoCallback?: ((user: Sa5User) => void) | undefined; // Function callback 
    datastoreLoadedCallback?: DatastoreLoadedCallback; 
//    userLogoutPurge?: ((user: Sa5User) => void) | undefined;

    debug?: boolean;

//    dataBind?: boolean; // Databind after user object load 

    // Advanced settings
    // advanced: {

    //     accountInfoLoadDelay: number; // ms 
    //     accountInfoSaveDelay: number; // ms 

    // }
}




export class Sa5Datastore {

    store: DatabaseStore = {};

    config: Sa5DatastoreConfig; // Optional config

    // Type guard to check if a function is a UserInfoChangedCallback
    private isDatastoreLoadedCallback(func: Function): func is DatastoreLoadedCallback {

        if(!func) return false;

        // Adjust this check as needed
        return func.length === 1;
    }

    constructor(config: Partial<Sa5DatastoreConfig> = {}) {

        // Merge configs, with defaults
        this.config = {
            datastoreLoadedCallback: config.datastoreLoadedCallback,
            debug: config.debug ?? false,
        }

    }

    init() {

        // Load internal dbs
        this.init_dbs(); 

        // Callback for other registered data sources 
        // Spreadsheet csv's 
        // etc. 

        let core: Sa5Core = Sa5Core.startup();

        // Get any global handler
        const datastoreLoaded = core.getHandler(Sa5GlobalEvent.EVENT_DATASTORE_LOADED); 
        if (this.isDatastoreLoadedCallback(datastoreLoaded)) {

            this.config.datastoreLoadedCallback = datastoreLoaded;

        }

        // User Callback 
        if (this.config.datastoreLoadedCallback) {
//            this.debug.debug("userCallback", user);
            this.config.datastoreLoadedCallback(this); // async
        }

    }

    loadDataItem(elem: HTMLElement) {
       
        let data = this.loadDataItem_v2(
            elem
//            elem.getAttribute("wfu-data"),
//            dataObject
        );

    }

    // loadDataItem_v1(dbName: string, value: object): void {

    //     if (!this.store[dbName])
    //         this.store[dbName] = new Database();

    //     this.store[dbName].add(value.slug, value)

    // }

    loadDataItem_v2(elem: HTMLElement): void {

        const dsn = elem.getAttribute(Sa5Attribute.ATTR_DATA_DSN); //  "wfu-data-dsn");
        const id = elem.getAttribute(Sa5Attribute.ATTR_DATA_ITEM_ID); // "wfu-data-item-id"); 

// console.log("load data v2", dsn, id); 

 // console.log(elem.innerText); 

        let dataObject = JSON.parse(elem.innerText); 


// console.log(dataObject);  

        // Ensure db is created
        if (!this.store[dsn])
            this.store[dsn] = new Database();

        // Add item
        this.store[dsn].add(id, dataObject);

    }

    loadDataItem_sa5Data(elem: HTMLElement): void {

        const dsn = elem.getAttribute(Sa5Attribute.ATTR_DATA_DSN); //  "wfu-data-dsn");
        const id = elem.getAttribute(Sa5Attribute.ATTR_DATA_ITEM_ID); // "wfu-data-item-id"); 

        let i = new Sa5Data(elem)
        let dataObject = i.value; 

        console.log("dataObject", dataObject);

        // Ensure db is created
        if (!this.store[dsn])
            this.store[dsn] = new Database();

        // Add item
        this.store[dsn].add(id, dataObject);

    }

    init_dbs() { 

        // Init databases 

        // Find all elements which specify a data-source for data binding
        let sa5DataSources = document.querySelectorAll(
            `script[type='${Sa5ScriptType.SCRIPT_TYPE_SA5_DATA_ITEM}']`
        ); // wfu-data-item

        // Iterate and bind each individually
        sa5DataSources.forEach((elem: HTMLElement) => {

            this.loadDataItem_sa5Data(elem);

        });

        // Find all elements which specify a data-source for data binding
        let dataSources = document.querySelectorAll(
            `script[type='${Sa5ScriptType.SCRIPT_TYPE_DATA_ITEM}']`
        ); // wfu-data-item
//        console.log(`data-items found = ${dataSources.length}`);

        // Iterate and bind each individually
        dataSources.forEach((elem: HTMLElement) => {
//             console.log(`processing source - ${elem.getAttribute("wfu-data")}`);

            this.loadDataItem(elem);

//             let dataObject = JSON.parse(elem.innerText); 
//             console.log(dataObject);  

// // dataObject


//             let data = this.loadDataItem(
//                 elem.getAttribute("wfu-data"),
//                 dataObject
//             );

            // add to database
            // db.data.set(
            //     elem.getAttribute("wfu-data")!,
            //     data
            // );
        });

 //        return db;
    }

    loadData(name: string) {
        // Find all elements which identify themselves as a data-source
        let dataSource = document.querySelector(
            `[${Sa5Attribute.ATTR_DATA}='${name}']`
            );
        if (!dataSource) {
            console.warn(`Datasource: '${name}' does not exist`);
            return;
        }

        // Get data type
        let dataSourceType = dataSource.getAttribute(Sa5Attribute.ATTR_DATA_TYPE); // "wfu-data-type");
        console.log(`preparing data - ${dataSourceType}`);

        switch (dataSourceType) {
            case 'collection-list': // Webflow collection list
                return prepareCollectionListDataSource(dataSource as HTMLElement);
            case 'json': // static json chunk
                break;
            // case 'google-sheet': // Google sheet link
            //     return loadGoogleSheetFromSpec(
            //         JSON.parse(
            //             dataSource.textContent || ""
            //         )
            //     );
            default:
                console.error(`Data-source type: '${dataSourceType}' unknown`);
                break;
        }
    }

    async getCsv(url: string): Promise<string | null> {
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

    csvToData(csvd: string): any[] { 
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
    async getCsvAsData(url: string): Promise<any[] | null> {
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

    getDictionaryFromDataRow(data, rowIndex) {
        var dict = new Map();

        for (const v in data[rowIndex]) {
            dict.set(
                v,
                data[rowIndex][v]
            );
        }

        return dict;
    }

}
