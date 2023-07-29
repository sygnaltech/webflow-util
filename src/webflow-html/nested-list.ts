

/*
 * webflow-html
 * Nested List
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Debug } from '../webflow-core/debug';


interface Config {
//    handleBreakpointChange?: ((breakpointName: string, e: MediaQueryListEvent) => void) | null;
}

// Webflow breakpoints


export class Sa5NestedList {
    config: Config;
    _element: HTMLElement;

    constructor(listElement: HTMLElement, config: Config = null) {
        this._element = listElement;
        this.config = config;
    }

    //#region Nested Lists

    /* processList
    * Parses markup in LI's to create nested lists
    * https://codepen.io/memetican/pen/vYjGbrd/8052e3c39d42e8c1e326b2f6ead371c5
    */

    processNestedLists(): void {
        const content = this._element.innerHTML;
        const data = new DOMParser().parseFromString(content, 'text/html').body.childNodes;
        const items: Array<{indent: number, mode: string, text: string}> = [];

        data.forEach((el: ChildNode, i: number) => {
            if (el.nodeName !== "LI") return; // skip

            let item = {
                indent: 1,
                mode: '',
                text: el.textContent?.trim() || ''
            };

            items.push(item);

            const limit = 10;
            for (let j = 1; j < limit; j += 1) {
                if (item.text.startsWith("&gt;")) {
                    item.text = item.text.substring(4).trim(); // remove directive 
                    item.indent++;
                } else if (item.text.startsWith("+")) {
                    item.text = item.text.substring(1).trim(); // remove directive 
                    item.mode = "pro";
                } else if (item.text.startsWith("-")) {
                    item.text = item.text.substring(1).trim(); // remove directive 
                    item.mode = "con";
                } else {
                    break; // done
                }
            }
        });
    }

    /*

    export var processList = function (list) {
        //        console.log(`LIST -------------------------`);

        var content = $(list).html();
    //    console.log(content);

        var data = $.parseHTML(content);
        var items = [];

        $.each(data, function (i, el) {

    //        console.log(el);
            
    //        console.log(JSON.stringify(el));
    //        console.log(el.nodeName);
    //        console.log(el.nodeType);

            if (el.nodeName != "LI")
                return; // skip

            var item = {
                indent: 1,
                mode: '',
                text: $(el).html().trim()
            };

            items.push(item);
            //        console.log(`${i} ${item.text} ${items.length}`);

            var limit = 10;
            for (var j = 1; j < limit; j += 1) {

                if (item.text.startsWith("&gt;")) {
                    item.text = item.text.substring(4).trim(); // remove directive 
                    item.indent++;
                } else if (item.text.startsWith("+")) {
                    item.text = item.text.substring(1).trim(); // remove directive 
                    item.mode = "pro";
                } else if (item.text.startsWith("-")) {
                    item.text = item.text.substring(1).trim(); // remove directive 
                    item.mode = "con";
                } else {
                    break; // done
                }

            }

        });

        // Render HTML
        // Creates structured embedded list from the 
        // array data set. 

        var outHtml = '';
        var level = 1;
        var tag = list.tagName.toLowerCase();
        var prevLevel = 1;

        $.each(items, function (i, item) {

            // Add optional PRO/CON class 
            var attr = '';
            if (item.mode == 'pro')
                attr = " class='wfu-pro'";
            if (item.mode == 'con')
                attr = " class='wfu-con'";

            prevLevel = level;

            if (item.indent > level) {

                for (var l = level + 1; l <= item.indent; l += 1)
                    outHtml += `<${tag} class="wfu-list-level-${l}">`;
                outHtml += `<li${attr}>${item.text}`;

                level = item.indent;

            } else if (item.indent < level) {

                outHtml += `</li></${tag}>`.repeat(level - item.indent);
                outHtml += `</li>`;
                outHtml += `<li${attr}>${item.text}`;
                level = item.indent;

            } else {

                if (i > 0)
                    outHtml += `</li>`;
                outHtml += `<li${attr}>${item.text}`;

            }

        });

        if (level > 1)
            outHtml += `</li></${tag}>`.repeat(level - 1);
        outHtml += `</li>`;
        level = 1;

        $(list).html(outHtml);

    }

    */

    //#endregion

}



