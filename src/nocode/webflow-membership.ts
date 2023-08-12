
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

import { Sa5Membership } from '../webflow-membership';
import { Sa5MembershipRouting } from '../webflow-membership/login-routing';

const init = () => { 

//    let membership = new Sa5Membership(); 

    // Init membership
    let membership = new Sa5Membership(
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


    let core: Sa5Core = Sa5Core.startup(); // new Sa5Core();


    // Initialize debugging
    let debug = new Sa5Debug("sa5-membership");
    debug.debug ("Initializing");

    console.debug(`isLoggedIn = %c${membership.isLoggedIn()}`, "color: #ff0000;"); 

    /**
     * Conditional visiblity 
     */

    // Show all elements tagged for logged-in users only
    document.querySelectorAll('[wfu-show-logged-in]')
      .forEach((element: HTMLElement) => { 

        if (membership.isLoggedIn())
            element.removeAttribute("wfu-show-logged-in"); 

    });

    // Hide all elements tagged for logged-out users only
    document.querySelectorAll('[wfu-hide-logged-in]')
      .forEach((element: HTMLElement) => { 

        if (!membership.isLoggedIn())
            element.removeAttribute("wfu-hide-logged-in"); 

    });

    /**
     * Memberships UX Enhancements 
     */

    document.querySelectorAll('[wfu-login-button]')
      .forEach((element: HTMLElement) => { 

        membership.expandLoginButton(element);

    });






    /**
     * Load Current User Info 
     */

    membership.init();
//     var userInfo = new Sa5UserInfo({
// //        userInfoUpdatedCallback: myCallback
//       }).init(); 

    /**
     * Perform routing, if configured
     */

// console.log("pre routing");
    (new Sa5MembershipRouting()).init();
//    console.log("post routing");

}

// Auto-execute on DOM load
document.addEventListener("DOMContentLoaded", init); 