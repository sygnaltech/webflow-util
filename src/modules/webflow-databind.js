
/*
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Data-binding functions.
 */

//import { csvToObjects } from './webflow-data-csv.js';
//import { prepareCollectionListDataSource } from '../datasources/webflow-collectionlist-data.js';
//import { loadGoogleSheetFromSpec } from '../datasources/google-sheet-data.js';
//import { HtmlBuilder } from './webflow-html-builder.js';

import { Database } from './webflow-data.js';
import { WfuUser, WfuUserInfo } from './webflow-membership.js';



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

        this.config = $.extend({}, dataBinderConfig, config);

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

        // Find all elements which specify a data-source
        // for data binding
        var dataBind = $('[wfu-bind]');

        // Prepare sources
        if (!this.config.user)
            this.config.user = new WfuUserInfo().loadUserInfoCache(); 

    //    var db = new Database();
        const that = this;

        // Iterate and bind each individually
        $.each(dataBind, function (i, elem) {

            // Determine bind type 
            var dsn = $(elem).attr("wfu-bind");
            var dsnType = that.getDataSourceType(dsn);

            switch(dsnType) {
                case DataSourceType.user:
                    that.bindData_user(
                        elem,
                        that.config.user
                    )
                    break;
                case DataSourceType.db:
                    that.bindData_db(
                        elem,
                        that.config.db
                    );
                    break;
            } 

        })

//        return db;
    }

    bindData_user(el, user) {

        if (!user || !user.email)
            return; 

        // Get data source name 
        var dsn = $(el).attr("wfu-bind");
        const elemType = el.tagName.toLowerCase(); 
        const dsnName = this.getDataSourceName(dsn); 
        const dsnNameParts = dsnName.split(".");
        var val;

        switch (dsnNameParts[0]) {
            case "data":
                val = user.data[dsnNameParts[1]];
                break;
            default:
                val = user[dsnName]; 
                break;
        }

        // console.log(user);
        // console.log(dsnName);
        // console.log(val)

        switch(elemType) {
            case "input": 
                $(el).val(val);
                break;
            default:
                $(el).text(val);
                break;
        }

    }

    bindData_db(el, db) {
        
        // Get data source name 
        var dsn = $(el).attr("wfu-bind");

        // Find all elements which identify themselves
        // as a data-source
        //var dataSource = $(`*[wfu-bind='${dsn}']`);
        //if (!dataSource) {
        //    console.warn(`Datasource: '${name}' does not exist`);
        //    return;
        //}

    //    console.log(`dsn - ${dsn}`);

        // Get data
        var data = db.getData(dsn);

        if(!db) {
            console.warn(`Data binding requested for elem '${data}', but no db defined.`);
            return; // exit 
        }

    //    console.log(data);

        var templateId = $(el).attr("wfu-bind-template");

    //    console.log(`templateId - ${templateId}`);

        var template = $("#" + templateId);

    //    console.log(`template - ${template}`);

        var hb = new HtmlBuilder();
        hb.addTemplate(
            template,
            data
        );

        // Push HTML to element
        $(el).html(hb.render());

    }

}

