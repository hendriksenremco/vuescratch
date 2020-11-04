---
title: Building a mobile navigation drawer with Vue.js
author: remcohendriksen
image: kitchen-drawer.jpg
---

A navigation drawer is the most common way to navigate through site on mobile devices. In this post i will show you how to do it.

```vue
<template>
  <div class="drawer" :class="{ 'drawer--show': show }">
    <div class="drawer__bg" @click="$emit('close')"></div>
    <div class="drawer__content">
      <router-link
        v-for="link in links"
        :key="link.path"
        class="drawer__item"
        :to="link.path"
      >
        {{ link.title }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        {
          path: "/home",
          title: "Home",
        },
        {
          path: "/articles",
          title: "Articles",
        },
        {
          path: "/about",
          title: "About",
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.drawer {
  pointer-events: none;

  &__bg {
    background-color: rgba($black, 0.75);
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 1s ease;
    z-index: 10;
  }
  &__content {
    background-color: $white;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: $spacing * 50;
    z-index: 11;
    transform: translateX(100%);
    transition: transform 1s ease;
  }
  &__item {
    color: $black;
    padding: $spacing * 4;
    text-align: center;
  }

  &--show {
    pointer-events: all;

    .drawer__bg {
      opacity: 1;
    }
    .drawer__content {
      transform: translateX(0);
    }
  }
}
</style>
```

If you don't understand why this structure is used, please read the post [How to structure your Vue.js application the right way](/structure-your-vue-application-the-right-way).

## How is it suppose to work

- We assume that we have a button in a toolbar which has to be clicked to open the drawer
- A click on that button toggles the show-prop on the drawer
- The drawer can be closed by clicking on the background of the drawer

## Styling the drawer

The SCSS does the most of the work in this component.
First we style the drawer as if it were always open. We make two elements with `position:fixed;` applied so that they always float over the content. Setting a high enough `z-index` is important.

```scss[Drawer.vue]
.drawer {
  pointer-events: none;

  &__bg {
    background-color: rgba($black, 0.75);
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  &__content {
    background-color: $white;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 90vw;
    max-width: $spacing * 50;
    z-index: 11;
  }
}
```

If we are happy with the result we add `transform: translateX(100%)`to the `drawer\_\_content` to hide to right of the screen. The background is hidden by setting `opacity: 0`.

```scss[Drawer.vue]
.drawer {
    pointer-events: none;
  &__bg {
    ...
    opacity: 0;
    transition: opacity 1s ease;
    ...
  }
  &__content {
    ...
    transform: translateX(100%);
    transition: transform 1s ease;
  }
```

When the `drawer--show` class is applied we transition the elements back to `opacity: 1` and `transform: translateX(0)`.
Also it's important to enable the pointer-events again. Otherwise nothing on page is clickable again. Try it ;).

```scss[Drawer.vue]
.drawer {
  &--show {
    pointer-events: all;

    .drawer__bg {
      opacity: 1;
    }
    .drawer__content {
      transform: translateX(0);
    }
  }
}
```

## Markup and javascript

The heavy lifting is done now. We only have to put the html in place and add some Vue-data and were done. Let's go on.

```html[Drawer.vue]
<template>
  <div class="drawer" :class="{ 'drawer--show': show }">
    <div class="drawer__bg" @click="$emit('close')"></div>
    <div class="drawer__content">
      <router-link
        v-for="link in links"
        :key="link.path"
        class="drawer__item"
        :to="link.path"
      >
        {{ link.title }}
      </router-link>
    </div>
  </div>
</template>
```

```vue[Drawer.vue]
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        {
          path: "/home",
          title: "Home",
        },
        ...
      ],
    }
  },
}
</script>
```

The two important things here are settings the `dialog--show` show class and emitting the close event.

`{ 'drawer--show': show }` sets the class `drawer--show` when the show-prop is set to true.

`@click="$emit('close')"` emits an event out of the component to let other components know that the drawer is closed.

## Usage

A small example of how to use this drawer from within een layout.

```vue
<template>
  <div>
    <toolbar />
    <drawer :show="showDrawer" @close="showDrawer = false" />
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import Drawer from "~/componetns/Drawer"
export default {
  components: {
    Drawer,
  },
  data() {
    return {
      showDrawer: true,
    }
  },
}
</script>
```

Leave a comment below if you have got any questions about this article.
