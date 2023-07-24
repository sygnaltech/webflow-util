
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

    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;    
}


// HTML Decode JSON for Select Option element
// https://tertiumnon.medium.com/js-how-to-decode-html-entities-8ea807a140e5
// export function decodeHTML(text) {
//     return $("<textarea/>")
//       .html(text)
//       .text();
// }
export function decodeHTML(text: string): string {
    let parser = new DOMParser();
    let dom = parser.parseFromString(
        `<!doctype html><body>${text}`,
        'text/html');
    return dom.body.textContent || '';
}

// https://tertiumnon.medium.com/js-how-to-decode-html-entities-8ea807a140e5
// export function encodeHTML(text) {
//     return $("<textarea/>")
//       .text(text)
//       .html();
// }
export function encodeHTML(text) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}

// How to check if a number is between two values?
// https://stackoverflow.com/a/18881828
// Number.prototype.between = function (a, b, inclusive) {
//     var min = Math.min(a, b),
//         max = Math.max(a, b);

//     return inclusive ? this >= min && this <= max : this > min && this < max;
// }
export function between(value: number, a: number, b: number, inclusive: boolean): boolean {
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    return inclusive ? value >= min && value <= max : value > min && value < max;
}

// Handy outerHTML extension function
// jQuery.fn.outerHTML = function () {
//     return jQuery('<div />').append(this.eq(0).clone()).html();
// };
export function outerHTML(element) {
    return element.outerHTML;
}


// Mobile detection
// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
// window.mobileCheck = function () {
export function isMobile() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window['opera']);
    return check;
};

// How to execute a JavaScript function when I have its name as a string
// https://stackoverflow.com/a/359910
export function executeFunctionByName(functionName, context /*, args */) {
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
export function executeFunctionByName2(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

