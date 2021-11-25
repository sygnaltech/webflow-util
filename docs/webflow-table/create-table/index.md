---
layout: page
title: HTML Tables
# subtitle: DEMO
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
output:
  html_document:
    css: ../../demo.css
---


While DIVs are superior for layout, HTML Tables can offer a simplicity of data-presentation that is tough to beat.

Webflow does not have a Table element, so we've added the ability to generate an HTML table anywhere you like, from tabular JSON data.

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

    // cdn.jsdelivr.net/gh/sygnaltech/webflow-util
    import { getCsvAsData } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-data.js';
    import { renderTableFromData } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-table.js';
    import { getGoogleSheetCsvUrl } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';
    import { renderTableFromGoogleSheet } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/locode/webflow-table-helper.js';
    import { displayDataAsHtml } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-html.js';

    $(function () {

        var data;

        // TEST #1 - retrieve CSV as data

        // Get data
        data = getCsvAsData(
            'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv'
        )

        // Display JSON data
        displayDataAsHtml(
            $("#json1"),
            data
        );

        // TEST #2 - Create an HTML table from the data

        // Create HTML table
        renderTableFromData(
            $("#table1"),
            data
        );

        // TEST #3 - ENCODING HTML ENTITIES

        // Get JSON data to Google Sheet
        // This version uses the google-sheet-data module to construct the CSV url
        data = getCsvAsData(
            getGoogleSheetCsvUrl("1tU7X22tLHfDiGfTHIahH2XGAKYfv2A3kq7fs80qQRaI")
        );

        // Create HTML table
        renderTableFromData(
            $("#table3"),
            data
        );

        // TEST #4 - USING HELPER METHODS

        // Do everything in one call, using default options
        renderTableFromGoogleSheet(
            $("#table4"),
            "16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0"
        );

    });

</script>
