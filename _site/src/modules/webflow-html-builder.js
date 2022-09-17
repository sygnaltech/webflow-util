
/*
 * webflow-html-builder
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * HTML Builder
 */

import { encodeHtml, expandMacrosInText } from './webflow-html.js';
import { getDictionaryFromDataRow } from './webflow-data.js';


var htmlRenderOptions = {
    encodeHtml: true 
}

export class HtmlBuilder {
    html = [];

    add = function (html) {

        this.html.push(html);
    }

    addTemplate = function (templateEl, data) {

        var template = $(templateEl).html();
        console.log(`addTemplate`);
        console.log(template);

        console.log(data);

        for (var row = 0; row < data.length; row++) {

            // Create Dictionary
            var dict = getDictionaryFromDataRow(data, row);
            
//            var el = $("#template1").clone(false);

            var item = expandMacrosInText(
                template,
                dict
            );

            console.log(item);

            this.add(item)

            // hb.add(el.html())
//            $("#demo1").append(el.html());

        }


    }

//// Putting all clases on DIV for simplicity
//var divClass = [];
//if (settings.responsive)
//    divClass.push('wfu-table-responsive'); // div
//divClass.push('wfu-table'); // table
//if (settings.striped)
//    divClass.push('wfu-striped'); // table
//if (settings.bordered)
//    divClass.push('wfu-bordered'); // table

    render = function () {

        return this.html.join('');
    }

}

