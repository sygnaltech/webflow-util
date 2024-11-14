/*
 * webflow-cro
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Conversion Rate Optimization (CRO) Utilities
 */

import { Sa5Core } from './webflow-core'
import { Sa5Debug } from './webflow-core/debug'
import { Sa5Source } from './webflow-cro/source';

interface Sa5CroConfig {

    debug?: boolean | true;

}

interface UTMMapping {
    hostname: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign?: string; // Optional field
    utm_term?: string;      // Optional field
    utm_content?: string;   // Optional field
}

interface ConversionEvent {
    "@context": string;
    "@type": string;
    "@version": string;
    url: string;
    transactionId: string;
    transactionIdType?: "query" | "literal" | "none" | "auto";
    type: string;
    item: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  }

const referrerUTMMappings: UTMMapping[] = [

    { hostname: 'www.google.com', utm_source: 'google', utm_medium: 'organic' },
    { hostname: 'www.google.co.nz', utm_source: 'google', utm_medium: 'organic' },
    { hostname: '*.google.*', utm_source: 'google', utm_medium: 'organic' },

    { hostname: '*.youtube.com', utm_source: 'youtube', utm_medium: 'social' },
    { hostname: 'youtube.com', utm_source: 'youtube', utm_medium: 'social' },

    { hostname: 'www.bing.com', utm_source: 'bing', utm_medium: 'organic' },

    // { hostname: 'bookings.gettimely.com', utm_source: 'gettimely', utm_medium: 'referral' },
    // { hostname: 'leoload.com', utm_source: 'leoload', utm_medium: 'referral' },
    // { hostname: 'www.healthpoint.co.nz', utm_source: 'healthpoint', utm_medium: 'referral' },

    { hostname: 'www.facebook.com', utm_source: 'facebook', utm_medium: 'social' },
    { hostname: 'duckduckgo.com', utm_source: 'duckduckgo', utm_medium: 'organic' },
    { hostname: 'www.linkedin.com', utm_source: 'linkedin', utm_medium: 'social' },
    // Add more entries as needed
//    { hostname: '$direct', utm_source: 'direct', utm_medium: 'none' } // Special case for direct traffic
];


export class Sa5Cro {
    config: Sa5CroConfig;
    debug: Sa5Debug; 
    dataHandler: Sa5Source; 
 
    constructor(config: Sa5CroConfig, storageType: 'session' | 'local' = 'session') {
        this.config = config;

        this.debug = new Sa5Debug("sa5-cro");
        this.debug.enabled = this.config.debug; 
        this.dataHandler = new Sa5Source(storageType);

    }

    init() {

        this.debug.debug ("sa5-cro init.");
        this.captureSource(); 
        console.log("capturesource")


        // Look for any events s
        this.processConversionEventConfigs();

    }

    //#region Capture Source

    captureSource() {

        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        
        // Define the UTM parameters to look for
        const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

        // Check if any UTM parameters are present in the URL
        let hasUTM = false;
        utmParams.forEach(param => {
            if (urlParams.has(param)) {
                hasUTM = true;
            }
        });
        
        // If any UTM parameters are found, clear existing UTM data and save new values
        if (hasUTM) {
            this.debug.debug("UTM parameters detected, clearing existing data and capturing new UTM data.");
            this.dataHandler.clear();
            this.dataHandler.data.explicit = true;
            this.dataHandler.data.referer = document.referrer; 

            // Loop through each UTM parameter and save it if present in the URL
            utmParams.forEach(param => {
                const value = urlParams.get(param);
                if (value) {
                    this.dataHandler.setSourceParam(param, value);
                    this.debug.debug(`Captured ${param}: ${value}`);
                }
            });

        } 
        // If no UTM parameters are found, check for existing data and attempt to infer source if none exists
        else if (!this.dataHandler.exists()) {
            this.debug.debug("No UTM parameters detected and no existing UTM data. Attempting to infer source.");
            this.inferSourceFromReferrer();

            this.dataHandler.data.referer = document.referrer; 

        } else {
            this.debug.debug("No UTM parameters detected, but existing UTM data found in storage.");
        }
    }


    /**
     * Infers a source based on the referrer if no UTM parameters or existing data are present.
     */
    private inferSourceFromReferrer() {

        const referrer = document.referrer;
        this.applyUTMFromReferrer(referrer);

    }

    private applyUTMFromReferrer(referrer: string) {
        if (!referrer) {
            this.debug.debug("No referrer detected. Unable to apply UTM data.");
            return;
        }
    
        const url = new URL(referrer);
        const hostname = url.hostname;
    
        // Step 1: Attempt exact match
        const exactMatch = referrerUTMMappings.find(mapping => !mapping.hostname.includes('*') && mapping.hostname === hostname);
        if (exactMatch) {
            this.applyUTMMapping(exactMatch);
            return;
        }
    
        // Step 2: Attempt wildcard match if no exact match found
        const wildcardMatch = referrerUTMMappings.find(mapping => {
            if (mapping.hostname.includes('*')) {
                const regexPattern = new RegExp(`^${mapping.hostname.replace(/\*/g, '.*')}$`);
                return regexPattern.test(hostname);
            }
            return false;
        });
    
        if (wildcardMatch) {
            this.applyUTMMapping(wildcardMatch);
        } else {
            this.debug.debug("No matching UTM data found for referrer.");
        }
    }
    
    // Helper method to apply UTM parameters from a UTMMapping
    private applyUTMMapping(utmMapping: UTMMapping) {
        this.dataHandler.setSourceParam('utm_source', utmMapping.utm_source);
        this.dataHandler.setSourceParam('utm_medium', utmMapping.utm_medium);
        if (utmMapping.utm_campaign !== undefined) {
            this.dataHandler.setSourceParam('utm_campaign', utmMapping.utm_campaign);
        }
        if (utmMapping.utm_term !== undefined) {
            this.dataHandler.setSourceParam('utm_term', utmMapping.utm_term);
        }
        if (utmMapping.utm_content !== undefined) {
            this.dataHandler.setSourceParam('utm_content', utmMapping.utm_content);
        }

        this.debug.debug(`Applied UTM data from referrer: ${JSON.stringify(utmMapping)}`);
    }

    //#endregion 

    /**
     * FORMS HANDLERS 
     */

    processConversionEventConfigs() {

        // Select all script elements of type "application/sa5+json"
        const configElements = document.querySelectorAll<HTMLScriptElement>('script[type="application/sa5+json"]');
        configElements.forEach((configElement) => {
          try {
            // Parse the script content to a JavaScript object
            const configContent = JSON.parse(configElement.textContent || '{}') as ConversionEvent;
      
// this.debug.debug("Found script", scriptContent)

            // Check if "@type" is "ConversionEvent"
            if (configContent["@type"] === "ConversionEvent") {
              const parentForm = configElement.closest('form');

              if (parentForm) {
                // Scenario 1: Script is inside a form, create hidden inputs
                this.processFormConversionEventConfig(parentForm, configContent);
              } else {
                // Scenario 2: Script is not inside a form, trigger GET request on page load
                this.triggerConversionEvent(configContent);
              }
            }
          } catch (error) {
            console.error("Error processing config:", configElement, error);
          }
        });
    }
    
    /**
     * Creates hidden inputs for the tracking data
     * this will be submitted with the form 
     * @param formElement 
     * @param scriptContent 
     */

    processFormConversionEventConfig(formElement: HTMLFormElement, scriptContent: ConversionEvent) {

      // Helper function to create a hidden input with a prefixed name
      const createHiddenInput = (name: string, value: string) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = `xtr_${name}`;  // Using the more general 'conv_' prefix
        input.value = value;
        return input;
      };
    
      // Create hidden input elements for type, item, transactionId, and UTM parameters
      const hiddenInputs = [];

      // Add mandatory fields to hidden inputs with prefix
      if (scriptContent.type) {
        hiddenInputs.push(createHiddenInput("type", scriptContent.type));
      }
      if (scriptContent.item) {
        hiddenInputs.push(createHiddenInput("item", scriptContent.item));
      }
      if (scriptContent.url) {
        hiddenInputs.push(createHiddenInput("url", scriptContent.url));
      }

      // Get the transaction ID using the reusable getTransactionId method
      const transactionId = this.getTransactionId(scriptContent);
      if (transactionId !== undefined) {
        hiddenInputs.push(createHiddenInput("transactionId", transactionId));

        // Check if formElement has a redirect attribute
        const redirectPath = formElement.getAttribute("redirect");
        if (redirectPath) {
          // Convert relative redirect path to a full URL
          const redirectUrl = new URL(redirectPath, window.location.origin);
          
          // Add transactionId as a query string parameter
          redirectUrl.searchParams.append("transactionId", transactionId);
          
          // Update the form's redirect attribute with the new URL
          formElement.setAttribute("redirect", redirectUrl.toString());
        }

      }

      if(this.dataHandler.exists) {

        if (this.dataHandler.data.referrer) {
          hiddenInputs.push(createHiddenInput("referrer", this.dataHandler.data.referrer));
        }
      
        // Add UTM parameters if they exist, using the prefix to avoid conflicts
        const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
        utmFields.forEach((utm) => {
          if (this.dataHandler.data[utm]) {
            hiddenInputs.push(createHiddenInput(utm, this.dataHandler.data[utm] as string));
          }
        });  

      }
    
      // Append hidden inputs to the form
      hiddenInputs.forEach((input) => {
        formElement.appendChild(input);
      });
    }
      
    // A reusable function to determine the transaction ID
    getTransactionId(scriptContent: ConversionEvent): string | undefined {
        const transactionIdType = scriptContent.transactionIdType || "literal"; // Default to "literal" if not specified

        switch (transactionIdType) {
          case "query":
            // Retrieve the transaction ID from the URL query string if present
            const params = new URLSearchParams(window.location.search);
            const queryTransactionId = params.get(scriptContent.transactionId);
            if (queryTransactionId) {
              return queryTransactionId;
            }
            console.warn("Transaction ID not found in query string");
            return undefined;

          case "literal":
            // Use the provided literal transaction ID
            return scriptContent.transactionId;

          case "none":
            // Return undefined for no transaction ID
            return undefined;

          case "auto": 

            return crypto.randomUUID(); // Generate unique ID

            // Return an empty string if transaction ID type is blank
//            return "";

          default:
            console.warn(`Unknown transaction ID type: ${transactionIdType}`);
            return undefined;
      }
    }    
    
    triggerConversionEvent(scriptContent: ConversionEvent) {
        // Create the base URL
        let url = new URL(scriptContent.url);
      
        // Add query string parameters for type, item, transactionId, and UTM parameters
        url.searchParams.append("type", scriptContent.type);
        url.searchParams.append("item", scriptContent.item);

        // Use getTransactionId to get the transaction ID if applicable
        const transactionId = this.getTransactionId(scriptContent);
        if (transactionId !== undefined) {
          url.searchParams.append("transactionId", transactionId);
        }
      
        // Add UTM parameters if they exist
        const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
        utmFields.forEach((utm) => {
          if (scriptContent[utm as keyof ConversionEvent]) {
            url.searchParams.append(utm, scriptContent[utm as keyof ConversionEvent] as string);
          }
        });
      
        // Make a GET request to the URL
        fetch(url.toString(), {
          method: 'GET',
          mode: 'no-cors' // Using no-cors to avoid cross-origin issues
        }).then(() => {
          this.debug.debug(`Conversion event triggered: ${url.toString()}`);
        }).catch((error) => {
          console.error("Error triggering conversion event:", error);
        });
    }      

}
  
// Register
Sa5Core.startup(Sa5Cro);


