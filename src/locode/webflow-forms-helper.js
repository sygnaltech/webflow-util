
/*
 * webflow-forms-helper
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * LO-CODE Helper class to simplify form functions.
 */


import { loadAllDataSources } from '../datasources/webflow-collectionlist-data.js';
import { dataBindAllForms } from '../modules/webflow-form.js';

export var dataBindAll = function () {

    // Create database
    var db = loadAllDataSources();

    // Bind all form elements
    dataBindAllForms(db);

}



