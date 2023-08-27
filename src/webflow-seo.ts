
/*
 * Sa5
 * webflow-seo
 * EXPERIMENTAL
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * SEO Utilities
 * 
 */

// import { renderRatingComponent } from "./modules/webflow-ui";

export class Sa5SEO {

  /*
  <meta id="robotsMeta" name="robots" content="index">
<script>
console.log("Private?", "{{wf {&quot;path&quot;:&quot;course:private&quot;,&quot;type&quot;:&quot;Bool&quot;\} }}");
if ("{{wf {&quot;path&quot;:&quot;course:private&quot;,&quot;type&quot;:&quot;Bool&quot;\} }}" == "true") {
  // suppress from indexing 
  document.getElementById('robotsMeta').setAttribute('content', 'noindex');
}
</script>
*/ 

  constructor(element: HTMLElement) {

    // this._element = element;
    // this._rating = Number(element.getAttribute("wfu-rating")); 

  }

  init() {

  }

}




/*

<script type="module">

import {WfuJsonArticle} from 'https://codepen.io/memetican/pen/abKMGjg/436180a0c0b15e54d1eedc6d2eef797e.js';

$(function() {
  
  var f = new WfuJsonArticle(); 
  f.setFallbackImage(`{{wf {&quot;path&quot;:&quot;og-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}`);  
  f.setFallbackImage(`{{wf {&quot;path&quot;:&quot;course:image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}`);  
  f.headline = `{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
  f.proficiencyLevel = `{{wf {&quot;path&quot;:&quot;level:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`; 

f.addAuthor(`Michael Wells`, `https://coachmike.live`);
// f.author = `Michael Wells`;
  f.editor = `Sygnal`;
  f.genre = `Webflow`;
  f.keywords = `webflow tech web development webdev`;
  f.publisher = `Sygnal`;
  f.url = `https://www.sygnal.com`;
  f.datePublished = `{{wf {&quot;path&quot;:&quot;date-created&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}`;
  f.dateCreated = `{{wf {&quot;path&quot;:&quot;date-created&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}`;
  f.dateModified = `{{wf {&quot;path&quot;:&quot;date-updated&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}`;
  f.description = `{{wf {&quot;path&quot;:&quot;course:brief&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
  f.generate();
  
});
</script>


I/ 







/* 

function formatDate(date) {
  if (!(date || undefined))
    return undefined;

  return new Date(date); //.toISOString().split('T')[0]
}

export class LdJsonEntryPoint {

  urlTemplate;

  constructor(urlTemplate = undefined) { 
      this["@type"] = "EntryPoint"; 
      this.urlTemplate = urlTemplate; 
  }

}

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

  generate = function() {
      
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

  generate = function() {
      
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

export class LdJsonPerson {

  name;
  url;

  constructor(name = undefined, url = undefined) { 
      
      this["@type"] = "Person";
      this.name = name; 
      this.url = url; 
  }

}

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


// get datePublished() {
//   return this._datePublished.toISOString().split('T')[0]; 
// }
// set datePublished(date) {
//   this._datePublished = new Date(date); 
// }  

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
      this.author.push (new Person(name, url)); 
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







$(function() {


}); 

*/

/* 
import { LdJsonWebSite, LdJsonSearchAction } from 'http://localhost/src/modules/webflow-seo.js';
*/

/* 
var j = new LdJsonWebSite();
j.name = "Coach Mike";
j.url = "https://coachmike.live"; 
j.potentialAction = new LdJsonSearchAction();
j.potentialAction.queryInput = "required name=query";
j.potentialAction.target.urlTemplate = `https://www.coachmike.live/search?query={query}`;

//  var f = new WfuJsonArticle(); 


$("#pre").html(JSON.stringify(j, null, 2));
//  j.generate();

//  f.generate();
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

