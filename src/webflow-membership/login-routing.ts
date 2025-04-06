
/*
 * webflow-membership-routing
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Membership Routing Utilities
 * 
 * IMPORTANT: This lib avoids using jQuery,
 * so that it can be installed in the <HEAD> 
 */

/*
 * Membership Routing class.
 */

import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

/*
var defaultRoutingConfig = {
    
    routeAfterFirstLogin: false, // false | URL
    routeAfterLogin: false, // false | "." | URL 

}

var defaultAccessGroupConfig = {
    
    accessGroupAllowed: "", // all allowed 

}
*/

type GetConfigCallback = (Sa5MembershipRoutingConfig) 
    => Sa5MembershipRoutingConfig;

interface Sa5MembershipRoutingConfig {

//    getConfigCallback?: GetConfigCallback; 

    routeAfterFirstLogin: string; // url
    routeAfterLogin: string; // url
    
}

export class Sa5MembershipRouting {

    debug: Sa5Debug;

    config: Sa5MembershipRoutingConfig; // Optional config

    constructor(config: Partial<Sa5MembershipRoutingConfig> = {}) {

        this.config = {
//            getConfigCallback: config.getConfigCallback,
            routeAfterFirstLogin: config.routeAfterFirstLogin ?? '/',
            routeAfterLogin: config.routeAfterLogin ?? '/',
        }

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-membership-routing");
        this.debug.debug ("Initializing");
    
    }

    // Perform actions
    init() {

        let core: Sa5Core = Sa5Core.startup();

        // TODO: move label to globals
        let configHandler: GetConfigCallback = core.getHandler("getMembershipRoutingConfig") as GetConfigCallback;

        if(!configHandler) 
            return; // do nothing
    
        // this.config.getConfigCallback 
        //     = core.getHandler('getMembershipRoutingConfig') as GetConfigCallback; 

        if(configHandler) {
            this.config = configHandler(
                this.config
            ); 

            console.log("config handler", this.config);

            this.routeUser(); 
        }

    }

    // Handle user routing, starting point
    // based on page, referrer situation
    // and config. 
    routeUser() {

        if (this.routeAfterFirstLogin())
            return;

        this.routeAfterLogin();

    }

    // Determines if the immediate scenario is a first-login
    // scenario. 
    // TEST: Routed logins with this 
    // Returns TRUE if routing applied. 
    routeAfterFirstLogin() {

        // If not /, exit
        if (window.location.pathname != "/"
            && window.location.pathname != "/log-in")
            return false;

        // If no routing rule, exit
        if (!this.config.routeAfterFirstLogin)
            return false;

        // If no referrer, exit
        // because we have no information to route with  
        if (!document.referrer)
            return false;
        var urlReferrer = new URL(document.referrer);

        // Determine if this is a new registrant
        // TODO: add additional ?verifyToken= verification 
        if (urlReferrer.pathname != '/sign-up')
            return false; 

        // This is a new registrant on a first-time login
        // So redirect them to our desired first-time page 
        switch (window.location.pathname) {
            case "/":

                // A redirect is needed
                window.location.replace(this.config.routeAfterFirstLogin); 

                break;
            case "/log-in":

                // Form config is ok 
                this.setLoginPageRedirect(this.config.routeAfterFirstLogin); 
                break;
        }

        return true; 
      }

      /*
       * Handle login routing. 
       * Scenarios;
       * - Direct access, no redir string -> route to member home
       * - Indirect access, via redir string -> do nothing
       * - Accepted member invitation, via /sign-up -> first time login page
       */
      routeAfterLogin() {

        console.group(`wfu routeAfterLogin`)

        // If no routing rule, exit
        if (!this.config.routeAfterLogin) {
            console.debug("no routeafterlogin config set.");
            console.groupEnd();

            return false;
        }

        // If no login forms, exit
        if (!document.querySelectorAll("form[data-wf-user-form-type='login']").length) {
            console.debug("no login forms found.");
            console.groupEnd();
        
            return false;
        }

        // Setup context
        var url = new URL(window.location.href);
        console.debug(`url: ${url.href}`); 

        console.debug(`referrer: ${document.referrer}`); 
        var urlReferrer = undefined; 
        var urlReferrerPath = "";
        if (document.referrer) {
            urlReferrer = new URL(document.referrer); 
            urlReferrerPath = urlReferrer.pathname; 
        }
          
        // If redir, exit
        if (url.searchParams.has('usredir')) {
            console.debug("specific redirection specified.");
            console.groupEnd();

            return false; 
        }

        // Get context 
        // - First time login, coming from /sign-up 
        // - Member 
        // - (FUTURE) access-groups 

        // Rewrite sign-up form redirect 
        // to redirect to a specific target after login.
        // TEST: Back button 

        var routePath = this.config.routeAfterLogin; 
        console.debug(`default routePath: ${routePath}`); 

        if (routePath == ".") {
            if (url.pathname == "/log-in") { 

                // Use referrer as redirect location
                switch(urlReferrerPath) {
                    case "": // no referrer 
                    case "/log-in":
                    case "/sign-up":
                        routePath = "/";
                    default:
                        routePath = urlReferrerPath;
                }

            } else {

                // Use current path as redirect location 
                var routePath = url.pathname; 

            }

        } 

        console.debug(`routePath: ${routePath}`); 

        this.setLoginPageRedirect(routePath);

        console.groupEnd(); 

        return true; 
      }
      
      // Apply redirect path to login
      setLoginPageRedirect(url) {

        // Directly apply to each form as a config attr
        document.querySelectorAll("form[data-wf-user-form-type='login']").forEach(function(form) {
            form.setAttribute("data-wf-user-form-redirect", url);
        });

      }

      private logout() {
        
        // Sa5.usys.logout() 
// Must inject into the page
// This code cannot be run from a CDN due to same-site restrictions 

        fetch('/.wf_graphql/csrf', {
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log("CSRF Response:", data);
      
          // Extract the wf-csrv cookie value
          let csrfToken = document.cookie.split('; ')
            .find(row => row.startsWith('wf-csrf='))
            .split('=')[1];
      
          // After the first request, make the second POST request to `/.wf_graphql/usys/apollo`:
          return fetch('/.wf_graphql/usys/apollo', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-Wf-Csrf': csrfToken
              },
              body: JSON.stringify([{
                  "operationName": "UserLogoutRequest",
                  "variables": {},
                  "query": "mutation UserLogoutRequest {\n  usysDestroySession {\n    ok\n    __typename\n  }\n}\n"
              }])
          });
        })
        .then(response => response.json())
        .then(data => {
          console.log("Apollo Response:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
      }
      
}

/* 

export class WfuMembershipAccessGroupRouting {

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultAccessGroupConfig, config);

        // Install if needed 
        window.getCookie = window.getCookie || function(name) {
            var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
            }
    
        // Get current user's access groups 
    
    }

    isLoggedIn = function() {

        return window.getCookie("wf_loggedin") || false;
    }

    // Verify and handle access appropriately
    verifyAccess = function() {
        if (hasAccess) {
            // Show page
            // Remove [wfu-user-access]
            // [wfu-user-no-access] 

        } else {
            // Hide page
            location.replace("/");
        }
    }

    // Determine if the current user has access
    hasAccess = function() {

        // If all allowed, return true
        // Make content visible
        if (!this.config.accessGroupAllowed)
            return true;

        // Handle "anyone logged in" rule (*)
        if (this.config.accessGroupAllowed == "*") {
            // logged in
            return isLoggedIn();
        }

        // Get current user's access groups
        const accessGroups = [ "webflow" ];

        // If user has the allowed access group, return true
        if (accessGroups.includes(this.config.accessGroupAllowed))
            return true;

        // Block access
        return false;
    }

}

*/
