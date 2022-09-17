
/*
 * webflow-id-muid
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * MUID ( Micro-UUID ) Generator
 * Muids are URL-safe and take up 31.25% less characters than UUIDs while encoding the same amount of information.
 * 
 * Adapted from
 * https://github.com/process-street/muid.js/blob/master/muid.js
 */

import { generateUuid } from './webflow-id.js';

// Generates a Micro-UUID based on a UUID v4
// Using the cryptographic API 
// Muids are URL-safe and take up 31.25% less characters than UUIDs while encoding the same amount of information.
export var generateMuid = function () {

    // Get UUID v4
    var uuid = generateUuid();

    return fromUuid(uuid);
}

// Constants
var UUID_DIGITS = 32;
var MUID_DIGITS = 22;

// Convert UUID to MUID
export var fromUuid = function (uuid) {

    var normalizedUuid = uuid && uuid.split('-').join('').toLowerCase();
    if (!normalizedUuid || normalizedUuid.length !== UUID_DIGITS) {
        throw new RangeError('UUID must have 32 hexadecimal digits (case insensitive, optional dashes)')
    }

    var bytes = [];
    var i;
    var j = 0;

    for (i = 0; i < UUID_DIGITS; i += 2) {
        var hex1 = parseInt(normalizedUuid.charAt(j++), 16);
        var hex2 = parseInt(normalizedUuid.charAt(j++), 16);
        var byte = parseInt(hex1.toString(16) + hex2.toString(16), 16);
        bytes.push(byte);
    }

    return encode64(flip(bytes), URL_ALPHABET).split('=').join('');
}

// Convert MUID to UUID
export var toUuid = function (muid) {

    if (!muid || muid.length !== MUID_DIGITS) {
        throw new RangeError('muid must have 22 URL-safe base64 digits')
    }

    var bytes = flip(decode64(muid, URL_ALPHABET).slice(0, 16));
    var hexes = [];
    var i;

    for (i = 0; i < bytes.length; i++) {
        hexes.push(('00' + bytes[i].toString(16)).substr(-2));
    }

    hexes.splice(10, 0, '-');
    hexes.splice(8, 0, '-');
    hexes.splice(6, 0, '-');
    hexes.splice(4, 0, '-');

    return hexes.join('');
}

/*
 * SUPPORTING FUNCTIONS
 */

function flip(bytes) {
    var p1 = bytes.slice(0, bytes.length / 2);
    var p2 = bytes.slice(bytes.length / 2);
    return p2.concat(p1);
}

// Base 64
var URL_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=';

function decode64(str, alphabet) {

    var last1 = alphabet.indexOf(str.charAt(str.length - 1));
    var last2 = alphabet.indexOf(str.charAt(str.length - 2));

    var length = (str.length / 4) * 3;
    if (last1 === 64) length--; // Padding chars, so skip
    if (last2 === 64) length--; // Padding chars, so skip

    var bytes = [];
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i, j = 0;

    for (i = 0; i < length; i += 3) {
        // Get the 3 octets in 4 ascii chars
        enc1 = alphabet.indexOf(str.charAt(j++));
        enc2 = alphabet.indexOf(str.charAt(j++));
        enc3 = alphabet.indexOf(str.charAt(j++));
        enc4 = alphabet.indexOf(str.charAt(j++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        bytes[i] = chr1;
        if (enc3 !== 64) bytes[i + 1] = chr2;
        if (enc4 !== 64) bytes[i + 2] = chr3;
    }

    return bytes;
}

function encode64(bytes, alphabet) {

    var str = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i, j = 0;

    for (i = 0; i < bytes.length; i += 3) {
        chr1 = bytes[j++];
        chr2 = bytes[j++];
        chr3 = bytes[j++];

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = 64;
            enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        str += alphabet.charAt(enc1);
        str += alphabet.charAt(enc2);
        str += alphabet.charAt(enc3);
        str += alphabet.charAt(enc4);
    }

    return str;
}

// Adapted from:
// https://stackoverflow.com/questions/1240408/reading-bytes-from-a-javascript-string
function toBytes(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) <= 0x7F) {
            bytes.push(str.charCodeAt(i));
        } else {
            var e = encodeURIComponent(str.charAt(i)).substr(1).split('%');
            for (var j = 0; j < e.length; j++) {
                bytes.push(parseInt(e[j], 16));
            }
        }
    }
    return bytes;
}

// Adapted from:
// https://stackoverflow.com/questions/1240408/reading-bytes-from-a-javascript-string
function fromBytes(bytes) {
    var str = '';
    for (var i = 0; i < bytes.length; i++) {
        str +=
            bytes[i] <= 0x7F ?
                bytes[i] === 0x25 ?
                    '%25' :
                    String.fromCharCode(bytes[i]) :
                '%' + bytes[i].toString(16).toUpperCase();
    }
    return decodeURIComponent(str);
}
