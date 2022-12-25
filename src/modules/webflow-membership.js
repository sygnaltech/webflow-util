
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Tracking Utilities
 */


/*
 * Membership class.
 */

var defaultConfig = {

    // sessionStorage | localStorage | cookies
//    method: 'sessionStorage',
    
//    prefix: 'track' 

}

export class WfuMembership {

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

    // Expanded login button
    // Used on a containing DIV to expand the trigger area of 
    // Webflow's Log-In / Log-Out button  
    expandLoginButton = function($elem) {

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


