---
layout: page
title: What's New
#subtitle: Make your webflow site awesome
menubar: menu
hero_height: is-small
toc: true
---

# What's New?

## v3.15

Under development. 

## v3.14

#### `webflow-url`

- [Automatic targeting of external links](/docs/webflow-url/link-targeting/)
- [CMS relative link fixups](https://wfu.sygnal.com/docs/webflow-url/cms-fixups/)

## v3.13

#### Dynamic Attributes

##### Breaking Changes

Attribute name changed from `apply-attr` to `wfu-apply-attr`, e.g. 

```
<data type="wfu-apply-attr" apply="prev">
    <data attr="style" value="background-color: yellow;"></data>
</data>
```

#### Nested Lists

##### Breaking Changes

Skeleton loader temporarily disabled, as we work through some issues with Webflow's editor. 

Custom attribute tag is now recommended as `wfu-lists=nested` rather than `wfu-lists=all`.

Both are currently identical, but we will expand on this in the future.
