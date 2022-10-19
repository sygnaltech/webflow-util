---
layout: page
title: Webflow Forms IP Info
# subtitle: DEMO
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-forms
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-forms" %}
{% endif %}


## DEMO - Webflow Forms w/ IP Info

<a class="button is-danger" href="https://webflow-forms-demo.webflow.io/special/ip-info" target="_blank">View Demonstration in Webflow</a>

Captures the sender's IP info and appends it to the tagged form as hidden fields.

Why?

- Capture general geographic info, such as country and city. 

- Store IP ( where permitted, and part of your privacy policy ), as a verification of the send. 
Required by some services like Mailchimp, for loading external lists. 


## Getting Started ( NOCODE )


### STEP 1 - Add the Library

Install this JS in BODY, site-wide or on the specific pages you want the script to affect.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-form.js"></script>
```



### STEP 2 - Tag your For Block

`[wfu-form-ipinfo]`





