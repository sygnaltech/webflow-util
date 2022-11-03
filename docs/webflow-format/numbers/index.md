---
layout: page
title: Format Numbers & Currencies
subtitle: webflow-format
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

## Format Numbers & Currencies

<a class="button is-danger" href="https://webflow-collections.webflow.io/formatting-numbers" target="_blank">View Demonstration in Webflow</a>

Webflow supports the storage of numbers, including integers and decimals, in the CMS, 
but has virtually no formatting options.

For decimal values, Webflow allows you to specify the number of decimal places you want to see in the CMS-bound field,
however there are no options for commas, units, or currency formats. 

This library allows you to format those numbers in commonly recognized formats, including

- `usd` - US currency ( also useful for AUD, NZD, and others )
- `gbp` - British pound sterling
- `eur` - European currency
- `jpy` - Japanese currency
- `%` - percentages

And more will come as [users request](mailto:wfu@sygnal.com). 




## Usage Notes

### `wfu-format` attribute

Use `wfu-format` directly on the CMS-bound numeric field.

```
wfu-format = usd
```

Also, use Webflow's designer to format the number of decimal places you want to see,
as we'll apply this in your formatted result.




## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-format.css">
```

Add this JS reference to the BODY of your site or page.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-format.js"></script>
```



### STEP 2 - Apply `wfu-format` to the elements you want to format


See above for details. 

