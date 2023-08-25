import { Sa5CacheItemTyped } from "./cache-item-typed";





export class Sa5CacheItem extends Sa5CacheItemTyped<string> {

    constructor(customConfig = {}) {
        super(customConfig)
    }

    async getAsync(): Promise<string> { 

        return await super.getAsync() as string;
    }

    async setAsync(value: string) {
        await super.setAsync(value); 
    }

}