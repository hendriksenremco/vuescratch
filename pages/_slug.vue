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
    </article-content>

    <comments-list id="comment" :items="comments" />
    <comments-form :slug="page.fields.slug" />

    <related-articles :articles="related" />
  </div>
</template>
<script>
import marked from 'marked'
import { articleSchemaOrg, articleMeta } from '~/helpers/metadata'
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

  head() {
    return {
      title: this.page.fields.title,
      meta: articleMeta({ page: this.page }),
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vuescratch.com/${this.page.fields.slug}/`,
        },
      ],
      script: [articleSchemaOrg({ page: this.page, comments: this.comments })],
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
