---
layout: page
title: Data Sources
menubar: menu
hero_height: is-small
toc: true
---

## What are WFU Data Sources?

WFU makes your data programmatically accessible by preparing JSON **data sources** and a **database** for your scripts to use.

These concepts are very simple;

- A **data source** is a JSON document, typically in the form of a table, list, or dictionary.
- A **database** is a Javascript `map`, which provides a key-value store for the data sources to reside in.

## How are Data Sources built?

In WFU 3, Data Sources can be created from three primary sources;

1. A Webflow Collection List
2. A remote JSON source, such as an API endpoint
3. A remote CSV source, such as an Google Sheet

Data Sources undery WFU's data-binding capabilities, but you can use them for other purposes as well.



