---
title: What's New?
sidebar: toc
---

- [Home](/webflow-util)


# What's New?

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

## Separation of Functionality

As the library grows, I found the need to partition the code better for accessibility & reusability. 

- Webflow-specific code is being distinguished from more general functionality.
- Libraries specific to Webflow implementation are prefixed with `webflow-`.
- Other libraries will be named, grouped and prefixed according to the functional intent
and the platforms they pertain to.
- This means that much of the functionality here can be used in non-Webflow sites, or in sites that you are hosting separately. Around that capability is a Webflow-specific wrapper that applies those features in Webflow's unique HTML-generation and hosting-environment context.

## 3 Distinct Integration Approaches

I want to embrace the reality that many Webflow designers are unfamiliar with programming,
while others need maximum functionality.

To support a wide range of users, I'm conceptually dividing integration approaches into 3 zones;

- **Code.** *Programmers* will generally use the libraries under `src/modules` directly. 
These functions and libraries can be arranged to accomplish complex tasks with unique configurations, and using these modules directly gives you full access to their capabilities.

- **Lo-Code.** *Designers* with basic scripting knowledge are provided with *locode* libraries that
encapsulate the most commonly-used functionality into single function calls.
These libraries exist under `/src/locode` and have a `-helper` suffix. These will provide the core functionality of the full libraries, with minimal setup.

- **No-Code.** Where possible, I intend to offer codeless possibilities where the functionality is automatically added by simply adding the library. Paste in the library refernce, tag your elements for the functionality you want, and everything else happens automatically. This entirely avoids script-writing, while giving you much of the functionality designers want.

