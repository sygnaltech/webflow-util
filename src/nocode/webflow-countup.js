
/*
 * webflow-countup
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { WfuCountUp } from '../modules/webflow-countup.js';


$(function() {
    
    new WfuCountUp({
        waypointSelfTrigger: '90%',
        waypointGroupTrigger: '70%',
        countupSettings: {
            duration: 2, // sec
            useEasing: true,
            useGrouping: true,
            separator: ",",
            decimal: ".",
        }
    }).init();

});


