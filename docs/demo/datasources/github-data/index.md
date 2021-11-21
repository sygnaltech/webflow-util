---
layout: page
title: Github Repo Info
# subtitle: DEMO
menubar: menu
hero_height: is-small
# toc: true
# tabs: webflow-table
---

# Github Repo Info

This module wraps the Github API to extract basic tag information about the specified repository.

The main purpose is to simply;

1. Determining the tags that have been published
2. Identifying the most recent tag, for reference in documentation


<span class="tag is-danger is-medium">Demonstration</span>


## Enter a Repo

<div class="block">

<div class="field">
    <label class="label">Github User or Organization</label>
    <div class="control">
        <input id="userOrg" class="input" type="text" placeholder="Github User or Org" value="sygnaltech">
    </div>
</div>

<div class="field">
    <label class="label">Repository</label>
    <div class="control">
        <input id="repo" class="input" type="text" placeholder="Github repo" value="webflow-util" >
    </div>
</div>

<button class="button is-dark" id="refresh">Retrieve Info</button>

</div>


## Demo JSON content

<p>Latest version: <b id="latest1"></b></p>

<div class="demo area grey large">
    <pre id="json1">Loading...</pre>
</div>


<script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" crossorigin="anonymous"></script>

<script type="module">

    import {
        getGithubRepoTagsUrl,
        getGithubRepoTags, getGithubRepoTagLatest
    } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/datasources/github-data.js';


    $(function () {

        $("#refresh").click(function () {
            refresh();
        });

    });

    function refresh() {

        getGithubRepoTags($("#userOrg").val(), $("#repo").val())
            .then((res) => {

                $("#json1").text(
                    JSON.stringify(
                        res,
                        null,
                        2 // pretty print
                    )
                );

            }, (err) => {
                console.log(err);
            });

        getGithubRepoTagLatest($("#userOrg").val(), $("#repo").val())
            .then((res) => {
                $("#latest1").text(
                    res
                );
            }, (err) => {
                console.log(err);
            });

    }

</script>

