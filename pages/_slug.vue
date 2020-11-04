<template>
  <div class="article-page">
    <header class="article-page__header">
      <article-breadcrumbs />
      <h1>{{ page.title }}</h1>
      <article-background :image="page.image" />
      <author :slug="page.author" :date="page.createdAt" />
    </header>
    <article-content>
      <nuxt-content :document="page" />
      <script
        src="https://utteranc.es/client.js"
        repo="hendriksenremco/vuescratch-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async
      ></script>
    </article-content>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('articles', params.slug).fetch()

    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.body.children[0].children[0].value,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.body.children[0].children[0].value,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://vuescratch.com/${this.page.slug}`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://vuescratch.com/${this.page.slug}`,
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