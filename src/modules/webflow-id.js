
/*
 * webflow-id
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * CSS Utilities
 */

// Generates a simple HTML-compatible entity ID,
// Always 10-characters in length, not guaranteed to be unique.
// e.g. cz6ucejm6x, ehyk2pchpq, uk7qevd21m
// All-lowercase to avoid brain seizures in programmers. Code should be beautiful.
// Compliant for use as HTML5 and HTML 4 entity ID's.
// https://stackoverflow.com/q/4247840/1849956
// Avoided use of metacharacters, so that ID's do not require escaping in e.g. jQuery.

export var generateHtmlId = function () {

    // Generate first letter 
    // as guaranteed alphabetic
    const set = 'abcdefghijklmnoprstuvwxyz';
    var idStart = set.charAt(
        Math.floor(Math.random() *
        set.length));

    // Additional, as alphanumeric
    var idBody = Math.random().toString(36).substr(2, 9);

    // Compose id
    var id = idStart + idBody;

    return id;
}



