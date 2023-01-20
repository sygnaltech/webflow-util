
/*
 * webflow-utils
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * General Utilities
 */

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript

// https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-title-case-with-javascript.html
export function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

