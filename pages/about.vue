<template>
  <div class="container">
    <nuxt-content :document="page" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('about', params.slug).fetch()

    return {
      page,
    }
  },
}
</script>
