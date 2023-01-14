
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of attributes.
 */


import { isLoggedIn, expandLoginButton } from '../modules/webflow-membership.js';


$(function () {

    console.debug(`isLoggedIn = %c${isLoggedIn()}`, "color: #ff0000;"); 

    // Conditional visiblity

    // Show all elements tagged for logged-in users only
    $("[wfu-show-logged-in]").each(function() {
        if (isLoggedIn())
        $(this).removeAttr("wfu-show-logged-in"); 
    });

    // Show all elements tagged for logged-out users only
    $("[wfu-hide-logged-in]").each(function() { 
        if (!isLoggedIn())
            $(this).removeAttr("wfu-hide-logged-in"); 
    });

    // Expand login buttons
    $("[wfu-login-button]").each(function() { 
        
        expandLoginButton($(this));

    });

});

