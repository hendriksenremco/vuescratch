<template>
  <div class="related-articles">
    <article-card
      v-for="article in articles"
      :key="article.fields.slug"
      :title="article.fields.title"
      :slug="article.fields.slug"
      :description="article.fields.description"
      :image="article.fields.heroImage.fields.file.url"
    />
  </div>
</template>
<script>
export default {
  props: {
    articles: {
      type: [Object, Array],
      default: null,
    },
  },
}
</script>
<style lang="scss">
.related-articles {
  @media (max-width: #{$breakpoint-tablet}) {
    padding: $spacing * 3;
    padding-top: 0;
  }

  display: grid;
  grid-gap: $spacing * 6;
  grid-template-columns: 1fr 1fr;

  @media (max-width: #{$breakpoint-tablet}) {
    grid-gap: $spacing * 3;
  }
  @media (max-width: #{$breakpoint-mobile}) {
    grid-template-columns: 1fr;
  }

  // &__title {
  //   color: rgba($white, 0.25);
  //   margin-top: $spacing * 2;
  //   font-size: 2rem;
  //   text-align: left;
  // }
}
</style>
