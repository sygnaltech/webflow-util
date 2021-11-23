---
layout: page
title: Design Philosophy
#subtitle: Make your webflow site awesome
menubar: menu
hero_height: is-small
toc: true
---



### Separation of Functionality

As the library grows, I found the need to partition the code better for accessibility & reusability. 

- Webflow-specific code is being distinguished from more general functionality.
- Libraries specific to Webflow implementation are prefixed with `webflow-`.
- Other libraries will be named, grouped and prefixed according to the functional intent
and the platforms they pertain to.
- This means that much of the functionality here can be used in non-Webflow sites, or in sites that you are hosting separately. Around that capability is a Webflow-specific wrapper that applies those features in Webflow's unique HTML-generation and hosting-environment context.

### 3 Distinct Integration Approaches

I want to embrace the reality that many Webflow designers are unfamiliar with programming,
while others need maximum functionality.

To support a wide range of users, I'm conceptually dividing integration approaches into 3 zones;

- **Code.** *Programmers* will generally use the libraries under `src/modules` directly. 
These functions and libraries can be arranged to accomplish complex tasks with unique configurations, and using these modules directly gives you full access to their capabilities.

- **Lo-Code.** *Designers* with basic scripting knowledge are provided with *locode* libraries that
encapsulate the most commonly-used functionality into single function calls.
These libraries exist under `/src/locode` and have a `-helper` suffix. These will provide the core functionality of the full libraries, with minimal setup.

- **No-Code.** Where possible, I intend to offer codeless possibilities where the functionality is automatically added by simply adding the library. Paste in the library refernce, tag your elements for the functionality you want, and everything else happens automatically. This entirely avoids script-writing, while giving you much of the functionality designers want.

