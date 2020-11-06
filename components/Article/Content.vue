<template>
  <div class="article-content">
    <slot />
  </div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-javascript'
export default {
  mounted() {
    Prism.highlightAll()
  },
}
</script>
<style lang="scss">
.article-content {
  background-color: $white;
  color: $black;
  border-radius: $spacing * 2;
  padding: $spacing * 8;

  @media (max-width: #{$breakpoint-tablet}) {
    padding: $spacing * 4;
  }
  @media (max-width: #{$breakpoint-mobile}) {
    padding: $spacing * 3;
  }

  a {
    color: $blue;
  }
}
</style>
