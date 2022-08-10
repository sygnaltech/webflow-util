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

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@3.3/dist/css/webflow-ui.css">

WFU can use public Google Sheets as a data source.

## DEMO - Ratings Component

Displays a fractional-star rating, as specified.


<span class="tag is-danger is-medium is-light">Demonstration</span>

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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@3.3/dist/css/webflow-ui.css">
```

Install JS in BODY, generally site-wide.

```
<script src="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@3.3/src/nocode/webflow-ui.js"></script>
```

*Update the version numbers as needed.



### STEP 2 - Create an EMBED where you want a WFU Rating component to appear.

Paste this code into the EMBED;

```
<div wfu="rating" wfu-rating="3.5">
    RATING
</div>
```

Note that you can put anything into the DIV and it will be deleted when the Rating Component is created.
In this way, you can have a visible placeholder while you're in the designer, where scripts cannot run.

We recommend placing stars there for convenience;

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

<script src="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@3.3/src/nocode/webflow-ui.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    import { getGoogleSheetData } from '{{site.liburl}}/src/datasources/google-sheet-data.js';
    import { displayDataAsHtml } from '{{site.liburl}}/src/modules/webflow-html.js';

    $(function () {

        // Get data
        getGoogleSheetData(
            '16lPOiFz5Ow-FTro5SWS-m00fNhRjgsiyeSBdme3gKX0'
        ).then((res) => {

            displayDataAsHtml(
                $("#json1"),
                res
            );

        }, (err) => {
            console.log(err);
        });

    });

</script>
