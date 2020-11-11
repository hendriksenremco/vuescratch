<template>
  <div class="article-content" theme="tomorrow">
    <slot />
  </div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-javascript'
export default {
  mounted() {
    Prism.highlightAll()

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefersDark.matches) {
      return require('prismjs/themes/prism-tomorrow.css')
    }
    return require('prismjs/themes/prism.css')
  },
}
</script>
<style lang="scss">
.article-content {
  background-color: var(--section-bg);
  color: var(--section-fg);
  border-radius: $spacing * 2;
  padding: $spacing * 8;

  @media (max-width: #{$breakpoint-tablet}) {
    padding: $spacing * 4;
  }
  @media (max-width: #{$breakpoint-mobile}) {
    padding: $spacing * 3;
  }

  a {
    color: var(--link-color);
  }
}
</style>
