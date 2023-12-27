

export class LdJsonEntryPoint {

    urlTemplate;
  
    constructor(urlTemplate = undefined) { 
        this["@type"] = "EntryPoint"; 
        this.urlTemplate = urlTemplate; 
    }
  
}

