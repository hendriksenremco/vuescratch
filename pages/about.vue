<template>
  <div class="container about">
    <h1>{{ page.fields.title }}</h1>
    <div v-html="markedBody" />

    <contact-form />
  </div>
</template>
<script>
import marked from 'marked'
import { createClient } from '~/plugins/contentful.js'
export default {
  async asyncData() {
    const client = createClient()
    const pages = await client.getEntries({
      content_type: 'page',
      'fields.slug': 'about',
    })

    return { page: pages.items[0] }
  },
  computed: {
    markedBody() {
      return marked(this.page.fields.body)
    },
  },
  head() {
    return {
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
    }
  },
}
</script>

<style lang="scss">
.about {
  background: radial-gradient(
      ellipse closest-side,
      rgba($black, 0.75),
      rgba($black, 1)
    ),
    url('~assets/authors/remco.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  p {
    max-width: $breakpoint-mobile;
  }
}
</style>
