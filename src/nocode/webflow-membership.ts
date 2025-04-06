
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * NO-CODE version, keys off of attributes.
 */

import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

import { Sa5UserAccounts } from '../webflow-membership';
import { Sa5MembershipRouting } from '../webflow-membership/login-routing';

const init = () => { 

//    let membership = new Sa5Membership(); 

    // Init membership
    let membership = new Sa5UserAccounts(
/* 
      {
      handleBreakpointChange: (breakpointName: string, e: MediaQueryListEvent) => {

          window['sa5'] = window['sa5'] || {};
          const sa5: any = window['sa5'];

          // Get any global handler
          const breakpointChangeHandler = sa5['userInfoChanged'];
          if(breakpointChangeHandler) 
              breakpointChangeHandler(breakpointName, e);

        }
    }
*/
    );
//    breakpoints.init();

    // Factory-create SA5 Core
    let core: Sa5Core = Sa5Core.startup(); 


    // Initialize debugging
    let debug = new Sa5Debug("sa5-user-accounts");
    debug.debug (`Initializing v${VERSION}`);


    console.debug(`isLoggedIn = %c${membership.isLoggedIn()}`, "color: #ff0000;"); 

    /**
     * Conditional visiblity 
     */

    // Show all elements tagged for logged-in users only
    document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_SHOW_LOGGED_IN) 
        )
      .forEach((element: HTMLElement) => { 

        if (membership.isLoggedIn())
            element.removeAttribute(
                Sa5Attribute.ATTR_SHOW_LOGGED_IN 
                ); 

    });

    // Hide all elements tagged for logged-out users only
    document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_HIDE_LOGGED_IN) 
        )
      .forEach((element: HTMLElement) => { 

        if (!membership.isLoggedIn())
            element.removeAttribute(
                Sa5Attribute.ATTR_HIDE_LOGGED_IN 
                ); 

    });

    /**
     * Memberships UX Enhancements 
     */

    document.querySelectorAll(
        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_LOGIN_BUTTON) 
        )
      .forEach((element: HTMLElement) => { 

        membership.expandLoginButton(element);

    });

    /**
     * Load Current User Info 
     */

    membership.init();

    /**
     * Perform routing, if configured
     */

    (new Sa5MembershipRouting()).init();

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}