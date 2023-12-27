/**
 * according to schema.org it is meant for “How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.” It validates just fine on Google’s Structured Data Testing Tool, and we are really excited to see what type of results it can yield.
 */



import { LdJsonArticle } from "./article";

export class LdJsonTechArticle extends LdJsonArticle {

    constructor() {
        super();

        this["@type"] = "TechArticle"; 

    }



}