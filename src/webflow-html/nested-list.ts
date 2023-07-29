

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

interface NestedListItem {
    indent: number;
    mode: string;
    text: string;
}

// Webflow breakpoints


export class Sa5NestedList {
    config: Config;
    _element: HTMLElement;

    constructor(listElement: HTMLElement, config: Config = null) {

        // Verify OL or UL

        this._element = listElement;
        this.config = config;
    }

    //#region Nested Lists

    /* processList
    * Parses markup in LI's to create nested lists
    * https://codepen.io/memetican/pen/vYjGbrd/8052e3c39d42e8c1e326b2f6ead371c5
    */

    processNestedList(): void {

        const content = this._element.innerHTML;
        const data = new DOMParser().parseFromString(content, 'text/html').body.childNodes;
        let items: NestedListItem[] = []; 

        // Create list of items, for nesting
        data.forEach((el: ChildNode, i: number) => {

            if (el.nodeName !== "LI") return; // skip

            // Set defaults
            let item = {
                indent: 1,
                mode: '',
                text: el.textContent?.trim() || ''
            };

            // Parse / resolve item detail
            const LIST_DEPTH_LIMIT = 10;
            for (let j = 1; j < LIST_DEPTH_LIMIT; j++) {
                if (item.text.startsWith(">")) {
                    item.text = item.text.substring(1).trim(); // remove directive 
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

            items.push(item);
        }); 

        // Render HTML
        // Creates structured embedded list from the 
        // array data set. 

        // Usage:
        // items = [
        //     { indent: 1, mode: '', text: 'Level 1 Item 1' },
        //     { indent: 3, mode: '', text: 'Level 3 Item 1' },
        //     { indent: 3, mode: '', text: 'Level 3 Item 2' },
        //     { indent: 1, mode: '', text: 'Level 1 Item 2' },
        //     { indent: 2, mode: '', text: 'Level 2 Item 1' },
        // ];

        // Replace list entirely
        this._element.replaceWith(
            this.createList(this._element.nodeName, items)
            );

    }
    
    private createList(listElementType: string = 'UL', items: NestedListItem[]): HTMLElement {
        let root = document.createElement(listElementType);
        root.setAttribute("role", "list"); // every level? a11y 
        let currentParent = root;
        let parents = [root];
      
        for (let i = 0; i < items.length; i++) {

            const item = items[i];
            const li = document.createElement('li');
            li.textContent = item.text;
            if (item.mode == 'pro')
                li.classList.add("wfu-pro");
            if (item.mode == 'con')
                li.classList.add("wfu-con");

            if (item.indent > parents.length) {

                for (let j = parents.length; j < item.indent; j++) {
                    const newUL = document.createElement(listElementType);
                    let newULparent = parents[j - 1].lastChild || parents[j - 1];
                    newULparent.appendChild(newUL);
                    parents.push(newUL);
                }
            } else if (item.indent < parents.length) {
                parents = parents.slice(0, item.indent);
            }

            parents[parents.length - 1].appendChild(li);
        }
      
        return root;
    }

    //#endregion

}



