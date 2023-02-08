
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Member Information Utilities
 */

import { XXH64 } from './webflow-crypto.js';
import { toTitleCase, jsonMapReplacer, jsonMapReviver } from './webflow-utils.js';
import { WfuDebug } from './webflow-core.js';

// Install utility function if needed 
window.getCookie = window.getCookie || function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

// How to add days to Date?
// https://stackoverflow.com/a/563442
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const StorageKeys = Object.freeze({
    user: 'wfuUser',
    userKey: 'wfuUserKey',
});
    


/*
 * User class.
 */

//import Md5 from "crypto-api/src/hasher/md5";
export class WfuUser {

//    user_data_layer; // 1 = shallow | 2 = deep | 3 = external
    user_data_loaded = {
        email: false,
        account_info: false,
        custom_fields: false,
        access_groups: false
    };

    // Webflow data
    user_id; // Webflow user_id

    get user_id_alt() {
        if (!this.email)
            return undefined;

        return XXH64.hash(this.email);
    }

    accept_communications;

    // https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
    email;

    name;

    get name_short_clean() {

        if (!this.email)
            return undefined;

        if (this.email == {}) 
            return undefined;

        return this.email.split("@")[0];
    }
    get name_short() { // @ segment of email

        if (!this.email)
            return undefined;

        return this.name_short_clean + '@';
    }
    get name_short_tcase() {

        if (!this.email)
            return undefined;

        return toTitleCase(this.name_short_clean);
    }
   
    // access-groups
    access_groups = [];

    // User data
    data = {}; // = new Map();

    // Meta data
    meta = {}; //  = new Map();

    constructor() {

    }

    isLoggedIn = function() {

        return window.getCookie("wf_loggedin") || false;
    }

    fromJSON(json) {

        if (!json)
            return; // no data to load 

        this.user_id = json.user_id;
        this.name = json.name;
        this.email = json.email;

        this.accept_communications = json.accept_communications; 
        this.access_groups = json.access_groups;

        this.data = json.data;

        this.user_data_loaded.email = json.user_data_loaded.email;
        this.user_data_loaded.account_info = json.user_data_loaded.account_info;
        this.user_data_loaded.custom_fields = json.user_data_loaded.custom_fields;
        this.user_data_loaded.access_groups = json.user_data_loaded.access_groups;
    }

    /** 
    toJSON2() {
        return {
            "user_id": this.user_id,
            "name": this.name,
            "email": this.email,
            "accept_communications": this.accept_communications,
            "access_groups": this.access_groups, 
            "user_data_loaded": {
                "email": this.email,
                "account_info": this.account_info,
                "custom_fields": this.custom_fields,
                "access_groups": this.access_groups
            }
        }
    }
    */

}

/*
 * WfuUserInfo class.
 */

var defaultUserInfoConfig = {

    loadUserInfoCallback: undefined, // Function callback 
    userInfoUpdatedCallback: undefined, 

    userLogoutPurge: undefined, // Used for external data cleanup such as OAuth cookies 

    debug: false, // Debugging mode

    // Advanced settings
    advanced: {

        accountInfoLoadDelay: 300, // ms 

    },

}

export class WfuUserInfo {

    console = new WfuDebug();

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultUserInfoConfig, config);

        this.console.enabled = this.config.debug; 

        // // Install utility function if needed 
        // window.getCookie = window.getCookie || function(name) {
        //     var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        //     if (match) return match[2];
        // }

    }

    init = function() {

        // Suppress IFRAME loads & user-account page loads 
        if (window.self != window.top)
            return;
        if (window.location.pathname == `/user-account`) 
            return;

        this.console.group(`WfuUserInfo init - ${Date.now()}.`);

        // Install jQuery-based listeners 
        // to listen for login events 
        // https://stackoverflow.com/questions/9347282/using-jquery-preventing-form-from-submitting 
        // https://stackoverflow.com/questions/11469616/jquery-form-validation-before-ajax-submit
        $("form[data-wf-user-form-type='login']").submit(function(e) {
            // e.preventDefault();
            // e.stopPropagation();

            // On a login event, capture and save email temporarily 
            const userEmail = $(this).find("#wf-log-in-email").val();

            const userKey = btoa(userEmail);
            localStorage.setItem(
                StorageKeys.userKey, userKey); 

        });
        
        // Call on every page on load.
        this.readyUserInfo();

        this.console.groupEnd();
    
    }

    isLoggedIn = function() {

        return window.getCookie("wf_loggedin") || false;
    }

    clearUserInfo = function() {

        this.console.group("clearUserInfo");

        this.console.debug ("logged out, cleaning info."); 
        
        sessionStorage.removeItem(StorageKeys.user); 
        localStorage.removeItem(StorageKeys.userKey); 

        // Notify listeners 
        if (this.config.userLogoutPurge)
            this.config.userLogoutPurge(); // async 

            this.console.groupEnd();

    }

    // setDomainCookie = function(key, value, expires) {

    //     const domain = location.hostname;

    // }

    // Loads user info, from local and server data.
    // readying it for use. 
    // Should be called on every page at the start. 
    readyUserInfo = async function() {

        this.console.group("readyUserInfo");
        
        // If not logged in
        // clear user tracking 
        if(!this.isLoggedIn()) { 
            this.clearUserInfo(); 

            this.console.groupEnd();
            return;
        }
    
        // Load or create blank
        var user = this.loadUserInfoCache();
        if (user) {
        
            // Notify listeners
            this.console.debug("Notify listeners", user); // Merged 

            if (this.config.userInfoUpdatedCallback)
                this.config.userInfoUpdatedCallback(user); // async

        }

        // If no cached user, load it 
        if (!user)
            // user = 
            await this.loadUserInfoAsync();

        // If still cannot create user info object
        // typically first load
        // if (!user) {
        //     this.console.groupEnd();
        //     return;
        // }
    
        // Load or create blank
//        var user = this.loadUserInfoCache();

        // Notify listeners 
//        if (this.config.userInfoUpdatedCallback)
//            this.config.userInfoUpdatedCallback(user); // async 

        this.console.groupEnd();

    }

    getUserKey = async function() {

        var userKey;
        
        // Get cached version if possible
        const userKeyEncoded = localStorage.getItem(StorageKeys.userKey);
        if (userKeyEncoded) {
            return atob(userKeyEncoded);
        }

    }

    // Loads user info, from local and server data.
    // readying it for use. 
    // Should be called on every page at the start. 
    loadUserInfoAsync = async function() {
        this.console.group("loadUserInfoAsync");

        this.console.debug(`isLoggedIn = ${this.isLoggedIn()}`); 
        
        // If not logged in
        // clear user tracking 
        if(!this.isLoggedIn()) { 
            this.clearUserInfo(); 

            this.console.groupEnd();
            return;
        }

        // Remove user
        sessionStorage.removeItem(StorageKeys.user);

        // Load layers asynchronously
        // for maximum performance
        // merge dynamically as results are gathered
//        console.log("calling promise block.");
//        await Promise.all([
            this.loadUserInfoAsync_loginInfo(); // async
            this.loadUserInfoAsync_accountInfo(); // async
            this.loadUserInfoAsync_accessGroups(); // async
//        ]);
    
        // Load or create blank
//        var user = this.loadUserInfoCache();

        this.console.groupEnd();

//        return user;

    }

    loadUserInfoAsync_loginInfo = async function() { 

        this.console.group("loadUserInfoAsync_loginInfo");
    
        // Create blank
        var user = new WfuUser();
        user.user_data_loaded.email = true;

        const userKey = await this.getUserKey();
        if (!userKey) {
            // Logged in but no userKey
            // Typically happens on first login from sign-up auth 
            this.console.debug("No user key for loading."); 

            this.console.groupEnd();
            return;
        }

        // Loaded successfully

        user.email = userKey;

        // Cache locally (email only)
        this.console.debug("Caching user object [login].", user);
        this.saveUserInfoCache(user); 

        // // Hydrate user object with other data 
        // if (this.config.loadUserInfoCallback) {
        //     await this.config.loadUserInfoCallback(user);

        //     // Cache locally ( updated )
        //     this.saveUserInfoCache(user); 
        // }

        // Notify listeners
        // if (this.config.userInfoUpdatedCallback)
        //     this.config.userInfoUpdatedCallback(user); // async

        this.console.groupEnd();
    }

    loadUserInfoAsync_accountInfo = async function() {

        this.console.group("loadUserInfoAsync_accountInfo");

        // console.debug(`isLoggedIn = ${this.isLoggedIn()}`); 
        
        // // If not logged in
        // // clear user tracking 
        // if(!this.isLoggedIn()) { 
        //     this.clearUserInfo(); 

        //     console.groupEnd();
        //     return;
        // }

//        sessionStorage.removeItem(StorageKeys.user);

        const that = this; 

        // Attempt alt capture
        $("body").append(`<iframe src="/user-account" id="userInfoPixel" style="display: none;"></iframe>`); 
        var $userInfoPixel = $('#userInfoPixel'); 

        $userInfoPixel.on("load", async function() {

            that.console.debug("Loading user account info."); 
            that.console.debug(`%c here`, "color: #ff0000; background-color: yellow;"); 

            // Create blank
            var user = new WfuUser();
            user.user_data_loaded.email = true; 
            user.user_data_loaded.account_info = true; 
            user.user_data_loaded.custom_fields = true; 

//            user.user_data_loaded.access_groups = true;

            var $userAccountEmail = await $userInfoPixel.contents().find("input#wf-user-account-email");

            // Detect programmatic changes on input type text [duplicate]
            // https://stackoverflow.com/a/72223895
            const input = $userAccountEmail[0];
            const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
            Object.defineProperty(input, "value", {
                get: desc.get,
                set: function(v) {
//                    that.console.debug("setting programmatically", v);
                    desc.set.call(this, v);

                    // How can I trigger an onchange event manually? [duplicate]
                    // https://stackoverflow.com/a/2856602
                    if ("createEvent" in document) {
                        var evt = document.createEvent("HTMLEvents");
                        evt.initEvent("change", false, true);
                        input.dispatchEvent(evt);
                    }
                    else
                    input.fireEvent("onchange");

                }
            });

            // setting up input change event 
            $userAccountEmail.on("change", async function() {

                that.console.debug("email field load detected.");

                that.console.debug(`waiting ${that.config.advanced.accountInfoLoadDelay}ms`);

                setTimeout(async function() {

                    that.console.debug(`%c USER-ACCOUNT LOADED`, "color: #ff0000; background-color: yellow;"); 

                    const userKey = $userAccountEmail.val();

                    user.email = userKey;

                    // Name, if defined
                    user.name = await $userInfoPixel.contents().find("[data-wf-user-field='wf-user-field-name']").val();

                    // Accept_communications, if defined 
                    const $accept_communications = await $userInfoPixel.contents().find("#wf-user-account-accept-communications");
                    if ($accept_communications)
                        user.accept_communications = $accept_communications[0].checked;

                    // User data fields, if defined 
                    await $userInfoPixel.contents()
                        .find("[data-wf-user-field]").each(function(e) {

                        const id = $(this).attr("id"); 
                        const field_type = $(this).data("wf-user-field-type"); 
                        var val = $(this).val();

                        if (!id)
                            return;

                        if (id.startsWith("wf-user-account-"))
                            return;

                        switch(field_type) {
                            case "PlainText": // 256 char max 
                            case "Email":
                            case "Link":
                            case "Option":
//                                user.data.set(id, val);
                                user.data[id] = val;
                                return;

                            case "Number": // step min max
//                                user.data.set(id, val);
                                user.data[id] = val; 
                                return;

                            case "Bool": // checkbox
//                                user.data.set(id, $(this)[0].checked); 
                                user.data[id] = $(this)[0].checked; 
                                console.log(id, user.data[id]); 
                                return;

                            case "FileRef": // file - suppressed 
//                                user.data[id] = $(this).val();
                                break;
                        }

                    });

                    that.console.debug("Final version", user); 

                    // Cache locally (email only)
                    that.console.debug("Caching user object [account_info].", user);
                    that.saveUserInfoCache(user); 
            
                    // // Hydrate user object with other data 
                    // if (this.config.loadUserInfoCallback) {
                    //     await this.config.loadUserInfoCallback(user);
            
                    //     // Cache locally ( updated )
                    //     this.saveUserInfoCache(user); 
                    // }
            
                    // // Notify listeners
                    // if (that.config.userInfoUpdatedCallback)
                    //     that.config.userInfoUpdatedCallback(user); // async

                }, that.config.advanced.accountInfoLoadDelay
                );

            });

            that.console.groupEnd();
        });

    }

    loadUserInfoAsync_accessGroups = async function() {

        this.console.group("loadUserInfoAsync_accessGroups");
        this.console.debug("Not yet implemented.");
        this.console.groupEnd();

    }

    saveUserInfoCache = function (newUserData) {
        
        this.console.group("saveUserInfoCache");

        if(!this.isLoggedIn) {
            this.console.debug("no user logged in."); 
            this.console.groupEnd();
            return null; 
        }

        // Smart merge 
        // https://www.javascripttutorial.net/object/javascript-merge-objects/ 
        // https://masteringjs.io/tutorials/fundamentals/merge-two-objects 
        var userData = this.loadUserInfoCache();
        if (!userData)
            userData = new WfuUser();

        if (newUserData.user_data_loaded.email) {
            this.console.debug("Merging user email.");
            userData.email = newUserData.email;
        }
        if (newUserData.user_data_loaded.account_info) {
            this.console.debug("Merging user account_info.");
            userData.email = newUserData.email;
            userData.name = newUserData.name;
            userData.accept_communications = newUserData.accept_communications;
        }
        if (newUserData.user_data_loaded.custom_fields) {
            this.console.debug("Merging user custom_fields.");
            userData.data = newUserData.data; 
        }
        if (newUserData.user_data_loaded.access_groups) {
            this.console.debug("Merging user access_groups.");
            // Not yet implemented.
        }

        // Coalesge loaded info 
        userData.user_data_loaded.email = userData.user_data_loaded.email || newUserData.user_data_loaded.email;
        userData.user_data_loaded.account_info = userData.user_data_loaded.account_info || newUserData.user_data_loaded.account_info;
        userData.user_data_loaded.custom_fields = userData.user_data_loaded.custom_fields || newUserData.user_data_loaded.custom_fields;
        userData.user_data_loaded.access_groups = userData.user_data_loaded.access_groups || newUserData.user_data_loaded.access_groups;

        this.console.debug("new user", newUserData);

        this.console.debug("merged", userData); // Merged 

        sessionStorage.setItem(StorageKeys.user,
            btoa(JSON.stringify(userData)) // , jsonMapReplacer))
            ); 

        // Notify listeners
        this.console.debug("Notify listeners", userData); // Merged 

        if (this.config.userInfoUpdatedCallback)
            this.config.userInfoUpdatedCallback(userData); // async

        this.console.groupEnd();
    }

    loadUserInfoCache = function () { 

        this.console.group("loadUserInfoCache");

        if(!this.isLoggedIn) {
            this.console.debug("No user logged in.");
            this.console.groupEnd();
            return null; 
        }

        const userInfo = sessionStorage.getItem(StorageKeys.user); 

        if(!userInfo) {
            this.console.debug("No user info to load.");
            this.console.groupEnd();
            return null;
        } 

        this.console.debug(userInfo);
        this.console.debug("getting user."); 

        // De-serialize User 
        const user = new WfuUser();
        user.fromJSON(
           JSON.parse(atob(userInfo)) //, jsonMapReviver)
        );

        this.console.groupEnd();

        return user;
    } 

}

export function isLoggedIn() {

    return window.getCookie("wf_loggedin") || false;
}

// Expanded login button
// Used on a containing DIV to expand the trigger area of 
// Webflow's Log-In / Log-Out button  
export function expandLoginButton($elem) {

    // Get Webflow Login/Logout button
    const $wfLoginButton = $elem.find("[data-wf-user-logout]");

    // Setup click event handler on outer DIV
    $elem.click(function() {
        // Click inner element
        $wfLoginButton.trigger('click');
    });

    // Also interecept and stop propogation so event is not doubled
    $wfLoginButton.click(function(e) {
        e.stopPropagation();
    });

}



