

import { LdJsonEntryPoint } from "./entry-point";

export class LdJsonSearchAction {

    queryInput;
    target;
  
    constructor(queryInput = undefined) { 
        
        this["@context"] = "https://schema.org"; 
        this["@type"] = "SearchAction"; 
        this.queryInput = queryInput; 
        this.target = new LdJsonEntryPoint(); 
    }
  
  }

