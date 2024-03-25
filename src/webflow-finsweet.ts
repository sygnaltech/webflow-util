
/**
 * SA5
 * webflow-finsweet
 * 
 * Extensions and helper utils for Finsweet Attributes
 */

import { Sa5FinsweetLoad } from "./webflow-finsweet/fs-load";



export class Sa5Finsweet { 

    fsLoad: Sa5FinsweetLoad;

    constructor() {

        this.fsLoad = new Sa5FinsweetLoad();

    }

    public init(): void {

        // Init FS Load extensions
        this.fsLoad.init(); 

    }

}