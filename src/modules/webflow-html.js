
// v2.1
// Sygnal Technology Group
// http://sygnal.com

export var encodeHtml = function (text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
