

/*
 * webflow-cro
 * Source 
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Core } from '../webflow-core';
import { Sa5Debug } from '../webflow-core/debug';

interface UTMData {

    transactionId?: string;
    referrerCode?: string;

    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    [key: string]: any; // Allows adding other dynamic properties

    explicit?: boolean; 
} 

type StorageType = 'session' | 'local';

export class Sa5Source {

    private storageKey = 'sa5_utm_data';
    public data: UTMData;
    private storage: Storage; 

    constructor(storageType: StorageType = 'session') {
        // Set the storage type based on the parameter
        this.storage = storageType === 'local' ? localStorage : sessionStorage;
        this.data = this.load() || {};
    }

    /**
     * Initialize the class.
     */
    init() {
        // Initialization logic if needed
    }

    /**
     * Set or update a UTM parameter value.
     * @param key The UTM parameter name.
     * @param value The UTM parameter value.
     */
    setUTMParam(key: string, value: string): void {
        this.data[key] = value;
        this.save();
    }

    /**
     * Get a UTM parameter value.
     * @param key The UTM parameter name.
     * @returns The value of the UTM parameter, or undefined if not set.
     */
    getUTMParam(key: string): string | undefined {
        return this.data[key];
    }
    

    /**
     * Save the UTM data to the selected storage (sessionStorage or localStorage).
     */
    save(): void {
        this.storage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    /**
     * Load the UTM data from the selected storage.
     * @returns The UTM data object or an empty object if none exists.
     */
    load(): UTMData {
        const storedData = this.storage.getItem(this.storageKey);
        return storedData ? JSON.parse(storedData) : {};
    }

    /**
     * Check if the UTM data exists in storage.
     * @returns True if the UTM data exists, false otherwise.
     */
    exists(): boolean {
        return this.storage.getItem(this.storageKey) !== null;
    }

    /**
     * Clear all UTM data from the selected storage.
     */
    clear(): void {
        this.storage.removeItem(this.storageKey);
        this.data = {};
    }

}


