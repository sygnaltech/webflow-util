
/*
 * webflow-blog
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { GitHubGist } from '../webflow-blog/github-gist';
import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

const init = () => { 

    new Sa5Core().init();

    // Initialize debugging
    let debug = new Sa5Debug("sa5-blog");
    debug.debug ("Initializing");

    const gitHubGist = new GitHubGist();

//    const elements = document.querySelectorAll('a[wfu-demo-link]') as NodeListOf<HTMLLinkElement>; 

    gitHubGist.init();

    // Iterate over the matched elements
    // elements.forEach((element) => { 

    //   // Do something with each element
    //   webflowInfo.updateHrefToWebflowPreviewLink(element);

    // });

}

// Auto-execute on DOM load 
document.addEventListener("DOMContentLoaded", init)