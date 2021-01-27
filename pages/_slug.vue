<template>
  <div class="article-page">
    <header class="article-page__header">
      <lazy-article-breadcrumbs />
      <h1>{{ page.fields.title }}</h1>
      <lazy-article-background :image="page.fields.heroImage.fields.file.url" />
      <lazy-author
        white
        :author="page.fields.author.fields.name"
        :image="page.fields.author.fields.image.fields.file.url"
        :date="page.sys.createdAt"
      />
      <lazy-tag v-for="tag in page.fields.tags" :key="tag" :tag="tag">
        {{ tag }}
      </lazy-tag>
    </header>
    <article-content>
      <div v-html="markedBody"></div>
      <strong>
        Leave a comment below if you have got any questions about this article.
      </strong>
      <!-- <adsbygoogle
        ad-slot="8210539652"
        ad-layout="in-article"
        ad-format="fluid"
      /> -->
    </article-content>

    <!-- <div class="article-page__add"></div> -->

    <lazy-comments-list id="comment" :items="comments" />

    <h2 class="article-page__subtitle">Leave a comment</h2>
    <lazy-comments-form :slug="page.fields.slug" />

    <h2 class="article-page__subtitle">More articles</h2>
    <lazy-related-articles :articles="related" />
  </div>
</template>
<script>
import marked from 'marked'
import { articleSchemaOrg, articleMeta } from '~/helpers/metadata'
import { createClient, createPreviewClient } from '~/plugins/contentful.js'

export default {
  async asyncData({ params, error }) {
    const client = createClient()

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
    @media (max-width: #{$breakpoint-mobile}) {
      padding: $spacing * 3;
    }

    h1 {
      text-shadow: 0px 2px 8px rgba($black, 0.75);
    }

    .author {
      margin-bottom: 1rem;
    }
  }

  &__subtitle {
    color: rgba($white, 0.25);
    margin-top: $spacing * 6;
    padding-left: $spacing * 3;
    font-size: 2rem;
    text-align: left;
  }

  &__add {
    background-color: rgba($black, 0.5);
    border-radius: $border-radius * 2;
    margin-top: $spacing * 6;
    padding: $spacing * 2;
    overflow: hidden;
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
