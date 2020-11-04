<template>
  <div class="home-page container">
    <article-summary
      v-for="article in articles"
      :key="article.slug"
      :date="article.createdAt"
      :author="article.author"
      :image="article.image"
      :author-image="article.authorImage"
      :slug="article.slug"
      :title="article.title"
    >
      {{ article.body.children[0].children[0].value }}
    </article-summary>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const articles = await $content('articles')
      .limit(5)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: err.message })
      })

    return {
      articles,
    }
  },
}
</script>

<style lang="scss">
.home-page {
  .article-summary {
    margin-bottom: $spacing * 20;
  }
}
</style>
