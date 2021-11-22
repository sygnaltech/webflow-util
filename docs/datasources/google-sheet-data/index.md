---
layout: page
title: Google Sheet Data
# subtitle: DEMO
menubar: menu
hero_height: is-small
# toc: true
# tabs: webflow-table
---

# Google Sheet Data

## DEMO - Google Sheet to JSON

Retrieve data from a Google sheet, and convert it to JSON.

*Requires a Google Sheet ID which is configured for public read access.*

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo area grey large">
    <pre id="json1">Loading...</pre>
</div>


<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">
        
    import { getGoogleSheetData } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';

    $(function () {

        var json;

        // Get JSON data
//            json = await
        getGoogleSheetData(
            '16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0',
            true // pretty print
        ).then((res) => {

            $("#json1").text(
                res
            );

        }, (err) => {
            console.log(err);
        });

    });

</script>
