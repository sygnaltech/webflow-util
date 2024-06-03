
/*
 * webflow-utils
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * General Utilities
 */

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript

// https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-title-case-with-javascript.html

export function identifyElement(element: HTMLElement): string {
    switch (element.tagName) {
        case 'A': 
            return 'HTMLLinkElement'; 
        case 'INPUT': {
            const inputElement = element as HTMLInputElement;
            switch (inputElement.type) {

// BUG: add date types and number types 

                case 'checkbox':
                    return 'HTMLCheckboxElement';
                case 'radio':
                    return 'HTMLRadioElement';
                // case 'text':
                //     return 'HTMLTextElement';
                // case 'password':
                //     return 'HTMLPasswordElement';
                case 'file':
                    return 'HTMLFileInputElement';
                default:
                    return 'HTMLInputElement';
            }
        }
        case 'SELECT':
            return 'HTMLSelectElement';
        case 'TEXTAREA':
            return 'HTMLTextAreaElement';
        case 'BUTTON':
            return 'HTMLButtonElement';
        default:
            return 'HTMLElement';
    }
}

export function selectOptionByValue(selectElement: HTMLSelectElement, value: string) {
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === value) {
            selectElement.options[i].selected = true;
            break;
        }
    }
}

// Evaluates a string value as boolean 
export function booleanValue(val: string): boolean {
    switch (val.toLowerCase()) {
        case "false":
        case "f":
        case "":
        case "0":
        case "no":
        case "off":
        case undefined: case "undefined":
        case null: case "null": 
            return false;
        default:
            return true;
    }
}

export function addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


export function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}



export function toTitleCase(str) {

    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');

}

// How do you JSON.stringify an ES6 Map?
// https://stackoverflow.com/a/56150320
export function jsonMapReplacer(key, value) {

    if(value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}

// How do you JSON.stringify an ES6 Map?
// https://stackoverflow.com/a/56150320
export function jsonMapReviver(key, value) {

    console.log ("reviving", key, typeof value, value); 

    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;    
}


// HTML Decode JSON for Select Option element
// https://tertiumnon.medium.com/js-how-to-decode-html-entities-8ea807a140e5
// export function decodeHTML(text) {
//     return $("<textarea/>")
//       .html(text)
//       .text();
// }
export function decodeHTML(text: string): string {
    let parser = new DOMParser();
    let dom = parser.parseFromString(
        `<!doctype html><body>${text}`,
        'text/html');
    return dom.body.textContent || '';
}

// https://tertiumnon.medium.com/js-how-to-decode-html-entities-8ea807a140e5
// export function encodeHTML(text) {
//     return $("<textarea/>")
//       .text(text)
//       .html();
// }
export function encodeHTML(text) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}

// How to check if a number is between two values?
// https://stackoverflow.com/a/18881828
// Number.prototype.between = function (a, b, inclusive) {
//     var min = Math.min(a, b),
//         max = Math.max(a, b);

//     return inclusive ? this >= min && this <= max : this > min && this < max;
// }
export function between(value: number, a: number, b: number, inclusive: boolean): boolean {
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    return inclusive ? value >= min && value <= max : value > min && value < max;
}

// Handy outerHTML extension function
// jQuery.fn.outerHTML = function () {
//     return jQuery('<div />').append(this.eq(0).clone()).html();
// };
export function outerHTML(element) {
    return element.outerHTML;
}


// Mobile detection
// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
// window.mobileCheck = function () {
export function isMobile() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window['opera']);
    return check;
};

// How to execute a JavaScript function when I have its name as a string
// https://stackoverflow.com/a/359910
export function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

// How to execute a JavaScript function when I have its name as a string
// https://stackoverflow.com/a/4351575 
export function executeFunctionByName2(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

//#region Shuffle

// Shuffles a group of elements in the DOM
// and also returns a set 
export function shuffleElements(elements: Element[]): Element[] {
    const allElems = Array.from(elements);
    const getRandom = (max: number) => Math.floor(Math.random() * max);

    const shuffled = allElems.map(() => {
        const random = getRandom(allElems.length);
        const randEl = allElems[random].cloneNode(true) as Element;
        allElems.splice(random, 1);
        return randEl;
    });

    allElems.forEach((elem, i) => {
        if (elem.parentNode) {
            elem.parentNode.replaceChild(shuffled[i], elem);
        }
    });

    return shuffled;
}

// Usage:
// const elements = document.querySelectorAll('.some-class');
// const shuffledElements = shuffleElements(Array.from(elements));

//#endregion

/* previous code

// Credit James Padolsey 
// https://css-tricks.com/snippets/jquery/shuffle-dom-elements/
(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);
*/


//#region IFRAMES

export function autosizeIFrames(): void {
    // Identify all IFRAMES with autosize tag
    const iframes = Array.from(
        // BUG: weird tagging 
        document.querySelectorAll("iframe[wfu='html.iframe.autofit']")
        );

    iframes.forEach((iframe: HTMLIFrameElement) => {
        // Add event listener and wait for content to load
        iframe.addEventListener('load', () => {
            setInterval(() => {
                if (iframe.contentDocument) {
                    iframe.style.height = `${iframe.contentDocument.body.scrollHeight}px`;
                }
            }, 200);
        });
    });
};

/* prev

export var autosizeIFrames = function () {

    // Identify all IFRAMES with autosize tag
    let iframes = $("iframe[wfu='html.iframe.autofit']");

    iframes.each(function (index) {

        var iframe = this;

        // Add event listener and wait for content to load
        this.addEventListener('load', function () {
            setInterval(function () {
                iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';
            }, 200);
        });

    });

}

*/

//#endregion


//#region Dynamic Attributes

// Applies custom attributes to HTML elements throughout the page
// from relatively-positioned <data> elements.


export function applyDynamicAttributes(): void {

    // Find all <data> elements which specify a data-source for data binding
    const dynamicAttributeDatas = Array.from(
        document.querySelectorAll('data[wfu-attr]')
        );

    // Iterate and bind each individually
    dynamicAttributeDatas.forEach((data: HTMLElement) => {

        // Webflow wraps EMBEDS in a DIV, so we work from that parent as a positional reference
        const dataContainer = data.parentElement;

        // hide this node
        if (dataContainer) {
            dataContainer.style.display = 'none';
        }

        let target: HTMLElement | null = null;

        // Webflow wraps EMBEDS in a DIV[wf-embed], so we work from that parent as a reference
        switch (data.getAttribute('wfu-attr-target')) {
            case 'prev':
                target = dataContainer?.previousElementSibling as HTMLElement;
                break;
            case 'next':
                target = dataContainer?.nextElementSibling as HTMLElement;
                break;
            case 'parent':
                target = dataContainer?.parentElement;
                break;
            default:
                console.warn('Unknown apply setting for param.');
        }

        // Apply attribute
        if (target) {
            target.setAttribute(data.getAttribute('wfu-attr') || '', data.getAttribute('wfu-attr-val') || '');
        }

    });
};


/*


export var applyDynamicAttributes = function () {

    // Find all <data> elements which specify a data-source
    // for data binding
    var dynamicAttributeDatas = $('data[wfu-attr]');

    // Iterate and bind each individually
    $.each(dynamicAttributeDatas, function (i, elem) {

        var data = this;

        // Webflow wraps EMBEDS in a DIV, so we work from that parent as a positional reference
        var dataContainer = $(data).parent();

        // hide this node
        $(dataContainer).attr("style", "display: none;");

        var target = null;

        // Webflow wraps EMBEDS in a DIV[wf-embed], so we work from that parent as a reference
        switch ($(data).attr("wfu-attr-target")) {
            case "prev":
                target = $(dataContainer).prev();
                break;
            case "next":
                target = $(dataContainer).next();
                break;
            case "parent":
                target = $(dataContainer).parent();
                break;
            default:

                if (vars.logging)
                    console.warn("Unknown apply setting for param.");
        }

        // Apply attribute
        var dataItem = this;
        $(target).attr(
            $(dataItem).attr("wfu-attr"),
            $(dataItem).attr("wfu-attr-val")
        );

    });

}

*/

//#endregion




//#region Data Formatting

export const formatJson = (data: any): string | undefined => {
    let json;

    // Convert JSON to string
    if (typeof data !== 'string') {
        json = JSON.stringify(data, undefined, 2);
    }

    return json;
}

export const formatJsonAsHtml = (data: any): string => {
    // Convert JSON to string
    let json = formatJson(data);

    json = json?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Add JSON styling classes
    return json?.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        (match) => {
            let cls = 'wfu-json-number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'wfu-json-key';
                } else {
                    cls = 'wfu-json-string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'wfu-json-boolean';
            } else if (/null/.test(match)) {
                cls = 'wfu-json-null';
            }
            return `<span class="${cls}">${match}</span>`;
        }) || '';
}

export const displayDataAsHtml = (el: HTMLElement, data: any): void => {
    // Create <pre> element
    const pre = document.createElement('pre');
    pre.className = 'wfu-code';

    // Populate <pre> element with formatted JSON data
    pre.innerHTML = formatJsonAsHtml(data);

    // Append <pre> element to the target element
    el.innerHTML = '';
    el.appendChild(pre);
}

/*

export var formatJson = function (data) {

    var json;

    // Convert JSON to string
    if (typeof data != 'string') {
        json = JSON.stringify(data, undefined, 2);
    }

    return json;
}

export var formatJsonAsHtml = function (data) {

    // Convert JSON to string
    var json = formatJson(data);

    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Add JSON styling classes
    return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function (match) {
            var cls = 'wfu-json-number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'wfu-json-key';
                } else {
                    cls = 'wfu-json-string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'wfu-json-boolean';
            } else if (/null/.test(match)) {
                cls = 'wfu-json-null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });

}

export var displayDataAsHtml = function (el, data) {

//    var json = formatJson(data);

    // Create <pre> element
    $(el).html("<pre class='wfu-code'></pre>");

    // Populate <pre> element with formatted JSON data
    $(el).children("pre").html(
        formatJsonAsHtml(data)
    );

}

*/

//#endregion 



//#region Macros

/* expandMacrosInElement
 * Expands {{ var }} constructs in an elements innerHtml
 * using dictionary lookup, and replaces the element content.
 */

export function expandMacrosInElement (el: HTMLElement, dict: Map<string, string>): void {
    let html = el.innerHTML;

    html = expandMacrosInText(html, dict);

    el.innerHTML = html;
}

/* expandMacrosInText
 * Expands {{ var }} constructs in text
 */

export const expandMacrosInText = (text: string, dict: Map<string, string>): string => {
    // Must be positioned before regex replace call
    const replacer = (match: string, p1: string, p2: string, p3: string, offset: number, string: string): string => {
        return dict.get(p2) || '';
    }

    text = text.replace(
        /{\s*(?<cmd>\w*)\s*\{\s*(?<params>\w*)\s*\}\s*(?<options>\w*)\s*\}/g,
        replacer
    );

    return text;
}



/*

export var expandMacrosInElement = function (el, dict) {

    var html = $(el).html();

    html = expandMacrosInText(html, dict);

    $(el).html(
        html
    );

}


export var expandMacrosInText = function (text, dict) {



    // https://regexr.com/
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter
    // Must be positioned before regex replace call
    var replacer = function (match, p1, p2, p3, offset, string) {

        return dict.get(p2);
    }

    text = text.replace(
        /{\s*(?<cmd>\w*)\s*\{\s*(?<params>\w*)\s*\}\s*(?<options>\w*)\s*\}/g,
        replacer
    );

    return text;
}

*/


//#endregion

/**
 * Sequence a group of items
 * @param groupElement 
 */

export function sequence (groupElement: HTMLElement): void {
 
    // Get the group name
    const groupName = groupElement.getAttribute("wfu-seq-group");
    console.log("sequence group", groupName)

    // Find matching items 
    let i = 0;
    const elements = groupElement.querySelectorAll(`[wfu-seq="${groupName}"]`);
    elements.forEach((element: Element) => {
        element.innerHTML = (++i).toString();
    }); 
}


/*

export var sequence = function (l) {

    const $group = $(l);
    
    // Get the group name
    const groupName = $group.attr("wfu-seq-group");

    // Find matching items 
    var i = 0;
    $group.find(`[wfu-seq="${groupName}"]`).each(function() {
        $(this).html(++i);
    }); 

}

*/


/**
 * Shuffle array randomly
 * Fisher-Yates (also known as Knuth) shuffle 
 * iterates over the array from the last element to the first, randomly choosing an element in the unshuffled portion of the array and swapping it with the current element. This provides a uniform distribution of array permutations.
 * @param array 
 * @returns 
 */

export function shuffleArray(array: any[]) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}



