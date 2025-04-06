
/*
 * webflow-gallery
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Kiosk Utilities
 * 
 */
        




import { Sa5Core } from './webflow-core'
import { Sa5Debug } from './webflow-core/debug'
import { Sa5Scripts } from './webflow-core/scripts'
import { Sa5GalleryEngineSimpleCollage } from './webflow-gallery/engine/simple-collage';




interface GalleryConfig {
  // "@context": string;
  // "@type": string;
  // "@version": string;
  // homePath: string;
  // userAgent: string;
  // inactivityTimer?: number; // Optional property
}



const defaultConfig: GalleryConfig = {
  // homePath: '/kiosk',
  // userAgent: 'KioskApp/1.0',
  // inactivityTimer: 180, // 3 minutes 
};

// <script type="application/sa5+json">
// {
//   "@context": "https://attr.sygnal.com",
//   "@type": "KioskConfig",
//   "@version": "0.1",
//   "homePath": "/kiosk", 
//   "userAgent": "KioskApp/1.0", 
//   "inactivityTimer": "180"  
// }
// </script>





export class Sa5Gallery {

    galleryConfig: GalleryConfig | null; 
    elem: HTMLElement; 
    debug: Sa5Debug;

    constructor(elem: HTMLElement) {

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-gallery");
//        this.debug.debug ("Initializing");

        this.elem = elem;

    }

    loadConfig() {

    }


    init() {

        let core: Sa5Core = Sa5Core.startup();

        console.log("Initializing gallery for:", this.elem);

        // Get the layout engine from the `sa5-gallery-layout` attribute
        const layoutEngine = this.elem.getAttribute('wfu-gallery-layout');
        console.error(`Layout engine: ${layoutEngine}`);
        if (layoutEngine) {
          switch (layoutEngine) {
            case "simple-collage": {
              const engineInstance = new Sa5GalleryEngineSimpleCollage(this);
              engineInstance.layout();
              break;
            }
            default: {
              console.error(`Unsupported layout engine: ${layoutEngine}`);
              break;
            }
          }
        }
    
        // Remove the 'wfu-preload' attribute after initialization
        this.elem.removeAttribute('wfu-preload');

    }

}



export class Sa5GalleryManager {

  galleryConfig: GalleryConfig | null; 

  debug: Sa5Debug;

  constructor() {

      // Initialize debugging
      this.debug = new Sa5Debug("sa5-gallery-manager");
      this.debug.debug ("Initializing");

  }

  init() {

      let core: Sa5Core = Sa5Core.startup();

      // wfu-gallery    
      // wfu-gallery-layout

      // Query all elements with the custom attribute `wfu-gallery`
      const galleryElements = document.querySelectorAll<HTMLElement>('[wfu-gallery]');

      galleryElements.forEach((element) => {
        // Instantiate the Sa5Gallery class and call its init method
        const gallery = new Sa5Gallery(element);
        gallery.init(); // Call the init method (no function syntax needed)
      });

  }


}



Sa5Core.startup(Sa5Gallery);


