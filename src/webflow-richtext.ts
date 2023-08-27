
/*
 * webflow-richtext
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Blog Utilities
 */

import { Sa5Core } from './webflow-core'

import { Sa5Debug } from './webflow-core/debug';

import { GitHubGist } from './webflow-richtext/github-gist'

/*
 * GitHub Gist.
 */

export class Sa5RichText {
    
    urlTemplate;
    debug: Sa5Debug; 
 
    // Initialize
    constructor() {

        // Enable debugging, if specified
        this.debug = new Sa5Debug("sa5-richtext");
//        this.debug.enabled = this.config.debug; 

    }

    init() {

this.debug.debug("Initializing SA5 RichText")

        var gitHubGist: GitHubGist = new GitHubGist();
        gitHubGist.initCopyGist();

    }
        
//     initCopyGist() {

//         document.querySelectorAll('[wfu-gist-copy]').forEach((el: HTMLElement) => {
//             el.addEventListener('click', (e: Event) => {
                
// //                console.log("clicked"); 
                
//                 let a: string | null = el.getAttribute('wfu-gist-copy');
// //                console.log(a); 
                
//                 let gist: Element | null = document.querySelector(`[wfu-gist="${a}"]`);
                
//                 if (gist !== null) {
//                     this.copyToClipboard(this.getGistCode(gist));
//                 }
                
//             });
//         });

//     }

//     copyToClipboard(text: string) {

//         navigator.clipboard.writeText(text).then(() => {
// //            console.log('Copying to clipboard was successful!');
//         }, (err: any) => {
//             console.error('Could not copy text: ', err);
//         });

//     }

//     getGistCode(el: Element | null): string {
    
//         if(!el) return;
        
//         // Extract the GIST content
//         let code = el.querySelector(".gist-file")?.textContent || '';
        
//         // Remove whitespace-only lines
//         let cleanString = code.replace(/\n\s*\n/g, '\n');
        
// //        console.log(cleanString);
  
//         // Trim the last four lines 
//         let lines = cleanString.split('\n');
//         lines = lines.slice(0, -4);  
//         let finalString = lines.join('\n');
    
// //        console.log(finalString);
        
//         // Trim 10 pre-whitespaces
//         let finalLines = finalString.split('\n').map((line: string) => {
//             return line.startsWith('          ') ? line.slice(10) : line;
//         });
//         let trimmedString = finalLines.join('\n');
    
// //        console.log(trimmedString);

//         return trimmedString;
//     }
    
}

//window["GitHubGist"] = GitHubGist;




// Register
Sa5Core.startup(Sa5RichText);


// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5Blog"] = Sa5Blog;