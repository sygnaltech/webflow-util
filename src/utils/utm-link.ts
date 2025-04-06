/*
 * SA5 
 * UTM Link 
 */ 

export class Sa5UtmLink {

    elem: HTMLAnchorElement;

    constructor(link: HTMLAnchorElement) {
        this.elem = link;
    }
  
    init() {

        this.elem.href = Sa5UtmLink.applyUTMParametersFromAttrs(this.elem.href, this.elem);
                    
    }

    static applyUTMParametersFromAttrs(urlString: string, utmElem: HTMLElement): string {
        const url = new URL(urlString);
        const params = url.searchParams;
    
        // Custom attribute names
        const utmAttributes = {
          'wfu-link-utm-source': 'utm_source',
          'wfu-link-utm-medium': 'utm_medium',
          'wfu-link-utm-campaign': 'utm_campaign',
          'wfu-link-utm-content': 'utm_content'
        };
    
        // Update UTM parameters if custom attributes exist
        for (const [customAttr, utmParam] of Object.entries(utmAttributes)) {
          const attrValue = utmElem.getAttribute(customAttr);
          if (attrValue) {
            params.set(utmParam, encodeURIComponent(attrValue));
          }
        }
    
        // Update the anchor element's href with the new query string
        return url.toString();
      }
}
