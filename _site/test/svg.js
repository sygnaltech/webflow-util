

import { inlineSvg, inlineAllTaggedSvgs } from '/src/modules/webflow-svg.js';

import { getColor, getBgColor } from '/src/modules/webflow-css.js';
import { generateHtmlId } from '/src/modules/webflow-id.js';

function inlineSvg2(el) {

    var svg1 = el; // svgs[index];

    var color = getColor(svg1);
    var bgColor = getBgColor(svg1);
    var src = svg1.src;

    var width = svg1.width;
    var height = svg1.height;
    if (height == 0) height = width;

    // Generate unique ID
    var id = generateHtmlId();
    console.log(id);

    // Get SVG file content
    $.get(src, function (data) {
        //$(".result").html(data);
        //alert("Load was performed.");

        //        <style>
        //            .wfu-svg {
        //                visibility: hidden;
        //}
        //</style>

        // Prepare SVG content
        var svgElem = new XMLSerializer().serializeToString(data.documentElement);

        // Prepare CSS style
        var style = `
            <style>
                #${id} {
                    width: ${width}px;
                    height: ${height}px;
                    display: inline-block;
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

$(function () {
    
    //    var json;

    inlineAllTaggedSvgs();

//    var svgs = $(".wfu-svg"); //.map(function () {
//    //    });

//    console.log(`svgs = ${svgs.length}`);

////    console.log(`svgs = ${svgs.map().length}`);

//    console.log(svgs.constructor.name);
//    console.log(typeof(svgs));

////    console.log(svgs.constructor.name);
////    console.log(typeof (svgs[0]));

//    svgs.each(function (index) {

//        console.log(typeof (svgs[index]));
//        console.log(typeof (this));

//        console.log(svgs[index].constructor.name);
//        console.log(this.constructor.name);

//        inlineSvg(this);
        
//    });

});
