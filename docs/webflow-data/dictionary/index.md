---
layout: page
title: Macro Expansion
subtitle: webflow-data
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

WFU macro expansion allows you to populate specific values in your Webflow pages, from a remote data source.

Insert text strings, numeric values, or calculated spreadsheet results anywhere you like.

Values are stored in a dictionary-style JSON array.



# Preparing the Dictionary

1. Load data from an external data source.
Here we're using a 
<a href="https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/edit#gid=118669749" target="_blank">Google Sheet</a> 
with calculated fields.

2. The data source must have 2 identified columns - a unique Key column, and Value column.
In a Google Sheet source, those are unique column header names.
In this demo we are using `Name` and `Value`.

3. Construct a dictionary structure with those key-value pairs.
This is a javascript `Map` element.

4. Find all HTML elements tagged to a specific Key, and load that Value.




## Example JSON content

This is the Google Sheet content, after it has been converted to JSON.
Note the `Key` and `Value` column names become field keys in the JSON.

<div class="demo area grey large" id="json1">
    <pre>Loading...</pre>
</div>

Once the dictionary is created, you can use it.

# Applying the Dictionary

### Option 1: Tagged Elements

Identify elements in which you want data loaded where, using the <code>wfu-map-dict</code> custom attribute.

e.g. <code>&lt;span wfu-map-dict="Countries"&gt;&lt;/span&gt;</code>

Each of the bolded values in this list are loaded dynamically from the Google Sheet.



- Countries: <b><span wfu-map-dict="Countries"></span></b>
- Europe: <b><span wfu-map-dict="Europe"></span></b>
- Population: <b><span wfu-map-dict="Population"></span></b>
- Size > 1 Billion: <b><span wfu-map-dict="SizeBillion"></span></b>
- Size > 100 Million: <b><span wfu-map-dict="Size100Million"></span></b>







### Option 2: Macro Expansion

WFU also provides for macro expansion.
In your text, use the construction <code>{% raw %}{{ Key Name }}{% endraw %}</code>
to identify where you want values inserted.
This is particularly of use in Rich Text Elements.

Text or Rich Text element itself must be tagged with the custom attribute
    <code> wfu-data-macros="datasourceName"</code>.

{% raw %}
<pre>
Global population is growing!
                    
Currently, there are {{ Countries }} countries in the world,
of which {{ Europe }} are in Europe.
                    
Of a total global population of {{ Population }},
{{ Size100Million }} of our contries are over 100 million population,
with {{ SizeBillion }} over 1 billion.
</pre>
{% endraw %}


Here's an example of tag-expanded content.


<div class="container" style="width: 100%; justify-content: left;" wfu-data-macros="datasourceName">
<div class="notification is-primary">
{% raw %}
<p>
Global population is growing!
</p>
<p>
Currently, there are {{Countries}} countries in the world,
of which {{Europe}} are in Europe.
</p>
<p>
Of a total global population of {{Population}},
{{Size100Million}} of our contries are over 100 million population,
with {{SizeBillion}} over 1 billion.
</p>
{% endraw %}
</div>
</div>



<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    // cdn.jsdelivr.net/gh/sygnaltech/webflow-util
    import { Database, getCsvAsData } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-data.js';
    import { renderTableFromJson } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-table.js';
    import { getGoogleSheetCsvUrl } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';
    import { expandMacrosInElement, displayDataAsHtml } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-html.js';

    $(function () {

        var json;

        // TEST #1 - retrieve CSV as JSON

        // Get JSON data
        // retrieve from Google Sheet
        json = getCsvAsData(
            'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv&gid=118669749',
            true // pretty print
        )

        // Display JSON data
        displayDataAsHtml($("#json1"), json);

        // Load Database
        var db = new Database();
        db.add ("CountryStats", json);

// console.log(db.getDataSource("CountryStats"));

        // Create Dictionary
        var dict = db.getDictionary ("CountryStats", "Name", "Value");

// console.log(dict);

        // Apply data to all elements
        $("*[wfu-map-dict]").each(function (i, obj) {

            $(obj).text(
                dict.get(obj.getAttribute("wfu-map-dict"))
            );

        });

        // Expand macros
        $("*[wfu-data-macros]").each(function (i, obj) {

            expandMacrosInElement(obj, dict);

        });

    });

</script>


