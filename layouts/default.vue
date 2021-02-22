<template>
  <div>
    <toolbar />
    <main>
      <Nuxt />
    </main>
    <search-results v-if="$route.query.q" :query="$route.query.q" />
    <app-footer />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/base.scss';
@import '~/assets/scss/button.scss';
@import '~/assets/scss/typography.scss';
</style>
