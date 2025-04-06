
/*
 * google-sheet-data
 *
 * Sygnal Technology Group
 * https://www.sygnal.com
 *
 * Extracts information from Google Sheets, and returns as JSON
 */

//import { csvToData } from '../modules/webflow-data.js';
//import { csvToObjects } from '../modules/webflow-data-csv.js';
// import { getCsvAsData } from '../modules/webflow-data.js';
/*
export var loadGoogleSheetFromSpec = function (spec) {

    switch (spec.version) {
        default:
        case "1":

            return getCsvAsData(spec.url);
//            return getGoogleSheetDataUrl(spec.url);

            break;
    }
//    console.log(spec);

    // Validate spec
    // TODO: cast to options-style object? 

//    spec.url
}
*/
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

        var json = getCsvAsData(
            getGoogleSheetCsvUrl(id)
        );

        resolve(json);

    });
}

// Returns all data as JSON from Sheet1
export var getGoogleSheetDataUrl = function (url) {

    return new Promise((resolve, reject) => {

        console.log(url);

        var json = getCsvAsData(
            url
        );

        resolve(json);

    });
}