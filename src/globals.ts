
/**
 * SA5 Globals
 * 
 */

export enum Sa5GlobalVar {

    GLOBAL_ROUTE = 'sa5-route' 

}

export enum Sa5GlobalEvent {

    EVENT_USER_CHANGED = 'userInfoChanged',
    EVENT_DATASTORE_LOADED = 'datastoreLoaded',
    EVENT_SLIDE_CHANGED = 'slideChanged', 
    EVENT_SLIDE_NEXT_REQUEST = 'slideNextRequest', 
    EVENT_SLIDE_PREV_REQUEST = 'slidePrevRequest', 
    EVENT_TAB_CHANGED = 'tabChanged', 
    EVENT_ACCORDION_CHANGED = 'accordionChanged', 
    EVENT_VIDEO_PLAYER_STATE_CHANGE = 'playerStateChange', 
    
}

export enum Sa5ScriptType {

    SCRIPT_TYPE_DATA_ITEM = 'wfu-data-item', 
    SCRIPT_TYPE_SA5_DATA_ITEM = 'sygnal/sa5-data', // 'sygnal/sa5-data-proto', 

}

export namespace Sa5Attribute {
    export function getBracketed(attr: Sa5Attribute): string {
        return `[${attr}]`;
    }
}

export enum Sa5Attribute {

    // Core
    ATTR_CORE_SCRIPT_INJECT = 'wfu-script-load', 

    // Video
    ATTR_VIDEO = 'wfu-video',
    ATTR_VIDEO_YOUTUBE_NOREL = 'wfu-youtube-norel', 
    ATTR_VIDEO_DATA_POSTER_URL = 'wfu-data-poster-url', 

    // Designer
    ATTR_DESIGN = 'wfu-design',

    // Elements 
    ATTR_ELEMENT_SLIDER = 'wfu-slider',
        ATTR_ELEMENT_SLIDE_NAME = 'wfu-slide-name',
    ATTR_ELEMENT_TABS = 'wfu-tabs',
        ATTR_ELEMENT_TAB_NAME = 'wfu-tab-name',
    ATTR_ELEMENT_BUTTON = 'wfu-button', 
        ATTR_BUTTON_ENABLED = 'wfu-button-enabled', 
        ATTR_BUTTON_DISABLED_CLASS = 'wfu-button-disabled-class',
    ATTR_ELEMENT_DECK_TARGET = 'wfu-deck-target',
        ATTR_ELEMENT_DECK_ACTION = 'wfu-deck-action',
        ATTR_ELEMENT_DECK_ITEM = 'wfu-deck-action-item',
    ATTR_ELEMENT_DROPDOWN = 'wfu-dropdown',
        ATTR_ELEMENT_DROPDOWN_NAME = 'wfu-dropdown-name',
        ATTR_ELEMENT_DROPDOWN_INIT = 'wfu-dropdown-init',
        ATTR_ELEMENT_DROPDOWN_TYPE = 'wfu-dropdown-type',
    ATTR_ELEMENT_AUTOCOMPLETE = 'wfu-autocomplete',
        ATTR_ELEMENT_AUTOCOMPLETE_INPUT = 'wfu-autocomplete-input',
        ATTR_ELEMENT_AUTOCOMPLETE_LIST = 'wfu-autocomplete-list',
        ATTR_ELEMENT_AUTOCOMPLETE_ITEM = 'wfu-autocomplete-item',
        ATTR_ELEMENT_AUTOCOMPLETE_ITEM_ACTION = 'wfu-autocomplete-item-action',
        ATTR_ELEMENT_AUTOCOMPLETE_ITEM_MATCH = 'wfu-autocomplete-item-match',
        ATTR_ELEMENT_AUTOCOMPLETE_ITEM_LAYOUT = 'wfu-autocomplete-item-layout',
    ATTR_ELEMENT_ACCORDION = 'wfu-accordion',
        ATTR_ELEMENT_ACCORDION_ITEM = 'wfu-accordion-item',
        ATTR_ELEMENT_ACCORDION_ITEM_TAB = 'wfu-accordion-item-tab',
        ATTR_ELEMENT_ACCORDION_ITEM_CONTENT = 'wfu-accordion-item-content',
        ATTR_ELEMENT_ACCORDION_CLASS_OPEN = 'wfu-accordion-class-open',
        ATTR_ELEMENT_ACCORDION_CLASS_CLOSED = 'wfu-accordion-class-closed',
    


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
    ATTR_SORT_DIR = 'wfu-sort-dir',
    ATTR_SORT_TYPE = 'wfu-sort-type', 
    ATTR_SORT_KEY = 'wfu-sort-key', 

    // Filter
    ATTR_FILTER = 'wfu-filter', // Deprecated
    ATTR_FILTER_MATCH = 'wfu-filter-match',
    ATTR_FILTER_EVAL = 'wfu-filter-eval',
    ATTR_FILTER_FUNC = 'wfu-filter-func',

    // Hiding & Suppression
    ATTR_HIDE = 'wfu-hide',
    ATTR_SUPPRESS = 'wfu-suppress',

    // Encoded Emails
    ATTR_EMAIL_ENCODED = 'wfu-email-encoded', 

    // 404
    ATTR_404_SEARCH = 'wfu-404-search',

    // Forms
    ATTR_FORM_HANDLER = 'wfu-form-handler',
    ATTR_FORM_MESSAGE = 'wfu-form-message',
    ATTR_FORM_IPINFO = 'wfu-form-ipinfo',
    
    ATTR_FORM_SELECT = 'wfu-form-select',
    ATTR_FORM_SELECT_MODE = 'wfu-form-select-mode',
    ATTR_FORM_SELECT_THEME = 'wfu-form-select-theme',

    // Dismiss
    ATTR_DISMISS = 'wfu-dismiss', 
    ATTR_DISMISS_TRIGGER = 'wfu-dismiss-trigger',
    ATTR_DISMISS_CLOSE = 'wfu-dismiss-close',
    ATTR_DISMISS_CLOSE_TYPE = 'wfu-dismiss-close-type',
    ATTR_DISMISS_DAYS = 'wfu-dismiss-suppress-days',

    // Modals
    ATTR_MODAL = 'wfu-modal', 
    ATTR_MODAL_TRIGGER_CLICK = 'wfu-modal-trigger-click',
    ATTR_MODAL_STATE = 'wfu-modal-state', // INTERNAL - hidden 
    // ATTR_MODAL_TRIGGER = 'wfu-modal-trigger',
    // ATTR_MODAL_CLOSE = 'wfu-modal-close',
    // ATTR_MODAL_CLOSE_TYPE = 'wfu-modal-close-type',
    // ATTR_MODAL_SUPPRESS_DAYS = 'wfu-modal-suppress-days',

    // Format
    ATTR_FORMAT = 'wfu-format',
    ATTR_FORMAT_DATE = 'wfu-format-date',
    ATTR_FORMAT_HANDLER = 'wfu-format-handler', 
    ATTR_FORMAT_MODE = 'wfu-format-mode',
    ATTR_FORMAT_SUFFIX = 'wfu-format-suffix',

    // Countup
    ATTR_COUNTUP = 'wfu-countup', 
    ATTR_COUNTUP_TRIGGER = 'wfu-countup-trigger',

    // Demo
    ATTR_DEMO_LINK = 'wfu-demo-link',

    // Lightboxes
    ATTR_LIGHTBOX_CAPTIONS = 'wfu-lightbox-captions',
    ATTR_LIGHTBOX_GROUP = 'wfu-lightbox-group',

    /**
     * SA5 HTML
     */

    // Decode
    ATTR_DECODE = 'wfu-decode',

    // Limits
    ATTR_LIMIT_MULTIPLE = 'wfu-limit-multiple',
    ATTR_LIMIT_MULTIPLE_MIN = 'wfu-limit-multiple-min',

    /**
     * SA5 User Accounts
     */

    ATTR_SHOW_LOGGED_IN = 'wfu-show-logged-in',
    ATTR_HIDE_LOGGED_IN = 'wfu-hide-logged-in',
    ATTR_LOGIN_BUTTON = 'wfu-login-button',

    /**
     * SA5 Richtext
     */

    ATTR_RICHTEXT_LISTS = 'wfu-lists',
    ATTR_RICHTEXT_LIST_THEME = 'wfu-list-theme',

    /**
     * SA5 URL
     */

    ATTR_URL_RELATIVE_LINKS = 'wfu-relative-links',
    ATTR_URL_EXTERNAL_LINKS = 'wfu-external-links',

    /**
     * SA5 UI
     */

    // Accordion
    ATTR_UI_ACCORDION = 'wfu-ui-accordion',

    // Rating
    ATTR_RATING = 'wfu-rating', 

    // Github GIST
    ATTR_GIST = 'wfu-gist',
    ATTR_GIST_COPY = 'wfu-gist-copy',

    /**
     * SA5 Layout 
     */

    ATTR_LAYOUT = 'wfu-layout', 
    ATTR_LAYOUT_HANDLER = 'wfu-layout-handler',
    ATTR_LAYOUT_TARGET = 'wfu-layout-target',
    ATTR_LAYOUT_NS = 'wfu-layout-ns',
    ATTR_LAYOUT_INIT = 'wfu-layout-init',

    ATTR_ELEMENTGROUP_NAME = 'wfu-element-name',
    ATTR_ELEMENTGROUP_GROUP = 'wfu-element-display',
    ATTR_ELEMENTGROUP_DEFAULT = 'wfu-element-default',
    ATTR_ELEMENTGROUP_DISPLAY = 'wfu-element-display',
    ATTR_ELEMENTGROUP_TARGETGROUP = 'wfu-element-target-group',
    ATTR_ELEMENTGROUP_TARGETNAME = 'wfu-element-target-name',
    ATTR_ELEMENTGROUP_ACTION = 'wfu-element-action',

}