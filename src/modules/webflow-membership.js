
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Tracking Utilities
 */


// Install utility function if needed 
window.getCookie = window.getCookie || function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

const StorageKeys = Object.freeze({
    user: 'wfuUser',
    userKey: 'wfuUserKey',
});

// How to add days to Date?
// https://stackoverflow.com/a/563442
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


/*
 * User class.
 */

export class WfuUser {

    // Webflow data
    user_id; // Webflow user_id
    name;
    email;
    accept_communications;

    // access-groups
    access_groups = [];

    // User data
    data = new Map();

    // Meta data
    meta = new Map();

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
    }

    toJSON() {
        return {
            "user_id": this.user_id,
            "name": this.name,
            "email": this.email,
            "accept_communications": this.accept_communications,
            "access_groups": this.access_groups, 
        }
    }

}

/*
 * WfuUserInfo class.
 */

var defaultUserInfoConfig = {

    loadUserInfoCallback: undefined, // Function callback 
    userInfoUpdatedCallback: undefined, 

    userLogoutPurge: undefined, // Used for external data cleanup such as OAuth cookies 

}

export class WfuUserInfo {

    config; // Optional config

    constructor(config = {}) {

        console.group("WfuUserInfo init.");

        this.config = $.extend({}, defaultUserInfoConfig, config);

        // // Install utility function if needed 
        // window.getCookie = window.getCookie || function(name) {
        //     var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        //     if (match) return match[2];
        // }

    }

    init = function() {

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

        console.groupEnd();
    
    }

    isLoggedIn = function() {

        return window.getCookie("wf_loggedin") || false;
    }

    clearUserInfo = function() {

        console.group("clearUserInfo");

        console.debug ("logged out, cleaning info."); 
        
        sessionStorage.removeItem(StorageKeys.user); 
        localStorage.removeItem(StorageKeys.userKey); 

        // Notify listeners 
        if (this.config.userLogoutPurge)
            this.config.userLogoutPurge(); // async 

        console.groupEnd();

    }

    // setDomainCookie = function(key, value, expires) {

    //     const domain = location.hostname;

    // }

    // Loads user info, from local and server data.
    // readying it for use. 
    // Should be called on every page at the start. 
    readyUserInfo = async function() {

        console.group("readyUserInfo");
        
        // If not logged in
        // clear user tracking 
        if(!this.isLoggedIn()) { 
            this.clearUserInfo(); 

            console.groupEnd();
            return;
        }
    
        // Load or create blank
        var user = this.loadUserInfoCache();
        if (!user)
            user = this.loadUserInfo();

        // Notify listeners 
        if (this.config.userInfoUpdatedCallback)
            this.config.userInfoUpdatedCallback(user); // async 

        console.groupEnd();

    }

    // Loads user info, from local and server data.
    // readying it for use. 
    // Should be called on every page at the start. 
    loadUserInfo = async function() {

        console.group("loadUserInfo");

        console.debug(`isLoggedIn = ${this.isLoggedIn()}`); 
        
        // If not logged in
        // clear user tracking 
        if(!this.isLoggedIn()) { 
            this.clearUserInfo(); 

            console.groupEnd();
            return;
        }
    
        // Create blank
        var user = new WfuUser();

        sessionStorage.removeItem(StorageKeys.user);

        const userKey = localStorage.getItem(StorageKeys.userKey);
        user.email = atob(userKey);

        // Cache locally (email only)
        this.saveUserInfoCache(user); 

        // Hydrate user object with other data 
        if (this.config.loadUserInfoCallback) {
            await this.config.loadUserInfoCallback(user);

            // Cache locally ( updated )
            this.saveUserInfoCache(user); 
        }

        // Notify listeners
        if (this.config.userInfoUpdatedCallback)
            this.config.userInfoUpdatedCallback(user); // async

        console.groupEnd();
    }
    
    saveUserInfoCache = function (user) {

        console.group("saveUserInfoCache");

        if(!this.isLoggedIn) {
            console.debug("no user logged in."); 
            console.groupEnd();
            return null; 
        }

        sessionStorage.setItem(StorageKeys.user,
            btoa(JSON.stringify(user))
            ); 

        console.groupEnd();
    }

    loadUserInfoCache = function () { 

        console.group("loadUserInfoCache");

        if(!this.isLoggedIn) {
            console.log("No user logged in.");
            console.groupEnd();
            return null; 
        }

        const userInfo = sessionStorage.getItem(StorageKeys.user); 

        if(!userInfo) {
            console.log("No user info to load.");
            console.groupEnd();
            return null;
        } 

        // De-serialize User 
        const user = new WfuUser();
        user.fromJSON(
            JSON.parse(atob(userInfo))
        );

        console.groupEnd();

        return user;
    } 

}


// export class WfuMembership {

//     config; // Optional config

//     constructor(config = {}) {

//         console.group("WfuMembership init.");

//         this.config = $.extend({}, defaultUserStateConfig, config);

//         // Install utility function if needed 
//         window.getCookie = window.getCookie || function(name) {
//             var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//             if (match) return match[2];
//         }

//     }

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

//}


