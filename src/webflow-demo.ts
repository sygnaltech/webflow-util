
/*
 * webflow-demo
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Webflow Informational Utilities
 */


import { Sa5Core } from './webflow-core'

export class WebflowInfo {
    
    siteId: string | null; // Webflow SiteId
    pageId: string | null; // Webflow PageId

    // Initialize
    constructor() {

        this.siteId = document.documentElement.getAttribute("data-wf-site");
        this.pageId = document.documentElement.getAttribute("data-wf-page");

    }

    // Returns a Webflow preview link 
    // to the current page
    getWebflowPreviewLink (url: string): string {

        const parsedUrl = new URL(url);

        // Add/replace pageId in Url 
        parsedUrl.searchParams.set("pageId", this.pageId ?? "");

        return parsedUrl.href;
    }

    updateHrefToWebflowPreviewLink (linkElem: HTMLLinkElement): void {

        var parsedUrl = linkElem.href; 

        // Modify href to include pageId
        var modifiedUrl = this.getWebflowPreviewLink(parsedUrl ?? "");

        // Set updated href
        linkElem.href = modifiedUrl; 

    }

}




// Register
Sa5Core.startup(WebflowInfo);

