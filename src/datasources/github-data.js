
/*
 * datasources-github
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * Helps extract information from Github
 */

export var getGithubRepoTagsUrl = function (userOrg, repo) {

    return `https://api.github.com/repos/${userOrg}/${repo}/tags`;
}

export var getGithubRepoTags = function (userOrg, repo) {

    const url = getGithubRepoTagsUrl(userOrg, repo);

    return new Promise((resolve, reject) => {

        const url = getGithubRepoTagsUrl(userOrg, repo);

        $.get(url).done(data => {
            //        const versions = data.sort((v1, v2) => semver.compare(v2.name, v1.name));
            //        $('#result').html(versions[0].name);
            resolve(data);
        });

    });

}

//import { dataBindAllFormSelects } from '../modules/webflow-form.js';

//export var dataBindAllForms = function () {

//    dataBindAllFormSelects();

//}



// const gitHubPath = 'dandv/local-iso-dt';  // example repo
// const url = 'https://api.github.com/repos/' + gitHubPath + '/tags';

//$.get(url).done(data => {
//    const versions = data.sort((v1, v2) => semver.compare(v2.name, v1.name));
//    $('#result').html(versions[0].name);
//});