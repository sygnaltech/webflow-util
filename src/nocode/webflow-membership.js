
/*
 * webflow-membership
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu-query-param] attributes.
 */


import { WfuMembership } from '../modules/webflow-membership.js';

$(function () {

    console.debug("running WFU Membership");

    const wfuMembership = new WfuMembership();
  
    console.debug(`isLoggedIn = ${wfuMembership.isLoggedIn()}`); 

    // Show all elements tagged for logged-in users only
    $("[wfu-show-logged-in]").each(function() {
        if (wfuMembership.isLoggedIn())
        $(this).removeAttr("wfu-show-logged-in"); 
    });

    // Show all elements tagged for logged-out users only
    $("[wfu-hide-logged-in]").each(function() { 
        if (!wfuMembership.isLoggedIn())
        $(this).removeAttr("wfu-hide-logged-in"); 
    });

});

