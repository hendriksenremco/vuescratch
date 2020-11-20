<template>
  <div class="container" data-theme="light">
    <h1>{{ page.fields.title }}</h1>
    <article-content v-html="markedBody">
      {{ markedBody }}
    </article-content>
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
      'fields.slug': 'privacy',
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
