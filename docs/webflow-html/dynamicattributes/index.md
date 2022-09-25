---
layout: page
title: Dynamic Attributes
subtitle: webflow-html
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
output:
  html_document:
    css: ../../demo.css
---

<span class="tag is-danger is-medium is-light">Demonstration</span>

**This tool allows you to dynamically apply custom attributes to HTML elements.**

- This is most valuable within a Webflow Collection List, where the attributes are changing an unknown in advance.

- Attributes are applied in WFU's post-processing script, executed immediately after the page loads.

- WFU has no restrictions on what custom attributes you can add, or which elements you can add them to.

## DEMO - Dynamic Attributes

Note you must *view source* in order to see the dynamic attributes in the HTML.

For demonstration purposes, I've applied the attributes as `style` attributes, which apply a visible background color.



<div class="section tint wf-section">
    <div class="container w-container">
        <div class="blog-posts-list-wrapper w-dyn-list">
            <div role="list" class="blog-posts-list archive w-clearfix w-dyn-items w-row">
                <div role="listitem" class="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6">
                    <a href="/blog/ecommerce-product-photography-tips-a-beginners-guide" style="background-image:url(&quot;https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd6890c56eac6ff1_Photo-1.jpg&quot;)" class="simple-blog-image-block small w-inline-block"><div class="blog-post-overlay light"></div></a>
                    <a href="/blog/ecommerce-product-photography-tips-a-beginners-guide" class="blog-post-title-link archive-title">Ecommerce &lt;product&gt; &quot;photography&quot; tips: a beginner's guide</a>
                    <div class="w-embed w-script">
                        <data type="apply-attr" apply="prev">
                            <data attr="style" value="background-color: yellow;"></data>
                        </data>
                    </div>
                    <div class="archive-title-wrapper w-clearfix">
                        <div class="archive-info-block w-clearfix">
                            <img src="https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd68906f45ac6ff0_Testimonial-10.jpg" alt="" class="blog-author-image" />
                            <div class="blog-author-name archive">Peter Johnson</div>
                        </div>
                        <div class="archive-info-block w-clearfix">
                            <div class="blog-post-date archive-date">July 4, 2016</div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6">
                    <a href="/blog/why-your-design-process-should-start-with-content" style="background-image:url(&quot;https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd68901d70ac6fee_Photo-6.jpg&quot;)" class="simple-blog-image-block small w-inline-block"><div class="blog-post-overlay light"></div></a>
                    <a href="/blog/why-your-design-process-should-start-with-content" class="blog-post-title-link archive-title">Why your design process should start with content</a>
                    <div class="w-embed w-script">
                        <data type="apply-attr" apply="prev">
                            <data attr="style" value="background-color: yellow;"></data>
                        </data>
                    </div>
                    <div class="archive-title-wrapper w-clearfix">
                        <div class="archive-info-block w-clearfix">
                            <img src="https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd68906f45ac6ff0_Testimonial-10.jpg" alt="" class="blog-author-image" />
                            <div class="blog-author-name archive">Peter Johnson</div>
                        </div>
                        <div class="archive-info-block w-clearfix">
                            <div class="blog-post-date archive-date">July 4, 2016</div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6">
                    <a href="/blog/how-to-show-and-hide-content-with-webflow-click-interactions-copy" style="background-image:url(&quot;https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd6890d83aac6fef_Photo-5.jpg&quot;)" class="simple-blog-image-block small w-inline-block"><div class="blog-post-overlay light"></div></a>
                    <a href="/blog/how-to-show-and-hide-content-with-webflow-click-interactions-copy" class="blog-post-title-link archive-title">How to show and hide content with Webflow click interactions</a>
                    <div class="w-embed w-script">
                        <data type="apply-attr" apply="next">
                            <data attr="style" value="background-color: yellow;"></data>
                        </data>
                    </div>
                    <div class="archive-title-wrapper w-clearfix">
                        <div class="archive-info-block w-clearfix">
                            <img src="https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd68906f45ac6ff0_Testimonial-10.jpg" alt="" class="blog-author-image" />
                            <div class="blog-author-name archive">Peter Johnson</div>
                        </div>
                        <div class="archive-info-block w-clearfix">
                            <div class="blog-post-date archive-date">July 4, 2016</div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6">
                    <a href="/blog/writing-funny-how-to-improve-your-website-ux-with-humor" style="background-image:url(&quot;https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd68904692ac6ff3_Photo-3.jpg&quot;)" class="simple-blog-image-block small w-inline-block"><div class="blog-post-overlay light"></div></a>
                    <a href="/blog/writing-funny-how-to-improve-your-website-ux-with-humor" class="blog-post-title-link archive-title">Writing funny: how to improve your website UX with humor</a>
                    <div class="w-embed w-script">
                        <data type="apply-attr" apply="prev">
                            <data attr="style" value="background-color: lightblue;"></data>
                        </data>
                    </div>
                    <div class="archive-title-wrapper w-clearfix">
                        <div class="archive-info-block w-clearfix">
                            <img src="https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd68906f45ac6ff0_Testimonial-10.jpg" alt="" class="blog-author-image" />
                            <div class="blog-author-name archive">Peter Johnson</div>
                        </div>
                        <div class="archive-info-block w-clearfix">
                            <div class="blog-post-date archive-date">July 4, 2016</div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6">
                    <a href="/blog/9-landing-page-design-tips-that-improve-ux-and-conversions" style="background-image:url(&quot;https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd6890a59bac6ff2_Photo-2.jpg&quot;)" class="simple-blog-image-block small w-inline-block"><div class="blog-post-overlay light"></div></a>
                    <a href="/blog/9-landing-page-design-tips-that-improve-ux-and-conversions" class="blog-post-title-link archive-title">9 landing page design tips that improve UX and conversions</a>
                    <div class="w-embed w-script">
                        <data type="apply-attr" apply="parent">
                            <data attr="style" value="background-color: yellow;"></data>
                        </data>
                    </div>
                    <div class="archive-title-wrapper w-clearfix">
                        <div class="archive-info-block w-clearfix">
                            <img src="https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd68906f45ac6ff0_Testimonial-10.jpg" alt="" class="blog-author-image" />
                            <div class="blog-author-name archive">Peter Johnson</div>
                        </div>
                        <div class="archive-info-block w-clearfix">
                            <div class="blog-post-date archive-date">July 4, 2016</div>
                        </div>
                    </div>
                </div>
                <div role="listitem" class="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6">
                    <a href="/blog/10-ecommerce-design-tips-to-turn-one-time-buyers-into-loyal-customers" style="background-image:url(&quot;https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd6890c56eac6ff1_Photo-1.jpg&quot;)" class="simple-blog-image-block small w-inline-block"><div class="blog-post-overlay light"></div></a>
                    <a href="/blog/10-ecommerce-design-tips-to-turn-one-time-buyers-into-loyal-customers" class="blog-post-title-link archive-title">10 ecommerce design tips to turn one-time buyers into loyal customers</a>
                    <div class="w-embed w-script">
                        <data type="apply-attr" apply="prev">
                            <data attr="style" value="background-color: lightgreen;"></data>
                        </data>
                    </div>
                    <div class="archive-title-wrapper w-clearfix">
                        <div class="archive-info-block w-clearfix">
                            <img src="https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd68906f45ac6ff0_Testimonial-10.jpg" alt="" class="blog-author-image" />
                            <div class="blog-author-name archive">Peter Johnson</div>
                        </div>
                        <div class="archive-info-block w-clearfix">
                            <div class="blog-post-date archive-date">July 4, 2016</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 

## Limitations

<ul>
    <li>None identified.</li>
</ul>


## How to Use

### Setup

Include JQuery.

Just prior to the `</body>` tag, embed this source in your page (or side-wide).

Update the library URL to reference the current version of WFU, to avoid breaking changes.

```
<script type="module">

    import { applyDynamicAttributes } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-html.js';

    $(function () {

        // Apply dynamic attributes
        applyDynamicAttributes();

    });

</script>
```


### Add an HTML Embed

Put an HTML Embed right after, or right inside of the element you wish to affect.

Paste in the following code.


```
<data type="apply-attr" apply="prev">
    <data attr="style" value="background-color: yellow;></data>
</data>
```

In the innermost `<data>` item, set the `attr` to the name of the attriute you want added, and the `value` to whatever value you like. Either can be dynamically defined in your Collection data, if the HTML Embed is inside of a Collection List.

On the outermost `<data>` element, specify the element that you want the attribute applied to.

- `prev` indicates the prior sibling.
- `next` indicates the following sibling.
- `parent` indicates the containing element.


## Technical Notes

- HTML5's `<data>` element displays any content between the tags. Since this is intended to be invisible, we use attributes only.



<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61287c86fd6890b8d2ac6fdc" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

<script type="module">

    import { applyDynamicAttributes } from '{{ site.liburl }}/src/modules/webflow-html.js';

    $(function () {

        // Apply dynamic attributes
        applyDynamicAttributes();

    });

</script>



