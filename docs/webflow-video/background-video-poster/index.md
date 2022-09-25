---
layout: page
title: Set Background Video Poster
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


## DEMO - Background Video Poster

<a class="button is-danger" href="https://webflow-video-tests.webflow.io/video-poster-images" target="_blank">View Demonstration in Webflow</a>

In HTML, a 
[video poster](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-poster)
refers to an image that should be shown while the video is downloading.

```
<video poster="URL">
```

On background videos, this image is specified in the `data-poster-url` attribute, and Webflow generates a thumbnail image for you automatically.

In some cases, you may prefer to create your own image, or to create a WEBP image as recommended by Google Lighthouse.
This feature allows you to specify your own.

**Note:** 
Standard `<video>` elements can also specify a video poster, using the `poster` attribute-
however in Webflow, the standard video elements are designed to embed video players such as YouTube's
which use an `<iframe>` embed approach instead.

## Usage Notes

This tool will replace the `data-poster-url` attribute on Webflow's background videos with the
image url you specify. 

To use-

- Create and setup your background video element

- Create your poster image, e.g. a WEBP file, and add it to your website assets

- Get the URL of that uploaded asset

- Select your video element, and add a custom attribute of `wfu-data-poster-url`, and a value of your poster's URL

Add the WFU video library to your page or site just before the closing body element. 

On page load, WFU will find your background videos with that special attribute, 
and apply your specified URL value to the `data-poster-url`.


## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Install this JS in BODY, site-wide or on the specific pages you want the script to affect.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-video.js"></script>
```

*In place of `@latest` use the current version number in your URLs.*



### STEP 2 - Apply `wfu-data-poster-url` to the Background Videos


See above for details. 

