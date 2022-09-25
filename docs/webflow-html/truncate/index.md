---
layout: page
title: Truncate Text w/ Ellipsis
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

## Truncate Text with Ellipsis

Often, it is desirable to truncate plain text excerpts so that they do not break your layout, 
particularly when that text is variable ( coming from the CMS ), and when your layout involves a grid arrangement
such as a card layout.

Modern CSS does provide a solution for this, but the required settings are not built into the Webflow designer [yet].

So, here's a solution that gives you what you need.

NOTE: Custom CSS is applied only in your published site,
so you will not see the truncation in the designer. 

## Demonstration

<link rel="stylesheet" href="/dist/css/webflow-html.css">

<span class="tag is-danger is-medium is-light">Demonstration</span>

Text truncated to 3 lines...

<div class="demo yellow" style="width: 400px;">
    <p id="sentences" wfu-truncate="3"></p>
</div>

<button class="button is-dark" id="btnSentences">Re-Generate</button>



## Usage Notes

### `wfu-truncate` attribute

Use `wfu-truncate` to apply truncation to a text element.

Use a value of `1` to `5` to specify the number of lines.

e.g.;

```
wfu-truncate = 3
```

**Tested on Chrome ONLY.**


## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

This is a CSS-only solution. 

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-html.css">
```




### STEP 2 - Apply `wfu-truncate` to your text elements


See above for details. 





<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    // cdn.jsdelivr.net/gh/sygnaltech/webflow-util
    import { genLipsumWords, genLipsumSentences, genLipsumParagraphs, genLipsumText } from '{{ site.liburl }}/src/modules/webflow-content-lipsum.js';

    function genWords() {
        $("#words").text(
            genLipsumWords(1, 10)
        );
    }

    function genSentences() {
        $("#sentences").text(
            genLipsumSentences(1, 10)
        );
    }

    function genText() {
        $("#text").html(
            genLipsumText(1, 10, '<p>', '</p>')
        );
    }

    $(function () {

        // Generate Lipsum text
        genWords();
        genSentences();
        genText();

        $("#btnWords").click(function () {
            genWords();
        });

        $("#btnSentences").click(function () {
            genSentences();
        });

        $("#btnText").click(function () {
            genText();
        });

    });

</script>