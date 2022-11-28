---
layout: page
title: What's New
#subtitle: Make your webflow site awesome
menubar: menu
hero_height: is-small
toc: true
---

# What's New?


## v3.30

Under development. 

## v3.29

- Additional numeric formats
added to `webflow-format`.

## v3.28

- Added user tracking w/ cookies & web storage 
as `webflow-track`.

## v3.27

- Added Decode HTML
to `webflow-html`.

## v3.26

- Added Hide Section w/ Empty Collection Lists

## v3.25

- Added semver sorting.

## v3.24

- Upgraded Dynamic attributes.

## v3.23

#### Lib: `webflow`

- Added Editor-mode detector.

#### Lib: `webflow-html`

- Added Webflow Editor-mode behavior for nested lists.

## v3.22

#### Lib: `webflow-html`

- Sorting expanded to include numeric keys

## v3.21

#### Lib: `webflow-format`

- Number formatting for numbers and currency

## v3.20

#### Lib: `webflow-html`

- List sorting

## v3.19

#### Lib: `webflow-commerce`

- Simple commerce

## v3.18

#### Lib: `webflow-forms`

- Added IP Info capture-and-append.

## v3.17

#### Lib: `webflow-forms`

- Added 'n8n' handler.
- Change handlers so that the form action is retrieve at the point of submit.
This way it can be changed live (e.g. for debugging purposes).

## v3.16

#### Lib: `webflow-forms`

- Changed `success` handler to `other`. 
- Bugfix on form data serilaization. 

## v3.15

#### Lib: `webflow-forms`

- Redesigned to a webhook-handler approach, which is specified by a `wfu-form-handler` attribute.
- The zapier handler is named `zapier`
- A new `success` handler is added for webhooks that have other JSON response formats. 

## v3.14

#### Lib: `webflow-url`

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
