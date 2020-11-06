<template>
  <div v-if="author" class="author">
    <div
      class="author__image"
      :style="{
        backgroundImage: 'url(' + author.fields.image.fields.file.url + ')',
      }"
    ></div>
    <div class="author__name">
      <div class="author__name__prefix">Author</div>
      <a href="#" class="author__name__link">{{ author.fields.name }}</a>
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
    author: {
      type: Object,
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
    color: $white;

    &__prefix {
      color: $grey;
      font-family: $font-heading;
    }

    &__link {
      color: $white;
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
