
// Webflow Utils | HTML 
// Sygnal Technology Group
// http://sygnal.com

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
