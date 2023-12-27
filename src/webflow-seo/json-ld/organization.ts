import { LdJsonImageObject } from "./image-object";

export class LdJsonOrganization {

    name: string;
    logo: LdJsonImageObject;
    
    constructor(name = undefined) { 
        
        this["@type"] = "Organization"; 
        this.name = name; 
    }
  
  }
  