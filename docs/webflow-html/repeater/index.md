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

{% raw %}
<template id="template1" wfu-template-type="macros">
<div>
    <p><b>#{{Rank}} - {{Country}} ({{Region}})</b> - {{Population}}</p>
</div>
</template>
{% endraw %}


- Retrieved from a Google Sheet source as CSV.
- Google spreadsheet source - <a href="https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/edit#gid=0" target="_blank">link</a>
- Converts to JSON.
- Repeats using an HTML template



## DEMO - Google Sheet to HTML Template Repeater ( LoCode )

**LoCode** version using minimal javascript configuration code.

Retrieve data from a Google sheet, and convert it to JSON.

<span class="tag is-danger is-medium is-light">Demonstration</span>

{% raw %}
<script type="text/json" wfu-data="links" wfu-data-type="google-sheet">
{
    "version": "1",
    "url": "https://docs.google.com/spreadsheets/d/16C5Lpzi69LgJb14YyF8eGRiVljUt8-sGGm5L6wfcpr0/export?format=csv"
}
</script>
{% endraw %}

{% raw %}
<template id="links" wfu-template-type="macros">
    <li><a href="{{Link}}" target="_blank">{{Title}}</a></li>
</template>
{% endraw %}

<div class="demo yellow large" id="demo2">
</div>






## DEMO - Google Sheet to HTML Template Repeater ( NoCode )

**NoCode** version using `wfu-` attributes.

Retrieve data from a Google sheet, and convert it to JSON.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<ul wfu-bind="links" wfu-bind-template="links">
</ul>




<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    // cdn.jsdelivr.net/gh/sygnaltech/webflow-util
    import { Database, loadAllData, getCsvAsData, getDictionaryFromDataRow, bindAllData } from '{{site.liburl}}/src/modules/webflow-data.js';
    import { getGoogleSheetCsvUrl } from '{{site.liburl}}/src/datasources/google-sheet-data.js';
    import { renderTableFromGoogleSheet } from '{{site.liburl}}/src/locode/webflow-table-helper.js';
    import { expandMacrosInElement } from '{{site.liburl}}/src/modules/webflow-html.js';
    import { HtmlBuilder } from '{{site.liburl}}/src/modules/webflow-html-builder.js';

    $(function () {

        var json;

        // Load Database
        var db = loadAllData();

        // TEST #1 - retrieve CSV as JSON

        // Get JSON data
        json = getCsvAsData(
            'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv'
        );

        db.add ("Countries", json);

        var arr = db.getData("countries");

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

        // TEST #2 - retrieve CSV as JSON

        var hb = new HtmlBuilder();
        hb.add("<ul>");
        hb.addTemplate(
            $("#links"),
            db.getData("links")
            );
        hb.add("</ul>");

        $("#demo2").html(hb.render());

        // TEST #3 - bind all 

        bindAllData(db);

    });

</script>

