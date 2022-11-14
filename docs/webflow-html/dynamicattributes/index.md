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


**This library allows you to dynamically apply custom attributes to HTML elements.**

- This is most valuable within a Webflow Collection List, where the attributes are changing and unknown in advance.

- Attributes are applied in WFU's post-processing script, executed immediately after the page loads.

- WFU has no restrictions on what custom attributes you can add, or which elements you can add them to.
This means that Webflow's reserved fields are not a barrier here. 

## DEMO - Dynamic Attributes

<a class="button is-danger" href="https://wfu-dynamic-attributes.webflow.io/" target="_blank">View Demonstration</a>

<a class="button is-danger" href="https://preview.webflow.com/preview/wfu-dynamic-attributes?utm_medium=preview_link&utm_source=designer&utm_content=wfu-dynamic-attributes&preview=dba3779908e5421fa00dfabe0a8fca46&workflow=preview" target="_blank">View Project</a>



<span class="tag is-danger is-medium is-light">Demonstration</span>

Dynamic attributes are not natively visible. *View source* in order to see the dynamic attributes in the HTML of this demo page.

For demonstration purposes, I've applied the attributes as `style` attributes, which apply a visible background color.



<div class="section tint wf-section">
    <div class="container w-container">
        <div class="blog-posts-list-wrapper w-dyn-list">
            <div role="list" class="blog-posts-list archive w-clearfix w-dyn-items w-row">
                <div role="listitem" class="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6">
                    <a href="/blog/ecommerce-product-photography-tips-a-beginners-guide" style="background-image:url(&quot;https://assets.website-files.com/61287c86fd689080a7ac6fe4/61287c86fd6890c56eac6ff1_Photo-1.jpg&quot;)" class="simple-blog-image-block small w-inline-block"><div class="blog-post-overlay light"></div></a>
                    <a href="/blog/ecommerce-product-photography-tips-a-beginners-guide" class="blog-post-title-link archive-title">Ecommerce &lt;product&gt; &quot;photography&quot; tips: a beginner's guide</a>
                    <div class="w-embed w-script">
                        <data type="wfu-apply-attr" apply="prev">
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
                        <data type="wfu-apply-attr" apply="prev">
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
                        <data type="wfu-apply-attr" apply="next">
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
                        <data type="wfu-apply-attr" apply="prev">
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
                        <data type="wfu-apply-attr" apply="parent">
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
                        <data type="wfu-apply-attr" apply="prev">
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






## Getting Started ( NOCODE )


### STEP 1 - Add the Library


There are currently no configuration options for this library, so we'll use a *no-code* integration approach.

Add this CSS script to the HEAD of your site or page.

```
<link rel="stylesheet" href="{{ site.liburl }}/dist/css/webflow-html.css">
```

Add this JS reference to the BODY of your site or page.

```
<script type="module" src="{{ site.liburl }}/src/nocode/webflow-html.js"></script>
```



### STEP 2 -Add an HTML Embed with your custom Attributes

Put an HTML Embed right after, or right inside of the element you wish to affect.

Paste in the following code.


```
<data 
  wfu-attr="style" 
  wfu-attr-target="prev" 
  wfu-attr-val="background-color: yellow;"
  ></data>
```

- `wfu-attr` indicates the name of the attribute you want to add
- `wfu-attr-target` identifies the element you want to apply it to, one of;
  - `prev` indicates the prior sibling.
  - `next` indicates the following sibling.
  - `parent` indicates the containing element.
- `wfu-attr-val` is the value you want applied. Use Webflow's CMS field embed for this, for dynamic values.

NOTE: Any existing attribute will be overwritten.

- Yes you can put multiple attributes in the same embed, and even target them differently

## Future

May allow value modification;

- Prepend, append 
- Regex transforms 

May allow advanced targeting;

- jQuery or CSS selectors 




