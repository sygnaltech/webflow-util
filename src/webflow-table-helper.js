
// v2.1
// Sygnal Technology Group
// http://sygnal.com

import { getCsvAsJson } from './modules/webflow-data.js';
import { buildTableFromJson } from './modules/webflow-table.js';
import { getGoogleSheetCsvUrl } from './modules/google-sheet-data.js';

export var buildTableFromGoogleSheet = function (elem, googleSheetId) {

    // Construct Google Sheet CSV URL
    const url = getGoogleSheetCsvUrl(googleSheetId);

    // Instantiate Webflow Table util
//    var webflowTableUtil = new WebflowTableUtil({
//        logging: true, // enable logging to console
////        csvFile: 'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv',
//    });

    // Retrieve CSV and convert to JSON
    var json = getCsvAsJson(
        url
    );

    // Create HTML table
    buildTableFromJson(
        elem,
        json
    );

}

