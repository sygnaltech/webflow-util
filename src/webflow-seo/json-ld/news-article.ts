import { LdJsonArticle } from "./article";

export class LdJsonNewsArticle extends LdJsonArticle {

    constructor() {
        super();
// https://developers.google.com/search/docs/appearance/structured-data/article
        this["@type"] = "NewsArticle"; 

    }



}