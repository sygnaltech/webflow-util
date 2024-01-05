
/*
 * Sa5
 * webflow-seo
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * SEO Utilities
 * 
 */

import { Sa5Core } from "./webflow-core";
import { LdJsonArticle } from "./webflow-seo/json-ld/article";
import { LdJsonCourse } from "./webflow-seo/json-ld/course";
import { LdJsonWebPage } from "./webflow-seo/json-ld/webpage";


Sa5Core.startup(LdJsonArticle);
Sa5Core.startup(LdJsonCourse);
Sa5Core.startup(LdJsonWebPage); 

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

  constructor() {

    // this._element = element;
    // this._rating = Number(element.getAttribute("wfu-rating")); 

  }

  init() {

  }

}

Sa5Core.startup(Sa5SEO);



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



