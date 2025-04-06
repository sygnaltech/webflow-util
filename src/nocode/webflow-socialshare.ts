
/*
 * Sa5
 * webflow-socialshare
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Social Sharing Utilities
 * 
 */

import { Sa5Core } from "../webflow-core";
import { Sa5Debug } from '../webflow-core/debug';
import { VERSION } from "../version";
import { Sa5UtmLink } from "../utils/utm-link";


//Sa5Core.startup(LdJsonArticle);
//Sa5Core.startup(LdJsonCourse);



const init = () => { 

  //    new Sa5Core().init();
  let core: Sa5Core = Sa5Core.startup(); 
  console.log("running")
  // Initialize debugging
  let debug = new Sa5Debug("sa5-socialshare");
  debug.debug (`Initializing v${VERSION}`);

      // Look for all links with a [code] attribute
      // and apply it to the link's querystring as ?code=VALUE. 

      // Get all links with the 'code' attribute
      const social: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[wfu-socialshare]');

      social.forEach((link: HTMLAnchorElement) => {
          // Get the value of the 'code' attribute
          const platform: string = link.getAttribute('wfu-socialshare') || '';
          switch (platform) {

              case "email":

console.log("installe demail")

                  const subject: string = link.getAttribute('wfu-socialshare-subject') || '';
                  let message: string = link.getAttribute('wfu-socialshare-message') || '';
                  
                  // Get the current URL of the page
                  let currentURL: string = window.location.href;

                  // Apply UTM params if they're specified 
                  currentURL = Sa5UtmLink.applyUTMParametersFromAttrs(currentURL, link);

                  // Append line breaks and the current URL to the message
                  message = message.replace(/\\n/g, '\n');
                  message += `\n\n${currentURL}`;

                  // Encode the subject and message for the mailto link
                  const encodedSubject = encodeURIComponent(subject);
                  const encodedMessage = encodeURIComponent(message);

                  // Create the mailto link
                  const mailtoLink = `mailto:?subject=${encodedSubject}&body=${encodedMessage}`;

                  // Log or use the mailto link
                  console.log(mailtoLink);

                  // Example usage: setting the href attribute of an anchor element
                  link.setAttribute('href', mailtoLink);
                  
                  break;
              default:
                  console.error("Unsupported SA5 social share platform: ", platform); 
                  break;

          }

      });

}

// Auto-execute on DOM load
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}


