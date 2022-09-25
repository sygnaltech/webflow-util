---
layout: page
title: Jekyll Liquid TESTS
subtitle: webflow-data
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

{% if site.url == "http://localhost:4000" %}
{% assign lib_url = "https://localhost" %}
{% else %}
{% assign lib_url = "https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util" %}
{% endif %}

## Implementation

https://jekyllrb.com/docs/liquid/tags/

https://jekyllrb.com/docs/liquid/filters/

{% highlight html %}
<script type="module">
import { createWebflowPreviewLink } from '{{ site.liburl }}/src/modules/webflow-demo.js';
$(function () {
    $("#previewLink").attr("href", 
  		createWebflowPreviewLink('4d388483d99c6cc36c58ae966e92c615')
      );    
});
</script>
{% endhighlight %}

```
<script type="module">
import { createWebflowPreviewLink } from '{{ site.liburl }}/src/modules/webflow-demo.js';
$(function () {
    $("#previewLink").attr("href", 
  		createWebflowPreviewLink('4d388483d99c6cc36c58ae966e92c615')
      );    
});
</script>
```

Best practices;

- Put in the site-level configuration so that it appears on all pages. Then you can choose which pages actually utilize it.





