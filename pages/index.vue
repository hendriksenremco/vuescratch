<template>
  <div class="home-page container">
    <article-card
      v-for="article in articles.items"
      :key="article.fields.slug"
      :title="article.fields.title"
      :slug="article.fields.slug"
      :description="article.fields.description"
      :image="article.fields.heroImage.fields.file.url"
      :author="article.fields.author.fields.name"
      :author-image="article.fields.author.fields.image.fields.file.url"
      :date="article.sys.createdAt"
    />
    <intersection-observer @intersect="loadMore" />
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
      limit: 3,
    })

    return {
      articles,
    }
  },
  data() {
    return {
      end: false,
    }
  },

  methods: {
    async loadMore() {
      if (this.end) return false
      const result = await client.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt',
        skip: this.articles.items.length,
        limit: 3,
      })
      this.articles.items = [...this.articles.items, ...result.items]
      if (result.total <= this.articles.items.length) {
        this.end = true
      }
    },
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: $spacing * 4;

  @media (max-width: #{$breakpoint-mobile}) {
    grid-template-columns: 1fr;
    grid-gap: $spacing * 2;
  }
}
</style>
