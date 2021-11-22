---
layout: page
title: Count Items
subtitle: webflow-data
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

<a class="button is-danger" href="demo.html" target="_blank">View Webflow Demonstration</a>

**Display the count of the items in your data set.**

This can be used with Webflow Collection Lists as well-
however it will be limited to the maximum Collection List size
( 100 items ). 


## DEMO - Count Datasource Items

This example uses Google Sheet content, after it has been converted to JSON.

<span class="tag is-danger is-medium is-light">Demonstration</span>

- Count of records: <b><span id="cnt1">...</span></b> 

<div class="demo area grey large">
    <pre id="json1">Loading...</pre>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">
        
    import { getGoogleSheetData } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';
        
    import { Database } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-data.js';

    import { loadAllDataSources } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/webflow-collectionlist-data.js';

    $(function () {

        var json;

        var db = new Database();

        // Get JSON data
        getGoogleSheetData(
            '16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0',
            true // pretty print
        ).then((res) => {

            $("#json1").text(
                res
            );

            db.data.set(
                "test",
                JSON.parse(res) // data
            );

            // Count items
            $("#cnt1").text(
                db.getCountOfRecords("test")
            );

        }, (err) => {
            console.log(err);
        });

    });

</script>

