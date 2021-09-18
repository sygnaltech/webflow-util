
// v2.1
// Sygnal Technology Group
// http://sygnal.com
// Purpose is to make it easier to obtain data from Google

export var GoogleSheetData = function (options) {

    const version = 'v2.1';

    this.getVersion = function () {
        return version;
    }

    // Option variables
    var vars = {
        logging: false,
    };

    var root = this;

    // Constructor
    this.construct = function (options) {
        $.extend(vars, options);

        if (vars.logging)
            console.log("Started Google Sheet Data Util " + version);

    };

    // Returns a Url to retrieve the CSV version of a Google Sheet
    // The sheet must be publicly accessible.
    this.getCsvUrl = function (id) {

        var url = `https://docs.google.com/spreadsheets/d/${id}/export?format=csv`;

        if (vars.logging)
            console.log(url);

        return url;
    }

}
