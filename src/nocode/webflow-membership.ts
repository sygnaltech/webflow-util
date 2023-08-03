
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of attributes.
 */

import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

import { isLoggedIn, expandLoginButton, WfuUserInfo } from '../webflow-membership';


const init = () => { 

    // Initialize debugging
    let debug = new Sa5Debug("sa5-html");
    debug.debug ("Initializing");

    console.debug(`isLoggedIn = %c${isLoggedIn()}`, "color: #ff0000;"); 

    /**
     * Conditional visiblity 
     */

    // Show all elements tagged for logged-in users only
    document.querySelectorAll('[wfu-show-logged-in]')
      .forEach((element: HTMLElement) => { 

        if (isLoggedIn())
            element.removeAttribute("wfu-show-logged-in"); 

    });

    // Hide all elements tagged for logged-out users only
    document.querySelectorAll('[wfu-hide-logged-in]')
      .forEach((element: HTMLElement) => { 

        if (!isLoggedIn())
            element.removeAttribute("wfu-hide-logged-in"); 

    });

    /**
     * Memberships UX Enhancements 
     */

    document.querySelectorAll('[wfu-login-button]')
      .forEach((element: HTMLElement) => { 

        expandLoginButton(element);

    });

    /**
     * User Info 
     */

    var membership = new WfuUserInfo({
//        userInfoUpdatedCallback: myCallback
      }).init(); 

}

// Auto-execute on DOM load
document.addEventListener("DOMContentLoaded", init);