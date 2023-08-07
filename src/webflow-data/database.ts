



export class Database {
    data = new Map();

    normalizeKey = function (key) {
        return key.toLowerCase();
    }

    // Add specified JSON document under key.
    add = function (key, json) {

        key = this.normalizeKey(key);

        // Convert string to JSON
        if (typeof json == 'string') {
            json = JSON.parse(json);
        }

        this.data.set(key, json);
    }

    getData = function (key) {

        key = this.normalizeKey(key);

        return this.data.get(key);
    }
    getDataSource = this.getData; // obsolete

    getCountOfRecords = function (dataSourceName) {
        return this.getDataSource(dataSourceName).length;
    }

    getDictionary = function (dataSourceName, keyField, valueField) {
        var dict = new Map();

        var ds = this.getDataSource(dataSourceName);

//        console.log(ds);

        for (var i = 0; i < ds.length; i++)
        {
//            console.log(`${0}: ${ds.length} ${ds[i].keyField} / ${ds[i].valueField}`);
            dict.set(
                ds[i][keyField],
                ds[i][valueField]
            );
        }

        console.log(dict);
        return dict;
    }

    getDictionaryFromRow = function (dataSourceName, row) {
        var dict = new Map();

        var ds = this.getDataSource(dataSourceName);

        for (const v in ds[row]) {
            dict.set(
                v,
                ds[row][v]
            );
        }

        return dict;
    }

} 

