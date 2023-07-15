
/*
 * webflow-blog
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { GitHubGist } from '../webflow-blog';
import { WfuCore, WfuDebug } from '../webflow-core.js';

const init = () => { 

    new WfuCore().init();

    // Initialize debugging
    let debug = new WfuDebug("wfu-blog");
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
  
document.addEventListener("DOMContentLoaded", init)