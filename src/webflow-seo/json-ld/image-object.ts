
export class LdJsonImageObject {

    url;
  
    constructor(url = undefined) { 
        
        this["@type"] = "ImageObject";
        this.url = url; 
    }
  
  }
  
  