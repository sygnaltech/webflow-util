import { LdJsonBase } from "./json-ld-base";
import { LdJsonOrganization } from "./organization";



export class LdJsonCourse extends LdJsonBase {

    name: string;
    description: string; 
    provider: LdJsonOrganization = new LdJsonOrganization();

    constructor() { 
        super();
        
        this["@type"] = "Course"; 
        
    }
  
    // addAuthor = function (name = undefined, url = undefined) {
    //     this.author.push (new LdJsonPerson(name, url)); 
    // }
  
    toJSON() {
        return {

            "@context": "https://schema.org",
            "@type": this["@type"],
            
            name: this.name,
            description: this.description, 

            provider: this.provider || undefined,   

        } 
    }
  
  }
  
