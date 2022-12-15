---
layout: page
title: Webflow Membership + Expand Login Button
subtitle: webflow-membership
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

## Expand the Login Button with a Container

<!--
<a class="button is-danger" href="https://webflow-collections.webflow.io/formatting-numbers" target="_blank">View Demonstration in Webflow</a>
--> 


Used to expand Webflow's current Log-In / Log-Out button with a container
To include an icon, etc.

See https://sygnal.com for an example ( top right ).


- Make your login button include an icon, or additional text
- Create a larger area
- Wrap it in a menu style container




## Usage Notes

### Create a DIV

### Place the Webflow Log-In / Log-Out Button inside of it

- Include whatever else you want in that button DIV
- Style it however you like



### `wfu-login-button` attribute

Add the `wfu-login-button` custom attribute (no value needed) when you want an element to only appear to logged-in users.





## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-membership.css">
```

Add this JS reference to the BODY of your site or page.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-membership.js"></script>
```



### STEP 2 - Apply the custom attributes to the elements you want to affect


See above for details. 

