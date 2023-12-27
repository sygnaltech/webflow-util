import { LdJsonBase } from "./json-ld-base";
import { LdJsonPerson } from "./person";



export class LdJsonArticle extends LdJsonBase {

    headline: string;
    dependencies; 
    proficiencyLevel; // = "Expert"; 
    alternativeHeadline: string; 

    /*
          "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
    */
    image; // null-coalesce


    // "author": [{
    //     "@type": "Person",
    //     "name": "Jane Doe",
    //     "url": "https://example.com/profile/janedoe123"
    //   },{
    //     "@type": "Person",
    //     "name": "John Doe",
    //     "url": "https://example.com/profile/johndoe123"
    // }]
    author = [];
    award: string;
    editor: string;
    genre: string;
    keywords: string; // "seo sales b2b",  
    wordcount: number; // "1120", 
    publisher;
    url;
  
  //  _datePublished;
  
  
  // get datePublished() {
  //   return this._datePublished.toISOString().split('T')[0]; 
  // }
  // set datePublished(date) {
  //   this._datePublished = new Date(date); 
  // }  
  
  // "datePublished": "2015-02-05T08:00:00+08:00",
    datePublished: string; // "2015-09-20",
    _datePublished: Date;

    dateCreated: string; // "2015-09-20",
    _dateCreated: Date;

    dateModified: string; // "2015-09-20", 
    _dateModified: Date;

    description: string; 
    articleBody: string; // "You can paste your entire post in here, and yes it can get really really long." 
        // set image ( , fallback)
        // set fallback image if null
  
    constructor() { 
        super();
    //    this.headline = 'x';
        
        this["@type"] = "Article"; // Article | TechArticle | BlogPosting
  
        // https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes 
        
    }
  
    addAuthor = function (name = undefined, url = undefined) {
        this.author.push (new LdJsonPerson(name, url)); 
    }
  
    toJSON() {
        return {
        
        "@context": "https://schema.org",
        "@type": this["@type"],
        
        headline: this.headline,
        dependencies: this.dependencies,
        proficiencyLevel: this.proficiencyLevel || undefined,   
        alternativeHeadline: this.alternativeHeadline,  
        image: this.image, // null-coalesce
        author: this.author,
        award: this.award,
        editor: this.editor,
        genre: this.genre,
        keywords: this.keywords, // "seo sales b2b",  
        wordcount: this.wordcount, // "1120", 
        publisher: this.publisher,
        url: this.url,
        
        dateCreated: this.formatDate(this.dateCreated),  // || undefined,
        dateModified: this.formatDate(this.dateModified), 
        datePublished: this.formatDate(this.datePublished), // new Date(this.datePublished).toISOString().split('T')[0], 
        
        description: this.description, 
        articleBody: this.articleBody
        } 
    }
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
    setFallbackImage = function(url) {
    
        this.image = this.image || url; // nullish coalesce
    
    }

  
  }
  
