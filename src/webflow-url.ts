
/*
 * SA5 Url
 * webflow-url 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Url Utilities
 */


import { Sa5Attribute } from './globals';
import { Sa5Core } from './webflow-core'
import { Sa5Debug } from './webflow-core/debug';
import { WfuQuery } from './webflow-url/query';
import { QueryPassthroughConfig, Sa5QueryPassthrough } from './webflow-url/queryPassthrough';
import { WfuRelativeLinkFixup } from './webflow-url/relativeLinkFixup';
import { TargetExternalConfig, WfuTargetLinks } from './webflow-url/targetLinks';

// import {} from './webflow-url/query'
// import {} from './webflow-url/relativeLinkFixup'
// import {} from './webflow-url/relativeLinkFixup'



type GetConfigCallback = (Sa5UrlConfig) 
    => Sa5UrlConfig;


interface Sa5UrlConfig {

    passthrough: boolean; // Passthrough querystring params to the next page
    passthroughConfig: QueryPassthroughConfig; 

    fixupRelative: boolean; // Fixup relative links from the CMS

    targetExternal: boolean; // Target external links to _blank
    targetExternalConfig: TargetExternalConfig; 

}

// Register
//Sa5Core.startup(WfuQuery);
// window["sa5"] = window["sa5"] || []; // {};
// window["sa5"]["Sa5Format"] = WebflowFormat;

export class Sa5Url {

    debug: Sa5Debug;

    config: Sa5UrlConfig; // Optional config

    constructor(config: Partial<Sa5UrlConfig> = {}) {

        this.config = {
            passthrough: config.passthrough ?? false,
            passthroughConfig: config.passthroughConfig ?? {
                ignorePatterns: [
                    /_page$/
                ], 
                overwriteExisting: config.passthroughConfig?.overwriteExisting ?? false, 
                internalOnly: config.passthroughConfig?.internalOnly ?? true
            },
            fixupRelative: config.fixupRelative ?? true,
            targetExternal: config.targetExternal ?? true,
            targetExternalConfig: config.targetExternalConfig ?? {
                allLinks: false,
            },
        }

        // Initialize debugging
        this.debug = new Sa5Debug("sa5-url");
        this.debug.debug ("Initializing");

    }

    // Handle config modifications 
    getConfig() {

        let core: Sa5Core = Sa5Core.startup();

        // TODO: move label to globals
        let configHandler: GetConfigCallback = core.getHandler("urlConfig") as GetConfigCallback;

        if(!configHandler) 
            return; // do nothing
    
        // this.config.getConfigCallback 
        //     = core.getHandler('getMembershipRoutingConfig') as GetConfigCallback; 

//        console.log("pre config", this.config)

        if(configHandler) {
            this.config = configHandler(
                this.config
            ); 
        }        

//        console.log("post config", this.config)

    }

    init() {

        this.getConfig();

        /**
         * Process querystring params into tagged elements
         * NOTE: A links are currently ignored
         */

        // TODO: configure A link behavior 
//        new WfuQuery().init();

// console.log("init url", this.config)

        if(this.config.passthrough) {

            new Sa5QueryPassthrough(
                this.config.passthroughConfig
            ).init(); 

        }

        /**
         * Fixup relative links from the CMS
         */

        if(this.config.fixupRelative) {

            let elements = Array.from(
                document.querySelectorAll(
                    Sa5Attribute.getBracketed(Sa5Attribute.ATTR_URL_RELATIVE_LINKS) // "[wfu-relative-links]"
                    ));

            elements.forEach((element: HTMLAnchorElement) => {
                new WfuRelativeLinkFixup(element).init();
            });
        }

        /**
         * Target external links to _blank
         */

        if(this.config.targetExternal) {

            // BUGGED: designer change on how links work ?? 
            var elements;
            if(this.config.targetExternalConfig.allLinks)
                elements = Array.from(
                    document.querySelectorAll('a')
                );
            else
                elements = Array.from(
                    document.querySelectorAll(
                        Sa5Attribute.getBracketed(Sa5Attribute.ATTR_URL_EXTERNAL_LINKS) // "[wfu-external-links]"
                    ));

            elements.forEach((element: HTMLAnchorElement) => {
                new WfuTargetLinks(element).init();
            });

            //    new WfuTargetLinks().init();

        }


    }


}

Sa5Core.startup(Sa5Url);

