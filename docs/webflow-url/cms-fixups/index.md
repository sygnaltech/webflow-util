---
layout: page
title: CMS Relative Link Fixup
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


## DEMO - CMS Relative Link Fixups

<a class="button is-danger" href="https://links-demos.webflow.io/cms-relative-links" target="_blank">View Demonstration in Webflow</a>

## Usage Notes

Webflow's CMS feature has a significant limitation in that the CMS knows nothing about its containing site.

As a result of this design gap, it's currently not possible to link from a CMS collection item to a known page in your site, in the same way you can link within the designer.

CMS's have a Link field type, however a second limitation prevents the use of relative paths, which means you cannot even link to e.g. /about/.

How to use;

- In any CMS where you want a relative link to a site page, simply place that link in a CMS link field, with `https://self/` as the protocol and hostname.

  - e.g. to link to `/about`, you'd write it as `https://self/about`.

The link fixup library will find and correct this link to a proper relative link of `/about`. 


## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Install JS in BODY, site-wide or on the specific pages you want the script to affect.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-url.js"></script>
```



### STEP 2 - Create CMS Links as desired

See above notes.




