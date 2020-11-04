<template>
  <div
    class="article-background"
    :style="{ backgroundImage: 'url(' + authorImageUrl + ')' }"
  ></div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    authorImageUrl() {
      return require(`~/assets/articles/${this.image}`)
    },
  },
}
</script>
<style lang="scss">
.article-background {
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 9999px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0px;
  z-index: -1;

  &:after {
    content: '';
    background: radial-gradient(
      ellipse closest-side,
      rgba($black, 0.8),
      rgba($black, 1)
    );
    border-radius: 9999px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transform: scale(1.01);
  }
}
</style>
