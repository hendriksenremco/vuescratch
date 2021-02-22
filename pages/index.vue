<template>
  <div class="home-page container">
    <div class="home-page__articles">
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
    <div class="home-page__powered">
      <h3>This blog is powered by</h3>
      <a
        href="https://www.contentful.com"
        @click="
          $gtag('event', 'clickout', {
            event_category: 'powered',
            event_label: 'Contenful.com',
          })
        "
      >
        <img src="~assets/logos/contentfull.svg" />
      </a>
      <a
        href="https://www.netlify.com"
        @click="
          $gtag('event', 'clickout', {
            event_category: 'powered',
            event_label: 'Netlify.com',
          })
        "
      >
        <img src="~assets/logos/netlify.svg" />
      </a>
      <a
        href="https://www.unsplash.com"
        @click="
          $gtag('event', 'clickout', {
            event_category: 'powered',
            event_label: 'Unsplash.com',
          })
        "
      >
        <img src="~assets/logos/unsplash.svg" />
      </a>
    </div>
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
  },
}
</script>

<style lang="scss">
.home-page {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;

  @media (max-width: #{$breakpoint-mobile}) {
    grid-template-columns: 1fr;
    grid-gap: $spacing * 3;
  }

  &__articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: $spacing * 6;

    @media (max-width: #{$breakpoint-mobile}) {
      grid-gap: $spacing * 2;
    }
  }

  &__powered {
    display: grid;
    align-content: flex-start;
    grid-gap: $spacing * 6;
    text-align: center;

    h3 {
      font-size: 1rem;
      opacity: 0.3;
    }

    img {
      width: 66%;
      margin: 0 auto;
      height: auto;
      opacity: 0.3;
      transition: opacity 150ms ease;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
