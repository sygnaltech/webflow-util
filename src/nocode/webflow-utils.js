
/*
 * webflow-forms-helper
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * LO-CODE Helper class to simplify form functions.
 */


import { loadAllData } from '../modules/webflow-data.js';
import { dataBindAllForms } from '../modules/webflow-form.js';


export var toTitleCase = function (str) {

    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');

}

export var dataBindAll = function () {

    // Create database
    var db = loadAllData();

    // Bind all form elements
    dataBindAllForms(db);

}



