
/*
 * webflow-form-ipinfo
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * For capturing sender IP info,
 * and appending to a form.
 */

export class WfuFormIPInfo {

    formBlock;
    form;

    config; // Optional config

    handler;

    prefix = "ip";

    constructor(elem, config) {

        this.handler = this;

        this.config = config;

        // Resolve Form Block pointer
        if ($(elem).is("form"))
            this.formBlock = $(elem).parent();
        else
            this.formBlock = $(elem);
        console.debug(this.formBlock);

        // Resolve Form pointer
        this.form = this.formBlock.children("form");
        console.debug(this.form);

    }

    appendIPInfo() {

        const handler = this.handler;
        const form = this.form;

        console.debug("WFU append IP Info to form.");

        // Get GeoIP info
        // and append in hidden fields 
        $.getJSON(
            "https://get.geojs.io/v1/ip/geo.json",
            function (data) {

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-address`,
                value: data.ip
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-country`,
                value: data.country
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-country-code`,
                value: data.country_code
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-region`,
                value: data.region
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-city`,
                value: data.city
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-timezone`,
                value: data.timezone
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-latitude`,
                value: data.latitude
            }).appendTo(form);

            $('<input>').attr({
                type: 'hidden',
                name: `${handler.prefix}-longitude`,
                value: data.longitude
            }).appendTo(form);

        });

    }

}
