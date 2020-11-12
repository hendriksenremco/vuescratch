<template>
  <div class="related-articles">
    <h2 class="related-articles__title">More to read</h2>
    <div class="related-articles__items">
      <article-card
        v-for="article in articles"
        :key="article.fields.slug"
        :title="article.fields.title"
        :slug="article.fields.slug"
        :description="article.fields.description"
        :image="article.fields.heroImage.fields.file.url"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ['articles'],
}
</script>
<style lang="scss">
.related-articles {
  padding: $spacing * 2 0;

  @media (max-width: #{$breakpoint-tablet}) {
    padding: $spacing * 3;
  }
  &__items {
    display: grid;
    grid-gap: $spacing * 2;
    grid-template-columns: 1fr 1fr;
    @media (max-width: #{$breakpoint-mobile}) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    color: var(--section-bg);
    margin-top: $spacing * 2;
    font-size: 3rem;
    text-align: left;
  }
}
</style>
