<template>
  <div class="search-results">
    <div class="container">
      <search-form show-close :value="query" auto-focus @close="onClose" />
      <div v-if="results.items.length" class="search-results__items">
        <div
          v-for="result in results.items"
          :key="result.fields.slug"
          class="search-results__item"
        >
          <h3>{{ result.fields.title }}</h3>
          <p>
            {{ result.fields.description }}
          </p>

          <nuxt-link
            class="button"
            :to="{ name: 'slug', params: { slug: result.fields.slug } }"
            >Read article</nuxt-link
          >
        </div>
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
        select: 'fields.slug,fields.description,fields.title',
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
