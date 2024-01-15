/*
 * webflow-embed
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Embed content such as tables, and more. 
 */

import { Sa5Core } from './webflow-core'
import { Sa5Debug } from './webflow-core/debug'
// import { Sa5HtmlDynamicAttributes } from './webflow-html/dynamic-attributes'
// import { Sa5Breakpoints } from './webflow-html/breakpoints'

export interface Sa5EmbedConfig {

//    dynamicAttributes?: boolean | true;
//    handleBreakpointChange?: ((breakpointName: string, e: MediaQueryListEvent) => void) | null;
//    handleOrientationChange?: ((orientationName: string, e: MediaQueryListEvent) => void) | null;

    debug?: boolean | true;

}





export class Sa5Embed {
    config: Sa5EmbedConfig;
    debug: Sa5Debug; 
    placeholderElement: HTMLElement;

    constructor() { // config: Sa5EmbedConfig) {
//        this.config = config;

        this.debug = new Sa5Debug("sa5-embed");
//        this.debug.enabled = this.config.debug; 

    }

    static getGoogleDocId(url) {
  
        // e.g. https://docs.google.com/document/d/1uJOCUqclmxTQ607-5WGmo6DVuwCmpEbyygknt7oA88c/edit
        var prefix = "https://docs.google.com/document/d/";
        if (url.startsWith(prefix)) {
//            console.log(url);
            url = url.substring(prefix.length);
//            console.log(url);
            const id = url.split("/")[0];
            console.log("id", id); 
            return id; 
        }
    
        console.error(`Unknown google docs URL format - ${url}`);
    } 

    static async createFromScriptElementAsync(e: HTMLScriptElement): Promise<Sa5Embed> {

        let sa5embed: Sa5Embed = new Sa5Embed();
        sa5embed.placeholderElement = e;

// console.log("creating from script.");  

//        this.debug.debug ("sa5-embed init.");

        // Init embeds
        
        // const embedSelectors = [
        //     'script[type="wfu-embed"]', // deprecated
        //     'script[type^="sygnal/embed"]' // e.g. sygnal/embed and sygnal/embed+hson
        // ];

        // document.querySelectorAll(embedSelectors.join(', '))
        //   .forEach((scriptElement: HTMLScriptElement) => {

        let config: any = {};
        let embedType: string = '';
        let embedVersion: string = '1';

        embedType = e.getAttribute("wfu-embed-type"); 
        embedVersion = e.getAttribute("wfu-embed-version") ?? '1'; 

        // Get JSON config
        switch (e.type) {

            // JSON
            // case "wfu-embed": // deprecated
            //     config = JSON.parse(e.textContent || '');
            //     // version and type are in config, override them
            //     embedType = config.type; 
            //     embedVersion = config.version; 
            //     break;

            case "sygnal/embed":
                config = JSON.parse(e.textContent || '');
                break;

            // HSON
            case "sygnal/embed+hson":
                console.error("HSON not yet supported.");
                return;

            // Unknown
            default:
                console.error("Unknown Sygnal embed type.");
                return;
        }

// console.log(embedType, config); 

        // TODO: redesign this to merge a default versioned base config in
        // Also use sa5/data 

        // Get Google Doc ID
        const id = Sa5Embed.getGoogleDocId(config.src);
        let src = '';
        
        /**
         * Get content
         */

        switch (embedType) {

            // Google Doc URL
//                case "gdoc": // deprecated 
            case "googledoc":
                src = `https://docs.google.com/document/d/${id}/export?format=html`;
                break;

            // Other
            default:
                console.warn(`Unknown load type ${embedType}`);
                return;
        }
          
            // If a selector was defined, use it
            // if (config.selector !== 'undefined' && config.selector !== false) {
            //     src += ` ${config.selector}`; 
            // }
          
// console.log(src);

        let wfEmbed: HTMLElement = e.parentElement;

        // HACK: to re-acquire
        const tempId = "id-" + Sa5Embed.generateRandomString(10);
        wfEmbed.id = tempId;

// console.log('e1', wfEmbed);

//            if (wfEmbed) {

        if (!config.index)
            config.index = 0;

//              console.log("calling");
        const tableHtml: string | null = await Sa5Embed.fetchHtmlAsync(src, "table", config.index);
//console.log("returned", tableHtml);

//console.log("after", wfEmbed); 

        // HACK: re-acquire element 
        wfEmbed = document.getElementById(tempId);

        // Load table HTML 
        wfEmbed.innerHTML = tableHtml; 

        // Optionally, add theme
        if (config.theme) {
            wfEmbed.setAttribute('wfu-theme', config.theme);
        }
            
        // Optionally, add admin link
        if (config.adminLink) {
            const adminLinkDiv = document.createElement('div');
            const adminLink = document.createElement('a');
            adminLink.setAttribute('href', config.src);
            adminLink.setAttribute('target', '_blank');
            adminLink.setAttribute('class', 'wfu-admin-link');
            adminLink.textContent = 'Source';
            adminLinkDiv.appendChild(adminLink);
            wfEmbed.after(adminLinkDiv);
        }

        return null;
    }

    init() {

        // do nothing 

    }

    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    
    

    static async fetchHtmlAsync(src: string, selector: string, index: number = 0): Promise<string | null> {

        try {
            const response = await fetch(src);
            const html = await response.text();

console.log("fetch", html);            

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
    
            const elems = doc.querySelectorAll(selector);
    
console.log("elems", elems);

            if (elems.length > index) {
                const e: HTMLElement = elems[index] as HTMLElement; 

console.log("e", e); 

                return e.outerHTML; 
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error fetching HTML:', error);
            return null;
        }
    }

}
  
// Register
Sa5Core.startup(Sa5Embed);


