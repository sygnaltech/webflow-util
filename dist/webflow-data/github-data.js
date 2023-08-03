(() => {
  // src/webflow-data/github-data.ts
  var getGithubRepoTagsUrl = function(userOrg, repo) {
    return `https://api.github.com/repos/${userOrg}/${repo}/tags`;
  };
  var getGithubRepoTags = function(userOrg, repo) {
    const url = getGithubRepoTagsUrl(userOrg, repo);
    return new Promise((resolve, reject) => {
      const url2 = getGithubRepoTagsUrl(userOrg, repo);
      fetch(url2).then((response) => response.json()).then((data) => resolve(data)).catch((error) => console.error("Error:", error));
    });
  };
  var getGithubRepoTagLatest = function(userOrg, repo) {
    return new Promise((resolve, reject) => {
      getGithubRepoTags(userOrg, repo).then((res) => {
        resolve(res[0].name);
      }, (err) => {
      });
    });
  };
})();
//# sourceMappingURL=github-data.js.map
