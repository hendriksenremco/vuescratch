<template>
  <div class="article-page">
    <header class="article-page__header">
      <article-breadcrumbs />
      <h1>{{ page.fields.title }}</h1>
      <article-background :image="page.fields.heroImage.fields.file.url" />
      <author
        :author="page.fields.author.fields.name"
        :image="page.fields.author.fields.image.fields.file.url"
        :date="page.sys.createdAt"
      />
    </header>
    <article-content>
      <div v-html="markedBody"></div>
      <!-- <div ref="comments"></div> -->
    </article-content>

    <comments-list :items="comments" />
    <comments-form :slug="page.fields.slug" />

    <related-articles :articles="related" />
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

    const comments = await client.getEntries({
      content_type: 'submission',
      'fields.path': params.slug,
    })

    const related = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug[ne]': params.slug,
      order: '-sys.createdAt',
      limit: 2,
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
      related: related.items,
      comments: comments.items,
    }
  },
  data() {
    return {
      modal: true,
    }
  },
  computed: {
    markedBody() {
      return marked(this.page.fields.body)
    },
  },
  mounted() {
    // const script = document.createElement('script')
    // script.src = 'https://utteranc.es/client.js'
    // script.setAttribute('repo', 'hendriksenremco/vuescratch-comments')
    // script.setAttribute('issue-term', 'pathname')
    // script.setAttribute('theme', 'github-light')
    // script.setAttribute('crossorigin', 'anonymous')
    // script.setAttribute('async', true)
    // this.$refs.comments.appendChild(script)
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
          content: 'https:' + this.page.fields.heroImage.fields.file.url,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://vuescratch.com/${this.page.fields.slug}/`,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.page.fields.title,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.page.fields.description,
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: '@vuescratch',
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@vuescratch',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https:' + this.page.fields.heroImage.fields.file.url,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vuescratch.com/${this.page.fields.slug}/`,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Article',
            name: this.page.fields.title,
            headline: this.page.fields.title,
            author: {
              '@type': 'Person',
              name: this.page.fields.author.fields.name,
            },
            publisher: {
              '@type': 'Person',
              name: this.page.fields.author.fields.name,
            },
            datePublished: this.page.sys.createdAt,
            dateModified: this.page.sys.updatedAt,
            image: 'https:' + this.page.fields.heroImage.fields.file.url,
            articleBody: this.markedBody,
            url: `https://vuescratch.com/${this.page.fields.slug}/`,
          },
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

    .author {
      margin: $spacing * 4 0;
    }
  }

  .comments-form {
    margin-top: $spacing * 2;
  }

  .article-breadcrumbs {
    margin-bottom: $spacing;
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
