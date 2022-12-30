
/*
 * webflow-membership-routing
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Membership Routing Utilities
 * 
 * IMPORTANT: This lib avoids using jQuery,
 * so that it can be installed in the <HEAD> 
 */

/*
 * Membership Routing class.
 */


var defaultRoutingConfig = {
    
    routeAfterFirstLogin: false, // false | URL
    routeAfterLogin: false, // false | "." | URL 

}

var defaultAccessGroupConfig = {
    
    accessGroupAllowed: "", // all allowed 

}

export class WfuMembershipRouting {

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultRoutingConfig, config);

        // Install if needed 
        window.getCookie = window.getCookie || function(name) {
            var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
            }
    
        // Get login state
    //    const loggedIn = window.getCookie("wf_loggedin") || false;
    //    console.log (`logged in = ${loggedIn}`);
    
    }

    isLoggedIn = function() {

        return window.getCookie("wf_loggedin") || false;
    }

    // Handle user routing, starting point
    // based on page, referrer situation
    // and config. 
    routeUser = function() {

        if (this.routeAfterFirstLogin())
            return;

        this.routeAfterLogin();

    }

    // Determines if the immediate scenario is a first-login
    // scenario. 
    // TEST: Routed logins with this 
    // Returns TRUE if routing applied. 
    routeAfterFirstLogin = function() {

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
      routeAfterLogin = function() {

        // If no routing rule, exit
        if (!this.config.routeAfterLogin) 
            return false;

        // If no login forms, exit
        if (!$("form[data-wf-user-form-type='login']").length)
            return false;

        // Setup context
        var url = new URL(window.location.href);
        console.log(url.href);
      
        console.log(document.referrer); 
        var urlReferrer = undefined;
        if (document.referrer) 
            urlReferrer = new URL(document.referrer);
          
        // If redir, exit
        if (url.searchParams.has('usredir'))
            return false; 

        // Get context 
        // - First time login, coming from /sign-up 
        // - Member 
        // - (FUTURE) access-groups 

        // Rewrite querystring
        // to redirect to a specific target after login.
        // ONLY if no redirect is already specified. 
        // TEST: Back button 

        var routePath = this.config.routeAfterLogin;

        if (routePath == ".") {
            switch(urlReferrer.pathname) {
                case "/log-in":
                case "/sign-up":
                    routePath = "/";
                default:
                    routePath = urlReferrer.pathname;
            }
        } 

        this.setLoginPageRedirect(routePath);

        return true; 
      }
      
      // Apply redirect path to login
      setLoginPageRedirect = function(url) {

        // Directly apply to each form as a config attr
        $("form[data-wf-user-form-type='login']").each(function() {
            $(this).attr("data-wf-user-form-redirect", url);
        });

        // Original approach
        // window.location.replace(
        //     `/log-in?usredir=${encodeURIComponent(url)}`
        //     ); 

      }

}

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


