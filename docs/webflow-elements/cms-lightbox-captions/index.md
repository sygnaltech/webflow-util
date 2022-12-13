---
layout: page
title: Webflow Lightbox Element
subtitle: webflow-elements
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

## Display Captions in Webflow's Lightboxes

<a class="button is-danger" href="https://webflow.com/made-in-webflow/website/cms-lightbox-captions" target="_blank">View the Cloneable Site in Webflow</a>


<!--
<a class="button is-danger" href="https://webflow-collections.webflow.io/formatting-numbers" target="_blank">View Demonstration in Webflow</a>
--> 

<div class="notification is-warning">
Works with CMS-stored images, thumbnails, and captions. 
Does not support captioning video, due some complexities matching captions to
the currently displayed video.
</div>

<div class="notification is-warning">
This is likely a <b>temporary</b> solution, as Webflow intends to building
captioning support into Memberships natively.
</div>


This feature allows you to display a caption inside of Webflow's lightboxes, 
which is automatically pulled from the CMS.








## Usage Notes

### Prepare your CMS

- Include a photo in your collection items
- Include a plain text, single-line caption

### Prepare your Collection List

- Setup your Collection List
- Add your Lightbox Element
- Data bind it, as usual, to the thumb and main images you want 
  - Also set Alt Text to the plain text caption you want

### `wfu-lightbox-captions` attribute

Add the `wfu-lightbox-captions` custom attribute (no value needed) to the Lightbox Link, which is the outermost lightbox element.



## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-elements.css">
```

Add this JS reference to the BODY of your site or page.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-elements.js"></script>
```



### STEP 2 - Apply the custom attributes to the elements you want to affect


See above for details. 

