
/*
 * webflow-fixup
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * NO-CODE version, keys off of [wfu] attributes.
 */

import { VERSION } from '../version';
import { Sa5Core } from '../webflow-core'; 
import { Sa5Debug } from '../webflow-core/debug';

const init = () => { 


  //  new Sa5Core().init();
  let core: Sa5Core = Sa5Core.startup();
  
    // Initialize debugging
    let debug = new Sa5Debug("sa5-fixup");
    debug.debug (`Initializing v${VERSION}`);


    // Editor fixups

// Editor - Unsupported Browser
// CSS override? 

/*
<div class="w-editor-bem-EditorFallback w-editor-bem-EditorFallback-mobile" style="opacity: 1; transition: opacity 200ms ease 0s;"><div class="w-editor-bem-EditorFallback_Card" style="transform: scale(1); transition: transform 300ms ease 0s;"><div class="w-editor-bem-EditorFallback_Head">Unsupported Browser</div>
    <div class="w-editor-bem-EditorFallback_Close">
      <div class="w-editor-bem-Icon  w-editor-icon-fallback w-editor-close">
    </div></div><div class="w-editor-bem-EditorFallback_Content">
        <div class="w-editor-bem-EditorFallback_Message">
          It looks like you‘re trying to open the Editor on a mobile device.
        </div>
        <div class="w-editor-bem-EditorFallback_Message">
          For now, the Editor is only available on desktop.
        </div>
      </div><div class="w-editor-bem-EditorFallback_Footer">
      <div class="w-editor-bem-EditorFallback_GoBack">Go back to your site</div>
    </div></div></div>
*/


}
  
// Auto-execute on DOM load
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}