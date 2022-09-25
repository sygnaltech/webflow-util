---
layout: page
title: Ratings Component
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

<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-ui.css">
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/input-range-slider.css">

WFU is exploring the addition of simple components to the Webflow interface,
starting with a simple 5-star ratings component that is commonly needed for customer reviews. 

This component-

- Is fully SVG, and can be sized as large or small as you want.
- Can be colored, via CSS. 
- Supports fractional stars, e.g. 2.5 stars. 

## DEMO - Ratings Component

<span class="tag is-danger is-medium is-light">Demonstration</span>

View source to see the specifics on how these demos work.


```
<div wfu="rating" wfu-rating="5.0"></div>
```

<div wfu="rating" wfu-rating="5.0"></div>

```
<div wfu="rating" wfu-rating="1.5"></div>
```

<div wfu="rating" wfu-rating="1.5"></div>

```
<div wfu="rating" wfu-rating="3.5"></div>
```

<div wfu="rating" wfu-rating="3.5"></div>


```
<div wfu="rating" wfu-rating="3.5" style="width: 200px;"></div>
```

<div wfu="rating" wfu-rating="3.5" style="width: 200px;"></div>

## Coloring

Since the art is SVG-based, it can affected by the CSS `fill` attribute.

However, Webflow does not directly provide access to the fill attribute, or SVG's.
Best practice is to put a `<style>` element or CSS in the `<head>` 
however most browsers will accept an in-body `<style>` element.

```
<style>
#stars2 svg {
    fill: red; 
}
</style>
```

<style>
#stars2 svg {
    fill: red; 
}
</style>

<div id="stars2" wfu="rating" wfu-rating="3.5" style="width: 200px;"></div>

Note: Due to the way the shaded area works, the color and darkness is not easily specified. 

## Dynamic Example

What's your rating, **1 to 5 stars**?

<style>
#stars svg {
    fill: darkblue; 
}
</style>

<form style="width: 300px; margin: 0 0 1rem 0">
<div class="slidecontainer">
<input type="range" min="1" max="5" step="0.5" value="3.5" class="slider" id="myRange">
</div>
</form>
<div id="stars" wfu="rating" wfu-rating="3.5" style="width: 200pxred;"></div>

## Usage Notes

- The rating stars are SVG, so the component will scale to whatever width you define in the designer. 

- You can use fractional amounts. Generally, .0 or .5 display nicely, other fractions may show too little of the star edges to be clearly understood.

- The DIV HTML is generally embedded in a Webflow EMBED element, so that the `wfu-rating` attribute can be easily set from a CMS Collection List.

- Apply a class to the EMBED with a width and minimum height in order to make the Embed visible in the designer.

- You can put temporary contents in the Embedded DIV for designer display, this will be wiped.



## Getting Started


### STEP 1 - Add the Library


There are currently no configuration options for the data-binding feature, so we'll use a *no-code* integration approach.


Install CSS in HEAD, generally site-wide.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-ui.css">
```

Install JS in BODY, generally site-wide.

```
<script src="{{ site.liburl }}/src/nocode/webflow-ui.js"></script>
```

*Update the version numbers as needed.



### STEP 2 - Create an EMBED where you want a WFU Rating component to appear.

Paste this code into the EMBED;

```
<div wfu="rating" wfu-rating="3.5">
    RATING
</div>
```

Alternatively, you can put anything into the DIV and it will be deleted when the Rating Component is created.
In this way, you can have a visible placeholder while you're in the designer, where scripts cannot run.

We recommend placing stars there for convenience.
If you are using this with Webflow, you can place an **HTML Embed** element inside of your div, with the following contents, to create visible stars.

```
<div wfu="rating" wfu-rating="3.5">
    <svg viewBox="0 0 576 512" width="20%" title="star">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </svg><svg viewBox="0 0 576 512" width="20%" title="star">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </svg><svg viewBox="0 0 576 512" width="20%" title="star">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </svg><svg viewBox="0 0 576 512" width="20%" title="star">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </svg><svg viewBox="0 0 576 512" width="20%" title="star">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </svg>
</div>
```




### STEP 3 - Create a Class on the Embed

In the Webflow designer, add a class to the embed.

Set the width of the embed to whatever you want- the SVG stars will scale.

Set a min-height of 20px, to ensure the element is visible at design time, for layout purposes.

### STEP 4 - Configure the rating value 

Set the `wfu-rating` attribute of the div to whatever value you want, between 0.0 and 5.0.

You can make this a fixed value, however generally, you'd place this in a Collection List, and use a Rating value from the Collection.

CMS Collection setup;

- Use a numeric field named e.g. `Rating` 

- Configure the field's minimum to 0, maximum to 5, with precision 1.0. A precision of 1 is fine if you will not be using fractional ratings like 3.5.

- Set the field to required, if you will always have a rating. If you won't always have a rating, 
leave it as not required, and configure the Embed element so that it is conditionally visible and hidden in no-rating situations.






<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script src="{{ site.liburl }}/src/nocode/webflow-ui.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    import { setRating } from '{{ site.liburl }}/src/modules/webflow-ui.js';

    $(function () {
    
        $("#myRange").on('input', function() {
    
            console.log('changed to.' + $("#myRange").val());

            setRating($("#stars"), $("#myRange").val())
    
        });
  
    });

</script>
