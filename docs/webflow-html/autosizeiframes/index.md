---
layout: page
title: Auto-Size IFRAMEs
subtitle: webflow-html
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
output:
  html_document:
    css: ../../demo.css
---

<span class="tag is-danger is-medium is-light">Demonstration</span>

**This tool allows you to auto-size IFRAMES to their content.**

## DEMO - Auto-Size IFRAMEs

The yellow area and lipsum text below are the content of an IFRAME.

Refresh the page to generate new random lipsum text, and watch the IFRAME re-calculate the size accordingly.

The IFRAME is being auto-sized to the content it contains. In this design, it will not truncate the content, or have unnecessary padding below. It also does not require scrollbars.

Automatically sizes the IFRAME to fit its content.

**IFRAME Starts Here**

<iframe id="demo-area" wfu="html.iframe.autofit"
        src="content01.html"
        width="100%" height="200"
        frameBorder="0"
        scrolling="no"></iframe>

**IFRAME Ends here.**

## Limitations

<ul>
    <li>May not work with cross-domain content.</li>
    <li>May not respond to dynamic IFRAME content changes.</li>
</ul>





<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    import { autosizeIFrames } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-html.js';

    $(function () {

        // Auto-detects all IFRAMES tagged for autosizing
        autosizeIFrames();

    });

</script>



