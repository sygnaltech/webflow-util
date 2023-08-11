
/*
 * webflow-html-builder
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * HTML Builder
 */

import { encodeHTML, expandMacrosInText } from './utils';
// import { encodeHtml, expandMacrosInText } from './webflow-html';
//import { getDictionaryFromDataRow } from './webflow-data.js';
import { Sa5Datastore } from './webflow-data';

var htmlRenderOptions = {
    encodeHtml: true 
}

export class HtmlBuilder {
    html = [];

    add(html) {

        this.html.push(html);
    }
    
    addTemplate(templateEl: HTMLElement, data: any[]) {
        let template = templateEl.innerHTML;
        console.log(`addTemplate`);
        console.log(template);
    
        console.log(data);
    
        for (let row = 0; row < data.length; row++) {
            // Create Dictionary

            let ds: Sa5Datastore = new Sa5Datastore();

            let dict = ds.getDictionaryFromDataRow(data, row);
    
            let item = expandMacrosInText(
                template,
                dict
            );
    
            console.log(item);
    
            this.add(item);
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

