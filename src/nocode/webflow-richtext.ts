
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

const init = () => { 

//    new Sa5Core().init();
let core: Sa5Core = Sa5Core.startup(); 

    // Initialize debugging
    let debug = new Sa5Debug("sa5-richtext");
    debug.debug ("Initializing");

    const gitHubGist = new GitHubGist();

//    const elements = document.querySelectorAll('a[wfu-demo-link]') as NodeListOf<HTMLLinkElement>; 

    /** 
     * Process nested lists
     */

    document.querySelectorAll('.w-richtext[wfu-lists]')
      .forEach((rtfElem: HTMLElement) => {

        rtfElem.querySelectorAll(':scope > ul, :scope > ol')
          .forEach((list: HTMLElement) => {

            new Sa5NestedList(list)
                .processNestedList();

        });
    
        // Remove the attribute
        // So that the skeleton CSS will reveal the underlying
        // processed content.
        rtfElem.removeAttribute('wfu-lists');

    });

    gitHubGist.init();

    // Iterate over the matched elements
    // elements.forEach((element) => { 

    //   // Do something with each element
    //   webflowInfo.updateHrefToWebflowPreviewLink(element);

    // });

}

// Auto-execute on DOM load 
document.addEventListener("DOMContentLoaded", init)