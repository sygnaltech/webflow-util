---
layout: page
title: Limit Items by Breakpoint
subtitle: webflow-html
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-html" %}
{% endif %}

## Advanced Element Sorting

<a class="button is-danger" href="https://display-random-list-items.webflow.io/" target="_blank">View Demonstration in Webflow</a>

Webflow has a built-in Limit Items feature on Collection Lists,
however it is not breakpoint-sensitive.

Our solution dynamically adjusts the number shown for the breakpoint that the
site is being viewed at, with no refresh needed. 

This feature is also very useful when used with `wfu-sort`, using the `random` setting.
With the combination of random sorting and item limits, you can display a random set of 
items on every page refresh. 


## Usage Notes

NOTE: Use only one of these two approaches;

### `wfu-limit-items` attribute

Place on any Collection List directly ( not the Collection List Wrapper ).

Specify the number of items you want to show from 1 to 12. 

### OR, use the breakpoint variations

If you want breakpoint-specific counts, use ALL 4 of these attributes.

- `wfu-limit-items-D` the number to show for desktops
- `wfu-limit-items-T` the number to show for tablet
- `wfu-limit-items-L` the number to show for mobile landscape
- `wfu-limit-items-P` the number to show for mobile portrait

Place on any Collection List directly ( not the Collection List Wrapper ).

Specify the number of items you want to show from 1 to 12. 


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



### STEP 2 - Apply the attributes for the limits you want applied 


See above for details. 

