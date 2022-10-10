---
layout: page
title: Automatic Link Targeting
# subtitle: DEMO
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-url" %}
{% endif %}


## DEMO - Automatic Link Targeting

<a class="button is-danger" href="https://links-demos.webflow.io/target-external-links" target="_blank">View Demonstration in Webflow</a>

## Usage Notes

In most situations, you will automatically want external links to open in a new tab.

This library automatically looks for FQDN links such as `https://...` and adds a `target=_blank`.

It will only add a target if none is specified. 



## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Install JS in BODY, site-wide or on the specific pages you want the script to affect.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-url.js"></script>
```



### STEP 2 - Create Links as desired

See above notes.




