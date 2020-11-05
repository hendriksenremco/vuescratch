<template>
  <article class="article-summary">
    <h1>
      <nuxt-link :to="{ name: 'slug', params: { slug } }">{{
        title
      }}</nuxt-link>
    </h1>
    <article-background :image="image" />
    <author :author="author" :date="date" />
    <p class="article-summary__text">
      <slot />
    </p>
    <nuxt-link :to="{ name: 'slug', params: { slug } }">Read article</nuxt-link>
  </article>
</template>
<script>
import Author from '~/components/Author'
import ArticleBackground from '~/components/Article/Background'
export default {
  components: {
    Author,
    ArticleBackground,
  },
  props: {
    author: {
      type: Object,
      default: null,
    },
    date: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
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
