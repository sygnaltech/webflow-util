
/*
 * webflow-richtext
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { GitHubGist } from '../webflow-richtext/github-gist';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5NestedList } from '../webflow-richtext/nested-list'; 
import { Sa5Editor } from '../webflow-core/webflow-editor'; 
import { Sa5Attribute } from '../globals';
import { VERSION } from '../version';

const init = () => { 

    //    new Sa5Core().init(); 
    let core: Sa5Core = Sa5Core.startup(); 

    // Initialize debugging
    let debug = new Sa5Debug("sa5-richtext");
    debug.debug (`Initializing v${VERSION}`);


    const gitHubGist = new GitHubGist();

//    const elements = document.querySelectorAll('a[wfu-demo-link]') as NodeListOf<HTMLLinkElement>; 

    /** 
     * Process nested lists
     */

    document.querySelectorAll(
        `.w-richtext[${Sa5Attribute.ATTR_RICHTEXT_LISTS}]` // '.w-richtext[wfu-lists]')
      ).forEach((rtfElem: HTMLElement) => {

        rtfElem.querySelectorAll(':scope > ul, :scope > ol')
          .forEach((list: HTMLElement) => {

            new Sa5NestedList(list)
                .processNestedList();

        });
    
        // Remove the attribute
        // So that the skeleton CSS will reveal the underlying
        // processed content.
        rtfElem.removeAttribute(
            Sa5Attribute.ATTR_RICHTEXT_LISTS // 'wfu-lists'
            );

    }); 

    /**
     * Github gists 
     */

    gitHubGist.init();

    // Iterate over the matched elements
    // elements.forEach((element) => { 

    //   // Do something with each element
    //   webflowInfo.updateHrefToWebflowPreviewLink(element);

    // });

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener("DOMContentLoaded", init);
}