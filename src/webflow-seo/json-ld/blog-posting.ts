import { LdJsonArticle as LdJsonArticle } from "./article";

export class LdJsonBlogPosting extends LdJsonArticle {

    constructor() {
        super();

        this["@type"] = "BlogPosting"; 

    }



}