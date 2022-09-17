
// Sygnal Technology Group
// http://sygnal.com

var tableRenderOptions = {
    encodeHtml: true,
    theme: 'table1',
    headers: null,
    responsive: true
}

var tableRenderOptionsObj = function() {
    var encodeHtml = true;
    var theme = 'table1';
    var headers = null;
    var responsive = true;
}

export var test = function (options = null) {

    options = options ?? {};

    console.log(options);

    console.log(`responsive: ${options.responsive ?? tableRenderOptions.responsive}`);
    console.log(`theme: ${options.theme ?? tableRenderOptions.theme}`);

    let { responsive: r, theme: t, headers: h } = options;
    console.log(`responsive decon: ${r}`);
    console.log(`theme decon: ${t}`);
    console.log(`headers decon: ${h}`);

    // Combine settings objects
    var settings = $.extend({}, tableRenderOptions, options);

    console.log("SPREAD!");
    console.log(settings);

//    console.log(`theme decon 2: ${{ theme } = options}`);

    // let copiedPerson = Object.assign({}, person);

}


export var testObj = function (optionsObj = null) {

    optionsObj = optionsObj || {};

    console.log(optionsObj);

    console.log(`responsive: ${optionsObj.responsive}`);

}

