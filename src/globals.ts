
/**
 * SA5 Globals
 * 
 */

export enum Sa5GlobalEvent {

    EVENT_USER_CHANGED = 'userInfoChanged',
    EVENT_DATASTORE_LOADED = 'datastoreLoaded',

}

export enum Sa5ScriptType {

    SCRIPT_TYPE_DATA_ITEM = 'wfu-data-item', 
    SCRIPT_TYPE_SA5_DATA_ITEM = 'sygnal/sa5-data-proto', // 'sygnal/sa5-data', 

}

export enum Sa5Attribute {

    // Data
    ATTR_DATA = 'wfu-data',
    ATTR_DATA_TYPE = 'wfu-data-type',
    ATTR_DATA_DSN = 'wfu-data-dsn',
    ATTR_DATA_ITEM_ID = 'wfu-data-item-id',
    
    // Data-binding
    ATTR_DATABIND = 'wfu-bind',
    ATTR_DATABIND_CONTENT = 'wfu-bind-content',
    ATTR_DATABIND_CONTEXT_DSN = 'wfu-bind-dsn',
    ATTR_DATABIND_CONTEXT_ITEM_ID = 'wfu-bind-item-id',

    // Pre-loaders
    ATTR_PRELOAD = 'wfu-preload', 

    // Interactions
    ATTR_IX_TRIGGER = 'wfu-ix-trigger',
    ATTR_IX_ID = 'wfu-ix-id',

    // Sort
    ATTR_SORT = 'wfu-sort',

    // Filter
    ATTR_FILTER = 'wfu-filter',
    ATTR_FILTER_MATCH = 'wfu-filter-match',
    ATTR_FILTER_EVAL = 'wfu-filter-eval',
    ATTR_FILTER_FUNC = 'wfu-filter-func',

}