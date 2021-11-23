
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
    var dynamicAttributeDatas = $('data[type="apply-attr"]');

    // Iterate and bind each individually
    $.each(dynamicAttributeDatas, function (i, elem) {

        var data = this;

        // Webflow wraps EMBEDS in a DIV, so we work from that parent as a reference
        var dataContainer = $(data).parent();

        // hide this node
        $(dataContainer).attr("style", "display: none;");

        //        console.log("Found Data " + $(data).html());

        // if "prior"

        var target = null;

        // Webflow wraps EMBEDS in a DIV, so we work from that parent as a reference
        switch ($(data).attr("apply")) {
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

//        var target = $(dataContainer).prev();

        // Iterate through attributes, and apply them
        $(this).children().each(function (cindex) {
            var dataItem = this;

//            console.log("Adding attr: " + $(dataItem).attr("attr") + " = " + $(dataItem).attr("value"));

            $(target).attr($(dataItem).attr("attr"), $(dataItem).attr("value"));
        });

    });

}

export var formatJson = function (json) {

    // Convert JSON to string
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }

    return json;
}

export var formatJsonAsHtml = function (json) {

    // Convert JSON to string
    json = formatJson(json);

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

export var displayJsonAsHtml = function (el, json) {

    $(el).html("<pre class='wfu-code'></pre>");
    $(el).children("pre").html(
        formatJsonAsHtml(json)
    );

}