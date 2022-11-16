
/*
 * webflow-html
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * HTML Utilities
 */


// Simplest-case encoding for HTML5
export var encodeHtml = function (text) {

    // Important- this approach handles common scenarios,
    // but does not handle quotes or special accented characters.
    // See https://www.php.net/htmlspecialchars

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

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

// Applies custom attributes to HTML elements throughout the page
// from relatively-positioned <data> elements.
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

/* expandMacrosInElement
 * Expands {{ var }} constructs in an elements innerHtml
 * using dictionary lookup, and replaces the element content.
 */
export var expandMacrosInElement = function (el, dict) {

    var html = $(el).html();

    html = expandMacrosInText(html, dict);

    $(el).html(
        html
    );

}

/* expandMacrosInText
 * Expands {{ var }} constructs in text
 */
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

/* processList
 * Parses markup in LI's to create nested lists
 * https://codepen.io/memetican/pen/vYjGbrd/8052e3c39d42e8c1e326b2f6ead371c5
 */
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

        //        console.log(`#${i} / ${item.text} / c${level} n${item.indent} / ${item.mode} - current level `); 

        // Add optional PRO/CON class 
        var attr = '';
        if (item.mode == 'pro')
            attr = " class='wfu-pro'";
        if (item.mode == 'con')
            attr = " class='wfu-con'";

        prevLevel = level;

        if (item.indent > level) {
            //          console.log (`LEVEL ${prevLevel} -> ${level} / opening`);
            for (var l = level + 1; l <= item.indent; l += 1)
                outHtml += `<${tag} class="wfu-list-level-${l}">`;
            outHtml += `<li${attr}>${item.text}`;

            level = item.indent;

            //          console.log(outHtml);

        } else if (item.indent < level) {
            //          console.log (`LEVEL ${prevLevel} ->  ${level} / closing`);
            outHtml += `</li></${tag}>`.repeat(level - item.indent);
            outHtml += `</li>`;
            outHtml += `<li${attr}>${item.text}`;
            level = item.indent;
            //          console.log(outHtml);
        } else {
            //          console.log (`LEVEL ${prevLevel} ->  ${level} / same`);
            if (i > 0)
                outHtml += `</li>`;
            outHtml += `<li${attr}>${item.text}`;
            //          console.log(outHtml);
        }

    });

    if (level > 1)
        outHtml += `</li></${tag}>`.repeat(level - 1);
    outHtml += `</li>`;
    level = 1;

    //      console.log(outHtml);  
    $(list).html(outHtml);

}

/* sortCollectionList
 * Sorts a Collection List
 * https://codepen.io/memetican/pen/oNygGLj/259b05cd6be71a16d2f4787e0714278f
 */
export var sortCollectionList = function (l) {

    const $list = $(l);
    const $dir = $list.attr("wfu-sort-dir") || "asc";
    const $sortType = $list.attr("wfu-sort-type") || "string";

    $list.attr("wfu-sort-type");

    var $items = $list.children();

    console.debug(`WFU sorting ${$sortType} ${$dir} (${$items.length} children)`);

    $items.sort(function (a, b) {

        const key1 = $(a).find("[wfu-sort-key]").attr("wfu-sort-key");
        const key2 = $(b).find("[wfu-sort-key]").attr("wfu-sort-key");

        // Determine asc sort result
        var sortResult = 1;
        switch ($sortType) {
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
        if ($dir != "asc") {
            sortResult = sortResult * -1;
        }

        return sortResult;
    });

    //    $items.detach().appendTo($list);
    console.log('writing.');
    $list.html($items);

}