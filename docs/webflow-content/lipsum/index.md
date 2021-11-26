---
layout: page
title: Lorem-Ipsum Generator
# subtitle: DEMO
menubar: menu
hero_height: is-small
toc: true
---

**Lipsum** is a popular abbreviaton of the term <i>Lorem Ipsum</i>, which refers to
Latin-looking text that approximates English in text layouts.

Sygnal's **Lipsum** generator allows you to dynamically and randomly create lipsum text
directly in your page, to examine the impact on layout and content flow.

## DEMO - Lipsum Words (array)

Generates an randum number of lipsum words.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo yellow">
    <div id="words"></div>
</div>

<button class="button is-dark" id="btnWords">Re-Generate</button>

## DEMO - Lipsum Sentences (array)

Generates a random number of lipsum sentences.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo yellow">
    <div id="sentences"></div>
</div>

<button class="button is-dark" id="btnSentences">Re-Generate</button>

Retrieve data from an online source, and create an HTML table.

## DEMO - Lipsum Text

Generates a random number of lipsum paragraphs.

<span class="tag is-danger is-medium is-light">Demonstration</span>

<div class="demo yellow">
    <div id="text"></div>
</div>

<button class="button is-dark" id="btnText">Re-Generate</button>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    // cdn.jsdelivr.net/gh/sygnaltech/webflow-util
    import { genLipsumWords, genLipsumSentences, genLipsumParagraphs, genLipsumText } from '{{site.liburl}}/src/modules/webflow-content-lipsum.js';

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

