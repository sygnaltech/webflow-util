---
layout: page
title: Webflow Util | Tables
# subtitle: DEMO
menubar: menu
hero_height: is-small
toc: true
tabs: webflow-table
output:
  html_document:
    css: ../../demo.css
---




## DEMO - Google Sheet as JSON

Retrieve data from a Google sheet, and convert it to JSON.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo grey large">
    <pre id="json1">Loading...</pre>
</div>



- Retrieved from a Google Sheet source as CSV.
- Converted to JSON.


## DEMO - Generate HTML Table from JSON

Retrieve data from an online source, and create an HTML table.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo yellow large">
    <div id="table1"></div>
</div>

- This table content is sourced live from a Google Sheet


## DEMO - Encoding HTML Entities

Retrieve data that contains HTML markup characters, to test encoding.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo yellow large">
    <div id="table3"></div>
</div>


## DEMO - LOCODE Approach

Performs both the data retrieval and binding in a single call using a helper method.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo yellow large">
    <div id="table4"></div>
</div>

- Google spreadsheet source - <a href="https://docs.google.com/spreadsheets/d/1tU7X22tLHfDiGfTHIahH2XGAKYfv2A3kq7fs80qQRaI/edit#gid=0" target="_blank">link</a>


<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    import { getCsvAsJson } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-data.js';
    import { renderTableFromJson } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-table.js';
    import { getGoogleSheetCsvUrl } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';

    import { renderTableFromGoogleSheet } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/locode/webflow-table-helper.js';

    $(function () {

        //// Display version
        //$("*[data-value='ver']").text(
        //    webflowTableUtil.getVersion()
        //);

        var json;

        // TEST #1 - retrieve CSV as JSON

        // Get JSON data
        json = getCsvAsJson(
            'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv',
            true // pretty print
        )

        // Display JSON data
        $("#json1").text(
            json
        );

        // TEST #2 - Create an HTML table from the JSON

        // Create HTML table
        renderTableFromJson(
            $("#table1"),
            json
        );

        // TEST #3 - ENCODING HTML ENTITIES

        // Get JSON data to Google Sheet
        // This version uses the google-sheet-data module to construct the CSV url
        json = getCsvAsJson(
            getGoogleSheetCsvUrl("1tU7X22tLHfDiGfTHIahH2XGAKYfv2A3kq7fs80qQRaI"),
            true // pretty print
        );

        // Create HTML table
        renderTableFromJson(
            $("#table3"),
            json
        );

        // TEST #4 - USING HELPER METHODS

        // Do everything in one call, using default options
        renderTableFromGoogleSheet(
            $("#table4"),
            "16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0"
        );

    });

</script>
