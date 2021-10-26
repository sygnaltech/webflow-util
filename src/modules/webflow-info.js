
/*
 * webflow-info
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
export var createWebflowPreviewLink = function (previewId) {

    var webflowInfo = new WebflowInfo();

    return `https://preview.webflow.com/preview/sygnal-webflow-utils?utm_medium=preview_link&utm_source=designer&utm_content=sygnal-webflow-utils&preview=${previewId}&pageId=${webflowInfo.pageId}&workflow=preview`;
}

