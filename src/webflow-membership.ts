
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Member Information Utilities
 */

import { XXH64 } from './webflow-crypto';
import { toTitleCase, jsonMapReplacer, jsonMapReviver, getCookie } from './utils';
//import { WfuDebug } from './webflow-core.js';

import { Sa5Core } from './webflow-core';
import { Sa5Debug } from './webflow-core/debug';

// Install utility function if needed 
// window.getCookie = window.getCookie || function(name) {
//     var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//     if (match) return match[2];
// }

// How to add days to Date?
// https://stackoverflow.com/a/563442
// Date.prototype.addDays = function(days) {
//     var date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// }

declare global {
    interface Date {
        addDays(days: number): Date;
    }
}

Date.prototype.addDays = function(days: number): Date {
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
export class Sa5User {

    // Track what data has been loaded
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

    email;

    name;

    get name_short_clean() {

        if (!this.email)
            return undefined;

        // if (this.email == {}) 
        //     return undefined;

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

        return getCookie("wf_loggedin") || false;
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



/**
 * Get User Info 
 */

export class Sa5UserInfo {

    debug;

    config; // Optional config

    constructor(config = {}) {

        this.debug = new Sa5Debug("sa5-membership");

        this.config = {...defaultUserInfoConfig, ...config};

        this.debug.enabled = this.config.debug; 

    }

    init = function() {

        // Suppress IFRAME loads & user-account page loads 
        if (window.self != window.top)
            return;
        if (window.location.pathname == `/user-account`) 
            return;

        this.debug.group(`WfuUserInfo init - ${Date.now()}.`);

        // Install jQuery-based listeners 
        // to listen for login events 
        // https://stackoverflow.com/questions/9347282/using-jquery-preventing-form-from-submitting 
        // https://stackoverflow.com/questions/11469616/jquery-form-validation-before-ajax-submit

        // Select the form
        let forms = document.querySelectorAll("form[data-wf-user-form-type='login']");

        // For each form
        forms.forEach((form) => {
            // Add a submit event listener
            form.addEventListener('submit', (e) => {
                // e.preventDefault();
                // e.stopPropagation();

                // On a login event, capture and save email temporarily 
                let emailInput = form.querySelector("#wf-log-in-email") as HTMLInputElement;
                let userEmail = emailInput.value;

                let userKey = btoa(userEmail);
                localStorage.setItem('StorageKeys.userKey', userKey); 
            });
        });
        

        // Call on every page on load.
        this.readyUserInfo();

        this.debug.groupEnd();
    
    }

    isLoggedIn = function() {

        return getCookie("wf_loggedin") || false;
    }

    clearUserInfo = function() {

        this.debug.group("clearUserInfo");

        this.debug.debug ("logged out, cleaning info."); 
        
        sessionStorage.removeItem(StorageKeys.user); 
        localStorage.removeItem(StorageKeys.userKey); 

        // Notify listeners 
        if (this.config.userLogoutPurge)
            this.config.userLogoutPurge(); // async 

            this.debug.groupEnd();

    }

    // setDomainCookie = function(key, value, expires) {

    //     const domain = location.hostname;

    // }

    // Loads user info, from local and server data.
    // readying it for use. 
    // Should be called on every page at the start. 
    readyUserInfo = async function() {

        this.debug.group("readyUserInfo");
        
        // If not logged in
        // clear user tracking 
        if(!this.isLoggedIn()) { 
            this.clearUserInfo(); 

            this.debug.groupEnd();
            return;
        }
    
        // Load or create blank
        var user = this.loadUserInfoCache();
        if (user) {
        
            // Notify listeners
            this.debug.debug("Notify listeners", user); // Merged 

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
        //     this.debug.groupEnd();
        //     return;
        // }
    
        // Load or create blank
//        var user = this.loadUserInfoCache();

        // Notify listeners 
//        if (this.config.userInfoUpdatedCallback)
//            this.config.userInfoUpdatedCallback(user); // async 

        this.debug.groupEnd();

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
        this.debug.group("loadUserInfoAsync");

        this.debug.debug(`isLoggedIn = ${this.isLoggedIn()}`); 
        
        // If not logged in
        // clear user tracking 
        if(!this.isLoggedIn()) { 
            this.clearUserInfo(); 

            this.debug.groupEnd();
            return;
        }

        // Remove user
        sessionStorage.removeItem(StorageKeys.user);

        // Load layers asynchronously
        // for maximum performance
        // merge dynamically as results are gathered
//        debug.log("calling promise block.");
//        await Promise.all([
        this.loadUserInfoAsync_loginInfo(); // async
        this.loadUserInfoAsync_accountInfo(); // async
        this.loadUserInfoAsync_accessGroups(); // async
//        ]);
    
        // Load or create blank
//        var user = this.loadUserInfoCache();

        this.debug.groupEnd();

//        return user;

    }

    async loadUserInfoAsync_loginInfo() { 

        this.debug.group("loadUserInfoAsync_loginInfo");
    
        // Create blank
        var user = new Sa5User();
        user.user_data_loaded.email = true;

        const userKey = await this.getUserKey();
        if (!userKey) {
            // Logged in but no userKey
            // Typically happens on first login from sign-up auth 
            this.debug.debug("No user key for loading."); 

            this.debug.groupEnd();
            return;
        }

        // Loaded successfully

        user.email = userKey;

        // Cache locally (email only)
        this.debug.debug("Caching user object [login].", user);
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

        this.debug.groupEnd();
    }

    async loadUserInfoAsync_accountInfo() {

        this.debug.group("loadUserInfoAsync_accountInfo");

        // Create the iframe element
        let userInfoPixel = document.createElement('iframe');
        userInfoPixel.src = "/user-account";
        userInfoPixel.id = "userInfoPixel";
        userInfoPixel.style.display = "none";

        // Append the iframe to the body
        document.body.append(userInfoPixel);

        // Add a "load" event listener
        userInfoPixel.addEventListener("load", async () => {

            this.debug.debug("Loading user account info."); 
            this.debug.debug(`%c here`, "color: #ff0000; background-color: yellow;"); 

            // Create blank
            var user = new Sa5User();
            user.user_data_loaded.email = true; 
            user.user_data_loaded.account_info = true; 
            user.user_data_loaded.custom_fields = true; 

//            user.user_data_loaded.access_groups = true;

//             var $userAccountEmail = await userInfoPixel.contents().find("input#wf-user-account-email");

            let userAccountEmailInput: HTMLInputElement | null = null;

            if (userInfoPixel.contentDocument) {
                userAccountEmailInput = userInfoPixel.contentDocument.querySelector("input#wf-user-account-email");
            } else if (userInfoPixel.contentWindow) {
                userAccountEmailInput = userInfoPixel.contentWindow.document.querySelector("input#wf-user-account-email");
            }
            
            if (!userAccountEmailInput) {
                // Now you can use userAccountEmailInput...
                console.debug("Cannot access iframe's content");
                    return;
            }
            
            // Detect programmatic changes on input type text [duplicate]
            // https://stackoverflow.com/a/72223895
            const input = userAccountEmailInput; // $userAccountEmail[0];
            const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
            Object.defineProperty(input, "value", {
                get: desc.get,
                set: function(v) {
//                    that.debug.debug("setting programmatically", v);
                    desc.set.call(this, v);

                    // How can I trigger an onchange event manually? [duplicate]
                    // https://stackoverflow.com/a/2856602
                    if ("createEvent" in document) {

                        var evt = document.createEvent("HTMLEvents");
                        evt.initEvent("change", false, true);
                        input.dispatchEvent(evt);

                    } else {

                        if (userAccountEmailInput) {
                            // Create a new event
                            let event = new Event('change', {
                              bubbles: true,
                              cancelable: true
                            });
                          
                            // Dispatch the event
                            userAccountEmailInput.dispatchEvent(event);
                          }
                          
                    }
//                    input.fireEvent("onchange");

                }
            });

            // setting up input change event 
            userAccountEmailInput.addEventListener("change", async () => {

                this.debug.debug("email field load detected.");

                this.debug.debug(`waiting ${this.config.advanced.accountInfoLoadDelay}ms`);

                setTimeout(async () => {

                    this.debug.debug(`%c USER-ACCOUNT LOADED`, "color: #ff0000; background-color: yellow;"); 

                    const userKey = userAccountEmailInput.value;

                    user.email = userKey;

// Get pixel 

                    let doc = userInfoPixel.contentDocument || userInfoPixel.contentWindow?.document;

                    if (doc) {

                        let userNameElement = doc.querySelector("[data-wf-user-field='wf-user-field-name']") as HTMLInputElement;
                        if (userNameElement) {
                            user.name = userNameElement.value;
                        }
                        
                        // Accept_communications, if defined 
                        let acceptCommunicationsCheckbox = doc.querySelector("#wf-user-account-accept-communications") as HTMLInputElement;
                        if (acceptCommunicationsCheckbox) {
                            user.accept_communications = acceptCommunicationsCheckbox.checked;
                        }
                        
                        // User data fields, if defined 
                        let userDataFields = doc.querySelectorAll("[data-wf-user-field]");
                        userDataFields.forEach((element) => {

                            const id = element.id; 
                            const fieldType = element.getAttribute("data-wf-user-field-type"); 
                            let val = (element as HTMLInputElement).value;

                            // your code here...


                            if (!id)
                                return;

                            if (id.startsWith("wf-user-account-"))
                                return;

                            switch(fieldType) {
                                case "PlainText": // 256 char max 
                                case "Email":
                                case "Link":
                                case "Option":
                                    user.data[id] = val;
                                    return;

                                case "Number": // step min max
                                    user.data[id] = val; 
                                    return;

                                case "Bool": // checkbox
                                    let checkbox: HTMLInputElement = element as HTMLInputElement;
                                    user.data[id] = checkbox.checked; 
console.log(id, user.data[id]); 
                                    return;

                                case "FileRef": // file - suppressed 
                                    break;
                            }




                        });

                    }

//                });

                    this.debug.debug("Final version", user); 

                    // Cache locally (email only)
                    this.debug.debug("Caching user object [account_info].", user);
                    this.saveUserInfoCache(user); 
            
                    // // Hydrate user object with other data 
                    // if (this.config.loadUserInfoCallback) {
                    //     await this.config.loadUserInfoCallback(user);
            
                    //     // Cache locally ( updated )
                    //     this.saveUserInfoCache(user); 
                    // }
            
                    // // Notify listeners
                    // if (that.config.userInfoUpdatedCallback)
                    //     that.config.userInfoUpdatedCallback(user); // async

                }, this.config.advanced.accountInfoLoadDelay
                );

            });

            this.debug.groupEnd();
        }); 

    }

    async loadUserInfoAsync_accessGroups() {

        this.debug.group("loadUserInfoAsync_accessGroups");
        this.debug.debug("Not yet implemented.");
        this.debug.groupEnd();

    }

    saveUserInfoCache(newUserData) {
        
        this.debug.group("saveUserInfoCache");

        if(!this.isLoggedIn) {
            this.debug.debug("no user logged in."); 
            this.debug.groupEnd();
            return null; 
        }

        // Smart merge 
        // https://www.javascripttutorial.net/object/javascript-merge-objects/ 
        // https://masteringjs.io/tutorials/fundamentals/merge-two-objects 
        var userData = this.loadUserInfoCache();
        if (!userData)
            userData = new Sa5User();

        if (newUserData.user_data_loaded.email) {
            this.debug.debug("Merging user email.");
            userData.email = newUserData.email;
        }
        if (newUserData.user_data_loaded.account_info) {
            this.debug.debug("Merging user account_info.");
            userData.email = newUserData.email;
            userData.name = newUserData.name;
            userData.accept_communications = newUserData.accept_communications;
        }
        if (newUserData.user_data_loaded.custom_fields) {
            this.debug.debug("Merging user custom_fields.");
            userData.data = newUserData.data; 
        }
        if (newUserData.user_data_loaded.access_groups) {
            this.debug.debug("Merging user access_groups.");
            // Not yet implemented.
        }

        // Coalesge loaded info 
        userData.user_data_loaded.email = userData.user_data_loaded.email || newUserData.user_data_loaded.email;
        userData.user_data_loaded.account_info = userData.user_data_loaded.account_info || newUserData.user_data_loaded.account_info;
        userData.user_data_loaded.custom_fields = userData.user_data_loaded.custom_fields || newUserData.user_data_loaded.custom_fields;
        userData.user_data_loaded.access_groups = userData.user_data_loaded.access_groups || newUserData.user_data_loaded.access_groups;

        this.debug.debug("new user", newUserData);

        this.debug.debug("merged", userData); // Merged 

        sessionStorage.setItem(StorageKeys.user,
            btoa(JSON.stringify(userData)) // , jsonMapReplacer))
            ); 

        // Notify listeners
        this.debug.debug("Notify listeners", userData); // Merged 

        if (this.config.userInfoUpdatedCallback)
            this.config.userInfoUpdatedCallback(userData); // async

        this.debug.groupEnd();
    }

    loadUserInfoCache() { 

        this.debug.group("loadUserInfoCache");

        if(!this.isLoggedIn) {
            this.debug.debug("No user logged in.");
            this.debug.groupEnd();
            return null; 
        }

        const userInfo = sessionStorage.getItem(StorageKeys.user); 

        if(!userInfo) {
            this.debug.debug("No user info to load.");
            this.debug.groupEnd();
            return null;
        } 

        this.debug.debug(userInfo);
        this.debug.debug("getting user."); 

        // De-serialize User 
        const user = new Sa5User();
        user.fromJSON(
           JSON.parse(atob(userInfo)) //, jsonMapReviver)
        );

        this.debug.groupEnd();

        return user;
    } 

}

/**
 * Memberships 
 */

export class Sa5Membership {

    constructor() {

    }

    isLoggedIn() {

        return getCookie("wf_loggedin") || false;
    }

    // Expanded login button
    // Used on a containing DIV to expand the trigger area of 
    // Webflow's Log-In / Log-Out button  
    expandLoginButton($elem) {

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

}
