<template>
  <div class="drawer" :class="{ 'drawer--show': show }">
    <div class="drawer__bg" @click="$emit('close')"></div>
    <div class="drawer__content">
      <nuxt-link
        v-for="link in links"
        :key="link.path"
        class="drawer__item"
        :to="link.path"
      >
        {{ link.title }}
      </nuxt-link>
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
          path: '/home',
          title: 'Home',
        },
        {
          path: '/articles',
          title: 'Articles',
        },
        {
          path: '/about',
          title: 'About',
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
