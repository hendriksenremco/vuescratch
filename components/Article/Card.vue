<template>
  <nuxt-link class="article-card" :to="{ name: 'slug', params: { slug } }">
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>
    <div class="button">Read article</div>
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
  background-color: var(--section-bg);
  border-radius: $border-radius * 2;
  color: var(--section-fg);
  display: flex;
  flex-direction: column;
  padding: $spacing * 4;
  text-decoration: none;
  position: relative;
  transition: transform 150ms ease, box-shadow 150ms ease;

  > * {
    z-index: 2;
    position: relative;
  }

  p {
    color: var(--section-fg);
    font-size: 0.9rem;
    flex: 1;
  }

  &:active,
  &:hover {
    box-shadow: 0 0 10px 0 rgba($black, 0.2);
    transform: scale(1.05);
  }
}
</style>
