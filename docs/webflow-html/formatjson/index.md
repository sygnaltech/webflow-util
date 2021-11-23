---
layout: page
title: Format JSON
subtitle: webflow-data
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

<style>
.wfu-svg {
    visibility: hidden;
}
pre.wfu-code {
}
.wfu-json-string {
    color: #008000;
}
.wfu-json-number {
    color: #FF0000;
}
.wfu-json-boolean {
    color: #FF8C00;
}
.wfu-json-null {
    color: #908080;
}
.wfu-json-key {
    color: #1A1A1A;
}
</style>

<!--
<a class="button is-danger" href="https://sygnal-webflow-utils.webflow.io/demo/collection-item-count" target="_blank">View Demonstration in Webflow</a>
-->

**Display the count of the items in your data set.**

This can be used with Webflow Collection Lists as well-
however it will be limited to the maximum Collection List size
( 100 items ). 


## DEMO - Format JSON

Format JSON, with syntax highlighting.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div id="json1" class="demo area grey large">
    <pre>Loading...</pre>
</div>



<script type="text/json" id="data2">
[
  {
    "Rank": 1,
    "Country": "China",
    "Region": "Asia",
    "Population": 1,411,778,724,
    "Percent": false
  },
  {
    "Rank": "2",
    "Country": "India",
    "Region": "Asia",
    "Population": "1,381,914,537",
    "Percent": "17.50%"
  }
]
</script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">
        
    import { getGoogleSheetData } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';
        
    import { Database } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-data.js';

    import { loadAllDataSources } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/webflow-collectionlist-data.js';

    import { displayJsonAsHtml } from 'http://localhost/src/modules/webflow-html.js';

    $(function () {

        var json;
        json = $('#data2').text();

        displayJsonAsHtml(
            $("#json1"), 
            json 
        );

    });

</script>

