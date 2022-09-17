
import { test, testObj } from './test-module.js';

$(function () {

    const options = {}; //   tableRenderOptions;
    options.responsive = false;

    test(options);
    test();

    //const optionsObj = new tableRenderOptionsObj();
    //optionsObj.responsive = false;

    //testObj(optionsObj);
    //testObj();

});

