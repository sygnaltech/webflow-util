
/*
 * google-docs
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Webflow Informational Utilities
 */


import { Sa5Core } from '../webflow-core'

// Represents a Google Doc
export class Sa5GoogleDocs {
    
    // siteId: string | null; // Webflow SiteId
    // pageId: string | null; // Webflow PageId

    // Initialize
    constructor() {

        // this.siteId = document.documentElement.getAttribute("data-wf-site");
        // this.pageId = document.documentElement.getAttribute("data-wf-page");

    }

    // Returns a Webflow preview link 
    // to the current page
    // getWebflowPreviewLink (url: string): string {

    //     const parsedUrl = new URL(url);

    //     // Add/replace pageId in Url 
    //     parsedUrl.searchParams.set("pageId", this.pageId ?? "");

    //     return parsedUrl.href;
    // }

    // updateHrefToWebflowPreviewLink (linkElem: HTMLLinkElement): void {

    //     var parsedUrl = linkElem.href; 

    //     // Modify href to include pageId
    //     var modifiedUrl = this.getWebflowPreviewLink(parsedUrl ?? "");

    //     // Set updated href
    //     linkElem.href = modifiedUrl; 

    // }

    static getId(url: string): string {
  
        // e.g. https://docs.google.com/document/d/1uJOCUqclmxTQ607-5WGmo6DVuwCmpEbyygknt7oA88c/edit
        var prefix = "https://docs.google.com/document/d/";
        if (url.startsWith(prefix)) {
            console.log(url);
            url = url.substring(prefix.length);
            console.log(url);
            return url.split("/")[0];
        }
    
        console.error(`Unknown google docs URL format - ${url}`);
    }

}




// Register
Sa5Core.startup(Sa5GoogleDocs);
// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5Demo"] = WebflowInfo;

