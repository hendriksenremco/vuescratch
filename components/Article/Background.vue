<template>
  <picture class="article-background">
    <source
      :srcset="`${image}?fm=webp&q=75&w=3000`"
      media="(min-width: 1800px)"
    />
    <source
      :srcset="`${image}?fm=webp&q=75&w=1800`"
      media="(min-width: 1200px)"
    />
    <source
      :srcset="`${image}?fm=webp&q=75&w=1200`"
      media="(min-width: 800px)"
    />
    <source
      :srcset="`${image}?fm=webp&q=75&w=800`"
      media="(min-width: 400px)"
    />

    <img :src="`${image}?fm=webp&q=75&w=400`" />
  </picture>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.article-background {
  display: flex;
  width: auto;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;

  img {
    object-fit: cover;
    width: 100%;
    pointer-events: none;
  }
}
</style>
