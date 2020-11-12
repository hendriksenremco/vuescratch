<template>
  <div class="container">
    <h1>
      {{ results.items.length }}
      {{ results.items.length === 1 ? 'article' : 'articles' }} with tag '{{
        $route.params.tag
      }}'
    </h1>
    <div class="results">
      <article-card
        v-for="result in results.items"
        :key="result.fields.slug"
        :title="result.fields.title"
        :description="result.fields.description"
        :slug="result.fields.slug"
      />
    </div>
  </div>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  async asyncData({ params, error }) {
    const results = await client.getEntries({
      content_type: 'blogPost',
      'fields.tags[in]': params.tag,
      order: '-sys.createdAt',
    })

    return { results }
  },
}
</script>
<style lang="scss" scoped>
.results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: $spacing * 3;
  width: 100%;

  @media (max-width: #{$breakpoint-mobile}) {
    grid-template-columns: 1fr;
  }
}
</style>
