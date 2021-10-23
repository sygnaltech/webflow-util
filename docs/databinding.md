
- [Home](/webflow-util)

# Data-binding Form INPUTs & SELECTs

Data-binding is the original feature that WFU was built around. It developed out of a need to populate Form SELECTs with dynamic data from Webflow Collection Lists.

In this latest version, support for form INPUTs ( textboxes ) has been added, using HTML5's autocomplete features.

## How it Works

In WFU, data-binding involves two steps;

1. Creating a JSON datasource using a Webflow Collection List.
2. Processing that JSON into HTML and linking it to the INPUTs and SELECTs you designate.

Setup is relatively simple, and you can use the Collection List's built-in sorting and filtering options to precisely control the data you want in your Form controls.

## Getting Started

*Use the [demo examples](https://github.com/sygnaltech/webflow-util/tree/master/demo/webflow-forms/databinding) as a current reference for using each feature.*

**NOTE:** Here is a *outdated* [video overview](https://www.youtube.com/watch?v=xc7vx7YdK5I) of setting up databinding in WFU v2.0. I'll re-record soon. For now I'm leaving it as it will show you some of the internals on how the setup works.



### STEP 1 - Add the Library

There are currently no configuration options for the data-binding feature, so we'll use a *lo-code* integration approach.

Paste this code, exactly, into the **Before `</body>` tag** script area of your Page settings. If you are using data-binding on multiple pages, you might choose to do this in your site-wide settings.

```
<script type="module">
    import { dataBindAll } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util@3.0/src/locode/webflow-forms-helper.js';
    $(function () {
        dataBindAll();
    });
</script>
```



### STEP 2 - Create a Collection List Data Source

1. Create a Webflow `Collection List`, usually at the bottom of your page.

2. Bind it to the `Collection` you want to access data from.

3. In the Collection List Item, add an `HTML Embed` element.

4. Paste the following code into the `HTML Embed`.

```
<script type="application/json">
{
  "id": " (your item goes here) ",
  "text": " ( text item goes here) "
}
</script>
```

+ Where I have indicated with (notes), you'll need to insert the field you want for the item ID, and the text you want to display. 
+ Typically the ID would be unique, and the `slug` works great for that. You may have another field such as a product SKU that would be more appropriate.
+ The name is whatever field you want visible to the user.
+ In Webflow's Designer, use the **Add Field** widget at the top right of the Embed element to insert these
+ Make certain there are no spaces between your inserted tag, and the double quotes `"`.



5. Name your data source. We do this with a custom attribute on the Collection List itself;

+ Select your outermost Collection List element.
+ Add a custom attribute named `wfu-data`.
+ In the value, give it a unique name. I recommend all lowercase letters, no spaces or special characters. For example `blogposts` and `products` are good names.
+ *Remember this name*, you'll need it later.


6. Once you're all setup, you can make the Collection List invisible. Simply select the outermost Collection List element and mark it as invisible on all devices. If you do this, you won't see it anymore in the Webflow designer, but you can select it in the left-side Navigator.

*You have a data source!*

You can create as many collection data-sources as you need, but make certain they are each named differently.


### STEP 3 - Setup your Form

1. Now scroll to your form, and select the INPUT Textbox or SELECT List that you're wanting to data-bind.

2. Add a custom attribute directly to that form control, with the name `wfu-bind`. This tells WFU that you want to bind this control to a datasource.

3. For the value, enter the data source name that you chose above.


*You're done.*

To see data-binding in action, you'll need to publish your site, and view the published results. Scripts won't run in the Webflow designer.

# Troubleshooting

### It's not binding at all

If you're not seeing anything in your dropdown when you open your SELECT, or when you click on your INPUT field, here are some things you can check;

+ Double-check that you have the custom attribute `wfu-data` = (your data source name) on the outermost part of the Collection List.
+ Double-check that you have the custom attribute `wfu-bind` = (your data source name) on the INPUT or SELECT that you're wanting to data-bind.
+ Double-check that your datasource name is exactly the same on both.
+ Double-check that you have the script inserted in the right place in your page or site configuration.
+ Make sure that your filter, sort, and item limit settings on your Collection List actually retrieve the data you want. If you need you can put a temporary text field and bind to that to double-check what items you're pulling from your Collection. I recommend removing that test data before you publish to production.
+ Run through the instructions above again and re-verify everything.

### Something's weird in the data on Form Posts

For INPUT elements, the value posted is whatever the user types in that textbox. Pretty simple.

For SELECTS, the value posted is the `id` you specified in your script block. Make sure you chose the right field for that, and that you have no extraneous spaces.

# Advanced Notes

You can create as many collection data-sources as you want, but make certain they are each named differently. Webflow does have a limit on the number of Collection Lists per page, and these will count towards that.

If you happen to already have a collection list on the page that displays exactly the data you want, you can use that Collection List as your datasource. Simply put your Embed block there, and apply the `wfu-data` attribute to the Collection List. Don't mark the Collection List as invisible, however you can mark the Embed element as invisible to avoid a messy look in your Designer.

If you've hidden your Collection List, or your Embed, remember they're always available in your left-side navigation.

If you use your data-source on multiple pages, you can build your Collection List into a Symbol. Wrap your Collection list in a DIV, and turn the DIV into a Symbol. This will allow you to more easily access that outmost Collection List element if you need to.


