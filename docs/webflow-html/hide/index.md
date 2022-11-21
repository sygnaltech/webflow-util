---
layout: page
title: Hide Section
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

## Hide Section or Element


Want to hide a section when the Collection List it contains is empty?

Suppose you have an area of your page called "alerts" and it has some nice styling and icons... but how do you make the whole thing disappear when there are no alerts pulled by the Collection List for display?


## Usage Notes

### `wfu-hide` attribute

To the section you want to hide, add the custom attribute;

```
wfu-hide = empty-collection-list
```

If ALL of the collection lists within that section are empty, the entire section will be hidden.



## Getting Started ( NOCODE )


### STEP 1 - Add the Library


This is a CSS-only solution.

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-html.css">
```




### STEP 2 - Apply `wfu-hide` section or element you want to hide


See above for details. 

