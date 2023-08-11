
/*
 * SA5
 * Sygnal Technology Group
 * sa5-data
 * 
 * Creates a data source from SA5 data.
 */

// import { Database } from '../modules/webflow-data.js';

import { Sa5ScriptType } from '../globals'

type SA5Object = { [key: string]: any };

export class Sa5Data {

    elem: HTMLElement;
    type: string;
    value: SA5Object;

    constructor(elem: HTMLElement) {

        this.elem = elem; 
        this.init();

    }

    init() {

        // Verify node type
        if (this.elem.nodeName != "SCRIPT") {
            console.error("Invalid element for Sa5Data. Must be a SCRIPT element.", this.elem);
            return;
        }
        
        // Verify type
        this.type = this.elem.getAttribute("type");
        if (this.type != Sa5ScriptType.SCRIPT_TYPE_SA5_DATA_ITEM) {
            console.error("Invalid element type for Sa5Data.", this.elem);
            return; 
        }

        let data = this.elem.innerText;

        this.value = this.parse(data); 

    }

    parse(content: string): SA5Object | null {
        const obj: SA5Object = {};
        const lines = content.split('\n');
        let currentKey: string | null = null;
        let currentValue: string | null = null;
        let isMultiLineValue = false;

        for (let line of lines) {
            line = line.trim();
            
            // Skip empty lines
            if (!line) continue;

            // Handle multi-line values
            if (isMultiLineValue) {
                if (line.endsWith('>')) {
                    currentValue += '\n' + line.slice(0, -1); // Exclude the closing '>'
                    if (currentKey !== null && currentValue !== null) {
                        obj[currentKey] = currentValue;
                    }
                    isMultiLineValue = false;
                    currentValue = null;
                    currentKey = null;
                } else {
                    currentValue += '\n' + line;
                }
                continue;
            }

            const parts = line.split(':');
            const key = parts.shift()?.trim() || "";
            const value = parts.join(':').trim();

            // Handle starting of multi-line value
            if (value.startsWith('<')) {
                if (value.endsWith('>')) {
                    obj[key] = value.slice(1, -1); // Exclude both the starting '<' and closing '>'
                } else {
                    isMultiLineValue = true;
                    currentKey = key;
                    currentValue = value.slice(1); // Exclude the starting '<'
                }
            } else {
                obj[key] = value;
            }
        }

        return obj;
    }

}



