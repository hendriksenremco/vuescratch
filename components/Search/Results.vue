<template>
  <div class="search-results">
    <div class="container">
      <search-form show-close :value="query" auto-focus @close="onClose" />
      <div v-if="results.items.length" class="search-results__items">
        <article-card
          v-for="result in results.items"
          :key="result.fields.slug"
          :slug="result.fields.slug"
          :title="result.fields.title"
          :description="result.fields.description"
          :author="result.fields.author.fields.name"
          :author-image="result.fields.author.fields.image.fields.file.url"
          :date="result.sys.createdAt"
        />
      </div>
      <div v-else class="container">
        <h3>Nothing found for query {{ query }}</h3>
        <p>Try something else</p>
      </div>
    </div>
  </div>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  props: {
    query: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      results: [],
    }
  },
  watch: {
    query() {
      this.search()
    },
  },
  mounted() {
    this.search()
  },
  methods: {
    async search() {
      this.results = await client.getEntries({
        content_type: 'blogPost',
        select: 'fields.slug,fields.description,fields.title,fields.author',
        'fields.body[match]': this.query,
      })
    },
    onClose() {
      this.$router.push({ query: { q: null } })
    },
  },
}
</script>
<style lang="scss">
.search-results {
  background-color: rgba($black, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  padding: $spacing * 2;
  overflow-y: scroll;

  &__items {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $spacing * 6;

    @media (max-width: #{$breakpoint-mobile}) {
      grid-template-columns: 1fr;
      grid-gap: $spacing * 3;
    }
  }

  &__item {
    background-color: $grey-darker;
    border-radius: $border-radius * 2;
    text-decoration: none;
    color: var(--body-fg);
    padding: 2rem;
    margin-bottom: 2rem;

    a {
      text-decoration: none;
      margin-top: 2rem;
    }

    p {
      margin: 0;
    }
  }
}
</style>
