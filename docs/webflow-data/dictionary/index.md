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

<div class="demo area grey large">
    <pre id="json1">Loading...</pre>
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
In your text, use the construction <code>{{ Key Name }}</code>
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


<div class="container" style="width: 50%; justify-content: left;" wfu-data-macros="datasourceName">
<div class="notification is-primary">
{% raw %}

Global population is growing!

Currently, there are {{Countries}} countries in the world,
of which {{Europe}} are in Europe.

Of a total global population of {{Population}},
{{Size100Million}} of our contries are over 100 million population,
with {{SizeBillion}} over 1 billion.

{% endraw %}
</div>
</div>



<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    import { Database, getCsvAsJson } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-data.js';
    import { renderTableFromJson } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-table.js';
    import { getGoogleSheetCsvUrl } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/google-sheet-data.js';

    import { renderTableFromGoogleSheet } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/locode/webflow-table-helper.js';

    $(function () {

        var json;

        // TEST #1 - retrieve CSV as JSON

        // Get JSON data
        // retrieve from Google Sheet
        json = getCsvAsJson(
            'https://docs.google.com/spreadsheets/d/16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0/export?format=csv&gid=118669749',
            true // pretty print
        )

        // Display JSON data
        $("#json1").text(
            json
        );

        // Create Dictionary
        var dict = new Map();

        var ds = JSON.parse(json);

        console.log(`length: ${ds.length}`); // # rows

        var keyField = "Name";
        var valueField = "Value";

        for (var i = 0; i < ds.length; i++) {

            console.log(`key ${ds[i][keyField]} = ${ds[i][valueField]}`);

            dict.set(
                ds[i][keyField],
                ds[i][valueField]
            );
        }

        // Apply data to all elements
        $("*[wfu-map-dict]").each(function (i, obj) {

            $(obj).text(
                dict.get(obj.getAttribute("wfu-map-dict"))
            );

        });

        // Expand macros
        $("*[wfu-data-macros]").each(function (i, obj) {

            var html = $(obj).html();
//                    dict.get(obj.getAttribute("wfu-map-dict"))

            html = html.replace(
                /{\s*(?<cmd>\w*)\s*\{\s*(?<params>\w*)\s*\}\s*(?<options>\w*)\s*\}/g,
                replacer
                );

                // \{\s*(?<cmd>\w*)\s*\{\s*(?<params>\w*)\s*\}\s*(?<options>\w*)\s*\}

//                var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

            // [$<params>]

            $(obj).html(
                html
            );

        });

        // https://regexr.com/
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter
        function replacer(match, p1, p2, p3, offset, string) {
            return dict.get(p2);
        }

    });

</script>


