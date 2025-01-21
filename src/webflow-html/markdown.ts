

/*
 * webflow-html
 * Markdown 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

import Showdown from 'showdown';




interface Sa5MarkdownConfig {

//    breakpointChangedCallback?: BreakpointChangedCallback; 

}



export class Sa5Markdown {

    config: Sa5MarkdownConfig;
    elem: HTMLElement; 

    constructor(element: HTMLElement, config: Partial<Sa5MarkdownConfig> = {}) {

        this.elem = element; 

        // Merge configs, with defaults
        this.config = {
        }

        let core: Sa5Core = Sa5Core.startup(); 

    }

    init() {

        // Initialize debugging
        let debug = new Sa5Debug("sa5-html");
        debug.enabled = true; 

        // https://github.com/showdownjs/showdown 

        // Define a custom Showdown extension for '==highlight=='
        const highlightExtension = () => {
            return [
            {
                type: 'lang', // This specifies it's a language extension
                regex: /==([^=]+)==/g, // Match text surrounded by double equals (e.g., ==highlight==)
                replace: '<mark class="markdown-highlight">$1</mark>' // Replace it with the <mark> element
            }
            ];
        };

        // Register the custom extension with Showdown
        Showdown.extension('highlight', highlightExtension);

        // Initialize markdown converter
        let converter = new Showdown.Converter({
            tables: true, // allow tables
            noHeaderId: true,
            headerLevelStart: 2,
            literalMidWordUnderscores: true,
            extensions: ['highlight'] 
        });

        // Determine theme
        const mdTheme = this.elem.getAttribute("theme") || "default"; 

        // Write Markdown element 
        this.elem.outerHTML = `<div theme="${mdTheme}">` + converter.makeHtml(this.elem.innerHTML) + `<div>`; 

    }

}

