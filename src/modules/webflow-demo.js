
/*
 * webflow-demo
 * DEPRECATED and replaced with TypeScript verion 
 *
 * Sygnal Technology Group
 * http://sygnal.com
 *
 * Webflow Informational Utilities
 */

export class WebflowInfo {

    siteId; // Webflow SiteId
    pageId; // Webflow PageId

    constructor() {
        this.siteId = $("html").attr("data-wf-site");
        this.pageId = $("html").attr("data-wf-page");
    }
}

// Returns a Webflow preview link 
// to the current page
export var getWebflowPreviewLink = function (url) {

    var webflowInfo = new WebflowInfo();

    const parsedUrl = new URL(url);

    // Add/replace pageId in Url 
    parsedUrl.searchParams.set("pageId", webflowInfo.pageId);

    return parsedUrl.href;

}

export var updateHrefToWebflowPreviewLink = function (elemA) {

    var parsedUrl = $(elemA).attr("href");

    // Modify href to include pageId
    var modifiedUrl = getWebflowPreviewLink(parsedUrl);

    // Set updated href
    $(elemA).attr("href", modifiedUrl);

}

