---
layout: page
title: Element Filtering
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


## DEMO - Element Filtering

<a class="button is-danger" href="https://webflow-collections.webflow.io/advanced-filter" target="_blank">View Demonstration in Webflow</a>

Choose which elements you want to be visible depending on simple javascript expression or a javascript function.

- Display certain elements only between certain hours of the day, certain days of the week, seasonally, etc.
- Show collection list items based on the time of day.
- Show employees who have a birthday today, or this month. 

All of this and much more can be done by simply attaching WFU's filtering attributes to any element.
WFU will evaluate the expression or the function, and display your element if these return `true`.


## Usage Notes

### `wfu-filter` attribute

Use `wfu-filter` with a specific formula to suppress the current node.

```
wfu-filter = new Date().getHours() >= 12
```

Best used for short and simple expressions.

### `wfu-filter-func` attribute

Use `wfu-filter-func` to call a function you define, and to pass in the element as a jQuery object. 
From there, you can perform any checks or calculations you want and then return `true` if you'd like the element to display,
or `false` if you want to hide it.

```
wfu-filter-func = isBirthday
```

And then define a function by that name, e.g.;

```
<script>
  function isBirthday(item) {
    
    var today = new Date();
    var date = new Date($(item).find("data").attr("date")); 

    console.log(today);
    console.log(`${today.getMonth()} ${date.getMonth()}`);
    console.log(`${today.getDate()} ${date.getDate()}`);
    
    // Check to see if birthday is THIS MONTH 
    if (
      (today.getMonth() == date.getMonth())
//      && (today.getDate() == date.getDate())
    )
      return true;
   
    return false;
  }
</script>
```

Make sure to give it a single parameter,
as it will be passed the element you are evaluating in the filter. 

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



### STEP 2 - Apply `wfu-filter` or `wfu-filter-func` to the elements you want to filter


See above for details. 

