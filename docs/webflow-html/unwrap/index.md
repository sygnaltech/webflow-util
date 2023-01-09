---
layout: page
title: Unwrap
subtitle: webflow-html
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-html
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util" %}
{% endif %}

## Unwrap Elements

When you're working with Webflow elements at a code level,
the element wrapping can occasionally cause issues. 

Merge

`wfu-merge`


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