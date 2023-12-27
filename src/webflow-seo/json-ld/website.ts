import { LdJsonBase } from "./json-ld-base";

export class LdJsonWebSite extends LdJsonBase {

    name: string;
    url: string;
    potentialAction: string; // LdJsonSearchAction 
  
    constructor(name = undefined, url = undefined) { 
        super();
        
        this["@type"] = "WebSite"; // Article | TechArticle | BlogPosting
        this.name = name; 
        this.url = url; 
    }
  
    toJSON() {
        return {
        
            "@content": "https://schema.org",
            "@type": this["@type"], // "Article",
            
            name: this.name,
            url: this.url,
            potentialAction: this.potentialAction,
            
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


