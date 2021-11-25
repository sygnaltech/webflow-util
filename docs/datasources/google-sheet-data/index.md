---
layout: page
title: Google Sheet Data
# subtitle: DEMO
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---


WFU can use public Google Sheets as a data source.

## DEMO - Google Sheet to JSON

Retrieve data from a Google sheet, and convert it to JSON.

*Requires a Google Sheet ID which is configured for public read access.*

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo area grey large" id="json1">
    <pre>Loading...</pre>
</div>

<a class="button is-primary" href="https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/edit#gid=0" target="_blank">Open Google Sheet</a>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

        
    import { getGoogleSheetData } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';
    import { displayDataAsHtml } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-html.js';
//    import { getGoogleSheetData } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';

    $(function () {

        // Get data
        getGoogleSheetData(
            '16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0'
        ).then((res) => {

            displayDataAsHtml(
                $("#json1"),
                res
            );

        }, (err) => {
            console.log(err);
        });

    });

</script>
