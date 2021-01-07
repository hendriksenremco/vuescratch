<template>
  <img
    :src="loadedSrc"
    class="lazy-image"
    :class="{ 'lazy-image--loaded': loadedSrc }"
  />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      observer: null,
      loadedSrc: null,
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(this.onIntersect, {
      threshold: 0.2,
      rootMargin: '10px',
    })
    this.observer.observe(this.$el)
  },
  destroyed() {
    this.observer.disconnect()
    this.observer = null
  },
  methods: {
    onIntersect(event) {
      const isIntersecting = event.find((entry) => {
        return entry.isIntersecting
      })

      if (isIntersecting) {
        this.loadedSrc = this.src
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.lazy-image {
  opacity: 0;
  transition: 500ms opacity ease;

  &--loaded {
    opacity: 1;
  }
}
</style>
