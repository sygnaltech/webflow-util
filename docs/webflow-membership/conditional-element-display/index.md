---
layout: page
title: Membership
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

## Webflow Membership + Conditional Element Display

<!--
<a class="button is-danger" href="https://webflow-collections.webflow.io/formatting-numbers" target="_blank">View Demonstration in Webflow</a>
--> 


<div class="notification is-danger">
THIS IS LIKELY A TEMPORARY SOLUTION, AS WEBFLOW IS BUILDING THIS FEATURE NATIVELY.
</div>


<!--
**THIS IS LIKELY A TEMPORARY SOLUTION, AS WEBFLOW IS BUILDING THIS FEATURE NATIVELY.**
-->

This feature allows you to hide/show elements based on the logged-in / logged-out state of the current user. 

You can;

- Show elements only when logged-in
- Show elements only when logged-out

IMPORTANT: This only affects visible display, it does not prevent users from accessing that content if they view source.





## Usage Notes

### `wfu-show-logged-in` attribute

Add the `wfu-show-logged-in` custom attribute (no value needed) when you want an element to only appear to logged-in users.

### `wfu-hide-logged-in` attribute

Add the `wfu-hide-logged-in` custom attribute (no value needed) when you want an element to only appear to NON-logged-in users.



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

