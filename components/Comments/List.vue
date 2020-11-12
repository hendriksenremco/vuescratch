<template>
  <div v-if="items.length" class="comments-list">
    <h2 class="comments-list__title">Comments</h2>
    <div
      v-for="comment in items"
      :id="comment.sys.id"
      :key="comment.sys.id"
      class="comments-list__item"
    >
      <a class="comments-list__item__anchor" :href="'#' + comment.sys.id">#</a>
      <h3 class="comments-list__item__title">{{ comment.fields.name }}</h3>
      <date class="comments-list__item__date">{{
        formatDate(comment.sys.createdAt)
      }}</date>
      <div class="comments-list__item__content">
        {{ comment.fields.message }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: [Array, Object],
      default: null,
    },
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      const dtFormat = new Intl.DateTimeFormat('en-EN', options)

      return dtFormat.format(new Date(date))
    },
  },
}
</script>
<style lang="scss">
.comments-list {
  display: grid;
  grid-gap: $spacing * 2;
  padding: $spacing * 4;

  @media (max-width: #{$breakpoint-tablet}) {
    padding: $spacing * 4;
  }
  @media (max-width: #{$breakpoint-mobile}) {
    padding: $spacing * 3;
  }

  &__title {
    margin: $spacing * 2 0;
    text-align: center;
  }

  &__item {
    background-color: var(--section-bg);
    box-shadow: 0 0 25px rgba($black, 0.1);
    color: var(--section-fg);
    border-radius: $border-radius;
    padding: $spacing * 3;
    position: relative;

    &:target {
      box-shadow: 0px 0px 0px 1px var(--accent);
    }

    &__anchor {
      color: var(--section-bg-alt);
      position: absolute;
      right: $spacing * 2;
      top: $spacing * 2;
      text-decoration: none;

      &:hover {
        color: var(--section-fg);
      }
    }

    &__title {
      color: var(--heading-color);
      font-size: 1.2rem;
    }
    &__date {
      font-family: $font-heading;
      color: $grey;
      font-size: 0.8rem;
    }
    &__content {
      margin-top: $spacing * 2;
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
