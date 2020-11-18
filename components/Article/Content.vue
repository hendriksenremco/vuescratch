<template>
  <div class="article-content" theme="tomorrow">
    <slot />
  </div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-javascript'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
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

  p:last-child {
    margin-bottom: 0;
  }
}
</style>
