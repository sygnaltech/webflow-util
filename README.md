# Webflow Utilities

This library provides a set of helper functions to simplify and streamline 
[Webflow](https://webflow.com/)
development. It's designed specifically to assist with overcoming certain limitations of Webflow, and add certain functionality.

It is also a practical exploration into the use of Javascript ES6 modules, NPM, and other state-of-the art web dev technologies, and how they can be used with Webflow.

*This library will be expanded as needed, and broken into modules for convenient selection of the parts you need.*


## Using Webflow Data

`webflow-data.js` is a simple **databinding utility** which is designed 
to use a Webflow Collection List as a data-source, extract data, 
and allow you to bind it in two ways;

1. To form SELECT controls ( dropdowns & listboxes ), so that users can pick from a CMS-generated list.
2. As dynamic attributes to Webflow-generated elements.

Here is a video overview of how to use `webflow-data` ( current as of v2.0 );

https://www.youtube.com/watch?v=xc7vx7YdK5I

Notes;

- `webflow-data` works with any Collection List, filtered and sorted as you choose, so you get complete control.
- You choose what to extract and use from the Collection List, and how to name it.
- The datasource is prepared as JSON, so it is available to your other scripts as well.
- The databinding routines can then bind that to a form SELECT element.
- The example HTML is "dirty" in that it is full of Webflow markup. This demonstrates how we navigate the Webflow-generated content structures such as Collection Lists.

*Use the examples as a reference for using each feature.*

### STEP 1 - Add the Library

You can embed our library directly from the [JSDelivr](https://en.wikipedia.org/wiki/JSDelivr) CDN.

In your Page *settings* (click the gear icon), add the script reference to the **Before </body> tag** section.

```
<script src="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@latest/dist/webflow-data.min.js"></script>
```

*Note JSDelivr's [versioning](https://www.jsdelivr.com/features) support.*

We recommend that you specify the **major** and **minor** version numbers in your script reference.
Replace `@latest` with e.g. `@1.2` or the library version you want to use.

*This will protect you from breaking changes in new versions we release.*

### STEP 2 - Setup your Data Source

1. Create a Webflow `Collection List`.

    1. Bind it to the `Collection` you want.
    1. Set sorting and filtering as you want.
    1. In the Item, create an `HTML Embed` element

2. Add an `HTML Embed` element to the Collection

3. Paste the following code into the `HTML Embed`.

```
<script type="application/json" data="mydata">
{
  "id": " (your item goes here) ",
  "text": " ( text item goes here) "
}
</script>
```

4. Configure the `Embed` code as follows;

    1. set the script's `data` attribute to the name you want for your datasource. You can have create several different datasources on the same page if you like.

    1. for the `id`, use whatever **Add Field** item you want, generally `Slug` is the best field to use.

    1. for the `text`, use whatever **Add Field** item you want displayed as the text in the SELECT.

    1. Make the Collection List invisible, if you want it hidden in the designer ( this will not affect displayed output ).  If you do this, you won't see it anymore in the Webflow designer, but you can select it in the left-side Navigator.

### STEP 3 - Setup your Form

1. Add a `Form` and a `Select` element in the Webflow designer.  

1. Apply a `data-source` custom attribute, which has the same name that you've given your datasource.

### STEP 4 - Setup the Databinding

In your Page *settings* (click the gear icon), add the script reference to the **Before </body> tag** section, right after your script.


```
    <script>

        // Instantiate WebflowDataUtil object
        var webflowDataUtil = new WebflowDataUtil();

        $(function () {

            // Databind
            webflowDataUtil.dataBindAll();

        });

    </script>
```


# Options

WebflowDataUtil can be instantiated with options, as in;

```
// Instantiate MailerLiteUtil object
var webflowDataUtil = new WebflowDataUtil({
    logging: true, // enable logging to console
});
```

## `logging = true | false`

*Defaults to false.*

Enables or disables logging activity output to the console.



# Technical Notes

**Webflow Utilities (WFU)** is an experimental project as much as a practical toolset. 
The team developing WFU is applying the most current javascript technolgoies where possible 
as a practical implementation exercise.

### jQuery

WFU is requires jQuery, which is already embedded in all Webflow-hosted sites.

### Object-Oriented patterns

As much as possible, our library is designed using OO patterns.

### JavaScript modules

As of 2.2, WFU uses 
[JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
as a way to better define and separate code. 
These are widely supported across modern browsers, however are not supported by Internet Explorer.

### Node Package Manager (NPM)

Ideally, we'd like to build this toolset as a proper NPM package, 
as it would allow for much richer scripting options, a plug-in style architecture, easy script updating and dependency management.

However to our knowledge there is currently no native way to make this work with Webflow's hosting environment.
At the moment any NPM-style functionality such as the `package.json` only exist as a placeholder
for these future goals.
