---
layout: page
title: URL Query Params Passthrough
# subtitle: DEMO
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

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@3.3/dist/css/webflow-ui.css">

## DEMO - URL Query Params Passthrough

<a class="button is-danger" href="https://sygnal-webflow-utils.webflow.io/url/test-all-params/test?u=1&v=12&test1=ziggy&test2=marlow" target="_blank">View Demonstration in Webflow</a>

## Usage Notes

This tool will carry any URL querystring params into your webpage, and apply them as follows;

- On any INPUT elements with a custom attribute of `wfu-query-param=X`, 
WFU will replace the `value` attribute with the value of the querystring param `X`.

- On any other elements with a custom attribute of `wfu-query-param=X`, 
WFU will replace the inner text of the element with the value of the querystring param `X`. 

- Any links will have the `href` modified so that its querystring is completely **replaced** with the full querystring of the current page. 




## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Install JS in BODY, site-wide or on the specific pages you want the script to affect.

```
<script type="module" src="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@3.4/src/nocode/webflow-url.js"></script>
```

*Update the version numbers as needed.*



### STEP 2 - Apply `wfu-query-param` to Desired Elements

*For example, use `wfu-query-param=X` if you want to apply the value of param `X` to that element.*

Applied to form INPUT elements, it will display the value in side the textbox.

To create a hidden form INPUT element, create it in your FORM as an HTML Embed element,
containing the HTML `<input>` element code, e.g.;

```
<input wfu-query-param="test2" type="hidden" name="test2-field">
```

Applied to any other elements, the inner text of the element will be replaced with the value of the param.

All `<a>` links on the page will automatically be affected. You do not need the custom attribute on them.
WFU will replace the entire querystring of those `href`'s with the querystring of the current page's URL.

*Note that this will be expanded on eventually with configuration options, and the ability to merge querystrings.*


