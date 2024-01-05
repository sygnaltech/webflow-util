
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

import { Sa5Core } from "../webflow-core";
import { LdJsonArticle } from "../webflow-seo/json-ld/article";
import { LdJsonCourse } from "../webflow-seo/json-ld/course";
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5SEO } from "../webflow-seo";
import { LdJsonWebPage } from "../webflow-seo/json-ld/webpage";


Sa5Core.startup(LdJsonArticle);
Sa5Core.startup(LdJsonCourse);



const init = () => { 

  //    new Sa5Core().init();
  let core: Sa5Core = Sa5Core.startup(); 

  // Initialize debugging
  let debug = new Sa5Debug("sa5-seo");
  debug.debug ("Initializing");

//  const seo = new Sa5SEO(); 

  const webPage = new LdJsonWebPage(); 



  webPage.name = document.title;
  webPage.description = document.querySelector('meta[name="description"]')?.getAttribute('content');

  // do callback for modifications

  // e.g. add publisher name

  // publish it

  webPage.generate();

}





