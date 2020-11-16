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
    <div ref="end"></div>
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

  mounted() {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadMore()
          }
        })
      },
      { threshold: 1 }
    )
    intersectionObserver.observe(this.$refs.end)
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
      console.log('Load moore')
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
  .article-summary {
    margin-bottom: $spacing * 20;
  }
}
</style>
