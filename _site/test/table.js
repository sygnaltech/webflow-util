

import { getCsvAsJson } from '../../src/modules/webflow-data.js';
import { renderTableFromJson } from '../../src/modules/webflow-table.js';
import { getGoogleSheetCsvUrl } from '../../src/modules/google-sheet-data.js';
import { renderTableFromGoogleSheet } from '../../src/locode/webflow-table-helper.js';

import { getDataSource } from '../../src/modules/webflow-data-collectionlist.js';

$(function () {

    const options = {};
    options.responsive = true;

    var json;

    // TEST #1 - retrieve CSV as JSON

    //// Get JSON data
    //json = getCsvAsJson(
    //    'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv',
    //    true // pretty print
    //)

    //// Display JSON data
    //$("#json1").text(
    //    json
    //);

    //// TEST #2 - Create an HTML table from the JSON

    //// Create HTML table
    //renderTableFromJson(
    //    $("#table1"),
    //    json
    //);

    //// TEST #3 - ENCODING HTML ENTITIES

    //// Get JSON data to Google Sheet
    //// This version uses the google-sheet-data module to construct the CSV url
    //json = getCsvAsJson(
    //    getGoogleSheetCsvUrl("1tU7X22tLHfDiGfTHIahH2XGAKYfv2A3kq7fs80qQRaI"),
    //    true // pretty print
    //);

    //// Create HTML table
    //renderTableFromJson(
    //    $("#table3"),
    //    json
    //);

    // TEST #4 - USING HELPER METHODS

    // Do everything in one call, using default options
    renderTableFromGoogleSheet(
        $("#table1"),
        "16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0"
    );

    var data = getDataSource("blogposts");

    console.log(JSON.stringify(data,null,2));

    // Create HTML table
    renderTableFromJson(
        $("#table2"),
        JSON.stringify(data), // json
        {
            striped: true,
            encodeHtml: false // already encoded from this source, do not double-encode
        }
    );

});

