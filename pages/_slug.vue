<template>
  <div class="article-page">
    <header class="article-page__header">
      <article-breadcrumbs />
      <h1>{{ page.fields.title }}</h1>
      <article-background :image="page.fields.heroImage.fields.file.url" />
      <author :author="page.fields.author" :date="page.sys.createdAt" />
    </header>
    <article-content>
      <div v-html="markedBody"></div>
      <div ref="comments"></div>
    </article-content>
  </div>
</template>
<script>
import marked from 'marked'
import { createClient, createPreviewClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData({ params, error }) {
    let pages = null
    pages = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': params.slug,
    })

    if (!pages.items.length) {
      const previewClient = createPreviewClient()
      pages = await previewClient.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug,
      })
    }

    if (!pages.items.length) {
      error({ statusCode: 404, message: 'article_not_found' })
    }

    return {
      page: pages.items[0],
    }
  },
  computed: {
    markedBody() {
      return marked(this.page.fields.body)
    },
  },
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'hendriksenremco/vuescratch-comments')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'github-light')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    this.$refs.comments.appendChild(script)
  },
  head() {
    return {
      title: this.page.fields.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.fields.description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.fields.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.fields.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.page.fields.heroImage.fields.file.url,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://vuescratch.com/${this.page.fields.slug}/`,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vuescratch.com/${this.page.fields.slug}/`,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.article-page {
  max-width: $breakpoint-tablet;
  margin: 0 auto;
  position: relative;

  &__header {
    padding: $spacing * 4 0;
    position: relative;

    @media (max-width: #{$breakpoint-tablet}) {
      padding: $spacing * 4;
    }

    @media (max-width: #{$breakpoint-mobile}) {
      padding: $spacing * 2;
    }
  }

  .article-breadcrumbs {
    margin-bottom: $spacing;
  }

  .author {
    margin: $spacing * 4 0;
  }

  .nuxt-content-highlight {
    margin-bottom: $spacing * 2;

    .filename {
      font-style: italic;
      font-size: 0.9rem;
    }
  }
}
</style>
