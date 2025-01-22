
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Member Information Utilities
 */

import { XXH64 } from './webflow-crypto';
import { toTitleCase, getCookie } from './utils';

import { Sa5Core } from './webflow-core';
import { Sa5Debug } from './webflow-core/debug';
import { Sa5User } from './webflow-membership/user'; 

import { WfuDataBinder } from './webflow-databind';
import { Sa5GlobalEvent } from './globals';
import { Sa5UserAccessGroups } from './webflow-membership/access-groups';
import { Sa5UserHyperflow } from './webflow-membership/hyperflow';

const StorageKeys = Object.freeze({
    user: 'wfuUser', // sa5_user
    userKey: 'wfuUserKey' // sa5_user_key
});

type GetConfigCallback = (Sa5MembershipConfig) 
    => Sa5UserAccountsConfig;

type UserInfoChangedCallback = (user: Sa5User) => void;



interface Sa5UserAccountsConfig {
//    loadUserInfoCallback?: ((user: Sa5User) => void) | undefined; // Function callback 
    userInfoUpdatedCallback?: UserInfoChangedCallback; 
//    userLogoutPurge?: ((user: Sa5User) => void) | undefined;

    debug?: boolean;

    dataBind?: boolean; // Databind after user object load 

    // The name of the folder used to determine access groups 
    // e.g. /_ag/... the default is _ag. 
    accessGroupsFolder?: string;

    // The set of access group slugs that the system has defined 
    accessGroups?: string[];

    // Advanced settings
    advanced: {
        accountInfoLoadDelay: number; // ms 
        accountInfoSaveDelay: number; // ms 
    };

    hf: { // Hyperflow
        enabled: boolean; // false
        currentUserUrl: string; // '/_hf/users/current_user',
    }    

}


/**
 * User Accounts  
 */

export class Sa5UserAccounts {

    debug: Sa5Debug;

    config: Sa5UserAccountsConfig; // Optional config

    // Type guard to check if a function is a UserInfoChangedCallback
    private isUserInfoChangedCallback(func: Function): func is UserInfoChangedCallback {

        if(!func) return false;

        // Adjust this check as needed
        return func.length === 1;
    }

    constructor(config: Partial<Sa5UserAccountsConfig> = {}) {

        // Merge configs, with defaults
        this.config = {
            userInfoUpdatedCallback: config.userInfoUpdatedCallback,
            debug: config.debug ?? false,
            dataBind: config.dataBind ?? true, 
            accessGroupsFolder: config.accessGroupsFolder ?? '/sa5-ag', // TODO: globals  
            accessGroups: config.accessGroups ?? null, // null means none defined, don't check 
            advanced: {
                accountInfoLoadDelay: 
                    config.advanced?.accountInfoLoadDelay ?? 300,
                accountInfoSaveDelay: 
                    config.advanced?.accountInfoSaveDelay ?? 500,
            },
            hf: { // Hyperflow 
                enabled: 
                    config.hf?.enabled ?? false,
                currentUserUrl: 
                    config.hf?.currentUserUrl ?? '/_hf/users/current_user'
            }
        }

        let core: Sa5Core = Sa5Core.startup();

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-membership");
        this.debug.debug ("Initializing");

        // Load config

        // Get any global handler
//         const userInfoChanged = core.getHandlers(Sa5GlobalEvent.EVENT_USER_CHANGED); 
//         userInfoChanged.forEach((f) => {

// if(this.isUserInfoChangedCallback(f)) {

// }

//         }); 
        // if (this.isUserInfoChangedCallback(userInfoChanged)) {

        //     this.config.userInfoUpdatedCallback = userInfoChanged;

        // }

        // const userInfoChanged = core.getHandler(Sa5GlobalEvent.EVENT_USER_CHANGED); 
        // if (this.isUserInfoChangedCallback(userInfoChanged)) {

        //     this.config.userInfoUpdatedCallback = userInfoChanged;

        // }

        // TODO: Make this a singleton Sa5Core 

    }

    onUserInfoChanged(user: Sa5User) {

        let core: Sa5Core = Sa5Core.startup();
//        console.log(core);
        
        const userInfoChanged = core.getHandlers(Sa5GlobalEvent.EVENT_USER_CHANGED); 
        userInfoChanged.forEach((f) => {

            if(this.isUserInfoChangedCallback(f)) {
                f(user); 
            }

        });         

    }

    init() {

        // // Suppress IFRAME loads & user-account page loads 
        // // BUG: 
        // if (window.self != window.top)
        //     return;
        // if (window.location.pathname == `/user-account`) 
        //     return;

        this.debug.group(`SA5 UserInfo init - ${Date.now()}.`);

        let core: Sa5Core = Sa5Core.startup();

        // TODO: move label to globals
        let configHandler: GetConfigCallback = core.getHandler("getMembershipConfig") as GetConfigCallback;

        if(!configHandler) 
            return; // do nothing
    
        // this.config.getConfigCallback 
        //     = core.getHandler('getMembershipRoutingConfig') as GetConfigCallback; 

        if(configHandler) {
            this.config = configHandler(
                this.config
            ); 
            console.debug("USER INFO CONFIG", this.config); 
        }

        /**
         * Install listeners
         * to listen for login/logout events 
         */
        
        // https://stackoverflow.com/questions/9347282/using-jquery-preventing-form-from-submitting 
        // https://stackoverflow.com/questions/11469616/jquery-form-validation-before-ajax-submit

        // LOGIN FORMS

        let forms = document.querySelectorAll("form[data-wf-user-form-type='login']");
        forms.forEach((form) => {
            form.addEventListener('submit', (e) => {
                // e.preventDefault();
                // e.stopPropagation();

                // On a login event, capture and save email temporarily 
                let emailInput = form.querySelector("#wf-log-in-email") as HTMLInputElement;
                let userEmail = emailInput.value;

                let userKey = // btoa(userEmail);
                    UnicodeBase64.encode(userEmail);
                localStorage.setItem('StorageKeys.userKey', userKey); 
            });
        });

        // USER-ACCOUNT FORMS

        forms = document.querySelectorAll("form[data-wf-user-form-type='userAccount']");     
        forms.forEach((form) => {
            // Add a submit event listener
            form.addEventListener('submit', (e) => {
                // e.preventDefault();
                // e.stopPropagation();

                setTimeout(async () => {

                    // Refresh user info
                    await this.loadUserInfoAsync();

                }, this.config.advanced.accountInfoSaveDelay);

            });
        });

        // Call on every page on load.
        this.readyUserInfo();

        this.debug.groupEnd();
    
    }

    // Determine whether Webflow has a 
    // currently logged-in user, by cookie detection 
    isLoggedIn() {

        return getCookie("wf_loggedin") || false;
    }

    clearUserInfo() {

        this.debug.group("clearUserInfo");

        this.debug.debug ("logged out, cleaning info."); 
        
        sessionStorage.removeItem(StorageKeys.user); 
        localStorage.removeItem(StorageKeys.userKey); 

        // Notify listeners 
        // if (this.config.userLogoutPurge)
        //     this.config.userLogoutPurge(); // async 

            this.debug.groupEnd();

    }

    // setDomainCookie = function(key, value, expires) {

    //     const domain = location.hostname;

    // }

    // Loads user info, from local and server data.
    // readying it for use. 
    // Should be called on every page at the start. 
    async readyUserInfo() {

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

            // Databinding
            if(this.config.dataBind) {
                this.debug.debug("databinding", user);
                new WfuDataBinder(null, {
                    user: user
                }).bindAll(); 
            }

            // User Callback 
            this.onUserInfoChanged(user);
            // if (this.config.userInfoUpdatedCallback) {
            //     this.debug.debug("userCallback", user);
            //     this.config.userInfoUpdatedCallback(user); // async
            // }

        }

        // If no cached user, load it 
        if (!user)
            // user = 
            await this.loadUserInfoAsync();

        this.debug.groupEnd();

    }

    async getUserKey() {

        var userKey;
        
        // Get cached version if possible
        const userKeyEncoded = localStorage.getItem(StorageKeys.userKey);
        if (userKeyEncoded) {
            return UnicodeBase64.decode(userKeyEncoded);
//            return atob(userKeyEncoded);
        }

    }

    //#region CONSTRUCT USER INFO OBJECT

    // Loads user info, from local and server data.
    // readying it for use. 
    // Should be called on every page at the start. 
    async loadUserInfoAsync() {

        this.debug.group("loadUserInfoAsync");
        this.debug.debug(`isLoggedIn = ${this.isLoggedIn()}`); 
        
        // If not logged in
        // clear user tracking 
        if(!this.isLoggedIn()) { 
            this.clearUserInfo(); 

            this.debug.groupEnd();
            return;
        }

        // Remove cached user object
        sessionStorage.removeItem(StorageKeys.user);

        if (this.config.hf.enabled) {

            // Use Hyperflow loader
            this.loadUserInfoAsync_hyperflow(); // async

        } else {

            // Load layers asynchronously
            // for maximum performance
            // merge dynamically as results are gathered
            this.loadUserInfoAsync_loginInfo(); // async
            this.loadUserInfoAsync_accountInfo(); // async
            this.loadUserInfoAsync_accessGroups(); // async
            this.loadUserInfoAsync_direct(); // async 
        
        }

        // Load or create blank

        this.debug.groupEnd();

    }

    // Get account info
    // from Hyperflow 
    async loadUserInfoAsync_hyperflow() { 

        this.debug.group("loadUserInfoAsync_hyperflow");
     
        // Create blank
        var user = new Sa5User();
        user.user_data_loaded.email = true;
        user.user_data_loaded.account_info = true;
        user.user_data_loaded.access_groups = true;

        const hf: Sa5UserHyperflow = new Sa5UserHyperflow(this);

        await hf.initAsync();

        // const userKey = await this.getUserKey();
        // if (!userKey) {
        //     // Logged in but no userKey
        //     // Typically happens on first login from sign-up auth 
        //     this.debug.debug("No user key for loading."); 

        //     this.debug.groupEnd();
        //     return;
        // }

        // // Loaded successfully

        // user.email = userKey;

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

    /**
     * Experimental
     * GraphQL direct request 
     */

    async loadUserInfoAsync_direct() { 

        try {

            // Get CSRF Token 
            const value = document.cookie;
            const wfCsrfToken = value.match(/wf-csrf=([^;]+)/)[1];

            fetch(
            `https://${window.location.host}/.wf_graphql/usys/apollo`,
            {
                method: "POST",
                headers: {
                "content-type": "application/json",
                authority: window.location.host,
                path: "/.wf_graphql/usys/apollo",
                "x-wf-csrf": wfCsrfToken,
                scheme: "https",
                referrer: `https://${window.location.host}/user-account`,
                accept: "/, application/json",
                "accept-encoding": "gzip, deflate, br",
                "content-length": "9999999",
                origin: `https://${window.location.host}`,
                "sec-ch-ua": `"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"`,
                },
                body: JSON.stringify({
                query: `
                query FetchUser {
                    site {
                        siteUser {
                            id
                        data {
                            name: plainText(id: \"name\")
                            email: email(id: "email")
                        }
                        createdOn
                        __typename
                        }
                        __typename
                    }
                    }
                `,
                operationName: "FetchUser",
                variables: {},
                }),
            }
            )
            .then((res) => res.json())
            .then((result) => {
                
                var user = new Sa5User();
                user.user_data_loaded.direct = true;

                user.direct = result.data.site.siteUser; 
                user.user_id = result.data.site.siteUser.id; 
                this.saveUserInfoCache(user); 

            }); 

        } catch {
            
        }

    }

    // Get account info
    // from cache 
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

    // Get account info 
    // from /user-account page 
    async loadUserInfoAsync_accountInfo() {

        this.debug.group("loadUserInfoAsync_accountInfo");

        // Suppress IFRAME loads & user-account page loads 
        if (window.self != window.top) {
            return;
        }

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
                return;
            }
            
            // Detect programmatic changes on input type text [duplicate]
            // https://stackoverflow.com/a/72223895
            const input = userAccountEmailInput; // $userAccountEmail[0];
            const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
            Object.defineProperty(input, "value", {
                get: desc.get,
                set: function(v) {

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
                                    return;

                                case "FileRef": // file - suppressed 
                                    break;
                            }

                        });

                    }

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

        // Create blank
        var user = new Sa5User();
        user.user_data_loaded.access_groups = true;

        // If null or [], exit 
        if(this.config.accessGroups) { 

            let accessGroupHandler: Sa5UserAccessGroups = new Sa5UserAccessGroups(this);
            await accessGroupHandler.initAsync(); 

            user.access_groups = accessGroupHandler.accessGroups;

        } else {
            this.debug.debug("Access groups not configured.");
        }

        // Cache locally (email only)
        this.debug.debug("Caching user object [login].", user);
        this.saveUserInfoCache(user); 

        this.debug.groupEnd();

    }

    //#endregion

    //#region USER CACHE

    // private encodeUnicodeToBase64(str) {
    //     return btoa(unescape(encodeURIComponent(str)));
    // }
    
    // private decodeBase64ToUnicode(base64) {
    //     return decodeURIComponent(escape(atob(base64)));
    // }

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
        if (newUserData.user_id) {
            this.debug.debug("Merging user id.");
            userData.user_id = newUserData.user_id;
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
            userData.access_groups = newUserData.access_groups; 
        }

        // Coalesce loaded info 
        userData.user_data_loaded.email = userData.user_data_loaded.email || newUserData.user_data_loaded.email;
        userData.user_data_loaded.account_info = userData.user_data_loaded.account_info || newUserData.user_data_loaded.account_info;
        userData.user_data_loaded.custom_fields = userData.user_data_loaded.custom_fields || newUserData.user_data_loaded.custom_fields;
        userData.user_data_loaded.access_groups = userData.user_data_loaded.access_groups || newUserData.user_data_loaded.access_groups;

        this.debug.debug("new user", newUserData);

        this.debug.debug("merged", userData); // Merged 

        sessionStorage.setItem(StorageKeys.user,
            UnicodeBase64.encode(JSON.stringify(userData))
//            btoa(JSON.stringify(userData)) // , jsonMapReplacer))
            ); 

        // Databinding
        if(this.config.dataBind) {
            this.debug.debug("databinding", userData);
            new WfuDataBinder(
                null, // datastore 
                {
                    user: userData
                }).bindAll(); 
        }

        // Notify listeners 
//        console.log("%cchecking for handler", "background-color: yellow;");

        this.onUserInfoChanged(userData);

//         if (this.config.userInfoUpdatedCallback) {
// //            console.log("%ccalling handler", "background-color: yellow;");
//             this.debug.debug("Notify listeners", userData); // Merged 

//             this.userInfoUpdatedCallback(userData); 
// //            this.config.userInfoUpdatedCallback(userData); // async
//         }
//this.userInfoUpdatedCallback
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
           JSON.parse(UnicodeBase64.decode(userInfo))
  //      )
//           JSON.parse(atob(userInfo)) //, jsonMapReviver)
        );

        this.debug.groupEnd();

        return user;
    } 

    //#endregion

    //#region MEMBERSHIPS UX

    // Expanded login button
    // Used on a containing DIV to expand the trigger area of 
    // Webflow's Log-In / Log-Out button  

    expandLoginButton(elem: HTMLElement) {

        // Get Webflow Login/Logout button
        const wfLoginButton: HTMLElement = elem.querySelector("[data-wf-user-logout]");
    
        // Setup click event handler on outer DIV
        elem.addEventListener('click', () => {
            // Click inner element
            if (wfLoginButton) {
                wfLoginButton.click();
            }
        });
    
        // Also intercept and stop propagation so event is not doubled
        if (wfLoginButton) {
            wfLoginButton.addEventListener('click', (e: Event) => {
                e.stopPropagation();
            });
        }
    }
    
    //#endregion

    //#region EVENT

    // User Info Updated
    userInfoUpdatedCallback = ((user: Sa5User) => { 

//        console.log("%ccalled handler", "background-color: yellow;", user);

        // Notify any config-specified handler
        if(this.config.userInfoUpdatedCallback) 
            this.config.userInfoUpdatedCallback(
                user
            ); 

    });

    //#endregion

/*
// https://jwt.io/ 
// How to decode jwt token in javascript without using a library?
// https://stackoverflow.com/a/38552302 
// https://www.npmjs.com/package/jwt-decode
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
*/

}

/**
 * Used to replace btoa() and atob() with unicode-compatible version. 
 */
class UnicodeBase64 {
    // Encode Unicode string to Base64
    static encode(input: string): string {
      const utf8Bytes = encodeURIComponent(input)
        .replace(/%([0-9A-F]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
      return btoa(utf8Bytes);
    }
  
    // Decode Base64 string to Unicode
    static decode(base64: string): string {
      const binaryString = atob(base64);
      const utf8String = binaryString
        .split('')
        .map(char => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join('');
      return decodeURIComponent(utf8String);
    }
  }


