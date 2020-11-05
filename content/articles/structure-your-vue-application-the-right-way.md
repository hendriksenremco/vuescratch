---
title: How to structure your Vue.js application the right way
author: remcohendriksen
image: vue-structure-code.jpg
---

Structuring a Vue application can big challenge. Especially when your application grows bigger. To keep your project understandable in the long run, you need to force yourself to work a certain way.

That's were standards and good conventions become really handy.
Never worry about how you should name things and where to place them.
With a few examples, i will show you how i structured the blog you are watching right now. So you always can look at the source-code of this page for some more insight.

## What are you building?

When starting out a new project, it is a must to have somekind of design-file. Even if it is your personal project where you now exactly what you are going to build. At some point you will struggle to get an element lay out in a nice way. Or you maybe don't remember anymore how much spacing an element should have. A look at your design-file is enough to get those questions answered.

> Strictly split your design-phase and development-phase for better focus.

It may sound obvious, but for many developers it may not be clear what they have to build. Letting a developer think about what he has to build costs effort. The mind has to switch to another way of thinking. Therefore it's good to have clear what you are building before you start developing. Strictly split your different phases.

## Enough philosophy, show me some code now...

```vue
<template>
  <article class="article-summary">
    <h1>
      <nuxt-link :to="{ path: slug }">{{ title }}</nuxt-link>
    </h1>
    <article-background :image="image" />
    <author :slug="author" :date="date" />
    <p class="article-summary__text">
      <slot />
    </p>
    <nuxt-link :to="{ path: slug }">Read article</nuxt-link>
  </article>
</template>
<script>
import Author from "~/components/Author"
import ArticleBackground from "~/components/Article/Background"
export default {
  components: {
    Author,
    ArticleBackground,
  },
  props: {
    author: {
      type: String,
      default: "",
      required: true,
    },
    date: {
      type: String,
      default: "",
      required: true,
    },
    image: {
      type: String,
      default: "",
      required: false,
    },
    slug: {
      type: String,
      default: "",
      required: true,
    },
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
}
</script>
<style lang="scss">
.article-summary {
  position: relative;
  overflow: hidden;

  h1 a {
    color: $white;
    text-decoration: none;

    &:hover {
      color: $accent;
    }
  }

  .author {
    margin: $spacing * 4 0;
  }

  &__text {
    margin-bottom: $spacing * 4;
  }
}
</style>
```

This is a component which is used on the homepage. It's shows a summary of a blog-post.
A few things are going on here, which need explanation. The code is used on this blog, so you can always check the source-code.

## Imports

- Split up code which may be used somewhere else
- Think about [seperation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns#:~:text=In%20computer%20science%2C%20separation%20of,code%20of%20a%20computer%20program.)
- Place components who are related to each other in the same subdirectory
- Be consistent in the naming of your components. And follow the [Vue style guide for component naming](https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential)

## Props and slots

- Use [props](https://vuejs.org/v2/guide/components-props.html) to send data to a component. A single string, a single number or a date
- Use [slots](https://vuejs.org/v2/guide/components-slots.html) to send complexer data too your components like other components or blocks of html
- Setting the required property on props prevents you from making errors in the future

## BEM naming convention

I am not going to explain how BEM works here, because [getbem.com](http://getbem.com/) does this already really good.

Having a methodology for your css-naming can free up your mind a lot. BEM is easy to use and can be used in any kind of project which uses CSS.

- Use underscores when you add a child-element
- Use dashes when you want to modify an element

A small navigation example with BEM-naming:

```vue
<template>
  <header class="navigation" :class="{ 'navigation--sticky': sticky }">
    <a href="#" v-for="link in links" class="navigation__item">
      {{ link.title }}
    </a>
  </header>
</template>
<script>
export default {
  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style>
.navigation {
  display: flex;
  width: 100%;
  height: 48px;
  position: relative;
}
.navigation__link {
  color: blue;
  text-decoration: underline;
}
.navigition--sticky {
  position: sticky;
}
</style>
```

## SCSS variables and nesting

SCSS makes the use of BEM even easier.
Because of the nesting capabilities of SCSS, your code becomes a lot cleaner.

The style block in the navigation example above becomes this:

```vue
<style lang="scss">
.navigation {
  display: flex;
  width: 100%;
  height: 48px;
  position: relative;

  &__link {
    color: blue;
    text-decoration: underline;
  }

  &__sticky {
    position: sticky;
  }
}
</style>
```

This is the one of the reasons to use scss as a pre-processor for your css.
The other reason is working with variables. For a detailed explanation of how SCSS-variables, have a look at [sass-lang.com](https://sass-lang.com/).

Have all your colors, fonts and spacing variables in one file to keep your styling consistent. Set it up once and never think about a hexcode or font-name again.

```scss[variables.scss]
$black: #171717;
$white: #fff;
$accent: #99df3f;
$blue: #3f46df;
$grey-darker: #272737;
$grey: #7a7a8c;
$red: #df3f3f;
$cyan: #3fc2df;

$font-base: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
$font-heading: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;

$breakpoint-desktop: 1600px;
$breakpoint-tablet: 1200px;
$breakpoint-mobile: 520px;

$spacing: 8px;
```

Make sure that these variables are included globally so that you can use them everywhere in your project.
If you are using [Nuxt.js](https://nuxtjs.org/), you can use [@nuxtjs/style-resources](https://www.npmjs.com/package/@nuxtjs/style-resources) for this.
In a Vue application you can include it in your main component to make it globally available.

## That's it for now

If you make this way of building components your own, you have a great workflow to make the best Vue applications.

Leave a comment below if you have got any questions about this article.
