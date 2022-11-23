---
layout: page
title: Decode HTML
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

## Decode HTML

Do you have a chunk of HTML stored in the CMS, which you need decoded when it emits into your page?

Simply position and data-bind your HTML Embed as normal, 
and then add a cu

Good for...

- 3rd party embed like soundcloud, and YouTube
- JSON+LD embeds

## Usage Notes

### `wfu-decode` attribute

Add this to the HTML Embed element you want the contents decoded for.
No value needed.

Note that the CSS will hide this element initially until after it's decoded,
at which point we make it visible.


## Getting Started ( NOCODE )


### STEP 1 - Add the Library


This is a CSS-only solution.

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-html.css">
```

Add this JS reference to the BODY of your site or page.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-html.js"></script>
```





### STEP 2 - Apply `wfu-decode` to the HTML Embed element you want to decode


See above for details. 

