<template>
  <div class="container about">
    <h1>{{ page.fields.title }}</h1>
    <div v-html="markedBody" />

    <h2 class="about__subtitle">Contact me</h2>
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
}
</script>

<style lang="scss">
.about {
  background: radial-gradient(
      ellipse closest-side,
      rgba($black, 0.25),
      rgba($black, 1)
    ),
    url('~assets/authors/remco.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  p {
    max-width: $breakpoint-mobile;
  }

  &__subtitle {
    color: rgba($white, 0.25);
    margin-top: $spacing * 6;
    padding-left: $spacing * 3;
    font-size: 2rem;
    text-align: left;
  }
}
</style>
