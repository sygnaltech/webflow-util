
// Webflow Utils | Content | Lorem Ipsum Generator
// Sygnal Technology Group
// http://sygnal.com

var _words = [
    "a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue",
    "bibendum", "blandit",
    "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus",
    "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod",
    "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos",
    "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus",
    "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi",
    "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare",
    "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus",
    "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum",
    "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse",
    "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis",
    "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut",
    "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];

/*
Get random number betweeen x and y
*/
var _random = function(x, y) {
    var rnd = (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
    return Math.round(Math.abs(rnd) * x + y);
}

/*
 Get random number between min and max

 @param  {Number} min (optional) lower result limit
 @param  {Number} max (optional) upper result limit
 @return {Number}     random number
*/
var _count = function(min, max) {
    var result;

    if (min && max)
        result = Math.floor(Math.random() * (max - min + 1) + min);
    else if (min)
        result = min;
    else if (max)
        result = max;
    else
        result = _random(8, 2);

    return result;
}

// Get a list of words (count between min and max)
// Returns an array
export var genLipsumWords = function(min, max) {
    var result = [];
    var count = _count(min, max);

    // get random words
    while (result.length < count) {
        var pos = Math.floor(Math.random() * _words.length);
        var rnd = _words[pos];

        // do not allow same word twice in a row
        if (result.length && result[result.length - 1] === rnd) {
            continue;
        }

        result.push(rnd);
    }

    return result;
}


// Generate sentence
// Of word count between min and max
export var genLipsumSentence = function(min, max) {
    var words = genLipsumWords(min, max);

    // Add comma(s) to sentence
    var index = _random(6, 2);
    while (index < words.length - 2) {
        words[index] += ",";
        index += _random(6, 2);
    }

    // Append puctation on end
    var punct = "...!?"
    words[words.length - 1] += punct.charAt(Math.floor(Math.random() * punct.length));

    // Uppercase first letter
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    // Compose sentence
    return words.join(" ");
}

// Generate sentence
// Of word count between min and max
// Returns an array
export var genLipsumSentences = function (min, max) {
    var result = [];
    var count = _count(min, max);

    // get random sentences
    while (result.length < count) {

        result.push (genLipsumSentence());

//        result.push(rnd);
    }

    return result;
}

export var genLipsumParagraph = function (min, max) {
    var sentences = genLipsumSentences(min, max);

    // Compose sentence
    return sentences.join(" ");
}

/**
 * Generate paragraph
 *
 * @param  {Number} min (optional) minimal words count
 * @param  {Number} max (optional) maximal words count
 * @return {String}     paragraph
 */
export var genLipsumParagraphs = function (min, max) {
    if (!min) min = 1;
    if (!max) max = 10;

    var result = [];
    var count = _count(min, max);

    // get random paragraphs
    while (result.length < count) {

        result.push(genLipsumParagraph());

    }

    return result;
}

export var genLipsumText = function (min, max, pre, post) {
    if (!min) min = 1;
    if (!max) max = 10;
    //if (!min && !max) {
    //    min = 20;
    //    max = 60;
    //}

    if (!post) post = '\r\n\r\n';

    var paragraphs = genLipsumParagraphs(min, max);

    //var result = "";
    //var count = _count(min, max);

    //// append sentences until limit is reached
    //while (result.slice(0, -1).split(" ").length < count) {
    //    result += genLipsumSentences() + " ";
    //}
    //result = result.slice(0, -1)

    //// remove words
    //if (result.split(" ").length > count) {
    //    var punct = result.slice(-1);
    //    result = result.split(" ").slice(0, count).join(" ");
    //    result = result.replace(/,$/, "");
    //    result += punct;
    //}

    return pre + paragraphs.join(post + pre) + post;
}
