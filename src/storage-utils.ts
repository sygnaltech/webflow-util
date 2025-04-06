
/*
 * SA5
 * 
 * Sygnal Technology Group
 * https://www.sygnal.com
 * 
 * Storage Utilities
 */



export class StorageUtils { 

    static get localStorageAvailable(): boolean {
        try {
            const test = "__test__";
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch {
            return false;
        }
    }

    static get sessionStorageAvailable(): boolean {
        try {
            const test = "__test__";
            sessionStorage.setItem(test, test);
            sessionStorage.removeItem(test);
            return true;
        } catch {
            return false;
        }
    }

    static get cookiesAvailable(): boolean {
        try {
            const test = "__test__=1";
            document.cookie = test + "; path=/";
            const cookies = document.cookie;
            const available = cookies.includes("__test__=1");
            document.cookie = "__test__=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            return available;
        } catch {
            return false;
        }
    }

}


