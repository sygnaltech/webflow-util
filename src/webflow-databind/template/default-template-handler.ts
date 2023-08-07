
/**
 * SA5 
 * Default Template Handler 
 * Data-Binding Content Template Handler
 * 
 * - Straightforward handling of {{ }} constructions
 * - Full support for SA5 data-binding syntax 
 */

import { WfuDataBinder, Sa5DataSourceDescriptor } from "../../webflow-databind";

export class DefaultTemplateHandler {

    _dataBinder: WfuDataBinder;

    constructor(dataBinder: WfuDataBinder) {
      this._dataBinder = dataBinder;
    }

    processElement(elem: HTMLElement) {

        let html = elem.innerHTML; 

        // Use the replace function with a regex to find and replace {{...}} constructions
        html = html.replace(/{{(.*?)}}/g, (match: string, p1: string) => {
            return this.processItem(p1, elem); 
        });

        elem.innerHTML = html; 
    }

    processItem(dsdSpecifier: string, elem: HTMLElement): string {

      let dsd = new Sa5DataSourceDescriptor(dsdSpecifier);
      return this._dataBinder.getData(dsd, elem); 

    }

}

