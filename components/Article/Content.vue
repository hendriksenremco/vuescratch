<template>
  <div class="article-content">
    <slot />
  </div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-javascript'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
export default {
  data() {
    return {
      forceTheme: null,
    }
  },
  mounted() {
    // const prefersDark =
    //   getComputedStyle(document.documentElement)
    //     .getPropertyValue('--theme')
    //     .trim() === 'dark'
    // if (prefersDark) {
    //   require(`prism-theme-one-light-dark/prism-onedark.css`)
    // } else {
    require(`prism-theme-one-light-dark/prism-onelight.css`)
    // }
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

  p:last-child {
    margin-bottom: 0;
  }
}
</style>
