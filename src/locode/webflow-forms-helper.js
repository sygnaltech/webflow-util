
/*
 * webflow-forms-helper
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * LO-CODE Helper class to simplify form functions.
 */


import { loadAllDataSources } from '../datasources/webflow-collectionlist-data.js';
import { dataBindAllForms, createHtmlDataList } from '../modules/webflow-form.js';

export var dataBindAll = function () {

    // Create database
    var db = loadAllDataSources();

    // Create datalists from all data sources
    db.data.forEach((e, dataSourceName, data) => {

        console.log(e);
        console.log(dataSourceName);
        console.log(db.data[dataSourceName]);

        // Create datalists of all data sources
        createHtmlDataList(dataSourceName, e);
    });

    // Bind all form elements
    dataBindAllForms(db);

}



