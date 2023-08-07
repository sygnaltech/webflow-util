
/*
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Data-processing functions.
 */

//import { csvToObjects } from './webflow-data/webflow-data-csv';
import { prepareCollectionListDataSource } from './webflow-data/webflow-collectionlist-data';
import { loadGoogleSheetFromSpec } from './webflow-data/google-sheet-data';
//import { HtmlBuilder } from './webflow-html-builder.js';
import { Database } from './webflow-data/database';



type DatabaseStore = {
    [key: string]: Database;
};

type DataItem = {
    dsn: string, 
    version: string,
    id: string,
    item: any,
}

export class Datastore {

    store: DatabaseStore = {};

    /* Loads all data sources
    * tagged with [wfu-data]
    */
    init() {

//        this.databaseStore = new database

    // Callback for other registered data sources 
    // Spreadsheet csv's 
    // etc. 
        this.init_dbs(); 
//        console.log(this.store); 
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

const dsn = elem.getAttribute("wfu-data-dsn");
const id = elem.getAttribute("wfu-data-item-id"); 

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

    init_dbs() { 

        // Init databases 

        // Find all elements which specify a data-source for data binding
        let dataSources = document.querySelectorAll('script[type=wfu-data-item]');
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
