
// v2.1
// Sygnal Technology Group
// http://sygnal.com

// Purpose is to make it easier to obtain data from Google

// Returns a Url to retrieve the CSV version of a Google Sheet
// The sheet must be publicly accessible.
export var getGoogleSheetCsvUrl = function (id) {

    return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv`;
}
