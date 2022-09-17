
/*
 * webflow-svg
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * SVG Utilities
 * Inline SVG files from external reference and apply relevant CSS styling
 */

import { generateHtmlId } from './webflow-id.js';
import { getColor, getBgColor } from './webflow-css.js';

// Gets the computed style for a particular element
// Including classes, styles, and locally-applied styles 
// https://stackoverflow.com/a/16591432/1849956
// TODO: TEST cross-browser?

export var inlineAllTaggedSvgs = function () {

    // Select all tagged SVGs
    // TODO: restrict to img elems?
    // TODO: support background-images?
    var svgs = $(".wfu-svg");

    svgs.each(function (index) {

        inlineSvg(this);

    });

}

export var inlineSvg = function (el) {

    var svg1 = el;

    var color = getColor(svg1);
    var bgColor = getBgColor(svg1);
    var src = svg1.src;

    // Match image size
    var width = svg1.width;
    var height = svg1.height;
    if (height == 0) height = width; // fixup height if 0

    // Generate unique ID
    var id = generateHtmlId();

    // Get SVG file content
    $.get(src, function (data) {

        // Prepare SVG content
        var svgElem = new XMLSerializer().serializeToString(data.documentElement);

        // Prepare CSS style
        var style = `
            <style>
                #${id} {
                    width: ${width}px;
                    height: ${height}px;
                    display: inline-block;
                    vertical-align: middle;
                }
                #${id} svg {
                    width: ${width}px;
                    height: ${height}px;
                    display: inline-block;
                }
                #${id} svg path {
                    fill: ${color};
                }
            </style>`;

        // Prepare DIV wrapper
        var div = `
            <div id='${id}'>
                ${svgElem}
            </div>`;

        // Emit
        // HACK: Separate these, push CSS to head
        $(svg1).replaceWith(
            style + div
        );

    });

}


