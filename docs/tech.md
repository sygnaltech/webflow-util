---
title: Technical Notes
sidebar: toc
---

- [Home](/webflow-util)


# Technical Notes

Sygnal's **Webflow Utilities (WFU)** is an experimental project as much as a practical toolset. 
The team developing WFU is applying the most current javascript technolgoies where possible 
as a practical implementation exercise.

### Webflow-centric Design

All of the tools in our library are designed specifically to work with websites 
that are built and hosted on Webflow.

This means;

- We prioritize HTML5 generation, with little attention to backwards compatability.

- We use jQuery, which is present in all Webflow hosted sites.

- Script files must be hosted externally to the site.

- We prioritize solutions which overcome limitations & problems in Webflow, 
even if they wouldn't be a common issue on other platforms.

### JavaScript modules

As of 3.0, WFU uses 
[JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
as a way to better define and separate code. 
These are widely supported across modern browsers, however are not supported by Internet Explorer.

### Object-Oriented patterns

For complex utility modules, our library is designed using OO patterns as much as possible.

### Node Package Manager (NPM)

Ideally, we'd like to build this toolset as a proper NPM package, 
as it would allow for much richer scripting options, a plug-in style architecture, easy script updating and dependency management.

However to our knowledge there is currently no native way to make this work with Webflow's hosting environment.
At the moment any NPM-style functionality such as the `package.json` only exist as a placeholder
for these future goals.
