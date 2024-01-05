
export class LdJsonProfilePage {

    name: string;
    
    constructor(name = undefined) { 
        
        this["@type"] = "ProfilePage"; 
        this.name = name; 
    }
    
    toJSON() {
        return {
        
            "@content": "https://schema.org",
            "@type": this["@type"],
            
            name: this.name,
            
        } 
    }

  }
  