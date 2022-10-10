---
layout: page
title: Technical Notes
# subtitle: Make your webflow site awesome
menubar: menu
hero_height: is-small
toc: true
---


**Webflow Utilities (WFU)** is an experimental project as much as a practical toolset. 
Where possible, I'm employing the latest javascript technologies as a practical implementation exercise, and to test their capabilities.

## Webflow-centric Design

All of the tools in this library are designed specifically to work with websites that are built and hosted on Webflow.

This means;

- I prioritize HTML5 generation, with little attention to backwards compatability.

- I use jQuery, which is present in all Webflow hosted sites.

- Script files are be hosted externally to the site. In-site scripting is limited to "glue" and configuration scripts.

- I'm prioritizing solutions which overcome limitations & problems in Webflow, even if they wouldn't be a common issue on other platforms.


## Redesigned Using ES6 Modules

As of 3.0, WFU uses 
[JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
as a way to better define and separate code. 
These are widely supported across modern browsers, however are not supported by Internet Explorer.

Without the ability to use NPM, javascript modules appear to be the most effective way
to separate and re-use use code between the libraries.

*Note, I'm using the `.js` extension on our modules rather than `.ejs`, 
as this currently appears to be the recommended practice. However, these are ES6 modules, so you will need to specify that in your script references.*

If you're unfamiliar with ES6 modules, accessing them looks like this;

Let's suppose you want to call `myFunc()` from your Webflow page. In the "Before /BODY" code area, you might include this;

```
<script type="module">
    import { myFunc } from 'some-wfu-library.js';
    $(function () {
        myFunc();
    }
</script>
```

Notes;

- The `type="module"` on the `<script>` element is important, to allow ES6 use in your script.
- Modules are included through `import`, where you specify the function(s) you want to access, and the path to the `.js` library.
- You can use other javascript and jQuery 100% as normal.

I'll give specific examples of script you can use with each library.

## Object-Oriented patterns

For complex utility modules, our library is designed using OO patterns as much as possible.

## Node Package Manager (NPM)

Ideally, I'd like to evolve this toolset as a proper NPM package, as it would allow for much richer scripting options, a plug-in style architecture, version and dependency management.

At the moment this is on the backburner, as I'm unfamiliar with using NPM to generate browser-compatible ES6 bundles. 

*Contributors welcome.*

