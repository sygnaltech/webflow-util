
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

// Generates a UUID v4
// Using the cryptographic API 
// Adapted from:
// https://stackoverflow.com/a/2117523/1849956
export var generateUuid = function () {

    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

//function uuidv4() {
//    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//        return v.toString(16);
//    });
//}





