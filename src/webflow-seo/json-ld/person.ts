
export class LdJsonPerson {

    name;
    url;
  
    constructor(name = undefined, url = undefined) { 
        
        this["@type"] = "Person";
        this.name = name; 
        this.url = url; 
    }
  
  }
  