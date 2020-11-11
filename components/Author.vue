<template>
  <div v-if="author" class="author">
    <div
      v-if="image"
      class="author__image"
      :style="{
        backgroundImage: 'url(' + image + ')',
      }"
    ></div>
    <div class="author__name">
      <div class="author__name__prefix">Author</div>
      <div href="#" class="author__name__link">{{ author }}</div>
    </div>
    <div class="author__date">
      <div class="author__date__prefix">Published</div>
      <div class="author__date__value">{{ dateString }}</div>
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
        month: 'short',
        day: 'numeric',
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
  display: flex;
  align-items: center;

  &__date,
  &__name {
    color: var(--body-fg);

    &__prefix {
      color: $grey;
      font-family: $font-heading;
    }

    &__link {
      color: var(--body-fg);
      text-decoration: none;
    }
  }
  &__name {
    margin-right: $spacing * 2;
  }
  &__image {
    border: 2px solid $grey-darker;
    background-size: cover;
    border-radius: 999px;
    display: inline-flex;
    width: $spacing * 6;
    height: $spacing * 6;
    margin-right: $spacing * 2;
  }
}
</style>
