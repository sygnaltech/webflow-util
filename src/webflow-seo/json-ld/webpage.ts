import { LdJsonBase } from "./json-ld-base";
import { LdJsonProfilePage } from "./profile-page";

export class LdJsonWebPage extends LdJsonBase {

    name: string;
    description: string;

    private _publisher: LdJsonProfilePage; 
    get publisher(): LdJsonProfilePage {

      // Automatic, lazy instantiate
      if(!this._publisher)
        this._publisher= new LdJsonProfilePage();

      return this._publisher;
    }
    set publisher(publisher: LdJsonProfilePage) {
      this._publisher = publisher; 
    }



    constructor(name = undefined) { 
        super();
        
        this["@type"] = "WebPage";
        this.name = name; 
    }

    toJSON() {
        return {

            "@content": "https://schema.org",
            "@type": this["@type"],
            
            name: this.name,
            description: this.description,
            publisher: this.publisher.toJSON(),
            
        } 
    }

  
  }
  
  /*
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sygnal Technology Group",
  "url": "https://www.sygnal.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { 
        "@type": "EntryPoint",
        "urlTemplate": "https://www.sygnal.com/search?query={query}"      
    },      
    "query-input": "required name=query"
  }
}
</script>

*/  

/*
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sygnal Technology Group",
    "url": "https://www.sygnal.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": { 
          "@type": "EntryPoint",
          "urlTemplate": "https://www.sygnal.com/search?query={query}"      
      },      
      "query-input": "required name=query"
    }
}
</script>
*/


