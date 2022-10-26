---
layout: page
title: Element Sorting
subtitle: webflow-html
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util" %}
{% endif %}

## Advanced Element Filtering

<a class="button is-danger" href="https://webflow-collections.webflow.io/advanced-filter" target="_blank">View Demonstration in Webflow</a>

Sort Collection List in unique situations.

Such as Embedded Collection Lists, which have no sort option.

Supports;

- Sorting by string or date values ( defaults to string )
- Sorting ascending / descending ( defaults to ascending )


## Usage Notes

### `wfu-sort` attribute

Place on any Collection List directly ( not the Collection List Wrapper ).
No value needed.

### `wfu-sort-dir` attribute

If you want to change the direction, add this attribute with a value of;

- `asc` for ascending
- `desc` for descending

Defaults to ascending when unspecified or unrecognized.

### `wfu-sort-type` attribute

If you want to specify the data type of the field being sorted, add this attribute with a value of;

- `string` for values that should be sorted as strings
- `date` for values that should be sorted as dates

Defaults to string when unspecified or unrecognized.


### Creating your Sort Key

Create an HTML Embed inside of your Collection List Item,
with this code;

```
<data wfu-sort-key=""></data>
```

As the value, insert field that you want to sort by, using **+ Add Field** 
at the top-right of the HTML Embed Code Editor window.

Remember to specify `date` in the above configuration if you're wanting to sort by dates.

Any other field you choose will be sorted alphabetically.


## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-html.css">
```

Add this JS reference to the BODY of your site or page.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-html.js"></script>
```



### STEP 2 - Apply `wfu-sort` and configuration attributes to the elements you want to filter


See above for details. 

