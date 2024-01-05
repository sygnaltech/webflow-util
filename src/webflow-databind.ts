
/*
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Data-binding functions.
 */

//import { csvToObjects } from './webflow-data-csv.js';
//import { prepareCollectionListDataSource } from '../datasources/webflow-collectionlist-data.js';
//import { loadGoogleSheetFromSpec } from '../datasources/google-sheet-data.js';
import { HtmlBuilder } from './webflow-html-builder';

//import { Database } from './webflow-data.js';
import { Sa5UserAccounts } from './webflow-membership';
import { Sa5User } from './webflow-membership/user';
import { booleanValue, getCookie, identifyElement, selectOptionByValue } from './utils'; 
//import Handlebars from "handlebars";
import { HandlebarsTemplateHandler } from './webflow-databind/template/handlebars-template-handler';
import { DefaultTemplateHandler } from './webflow-databind/template/default-template-handler';
import { Sa5Datastore } from './webflow-data';
import { Sa5Attribute } from './globals';

/*
 * DATA BINDER
 */

// const DataSourceType = Object.freeze({
//     db: 'db', // + // $db
//     user: 'user', // @ // $user
//     query: 'query', // ? // $query
//     // cookie
//     // local/session 

// });

enum DataSourceTypeEnum {
    DB = 'db', // + // $db
    USER = 'user', // @ // $user
    URL = 'url', // $url
    QUERY = 'query', // ? // $query
    LOCAL_STORAGE = 'local', // $local
    SESSION_STORAGE = 'session', // $session
    COOKIE = 'cookie', // $cookie
}


// function getKeyByValue(enumObj: any, value: string) {
//     return Object.keys(enumObj).find(key => enumObj[key] === value);
// }
// function getDataSourceTypeEnum(myEnum, enumValue){
//     let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
//     return keys.length > 0 ? keys[0] : null;
// }

interface Sa5DataBinderConfig {

    db?: string;
    user?: Sa5User;
    handlers: [];

}

// var dataBinderConfig = {
//     db: undefined,
//     user: undefined,
//     handlers: [
//     ]
// }

export class Sa5DataSourceDescriptor {
    
    type: DataSourceTypeEnum;

    name: string;

    identifier: string;
    identifierParts: string[];

    get isValid(): boolean {
        if (!this.name) return false;
        if (!this.type) return false;
        return true;
    }

    constructor(dataSourceDescriptor: string) {

        this.parse(dataSourceDescriptor); 
    }

    expandDataSourceTypeAbbr(dsd: string): string { 

        const DSN_TYPE_ABBR = {

            "@": "$user",
            "+": "$db",
            "?": "$query",

             // Reserved for future use
            "!": "$unknown", 
            "#": "$unknown",
            "%": "$unknown",
            "^": "$unknown",
            "&": "$unknown",
            "*": "$unknown",
            "=": "$unknown",
            "-": "$unknown",
            "~": "$unknown",
            // / < > ; : \ _  

        };        

        if (DSN_TYPE_ABBR.hasOwnProperty(dsd[0])) {
            return DSN_TYPE_ABBR[dsd[0]] + '.' + dsd.slice(1);
        }

        return dsd;
    }

    // Parse the type of the dsn
    parse(dsd: string): void {

        this.name = undefined;
        this.type = undefined;

        // Clean whitespace 
        dsd = dsd.trim();

        // If DSN Type is abbr, expand it
        dsd = this.expandDataSourceTypeAbbr(dsd); 

        let parts = dsd.split('.');

        // Resolve to type
        // Extract & prepare DSN type part
        var dsnTypeName = parts.shift(); 

        if(dsnTypeName[0] != '$') {
            return; // bad DSD 
        }

        dsnTypeName = dsnTypeName.slice(1); 

        // Parts 
        this.identifierParts = parts;
        this.name = this.identifierParts.join('.');

//        console.log("parse", this.type, dsnTypeName); 

        // function getKeyByValue(value: string): DataSourceTypeEnum {
        //     return Object.keys(DataSourceTypeEnum).find(key => DataSourceTypeEnum[key] === value) as DataSourceTypeEnum;
        // }

        this.type = dsnTypeName as DataSourceTypeEnum;

//        this.type = getKeyByValue(dsnTypeName);

        // let keys = Object.keys(DataSourceTypeEnum).filter(x => DataSourceTypeEnum[x] == dsnTypeName);
        // this.type = (keys.length > 0 ? keys[0] : null) as DataSourceTypeEnum;

//        console.log("parse after type", this.type, DataSourceTypeEnum.QUERY);

//console.log(this); 

    }

}

export class WfuDataBinder {

    store: Sa5Datastore;

    config: Sa5DataBinderConfig; // config

    constructor(store: Sa5Datastore, config: Partial<Sa5DataBinderConfig> = {}) {

        this.store = store;

//          this.config = $.extend({}, dataBinderConfig, config);
//        this.config = {...dataBinderConfig, ...config};
        // Merge configs, with defaults
        this.config = {
//            userInfoUpdatedCallback: config.userInfoUpdatedCallback,
            db: config.db ?? null,
            user: config.user ?? null,
            handlers: [], 
        }
    
        // If no user found, load the current one if available
        if (!this.config.user)
            this.config.user = new Sa5UserAccounts().loadUserInfoCache();

    }



    /* Bind all data sources
    * tagged with [wfu-bind]
    */
    bindAll() {

// NOCODE layer
// Build datasources
// find elements
// do binding 
//      passing elements and datasources db 

// console.log("DATABINDING"); 

        // BUG?? should be in nocode? 
        // Find all elements which specify a data-source for data binding
        // Iterate and bind each individually
        let dataBind = document.querySelectorAll(
            `[${Sa5Attribute.ATTR_DATABIND}]`); // wfu-bind
        dataBind.forEach((elem: HTMLElement) => {

            // Data-bind element
            this.bind(elem); 

            // Remove preloader attr, if existing
            elem.removeAttribute(Sa5Attribute.ATTR_PRELOAD); 

        }); 

        // Bind content 
        let dataBindContent = document.querySelectorAll(
            `[${Sa5Attribute.ATTR_DATABIND_CONTENT}]`); // wfu-bind-content 
        dataBindContent.forEach((elem: HTMLElement) => {

            // Data-bind content in element
            this.bindContent(elem); 

            // Remove preloader attr, if existing
            elem.removeAttribute(Sa5Attribute.ATTR_PRELOAD); 

        }); 

    }

    // Search upward through the DOM for a context for this element 
    // typically used for [wfu-bind-dsn] and [wfu-bind-item-id]
    findContextSetting(element: HTMLElement, attr: string) {
        while (element) {
            if (element.getAttribute(attr) !== null) {
              return element.getAttribute(attr);
            }
            element = element.parentElement;
        }
        return null; // no context found
    }

    // Data-bind element
    bind(elem: HTMLElement) {

        // Determine bind type 
        let dsnDescriptor = elem.getAttribute(Sa5Attribute.ATTR_DATABIND); // "wfu-bind" 

        let dsn = new Sa5DataSourceDescriptor(dsnDescriptor); 

        // is valid 
        if(!dsn.isValid) {
            console.error("Invalid dsn.", dsn);
            return; 
        }

        // Get data
        let val: string = null;
        val = this.getData(
            dsn, 
            elem // as additioanl context, e.g. [wfu-bind-dsn] and [wfu-bind-item-id] contexts 
            ); 

        // Handle null situation 
        // BUG: differentiate no result v. empty result 
        if (!val) return;

        // Bind data
        switch(identifyElement(elem)) {
            case 'HTMLLinkElement':

                (elem as HTMLLinkElement).href = val;

                break;
            case 'HTMLCheckboxElement':

                (elem as HTMLInputElement).checked = booleanValue(val);

                break;
            case 'HTMLRadioElement':
                break;
            case 'HTMLFileInputElement':
                break;
            case 'HTMLInputElement':

                (elem as HTMLInputElement).value = val;

                break;
            case 'HTMLSelectElement':

                selectOptionByValue(
                    (elem as HTMLSelectElement),
                    val
                );

                break;
            case 'HTMLTextAreaElement':

                (elem as HTMLInputElement).value = val;

                break;
            case 'HTMLButtonElement':
                break;
            default:

                // Bind other element 
                elem.textContent = val;

                break;

        }

    }
    
    // Binds content in a template 
    bindContent(elem: HTMLElement) {

        new DefaultTemplateHandler(this).processElement(elem);

    }

    // Resolve the DSD to a value 
    // or null if none found  
    getData(dsd: Sa5DataSourceDescriptor, elem: HTMLElement = null): string {

// console.log("getdata dsd", dsd); 
// console.log("getdata dsd.type", dsd.type, DataSourceTypeEnum.QUERY); 

        switch(dsd.type) {
            case DataSourceTypeEnum.USER:
                return this.getData_user(
                    dsd
                );
            case DataSourceTypeEnum.DB:

                let dsnContext = this.findContextSetting(elem, 
                    Sa5Attribute.ATTR_DATABIND_CONTEXT_DSN ); // "wfu-bind-dsn"
                let itemContext = this.findContextSetting(elem, 
                    Sa5Attribute.ATTR_DATABIND_CONTEXT_ITEM_ID ); // "wfu-bind-item-id" 

                // if(elemContext) {
                //     dsnContext = elemContext.getAttribute("wfu-bind-dsn");
                //     itemContext = elemContext.getAttribute("wfu-bind-item-id");
                // }

                // console.log("getData db elem", elemContext); 
                // console.log("getData db", dsnContext, itemContext); 

                return this.getData_db(
                    dsd,
                    dsnContext,
                    itemContext
//                    this.config.db,
                );
            case DataSourceTypeEnum.QUERY:
                return this.getData_query(
                    dsd
                );
            case DataSourceTypeEnum.URL:
                return this.getData_url(
                    dsd
                );
            case DataSourceTypeEnum.LOCAL_STORAGE:
                return this.getData_localStorage(
                    dsd
                );
            case DataSourceTypeEnum.SESSION_STORAGE:
                return this.getData_sessionStorage(
                    dsd
                );
            case DataSourceTypeEnum.COOKIE:
                return this.getData_cookieStorage(
                    dsd
                );
        } 

    } 

    private getData_user(dsd: Sa5DataSourceDescriptor): string {

        // If no user, return nothing
        // TODO: warn? 
        if (!this.config.user || !this.config.user.email)
            return null; 
    
        let val: string = "";
        switch (dsd.identifierParts[0]) {
            case "data":
                val = this.config.user.data[dsd.identifierParts[1]];
                break;
            default:
                val = this.config.user[dsd.name]; 
                break;
        }

        return val;
    }

    private getData_cookieStorage(dsd: Sa5DataSourceDescriptor): string {

        // Abort if not in a browser context 
        if (typeof window == 'undefined')
            return null;

        // Should return null if there is none
        return getCookie(dsd.name);
    }

    private getData_localStorage(dsd: Sa5DataSourceDescriptor): string {

        // Abort if not in a browser context 
        if (typeof window == 'undefined')
            return null;

        // Should return null if there is none
        return localStorage.getItem(dsd.name);
    }

    private getData_sessionStorage(dsd: Sa5DataSourceDescriptor): string {

        // Abort if not in a browser context 
        if (typeof window == 'undefined')
            return null;

        // Should return null if there is none
        return sessionStorage.getItem(dsd.name);
    }
    
    private getData_query(dsd: Sa5DataSourceDescriptor): string {

        // Abort if not in a browser context 
        if (typeof window == 'undefined')
            return null;
        
        // Get Params 
        let urlParams = new URLSearchParams(window.location.search);

        // Should return null if there is none
        return urlParams.get(dsd.name);
    }
    
    private getData_url(dsd: Sa5DataSourceDescriptor): string {

        // Abort if not in a browser context 
        if (typeof window == 'undefined')
            return null;
        
        // Get Params 
//        let urlParams = new URLSearchParams(window.location.search);

        const url = new URL(window.location.href);

//        const fieldName = 'pathname';  // This is the string representing the field name
        
        const fieldValue = url[dsd.name];
        
        console.log(fieldValue);  // Outputs: "/path/to/resource"
        

        // Should return null if there is none
        return fieldValue; // urlParams.get(dsd.name);
    }

    private getData_db(dsd: Sa5DataSourceDescriptor, dsnContext: string, itemContext: string): string {

        // Get data source name 
//        let dsn = el.getAttribute("wfu-bind");
 //   console.log("getData_db", dsd, dsnContext, itemContext);
        // Find all elements which identify themselves
        // as a data-source
        //let dataSource = document.querySelector(`*[wfu-bind='${dsn}']`);
        //if (!dataSource) {
        //    console.warn(`Datasource: '${name}' does not exist`);
        //    return;
        //}

//console.log(this.store);

    let db = this.store.store[dsnContext]
//    console.log(this.store);

    let item = db.data.get(itemContext);

 //   console.log(item); 

return item[dsd.name];


        // BUG: 
// return 'foo';

/* 

        // Get data
        let data = db.getData(dsn);
    
        if(!db) {
            console.warn(`Data binding requested for elem '${data}', but no db defined.`);
            return; // exit 
        }
    
        let templateId = el.getAttribute("wfu-bind-template");
    
        let template: HTMLElement = document.querySelector("#" + templateId);
    
        let hb = new HtmlBuilder();
        hb.addTemplate(
            template,
            data
        );
    
        // Push HTML to element
        el.innerHTML = hb.render();

        */
    }

}

