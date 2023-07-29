
/*
 * webflow-core
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Editor Utilities
 */




/*
 * Sa5Editor
 *
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Detects the current editor mode.
 */

export class Sa5Editor {

    config; // Optional config

    get isEditorMode() {

// TODO: check
// Title
// vs webflow.require("editor")
// vs [data-wf-mode]  

        return document.documentElement
            .getAttribute("data-wf-mode") === "editor";

//        return $("html").attr("data-wf-mode") == "editor";

    }

    detectEditorMode() {

        // HACK: Use the <title> to detect Editor mode status
        if (document.title.startsWith("Editor:")) {
            console.debug("Editor mode");
            document.documentElement.setAttribute("data-wf-mode", "editor");
        } else {
            console.debug("NOT Editor mode");
            document.documentElement.removeAttribute("data-wf-mode");
        }

        // // HACK: Use the <title> to detect Editor mode status
        // if ($("title").text().startsWith("Editor:")) {
        //     console.debug("Editor mode");
        //     $("html").attr("data-wf-mode", "editor");
        // } else {
        //     console.debug("NOT Editor mode");
        //     $("html").removeAttr("data-wf-mode");
        // }

    }

    constructor(config = null) {
        config = config || {};

        this.config = config;

        this.init();

        console.debug(`WFU Edit mode monitor installed`);

    }

    // Install Editor mode detector
    init() {

        // Assuming `this` is of a class type that has a `detectEditorMode` method
        let titleElement = document.getElementsByTagName("title")[0];

        // Create a new MutationObserver instance
        let observer = new MutationObserver((mutations) => {
            this.detectEditorMode();
        });

        // Start observing the target node for configured mutations
        observer.observe(titleElement, { childList: true });

        // var _this = this;
        // this.observeDOM($("title")[0], function (m) {

        //     _this.detectEditorMode();
        // });
    }

    // Installs a mutation observer 

//    type Callback = (mutationsList: MutationRecord[], observer: MutationObserver) => void;

//observeDOM
// mutations() {

//     const MutationObserver = window.MutationObserver || window['WebKitMutationObserver'];

//     return function (obj: Node, callback: Callback): MutationObserver | undefined {
//         if (!obj || obj.nodeType !== Node.ELEMENT_NODE) return;

//         if (MutationObserver) {
//             // define a new observer
//             const mutationObserver = new MutationObserver(callback);

//             // have the observer observe foo for changes in children
//             mutationObserver.observe(obj, { childList: true, subtree: true });
//             return mutationObserver;
//         }

//         // browser support fallback
//         else if (window.addEventListener) {
//             obj.addEventListener('DOMNodeInserted', callback as EventListener, false);
//             obj.addEventListener('DOMNodeRemoved', callback as EventListener, false);
//         }
//     };
// }

/*

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

*/

}



