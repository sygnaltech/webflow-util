---
layout: page
title: Webflow-Data
menubar: menu
hero_height: is-small
toc: true
---

**Data makes your website interesting.**

Webflow's CMS and Collection Lists offer some great capabilities but they also have limitations-

- Inability to display data in a table
- Limitations on nesting colleciton lists
- Inability to populate an element's custom attributes with data from a Collection List

WFU enables new ways for you to access and integrate data into your Webflow site- both from the Webflow CMS, and from external sources such as public APIs.

Capabilities are divided into two groups-

Creating JSON data sources;

- Turning a Webflow CollectionList into a usable Data source
- Turning a remote JSON or CSV resource into a usable Data source

Data-binding Webflow elements to those sources;

- Binding lists to FORM Dropdown elements, as select options
- Binding lists to FORM Text elements, as autocomplete options

## What can you do? 

- Display the count of items in a datasource



## How it Works

WFU **data sources** are simple JSON arrays built from Collection Lists that you prepare. These are stored in a Map collection that I refer database, which enables you to retrieve multiple data sources

## Data Shapes

WFU utilizes 3 types of JSON simple structural patterns which I refer to as **data shapes**;

1. **Table.** A JSON array in which each element contains the same set of keys. Typically this is constructed from a tabular source such as a Webflow Collection List, or a CSV file. 
2. **List.** A Table with only one or two fields per element. Lists are primarily used for data-binding to FORM controls.
3. **Dictionary.** A List, which has a `key` field and a `value` field. The key field content is expected to be unique. Dictionaries are used for lookups in template processing. 

