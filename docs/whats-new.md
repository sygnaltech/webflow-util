---
layout: page
title: What's New
#subtitle: Make your webflow site awesome
menubar: menu
hero_height: is-small
toc: true
---

# What's New in Version 3.0?

## Redesigned Using ES6 Modules

*3.0 is a complete redesign using Javascript ES6-style modules.*

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

