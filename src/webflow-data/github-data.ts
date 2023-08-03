
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

        fetch(url)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => console.error('Error:', error));
        

    });

}

export var getGithubRepoTagLatest = function (userOrg, repo) {

    return new Promise((resolve, reject) => {

        getGithubRepoTags(userOrg, repo)
            .then((res) => {
                resolve(res[0].name);
            }, (err) => {

            });

    });

}

//$.get(url).done(data => {
//    const versions = data.sort((v1, v2) => semver.compare(v2.name, v1.name));
//    $('#result').html(versions[0].name);
//});