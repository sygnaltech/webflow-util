
/*
 * google-sheet-data
 *
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Extracts information from Google Sheets, and returns as JSON
 */

import { csvToJson } from '../modules/webflow-data.js';
import { csvToObjects } from '../modules/webflow-data-csv.js';
import { getCsvAsJson } from '../modules/webflow-data.js';

// Returns a Url to retrieve the CSV version of a Google Sheet
// The sheet must be publicly accessible.
export var getGoogleSheetCsvUrl = function (id) {

    return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv`;
}

// Returns all data as JSON from Sheet1
export var getGoogleSheetData = function (id) {

    return new Promise((resolve, reject) => {

        var url = getGoogleSheetCsvUrl(id);
        console.log(url);

        var json = getCsvAsJson(
            getGoogleSheetCsvUrl(id),
            true
        );

        resolve(json);

    });
}
