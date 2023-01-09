---
layout: page
title: Numeric Sequencing
subtitle: webflow-html
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

## Numeric Sequencing

<a class="button is-danger" href="https://webflow-collections.webflow.io/advanced-filter" target="_blank">View Demonstration in Webflow</a>

Allows you to apply a numeric sequence across a series of elements. 

Numbering is always in a traditional 1, 2, 3... style of sequencing. 

NOTE: This is primarily useful for sorting and filtering demos, because CSS has a numeric sequencing feature built in for live display. 

## Usage Notes

### `wfu-seq-group` attribute

Place on any element.
Give an arbitrary named group, for matching the items after, e.g. `articles` 

### `wfu-seq` attribute

Place on any child element within that group.
Give it the same group name as its parent.




### Notes

The HTML DOM is a large tree of element and sub-elements. 

- You can use `wfu-seq-group` multiple times throughout your document. 
- You can use the same group name on multiple `wfu-seq-group`'s, provided that those subtrees are independent. Do not use the same name if one group is nested within the other. 
- You can have nested `wfu-seq-group`'s, as long as you use a different group name.

The purpose of these capabilities is to allow you to use numbering on a Webflow collection list that contains a nested list. You can give one numbering sequence to the parent list, and a numbering sequence to each of the child lists as well. 

NOTE: Primarily I'd recommend this for demos, where you need to number items and then permute them. In most numbering situations, CSS numbering is generally a better alternative for general sequencing. 

### Future 

If there is a need, I can expand this to allow for control of;

- Starting number
- Step size
- Increasing or decreasing count
- Support for decimal values 

web AT sygnal.com



- Avoid using the same 

Avoid using the same group name on an element that is a child of another element. 



You can sequence nested lists separately

Create an HTML Embed inside of your Collection List Item,
with this code;

```
<data wfu-sort-key=""></data>
```

As the attribute value for `wfu-sort-key`, insert the field that you want to sort by, 
using Webflow's '**+ Add Field** at the top-right of the HTML Embed Code Editor window.

Remember to specify `date` in the above configuration if you're wanting to sort by dates.

Any other field you choose will be sorted alphabetically.


## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-html.css">
```

Add this JS reference to the BODY of your site or page.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-html.js"></script>
```



### STEP 2 - Apply `wfu-sort` and configuration attributes to the elements you want to filter


See above for details. 

