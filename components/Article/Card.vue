<template>
  <nuxt-link class="article-card" :to="{ name: 'slug', params: { slug } }">
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>
    <button>Read article</button>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.article-card {
  background-color: $grey-darker;
  border-radius: $border-radius * 2;
  color: $white;
  display: flex;
  flex-direction: column;
  padding: $spacing * 4;
  text-decoration: none;

  p {
    color: $grey;
  }
}
</style>
