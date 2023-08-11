
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
        let currentType: 'string' | 'number' | 'boolean' = 'string';
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
                        switch (currentType) {
                            case 'number':
                                obj[currentKey] = parseFloat(currentValue);
                                break;
                            case 'boolean':
                                obj[currentKey] = currentValue.toLowerCase() === 'true';
                                break;
                            default:
                                obj[currentKey] = currentValue;
                                break;
                        }
                    }
                    isMultiLineValue = false;
                    currentValue = null;
                    currentKey = null;
                    currentType = 'string';
                } else {
                    currentValue += '\n' + line;
                }
                continue;
            }
    
            const delimiterMatch = line.match(/:(\$|#|\?|)/);
            if (!delimiterMatch) continue;
    
            const delimiter = delimiterMatch[1];
            const parts = line.split(delimiterMatch[0]);
            const key = parts[0].trim();
            let value = parts.slice(1).join(':').trim();
    
            // Determine the type based on the delimiter
            switch (delimiter) {
                case '':
                case '$':
                    currentType = 'string';
                    break;
                case '#':
                    currentType = 'number';
                    break;
                case '?':
                    currentType = 'boolean';
                    break;
            }
    
            // Handle starting of multi-line value
            if (value.startsWith('<')) {
                if (value.endsWith('>')) {
                    value = value.slice(1, -1); // Exclude both the starting '<' and closing '>'
                    switch (currentType) {
                        case 'number':
                            obj[key] = parseFloat(value);
                            break;
                        case 'boolean':
                            obj[key] = value.toLowerCase() === 'true';
                            break;
                        default:
                            obj[key] = value;
                            break;
                    }
                } else {
                    isMultiLineValue = true;
                    currentKey = key;
                    currentValue = value.slice(1); // Exclude the starting '<'
                }
            } else {
                switch (currentType) {
                    case 'number':
                        obj[key] = parseFloat(value);
                        break;
                    case 'boolean':
                        obj[key] = value.toLowerCase() === 'true';
                        break;
                    default:
                        obj[key] = value;
                        break;
                }
            }
        }
    
        return obj;
    }

    parse2(content: string): SA5Object | null {
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



