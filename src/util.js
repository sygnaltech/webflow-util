
/*
 * util functions
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Handy utility functions.
 */


// How to check if a number is between two values?
// https://stackoverflow.com/a/18881828
Number.prototype.between = function (a, b, inclusive) {
    var min = Math.min(a, b),
        max = Math.max(a, b);

    return inclusive ? this >= min && this <= max : this > min && this < max;
}

// Handy outerHTML extension function
jQuery.fn.outerHTML = function () {
    return jQuery('<div />').append(this.eq(0).clone()).html();
};


// How to execute a JavaScript function when I have its name as a string
// https://stackoverflow.com/a/359910
function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

// How to execute a JavaScript function when I have its name as a string
// https://stackoverflow.com/a/4351575 
function executeFunctionByName2(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}