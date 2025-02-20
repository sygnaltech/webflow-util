/*
 * webflow-html
 * Collection List
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 */


import { Sa5Attribute } from '../globals';
import { Sa5Debug } from '../webflow-core/debug';
import { Sa5Sort } from './sort';


interface Config {
//    handleBreakpointChange?: ((breakpointName: string, e: MediaQueryListEvent) => void) | null;
}

// Webflow breakpoints


interface Sa5SortConfig {

    // dynamicAttributes?: boolean | true;
    // handleBreakpointChange?: ((breakpointName: string, e: MediaQueryListEvent) => void) | null;
//    handleOrientationChange?: ((orientationName: string, e: MediaQueryListEvent) => void) | null; 
    startWith?: number | 1; 

    debug?: boolean | true;

}


export class Sa5CollectionList {
    config: Config;
    _element: HTMLElement; 

    constructor(elem: HTMLElement, config: Config = null) {
        this.config = config;
        this._element = elem;
    }

    init() {

    }

    sort(config?: Sa5SortConfig): void {
//        console.group("SORT");

//        console.log(config); 

        // General config
        const list = this._element;
        const mode = list.getAttribute(
            Sa5Attribute.ATTR_SORT // "wfu-sort"
            ) || "default";
        const dir = list.getAttribute(
            Sa5Attribute.ATTR_SORT_DIR // "wfu-sort-dir"
            ) || "asc";
        const sortType = list.getAttribute(
            Sa5Attribute.ATTR_SORT_TYPE // "wfu-sort-type"
            ) || "string";
        const sortLocaleConfig = list.getAttribute(
            "wfu-sort-locale"
            ) || "";
        const sortStartWith: number = parseInt(list.getAttribute(
            "wfu-sort-startwith"
            ) || "1", 10) || 1;

        // Locale config 
        var sortLocale: string = "en"; // default 
        switch(sortLocaleConfig) {
            case "none":
            case "auto":
            case "": 
                // Get the locale from the HTML element if present
                const htmlElement = document.documentElement;
                const currentLocale = htmlElement.getAttribute("lang");
                
                // If a locale is specified, use it; otherwise, default to "en"
                sortLocale = currentLocale ? currentLocale : "en";
                break;
            case "browser":
                // Get the locale from the browser's navigator object
                sortLocale = navigator.language || "en";
                break;
            default:
                sortLocale = sortLocaleConfig; 
                break; 
        }



        const items = Array.from(list.children);

//        console.debug(`WFU sorting ${mode} ${sortType} ${dir} ${sortLocale} (${items.length} children)`);

        // console.debug({
        //     name: "WFU sorting", 
        //     mode: mode, 
        //     sortType: sortType, 
        //     dir: dir, 
        //     sortLocale: sortLocale, 
        //     children: `${items.length} children`
        // });

        // Start With  
        if(sortStartWith) {
            items.splice(0, sortStartWith - 1); // Remove (startWith - 1) items
        }



//        console.debug(list.children); 

        // If Random sort, do it now 
        if(dir == "random") {

            // Randomize
            items.sort(() => Math.random() - 0.5); 

        } else {

            items.sort((a: Element, b: Element) => {
                const key1 = 
                    a.getAttribute(Sa5Attribute.ATTR_SORT_KEY) || // "wfu-sort-key"
                        a.querySelector(Sa5Attribute.getBracketed(Sa5Attribute.ATTR_SORT_KEY))?.getAttribute(Sa5Attribute.ATTR_SORT_KEY) || ''; // "[wfu-sort-key]"
                const key2 = 
                    b.getAttribute(Sa5Attribute.ATTR_SORT_KEY) ||
                        b.querySelector(Sa5Attribute.getBracketed(Sa5Attribute.ATTR_SORT_KEY))?.getAttribute(Sa5Attribute.ATTR_SORT_KEY) || '';

                // Determine asc sort result
                let sortResult = 1;
                switch (sortType) {
                    case "date":
                        sortResult = new Date(key1) < new Date(key2) ? -1 : 1;
//                        console.debug(`comparing dates ${key1} ${key2} = ${sortResult}`);
                        break;
                    case "number":
                        sortResult = Number(key1) < Number(key2) ? -1 : 1;
//                        console.debug(`comparing numbers ${key1} ${key2} = ${sortResult}`);
                        break;
                    case "semver":
                        // Semver comparison logic here
                        break;
                    case "string":
                    default:

                        sortResult = key1.localeCompare(key2, sortLocale, {
                            sensitivity: 'variant' 
                        });
//                        console.debug(`comparing strings ${key1} ${key2} = ${sortResult}`);
                        break;
                }

                // Invert for desc
                if (dir != "asc") {
                    sortResult = sortResult * -1;
                }

                return sortResult;
            });

        }

        // Write children back 

        // Empty the list, except for any initial items that are specified with startWith 
        while (list.lastChild && (list.children.length > sortStartWith - 1)) {
            
            list.lastChild.remove();
        }

        // Write children back 
        items.forEach(item => list.appendChild(item));

        // Remove attribute to display 
        list.removeAttribute(Sa5Attribute.ATTR_SORT); // "wfu-sort" 

 //        console.groupEnd(); 
    }

}






//#region Sorting

/* sortCollectionList
 * Sorts a Collection List
 * https://codepen.io/memetican/pen/oNygGLj/259b05cd6be71a16d2f4787e0714278f
 */


/*

export var sortCollectionList = function (l) {

    console.group("SORT");

    const $list = $(l);
    const mode = $list.attr("wfu-sort") || "default";
    const dir = $list.attr("wfu-sort-dir") || "asc";
    const sortType = $list.attr("wfu-sort-type") || "string";

    var $items = $list.children();

    console.debug(`WFU sorting ${mode} ${sortType} ${dir} (${$items.length} children)`);

    console.debug({
        name: "WFU sorting", 
        mode: mode, 
        sortType: sortType, 
        dir: dir, 
        children: `${$items.length} children`
    });

    console.debug('before.');

    console.debug($list.children()); 

    // If Random sort, do it now 
    // uses jQuery extension, defined above
    if(dir == "random") {

        // Randomize
        // updates element order directly, immediately
        $list.children().shuffle();

    } else {

        $items.sort(function (a, b) {

            const key1 = $(a).find("[wfu-sort-key]").attr("wfu-sort-key");
            const key2 = $(b).find("[wfu-sort-key]").attr("wfu-sort-key");

            // Determine asc sort result
            var sortResult = 1;
            switch (sortType) {
                case "date":

                    sortResult = new Date(key1) < new Date(key2) ? -1 : 1;
                    console.debug(`comparing dates ${key1} ${key2} = ${sortResult}`);

                    break;
                case "number":

                    sortResult = new Number(key1) < new Number(key2) ? -1 : 1;
                    console.debug(`comparing numbers ${key1} ${key2} = ${sortResult}`);

                    break;
                case "semver":

                    const semver1 = `${key1}.0.0.0`.split('.');
                    const semver2 = `${key2}.0.0.0`.split('.');

                    // https://semver.org/#spec-item-11

                    // Precedence is determined by the first difference when comparing each 
                    // of these identifiers from left to right as follows: 
                    // Major, minor, and patch versions are always compared numerically.
                    for (var p = 0; p < 4; p++) 
                        if (semver1[p] != semver2[p])
                            break;

                    // Numeric identifiers always have lower precedence than non-numeric identifiers.

                    // Identifiers with letters or hyphens are compared lexically in ASCII sort order.

                        // https://semver.org/#:~:text=Precedence%20for%20two%20pre%2Drelease%20versions%20with%20the%20same%20major%2C%20minor%2C%20and%20patch

    //                console.log(`semver difference at part ${p}`);

                    // Identifiers consisting of only digits are compared numerically.

                    // Compare; if same, doesn't matter
                    sortResult = new Number(semver1[p]) < new Number(semver2[p]) ? -1 : 1;
                    console.debug(`comparing semvers ${key1} ${key2} = ${sortResult}`);

                    break;
                case "string":
                default:

                    sortResult = key1.localeCompare(key2);
                    console.debug(`comparing strings ${key1} ${key2} = ${sortResult}`);

                    break;
            }

            // Invert for desc
            if (dir != "asc") {
                sortResult = sortResult * -1;
            }

            return sortResult;
        });

        console.debug('writing.');
        $list.html($items);

    }

    // Remove attribute to display 
    $list.removeAttr("wfu-sort");

    console.groupEnd();

}

*/ 

//#endregion
