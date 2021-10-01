
/*
 * webflow-css
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * CSS Utilities
 */

// Gets the computed style for a particular element
// Including classes, styles, and locally-applied styles 
// https://stackoverflow.com/a/16591432/1849956
// TODO: TEST cross-browser?
export var getElementStyle = function (el, style) {

    return window.getComputedStyle(el, null)
        .getPropertyValue(style);
}

export var getColor = function (el) {
    return getElementStyle(el, "color");
}

export var getBgColor = function (el) {
    return getElementStyle(el, "background-color");
}


// Get all styles affecting the identified element
// Good but not getting element's own 'style' tag
function css(el) {
    //            var sheets = document.styleSheets, ret = [];
    var ret = [];
    var sheets = Array.from(document.styleSheets).filter(
        (styleSheet) => !styleSheet.href || styleSheet.href.startsWith(window.location.origin)
    );

    el.matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector
        || el.msMatchesSelector || el.oMatchesSelector;
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (el.matches(rules[r].selectorText)) {
                ret.push(rules[r].cssText);
            }
        }
    }
    return ret;
}

