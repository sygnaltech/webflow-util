
// Defaults to English when no other language is supplied 
var DEAFULT_LANG = "en";

var LANG_REG_EXP = /\[\[([a-z]{2})\]\]([^\[]+)/g;
var isStorageEnabled = !(typeof localStorage == 'undefined');

// Determine the most appropriate language to use 
var user_lang = (navigator.userLanguage || navigator.browserLanguage || navigator.language || DEAFULT_LANG).substr(0, 2);

var getLangParam = function () {
    var arr = /lang=([a-z]{2})/g.exec(location.search);
    return arr ? arr[1] : null;
}

var getLangFromStorage = function () {
    return isStorageEnabled ? localStorage.getItem('lang') : undefined;
}

// Set & apply the current language to use 
var setLang = function (lang) {
    user_lang = lang;
    if (isStorageEnabled) {
        localStorage.setItem('lang', user_lang);
    }
    applyLang();
}

var applyLang = function () {
    globalDict.forEach(function (v) {
        $(v.elm).html(v.dict[user_lang]);
    });

    // show or hide elements with autolang specifier 
    $('*[autolang]').hide();
    $('*[autolang="' + user_lang + '"]').show();
}

function textNodesUnder(el) {
    var n, a = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_ALL, null, false);
    while (n = walk.nextNode()) {
        a.push(n);
    }
    return a;
}

var globalDict = [];

$(function () {

    // Determine the language to use
    // 1. Parameter-specified ?lang=XX
    // 2. Browser-stored (can be from a prior visit)
    // 3. Browser-specified hints (see above) 
    user_lang = getLangParam() || getLangFromStorage() || user_lang;

    // Save language setting, if possible 
    if (isStorageEnabled) {
        localStorage.setItem('lang', user_lang);
    }

    // bugfix for IE11
    // if multilingual sentence is divided into sevaral text node, restore original text node
    $("*").each(function (i, v) {
        if (LANG_REG_EXP.test($(this).text().replace(/\n/g, "")) && $(this).html().indexOf("<") == -1) {
            $(this).text($(this).text().replace(/\n/g, ""));
        }
        var $v = $("#" + $(this).attr("id"));
        if ($v.length > 0 && LANG_REG_EXP.test($v.text().replace(/\n/g, "")) && $v.html().indexOf("<") == -1) {
            $v.text($v.text().replace(/\n/g, ""));
        }
    })

    textNodesUnder(document).filter(function (v) {
        return LANG_REG_EXP.test(v.nodeValue);
    }).forEach(function (v, i) {
        var dict = {};
        var arr;
        while ((arr = LANG_REG_EXP.exec(v.nodeValue)) != null) {
            dict[arr[1]] = arr[2];
        }
        globalDict.push({ elm: $(v).parent()[0], dict: dict });
    });

    applyLang();

    // Configure links specially
    // Deprecate... 
    var anchors = document.getElementsByTagName('*');
    for (var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function () {
            code = this.getAttribute('whenClick');
            eval(code);
        }
    }

});