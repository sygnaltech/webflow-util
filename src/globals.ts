
/**
 * SA5 Globals
 * 
 */

export enum Sa5GlobalEvent {

    EVENT_USER_CHANGED = 'userInfoChanged',
    EVENT_DATASTORE_LOADED = 'datastoreLoaded',
    EVENT_SLIDE_CHANGED = 'slideChanged', 
    EVENT_VIDEO_TIME_UPDATE = 'videoTimeUpdate', 
    
}

export enum Sa5ScriptType {

    SCRIPT_TYPE_DATA_ITEM = 'wfu-data-item', 
    SCRIPT_TYPE_SA5_DATA_ITEM = 'sygnal/sa5-data-proto', // 'sygnal/sa5-data', 

}

export namespace Sa5Attribute {
    export function getBracketed(attr: Sa5Attribute): string {
        return `[${attr}]`;
    }
}

export enum Sa5Attribute {

    // Video
    ATTR_VIDEO = 'wfu-video',
    ATTR_VIDEO_DATA_POSTER_URL = 'wfu-data-poster-url', 

    // Designer
    ATTR_DESIGN = 'wfu-design',

    // Elements 
    ATTR_ELEMENT_SLIDER = 'wfu-slider',
    ATTR_ELEMENT_TABS = 'wfu-tabs',
    ATTR_ELEMENT_BUTTON = 'wfu-button', 
        ATTR_BUTTON_ENABLED = 'wfu-button-enabled', 
        ATTR_BUTTON_DISABLED_CLASS = 'wfu-button-disabled-class',

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