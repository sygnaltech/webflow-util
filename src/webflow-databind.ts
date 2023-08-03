
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
import { Sa5Membership } from './webflow-membership';



/*
 * DATA BINDER
 */

const DataSourceType = Object.freeze({
    db: 'db', // + // $db
    user: 'user', // @ // $user
    query: 'query', // ? // $query
    // cookie
    // local/session 

});

var dataBinderConfig = {
    db: undefined,
    user: undefined,
    handlers: [
    ]
}

export class WfuDataBinder {

    config; // Optional config

    constructor(config = {}) {

//          this.config = $.extend({}, dataBinderConfig, config);
        this.config = {...dataBinderConfig, ...config};

    }

    // Parse the type of the dsn
    getDataSourceType(dsn) {

        var dsnTypeIndicator = undefined; // data
        if ("!@#%^&*-+=?".includes(dsn[0])) { 
            dsnTypeIndicator = dsn[0]; 
        } else if (dsn[0] == "$") {
            dsnTypeIndicator = dsn.split(".")[0]; 
        } else {
            dsnTypeIndicator = "$db"; 
        }
    //    dsnTypeIndicator = dsn.substring(0, 1); 

        // Resolve to type
        var dsnType = undefined; 
        switch(dsnTypeIndicator) {
            case "$user": case "@":
                dsnType = DataSourceType.user;
                break; 
            case "$query": case "?":
                dsnType = DataSourceType.query;
                break; 
            default:  
            case "$db": case "+":
                dsnType = DataSourceType.db;
                break; 
        }

        return dsnType; 
    }

    // Parse the name of the dsn
    getDataSourceName(dsn) {

        var dsnName = undefined; // data 
        if ("!@#%^&*-+=?".includes(dsn[0])) { 
            dsnName = dsn.substring(1); 
        } else if (dsn[0] == "$") {
            const dsnZone = dsn.split(".")[0]; 
            dsnName = dsn.substring(dsnZone.length + 1); 
        } else {
            dsnName = dsn; 
        }

        return dsnName; 
    }

    /* Bind all data sources
    * tagged with [wfu-bind]
    */
    bind() {
        // Find all elements which specify a data-source for data binding
        let dataBind = document.querySelectorAll('[wfu-bind]');
    
        // Prepare sources
        if (!this.config.user)
            this.config.user = new Sa5Membership().loadUserInfoCache();
    
        // Iterate and bind each individually
        dataBind.forEach((elem: HTMLElement) => {
    
            // Determine bind type 
            let dsn = elem.getAttribute("wfu-bind");
            let dsnType = this.getDataSourceType(dsn);
    
            switch(dsnType) {
                case DataSourceType.user:
                    this.bindData_user(
                        elem,
                        this.config.user
                    );
                    break;
                case DataSourceType.db:
                    this.bindData_db(
                        elem,
                        this.config.db
                    );
                    break;
            } 
        });
    }
    
    bindData_user(el: HTMLElement, user: any) {
        if (!user || !user.email)
            return; 
    
        // Get data source name 
        let dsn = el.getAttribute("wfu-bind");
        let elemType = el.tagName.toLowerCase(); 
        let dsnName = this.getDataSourceName(dsn); 
        let dsnNameParts = dsnName.split(".");
        let val: any;
    
        switch (dsnNameParts[0]) {
            case "data":
                val = user.data[dsnNameParts[1]];
                break;
            default:
                val = user[dsnName]; 
                break;
        }
    
        switch(elemType) {
            case "input": 
                (el as HTMLInputElement).value = val;
                break;
            default:
                el.textContent = val;
                break;
        }
    }
    
    bindData_db(el: HTMLElement, db: any) {
        // Get data source name 
        let dsn = el.getAttribute("wfu-bind");
    
        // Find all elements which identify themselves
        // as a data-source
        //let dataSource = document.querySelector(`*[wfu-bind='${dsn}']`);
        //if (!dataSource) {
        //    console.warn(`Datasource: '${name}' does not exist`);
        //    return;
        //}
    
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
    }
    

}

