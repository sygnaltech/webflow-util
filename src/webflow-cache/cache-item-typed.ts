
/*
 * webflow-cache-item 
 * Cache Utilities 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Cache Utilities 
 * An advanced utility for retriving and caching values online, for maximum performance.
 */


import { Sa5CacheController, Sa5CacheStorageType } from '../webflow-cache';
import { Sa5Debug } from '../webflow-core/debug';


// Future:
// Crypto items?
// Typed items? 

export interface Sa5CacheItemConfig {

    name: string;

//    store: string;
    storageType: Sa5CacheStorageType,
    storageExpiry: Date,

    updateFnAsync: () => any; 
    
    debug: boolean;

}


var defaultConfig: Sa5CacheItemConfig = {

    name: undefined, 

//    store: "sessionStorage", // | localStorage 
    storageType: Sa5CacheStorageType.sessionStorage,
    storageExpiry: null,

    updateFnAsync: undefined,   

    debug: false, // Debugging mode

}


// String item
export class Sa5CacheItemTyped<T> {

    config: Sa5CacheItemConfig; // Optional config
    debug: Sa5Debug; 
 
    controller: Sa5CacheController;

    constructor(customConfig = {}) {

        this.debug = new Sa5Debug("sa5-cache-item");

        // Merge configs
//        this.config = Object.assign({}, defaultConfig, customConfig);
        this.config = { ...defaultConfig, ...customConfig };

        // Enable debugging, if specified
        this.debug.enabled = this.config.debug; 

    }

    private getCookie(name: string): string | null {
        const encodedName = encodeURIComponent(name);
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${encodedName}=`);
        if (parts.length === 2) {
            const cookieValue = parts.pop().split(';').shift();
            return cookieValue ? decodeURIComponent(cookieValue) : null;
        }
        return null;
    }
    
    private setCookie(name: string, val: string) {
        let cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
    
        if (this.config.storageExpiry) {
            cookieValue += `;expires=${this.config.storageExpiry.toUTCString()}`;
        }
    
        // Set the path for the cookie to be accessible across the entire site
        cookieValue += `;path=/`;
    
        document.cookie = cookieValue;
    }
    
    
// TODO: nullable cache values ? 

    async getAsync(): Promise<T> {  

        // Attempt to retrieve from cache
        let val: T = await this.getAsyncFromCache();

        // if (returnValue == null || returnValue == undefined) { 
        if(!val) {
            val = await this.getAsyncFromSource();
        }

        return val;
    }

    async setAsync(val: T) {
        this.setAsyncToCache(val); 
    }

    protected async setAsyncToCache(val: T) {

        switch(this.config.storageType) {

            case Sa5CacheStorageType.localStorage:
                localStorage.setItem(
                    this.controller.cacheKey(this.config.name),
                    JSON.stringify(val)
                    );
                break;
            case Sa5CacheStorageType.sessionStorage:
                sessionStorage.setItem(
                    this.controller.cacheKey(this.config.name),
                    JSON.stringify(val) 
                    );
                break;
            case Sa5CacheStorageType.cookies:
                this.setCookie(this.config.name, JSON.stringify(val)); 
                this.config.storageExpiry
                break;
            
        }

    }

    protected async getAsyncFromCache(): Promise<T> {

        let itemData: string = null;
        switch(this.config.storageType) {

            case Sa5CacheStorageType.localStorage:
                itemData = localStorage.getItem(
                    this.controller.cacheKey(this.config.name));
                break;
            case Sa5CacheStorageType.sessionStorage:
                itemData = sessionStorage.getItem(
                    this.controller.cacheKey(this.config.name));
                this.debug.debug("cached? sessionStorage.getItem", itemData); 
                break;
            case Sa5CacheStorageType.cookies:
                itemData = this.getCookie(this.config.name); 
                break;
            
        }

    //    // Try to parse the itemData as JSON
//        try {
            return JSON.parse(itemData) as T;
        // } catch {
        //     // If parsing fails, return the itemData as a string
        //     return itemData as any as T;
        // }

    }

    protected async getAsyncFromSource(): Promise<T> {

        // Not cached
        // go get this value 
        
            
        // Call valueHandler function to calculate 
        return await this.config.updateFnAsync().then(r => {

            this.setAsync(r);

            this.debug.debug("sessionStorage.setItem", this.config.name, r); 
            this.debug.debug("calculated", r); 
            return r;
        }); 

    }

}


/*

    async getAsync(itemName): Promise<string> {

        this.debug.group(`getAsync - "${itemName}"`);
        
        var itemHandler: Sa5CacheItem = this.config.val[itemName];
        this.debug.debug("valueHandler", itemHandler);
        
        if(!itemHandler) {
            console.error("Sa5", `No cache item handler '${itemName}'`); 
        }

        let returnValue = null;
        switch(itemHandler.config.storageType) {

            case Sa5CacheStorageType.localStorage:
                returnValue = localStorage.getItem(
                    this.cacheKey(itemName));
                break;
            case Sa5CacheStorageType.sessionStorage:
                returnValue = sessionStorage.getItem(
                    this.cacheKey(itemName));
                this.debug.debug("cached? sessionStorage.getItem", returnValue); 
                break;
            case Sa5CacheStorageType.cookies:
                break;
            
        }


        // var returnValue = sessionStorage.getItem(
        //     this.cacheKey(itemName));
//        this.debug.debug("cached? sessionStorage.getItem", returnValue); 
      
        const that = this;

        // Not cached
        // go get this value 
        if (returnValue == null || returnValue == undefined) { 
            
            // Call valueHandler function to calculate 
            returnValue = await itemHandler.config.updateFnAsync().then(r => {
                sessionStorage.setItem(
                    this.cacheKey(itemName), r);
                that.debug.debug("sessionStorage.setItem", itemName, r); 
                that.debug.debug("calculated", r); 
                return r;
                }); 

        }

        this.debug.debug("returning", returnValue); 

        this.debug.groupEnd();
        return returnValue; 
    }

*/

// window["WfuCacheItem"] = WfuCacheItem;




