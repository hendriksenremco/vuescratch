<template>
  <nuxt-link :to="`/tag/${tag}/`" class="tag"><slot /></nuxt-link>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.tag {
  background-color: var(--section-bg-alt);
  border-radius: $border-radius * 4;
  color: var(--section-fg);
  font-size: 0.8rem;
  font-family: $font-heading;
  font-weight: 700;
  padding: $spacing / 2 $spacing * 2;
  display: inline-flex;
  text-decoration: none;

  & ~ .tag {
    margin-left: $spacing;
  }
}
</style>
