<template>
  <div v-if="author" class="author">
    by <span>{{ author }}</span> on <span>{{ dateString }}</span>
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: null,
    },
    author: {
      type: String,
      default: null,
    },
  },
  computed: {
    dateString() {
      const options = {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
      }
      const dtFormat = new Intl.DateTimeFormat('en-EN', options)

      return dtFormat.format(new Date(this.date))
    },
  },
}
</script>
<style lang="scss">
.author {
  font-size: 0.8rem;
  line-height: 2rem;
  color: rgba($white, 0.33);
}
</style>
