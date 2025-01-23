
/*
 * webflow-kiosk
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Kiosk Utilities
 * 
 */
        




import { Sa5Core } from './webflow-core'
import { Sa5Debug } from './webflow-core/debug'
import { Sa5Scripts } from './webflow-core/scripts'




interface KioskConfig {
  // "@context": string;
  // "@type": string;
  // "@version": string;
  homePath: string;
  userAgent: string;
  inactivityTimer?: number; // Optional property
}



const defaultConfig: KioskConfig = {
  homePath: '/kiosk',
  userAgent: 'KioskApp/1.0',
  inactivityTimer: 180, // Default to 5 minutes
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





export class Sa5Kiosk {

    kioskConfig: KioskConfig | null; 
    private inactivityTimerId: ReturnType<typeof setTimeout> | null = null;

    loadConfig() {

        // Query all <script> elements with the specified type
        const scripts: NodeListOf<HTMLScriptElement> = document.querySelectorAll('script[type="application/sa5+json"]');

        // Find the one that contains "@type": "KioskConfig"
        const kioskConfigScript: HTMLScriptElement | undefined = Array.from(scripts).find((script) =>
          script.textContent?.includes('"@type": "KioskConfig"')
        );

        // Handle the found script element
        if (kioskConfigScript) {
          console.log('Found the specific KioskConfig script:', kioskConfigScript);

          // Parse its JSON content
          try {
            const configData: unknown = JSON.parse(kioskConfigScript.textContent || '');
            console.log('Parsed configuration:', configData);

            // Optionally: Narrow type if you know the shape of the config object
            // Example: Check if configData is of type { homePath: string; userAgent: string }
            if (isKioskConfig(configData)) {
              console.log('Validated KioskConfig:', configData);

              // Merge the default configuration with the parsed configuration
              const mergedConfig: KioskConfig = { ...defaultConfig, ...configData };
              console.log('Merged configuration:', mergedConfig);

              this.kioskConfig = mergedConfig; 
//              return mergedConfig; // Return the merged configuration

            } else {
              console.error('Invalid KioskConfig format:', configData);
            }
          } catch (error) {
            console.error('Failed to parse JSON content:', error);
          }
        } else {
          console.error('KioskConfig script element not found.');
        }

        // Type Guard: Validate the structure of the KioskConfig object
        function isKioskConfig(obj: unknown): obj is { homePath: string; userAgent: string } {
          return (
            typeof obj === 'object' &&
            obj !== null &&
            'homePath' in obj &&
            typeof (obj as any).homePath === 'string' &&
            'userAgent' in obj &&
            typeof (obj as any).userAgent === 'string'
          );
        }


        // // Query all <script> elements with the specified type
        // const scripts = document.querySelectorAll('script[type="application/sa5+json"]');

        // // Find the one that contains "@type": "KioskConfig"
        // const kioskConfigScript = Array.from(scripts).find(script =>
        //   script.textContent.includes('"@type": "KioskConfig"')
        // );

        // // Handle the found script element
        // if (kioskConfigScript) {
        //   console.log('Found the specific KioskConfig script:', kioskConfigScript);

        //   // Parse its JSON content
        //   const configData = JSON.parse(kioskConfigScript.textContent);
        //   console.log('Parsed configuration:', configData);
        // } else {
        //   console.error('KioskConfig script element not found.');
        // }

        this.kioskConfig = defaultConfig; 
//        return null;
    }


    init() {

        let core: Sa5Core = Sa5Core.startup();

        this.loadConfig(); 
        if (this.kioskConfig.inactivityTimer)
          this.initializeInactivityTimer(); 

    }

    /**
     * Initializes the inactivity timer for the kiosk.
     */
    initializeInactivityTimer(): void {
      // Validate if we are in kiosk mode based on the user agent
      if (!this.isKioskMode()) {
        console.log("Not in kiosk mode.");
        return;
      }

      // Avoid setting the timer if we're already on the home path
      if (window.location.pathname === this.kioskConfig.homePath) {
        console.log(`Already on the home path: ${this.kioskConfig.homePath}`);
        return;
      }

      console.log("Initializing kiosk inactivity timer.");

      // Set up event listeners to reset the inactivity timer on user interaction
      this.setupEventListeners();

      // Start the inactivity timer
      this.resetInactivityTimer();
    }

    /**
     * Determines if the app is in kiosk mode based on the user agent.
     */
    private isKioskMode(): boolean {
      return new RegExp("kiosk", "i").test(this.kioskConfig.userAgent);
    }

    /**
     * Resets the inactivity timer.
     */
    private resetInactivityTimer(): void {
      const timeoutDuration = (this.kioskConfig.inactivityTimer || 180, 10) * 1000; // Default to 180 seconds (3 minutes)

      // Clear the existing timer if it exists
      if (this.inactivityTimerId !== null) {
        clearTimeout(this.inactivityTimerId);
      }

      // Set a new timer
      this.inactivityTimerId = setTimeout(() => {
        console.log(`Inactivity timer triggered. Redirecting to ${this.kioskConfig.homePath}.`);
        window.location.href = this.kioskConfig.homePath; // Redirect to the home path
      }, timeoutDuration);
    }

    /**
     * Sets up event listeners to reset the inactivity timer on user interaction.
     */
    private setupEventListeners(): void {
      const events: string[] = [
        "mousemove",
        "mousedown",
        "touchstart",
        "touchmove",
        "keydown",
        "scroll",
      ];

      events.forEach((event) => {
        window.addEventListener(event, () => this.resetInactivityTimer(), { passive: true });
      });
    }

}



Sa5Core.startup(Sa5Kiosk);
// Register
//window["sa5"] = window["sa5"] || []; // {};
//window["sa5"]["Sa5Hotkeys"] = Sa5Hotkeys;
