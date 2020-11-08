<template>
  <div class="home-page container">
    <article-summary
      v-for="article in articles.items"
      :key="article.fields.slug"
      :date="article.sys.createdAt"
      :author="article.fields.author"
      :image="article.fields.heroImage.fields.file.url"
      :slug="article.fields.slug"
      :title="article.fields.title"
    >
      {{ article.fields.description }}
    </article-summary>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  async asyncData() {
    const articles = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    })

    return {
      articles,
    }
  },

  methods: {
    author(authorSlug) {
      return this.authors.find((author) => {
        return author.slug === authorSlug
      })
    },
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
