---
layout: page
title: HTML Template Repeater
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

## DEMO - Google Sheet to HTML Template Repeater

Retrieve data from a Google sheet, and convert it to JSON.

<span class="tag is-danger is-medium is-light">Demonstration</span>

Template looks like this

{% raw %}
```
<template id="template1">
<div>
    <p><b>#{{Rank}} - {{Country}} ({{Region}})</b> - {{Population}}</p>
</div>
</template>
```
{% endraw %}

Resulting data;

<div class="demo yellow large" id="demo1">
</div>

<template id="template1" wfu-template-type="macros">
{% raw %}
<div>
    <p><b>#{{Rank}} - {{Country}} ({{Region}})</b> - {{Population}}</p>
</div>
{% endraw %}
</template>


- Retrieved from a Google Sheet source as CSV.
- Google spreadsheet source - <a href="https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/edit#gid=0" target="_blank">link</a>
- Converts to JSON.
- Repeats using an HTML template



<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    import { Database, getCsvAsJson } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-data.js';
    import { renderTableFromJson } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-table.js';
    import { getGoogleSheetCsvUrl } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';
    import { renderTableFromGoogleSheet } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/locode/webflow-table-helper.js';
    import { expandMacrosInElement } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-html.js';

    $(function () {

        var json;

        // TEST #1 - retrieve CSV as JSON

        // Get JSON data
        json = getCsvAsJson(
            'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv',
            true // pretty print
        );

        // Load Database
        var db = new Database();
        db.add ("Countries", json);

        var arr = db.getDataSource("Countries");

        for (var row = 0; row < arr.length; row++) {

            // Create Dictionary
            var dict = db.getDictionaryFromRow ("Countries", row);

            var el = $("#template1").clone(false);

            expandMacrosInElement(
                el,
                dict
            );

            $("#demo1").append(el.html());

        }

    });

</script>
