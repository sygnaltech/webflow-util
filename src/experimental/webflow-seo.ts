
/*
 * webflow-seo
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Core Utilities
 */

function formatDate(date) {
    if (!(date || undefined))
      return undefined;
  
    return new Date(date); //.toISOString().split('T')[0]
}

/*
 * EXPERIMENTAL.
 */

export class LdJsonEntryPoint {
    
    urlTemplate;

    // Initialize
    constructor(urlTemplate: string = undefined) {

        // Save the label, for console logging
        this["@type"] = "EntryPoint"; 
        this.urlTemplate = urlTemplate; 

    }

}

window["LdJsonEntryPoint"] = LdJsonEntryPoint;


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

window["LdJsonSearchAction"] = LdJsonSearchAction;


/*
export class LdJsonArticle1 {

    headline;
    alternativeHeadline;
    image;
    author;
    url;

    description;
    articleBody;
 
    datePublished;
    dateCreated;
    dateModified;
  
    constructor(headline = undefined, url = undefined) { 
        
    //    this["@context"] = "https://schema.org"; 
        this["@type"] = "Article"; // Article | TechArticle | BlogPosting
        this.headline = headline; 
        this.url = url; 
    }

    toJSON() {
        return {
        
            "@content": "https://schema.org",
            "@type": this["@type"], // "Article",
            
            headline: this.headline,
            url: this.url,
//            potentialAction: this.potentialAction,
            
        } 
    }

    generate() {
        
    //      var jsonLD = { ...this };
        
    //    console.log(JSON.stringify(jsonLD, null, 2));
        
        console.log(JSON.stringify(this, null, 2));
        
        // <script type="application/ld+json">
        const template = document.createElement('script');
        template.setAttribute("type", "application/ld+json"); 
        template.innerHTML = JSON.stringify(this, null, 2);
        document.body.appendChild(template);
        
    }

}
*/

export class LdJsonWebSite {

    name;
    url;
    potentialAction; // LdJsonSearchAction 

    constructor(name = undefined, url = undefined) { 
        
    //    this["@context"] = "https://schema.org"; 
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

    generate() {
        
    //      var jsonLD = { ...this };
        
    //    console.log(JSON.stringify(jsonLD, null, 2));
        
        console.log(JSON.stringify(this, null, 2));
        
        // <script type="application/ld+json">
        const template = document.createElement('script');
        template.setAttribute("type", "application/ld+json"); 
        template.innerHTML = JSON.stringify(this, null, 2);
        document.body.appendChild(template);
        
    }

}

window["LdJsonWebSite"] = LdJsonWebSite;



export class LdJsonPerson {

    name;
    url;

    constructor(name = undefined, url = undefined) { 
        
        this["@type"] = "Person";
        this.name = name; 
        this.url = url; 
    }

}

window["LdJsonPerson"] = LdJsonPerson;


// export 
export class LdJsonArticle {

    headline;
    dependencies; 
    proficiencyLevel; // = "Expert"; 
    alternativeHeadline; 
    image; // null-coalesce
    author = [];
    award;
    editor;
    genre;
    keywords; // "seo sales b2b",  
    wordcount; // "1120", 
    publisher;
    url;

//  _datePublished;
/*

get datePublished() {
    return this._datePublished.toISOString().split('T')[0]; 
}
set datePublished(date) {
    this._datePublished = new Date(date); 
} */ 

    datePublished; // "2015-09-20",
    dateCreated; // "2015-09-20",
    dateModified; // "2015-09-20", 
    description; 
    articleBody; // "You can paste your entire post in here, and yes it can get really really long." 
        // set image ( , fallback)
        // set fallback image if null

    constructor() { 

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
        "@type": "Article",
        
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
        
        dateCreated: formatDate(this.dateCreated),  // || undefined,
        dateModified: formatDate(this.dateModified), 
        datePublished: formatDate(this.datePublished), // new Date(this.datePublished).toISOString().split('T')[0], 
        
        description: this.description, 
        articleBody: this.articleBody
        } 
    }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
    setFallbackImage = function(url) {
    
        this.image = this.image || url; // nullish coalesce
    
    }

    generate = function() {
    
//      var jsonLD = { ...this };
    
    //    console.log(JSON.stringify(jsonLD, null, 2));
        
        console.log(JSON.stringify(this, null, 2));
        
        // <script type="application/ld+json">
        const template = document.createElement('script');
        template.setAttribute("type", "application/ld+json"); 
        template.textContent = JSON.stringify(this, null, 2);
        document.head.appendChild(template);
    
      console.log("appended.");
      
    }

}

window["LdJsonArticle"] = LdJsonArticle;



