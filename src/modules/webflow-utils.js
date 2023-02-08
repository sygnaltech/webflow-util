
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

// How do you JSON.stringify an ES6 Map?
// https://stackoverflow.com/a/56150320
export function jsonMapReplacer(key, value) {

    if(value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}

// How do you JSON.stringify an ES6 Map?
// https://stackoverflow.com/a/56150320
export function jsonMapReviver(key, value) {
console.log ("reviving", key, typeof value, value); 
    if(typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
      }
      return value;    
}

