<template>
  <article class="article-summary">
    <h1>
      <nuxt-link :to="{ name: 'slug', params: { slug } }">{{
        title
      }}</nuxt-link>
    </h1>
    <lazy-article-background :image="image" />
    <lazy-author
      :author="author.fields.name"
      :image="author.fields.image.fields.file.url"
      :date="date"
    />
    <p class="article-summary__text">
      <slot />
    </p>
    <nuxt-link :to="{ name: 'slug', params: { slug } }">Read article</nuxt-link>
  </article>
</template>
<script>
export default {
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
  max-width: $breakpoint-tablet;
  position: relative;
  overflow: hidden;

  h1 {
    margin-bottom: 0;
  }

  h1 a {
    color: var(--body-fg);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }

  &__text {
    margin: 0.5rem 0;
  }
}
</style>
