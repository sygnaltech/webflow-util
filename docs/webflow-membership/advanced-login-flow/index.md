---
layout: page
title: Webflow Membership Advanced Log-In & Sign-Up Flow
subtitle: webflow-membership-routing
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-membership-routing" %}
{% endif %}

## Webflow Membership Advanced Log-In & Sign-Up Flow

<!--
<a class="button is-danger" href="https://webflow-collections.webflow.io/formatting-numbers" target="_blank">View Demonstration in Webflow</a>
--> 


<div class="notification is-danger">
<b>BETA</b> - While Memberships is in BETA, this library
will track that BETA status.
</div>


This feature allows you to enhance the Sign-Up / Log-In flow. 

You can;

- Take users to a special page on their first log-in
- Take users to a member home page on subsequent log-ins
- Have users return to the current page, after log-in

NOTE: There are two primary contexts for login, 
which we describe as explicit, and implicit.
Explicit is when the user clicks a login button, or specifically requests log-in.
Implicit is when the user requested a secure page, and Webflow redirect them
to login to verify their access. 

Implicit login flows are important, and are protected from interference. 




## Usage Notes

This libary is not attributes based, 
but rather has routing configuration options in its setup.

There are currently two configurations options;

- `routeAfterLogin` - specifies an optional path to redirect users after an explicit login.
    - Recognizes a special path of `.`, which means, return to the current page.
- `routeAfterFirstLogin` - specifies an optional path for the first time a user logs in. 




## Getting Started ( LOCODE )


### STEP 1 - Add the Library


Add this script to the custom code HEAD of your site.

```
<!-- Membership routing -->
<script type="module">
import { WfuMembershipRouting } from '{{ site.liburl }}/src/modules/webflow-membership-routing.js';
new WfuMembershipRouting({
    routeAfterLogin: "/u/home",
    routeAfterFirstLogin: "/u/new"
}).routeUser();
</script>
```

Configure the routing options to paths you prefer.
These can be secured pages (which require login), or un-secured.

Note that if you use a secured page, you will want to make certain that all of the users
you redirect there have the appropriate access group. 

See notes above.
