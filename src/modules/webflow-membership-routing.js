
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


var defaultConfig = {
    
    routeAfterFirstLogin: false, // false | URL
    routeAfterLogin: false, // false | "." | URL 

}

export class WfuMembershipRouting {

    config; // Optional config

    constructor(config = {}) {

        this.config = $.extend({}, defaultConfig, config);

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

//        const loggedIn = window.getCookie("wf_loggedin") || false;
//        console.log (`logged in = ${loggedIn}`);

        return window.getCookie("wf_loggedin") || false;
    }

    // Handle user routing
    // based on page, referrer situation
    // and config. 
    routeUser = function() {

        // Handle recognized paths 
        switch(window.location.pathname) {
            case "/":
                this.routeUserFromHome();
                break;
            case "/log-in":
                this.routeUserFromLogin();
                break;
        }

    }

    // Use on homepage only
    // because this is where a new self-sign-up is directed 
    // immediately after confirming sign-up, via the email link 
    routeUserFromHome = function() {

        // If no routing rule, exit
        if (!this.config.routeAfterFirstLogin)
            return;
        
        // If no referrer, exit
        // because we have no information to route with  
        if (!document.referrer)
            return;
        var urlReferrer = new URL(document.referrer);

        // Determine if this is a new registrant
        // TODO: add additional ?verifyToken= verification 
        var newRegistrant = false;
        if (urlReferrer.pathname == '/sign-up')
            newRegistrant = true;
      
        if (newRegistrant) {
        
            // This is a new registrant on a first-time login
            // So redirect them to our desired first-time page 
            window.location.replace(this.config.routeAfterFirstLogin); 
            
        }
        
      }
      
      setLoginPageRedirect = function(url) {

        window.location.replace(
            `/log-in?usredir=${encodeURIComponent(url)}`
            ); 

      }

      /*
       * Handle login routing. 
       * Scenarios;
       * - Direct access, no redir string -> route to member home
       * - Indirect access, via redir string -> do nothing
       * - Accepted member invitation, via /sign-up -> first time login page
       */
      routeUserFromLogin = function() {

console.debug("routeUserFromLogin"); 

        // If no routing rule, exit
        if (!this.config.routeAfterLogin 
            && !this.config.routeAfterFirstLogin
            ) return;

            console.debug("routeUserFromLogin 1"); 

        // Setup context
        var url = new URL(window.location.href);
        console.log(url.href);
      
        console.log(document.referrer); 
        var urlReferrer = undefined;
        if (document.referrer) 
            urlReferrer = new URL(document.referrer);
          
        // If redir, exit
        if (url.searchParams.has('usredir'))
            return; 


            console.debug("routeUserFromLogin ALL GO"); 


        // Get context 
        // - First time login, coming from /sign-up 
        // - Member 
        // - (FUTURE) access-groups 
      
        // Check for new registrant
        var isFirstLogin = false;
        
        if (urlReferrer) {
      
            if (urlReferrer.pathname == '/sign-up')
                isFirstLogin = true;
          
            // Safety
            // to prevent recurring redirects 
            if (urlReferrer.pathname == "/log-in")
                urlReferrer = undefined;
        }
        
        if (isFirstLogin) {

            // This is a new registrant on a first-time login
            // So redirect them to our desired first-time page 
//            window.location.replace(this.config.routeAfterSignUp); 
                // "/u/new");
            this.setLoginPageRedirect(this.config.routeAfterFirstLogin);

        } else {

            // Rewrite querystring
            // to redirect to a specific target after login.
            // ONLY if no redirect is already specified. 
            // TEST: Back button 
            switch(this.config.routeAfterLogin) {

                case ".": // Return to the page log-in was clicked 
                    this.setLoginPageRedirect(urlReferrer.pathname);
                    break;

                default:
                    this.setLoginPageRedirect(this.config.routeAfterLogin); 
                    break;

            }

        }
      
      }

}



