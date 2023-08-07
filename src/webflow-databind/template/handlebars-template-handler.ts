
/**
 * SA5
 * Handlebars
 * Data-Binding Content Template Handler
 * 
 * ABANDONING 
 * - Lack of flexibility on {{ }} syntax 
 * - Complications with internal markup syntax 
 * - Inability to define & handle our own declarations 
 * - Possible limitations on escaping 
 */

import Handlebars = require('handlebars');
import { DefaultTemplateHandler } from './default-template-handler';


export class HandlebarsTemplateHandler extends DefaultTemplateHandler {

    // constructor() {

    // }

    processElement(elem: HTMLElement) {

     // https://www.npmjs.com/package//handlebars

        let html = elem.innerHTML;
        html = html.replace(/{{/g, '{{ sa5 '); 

        Handlebars.registerHelper('sa5', (context, options) => {

            console.log("sa5 handlebars", context, options);

//this.getData(new Sa5DataSourceDescriptor())

            return "DATA1";
          });
          
        const template = Handlebars.compile(html);
//            "Name: {{name}}");
        console.log(template({ name: "Nils" }));



    }

}