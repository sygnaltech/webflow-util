
/*
 * webflow
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Core Utilities
 */







// https://university.webflow.com/lesson/intro-to-breakpoints
export const WebflowBreakpoint = {
    Large1920: 1920, // >=
    Large1440: 1440, // >=
    Large1280: 1280, // >=
    Desktop: 992, // >=, base ( px )
    Tablet: 991, // <=
    MobileLandscape: 767, // <=
    MobilePortrait: 478 // <=
}

/*
export const VarType = {
    String, // default
    Int, 
    Date
}
*/ 


// Gets WFU vars within this element
// Returns a key-value Map.
export var getVars = function (elem) {

    var dict = new Map();

    // type 
    console.clear();

    //    var vars = $(elem).find('data[wfu-var]');
    //    $(vars)


    // Process v1 <data> vars
    $(elem).find('data[wfu-var],wfu-var').each(function () {

        var key;
        var type;
        var val;

        if ($(this).is('wfu-var')) {

            // Process WFU-VAR element
            // <wfu-var name="..." type="..." value="..."></wfu-var> 
            key = $(this).attr("name");
            type = $(this).attr("type");
            val = $(this).attr("value");

        } else {

            // Deprecated DATA element
            // <data wfu-var="" wfu-var-type="" value=""></data>
            key = $(this).attr("wfu-var");
            type = $(this).attr("wfu-var-type");
            val = $(this).attr("value");

        }

        // Resolve to VarType
        // todo, default to 'string' type 
        // do value type conversion also for actual calculations
        // nullability? e.g. string? 

        if (type == undefined || type == null || type == "")
            type = "string"; // default 

        console.debug(`WFU-VAR - (${type}) ${key} = ${val}`);

        // Add to dict 
        dict.set(
            key,
            val
        );

    });

    /*

    // Process v1 <data> vars
    $(elem).find('data[wfu-var]').each(function () {

        // <data wfu-var="" wfu-var-type="" value=""></data>
        var key = $(this).attr("wfu-var");
        var type = $(this).attr("wfu-var-type");
        var val = $(this).attr("value");

        // Resolve to VarType
        // todo, default to 'string' type 
        // do value type conversion also for actual calculations
        // nullability? e.g. string? 

        if (type == undefined || type == null || type == "")
            type = "string"; // default 

        console.log(`(${type}) ${key} = ${val}`);

        // Add to dict 
        dict.set(
            key,
            val
        );

    });

    // Process v2 <wfu-var> vars
    $(elem).find('wfu-var').each(function () {

        // <data wfu-var="" wfu-var-type="" value=""></data>
        var key = $(this).attr("name");
        var type = $(this).attr("type");
        var val = $(this).attr("value");

        if (type == undefined || type == null || type == "")
            type = "string"; // default

        console.log(`WFU-VAR - (${type}) ${key} = ${val}`);

        // Add to dict 
        dict.set(
            key,
            val
        );

    });

*/

    console.log("test getVars /1");

    return dict;
}



/*
 * WfuEditor
 *
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Detects the current editor mode.
 */

export class WfuEditor {

    config; // Optional config

    get isEditorMode() {

        return $("html").attr("data-wf-mode") == "editor";

    }

    detectEditorMode() {

        // HACK: Use the <title> to detect Editor mode status
        if ($("title").text().startsWith("Editor:")) {
            console.debug("Editor mode");
            $("html").attr("data-wf-mode", "editor");
        } else {
            console.debug("NOT Editor mode");
            $("html").removeAttr("data-wf-mode");
        }

    }

    constructor(elem, config) {
        config = config || {};

        this.config = config;

        this.init();

        console.debug(`WFU Edit mode monitor installed`);

    }

    // Install Editor mode detector
    init() {
        var _this = this;
        this.observeDOM($("title")[0], function (m) {

            _this.detectEditorMode();
        });
    }

    // Installs a mutation observer
    observeDOM = (function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function (obj, callback) {
        if (!obj || obj.nodeType !== 1) return;

        if (MutationObserver) {
            // define a new observer
            var mutationObserver = new MutationObserver(callback)

            // have the observer observe foo for changes in children
            mutationObserver.observe(obj, { childList: true, subtree: true })
            return mutationObserver
        }

        // browser support fallback
        else if (window.addEventListener) {
            obj.addEventListener('DOMNodeInserted', callback, false)
            obj.addEventListener('DOMNodeRemoved', callback, false)
        }
    }
    })();

}
