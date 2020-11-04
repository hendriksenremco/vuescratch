<template>
  <div class="article-breadcrumbs">
    <div class="article-breadcrumbs__link">Article</div>
    <!-- <nuxt-link :to="{ path: '/' }" class="article-breadcrumbs__link"
      >Home</nuxt-link
    >
    <span class="article-breadcrumbs__seperator">/</span>
    <nuxt-link
      :to="{ path: '/articles' }"
      href="#"
      class="article-breadcrumbs__link"
      >Articles</nuxt-link
    > -->
  </div>
</template>
<style lang="scss">
.article-breadcrumbs {
  font-size: 1rem;
  color: $grey-dark;

  &__link {
    color: $grey;
    font-family: $font-heading;
    font-weight: 700;
    text-decoration: none;
    margin: 0 $spacing / 2;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      color: $accent;
    }
  }
}
</style>
