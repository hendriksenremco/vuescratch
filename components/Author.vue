<template>
  <div v-if="author" class="author" :class="{ 'author--white': white }">
    <div
      class="author__image"
      :style="{ 'background-image': 'url(' + image + '?fm=webp&w=64&h=64)' }"
    />
    <div>
      <b>{{ author }}</b> on {{ dateString }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      default: '',
    },
    white: {
      type: Boolean,
      default: false,
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
        month: 'short',
      }
      const dtFormat = new Intl.DateTimeFormat('en-EN', options)

      return dtFormat.format(new Date(this.date))
    },
  },
}
</script>
<style lang="scss">
.author {
  align-items: center;
  display: flex;
  font-size: 0.8rem;
  line-height: 1rem;
  margin: 0.5rem 0;
  color: $grey-darker;

  &--white {
    color: rgba($white, 0.75);
  }

  &__image {
    background-size: cover;
    border-radius: 100%;
    margin-right: $spacing * 2;
    width: $spacing * 4;
    height: $spacing * 4;
  }
}
</style>
