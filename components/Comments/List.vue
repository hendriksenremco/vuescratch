<template>
  <div v-if="items.length" class="comments-list">
    <h2 class="comments-list__title">Comments</h2>
    <div class="comments-list__items">
      <div
        v-for="comment in items"
        :id="comment.sys.id"
        :key="comment.sys.id"
        class="comments-list__item"
      >
        <a class="comments-list__item__anchor" :href="'#' + comment.sys.id"
          >#</a
        >
        <h3 class="comments-list__item__title">{{ comment.fields.name }}</h3>
        <date class="comments-list__item__date">{{
          formatDate(comment.sys.createdAt)
        }}</date>
        <div class="comments-list__item__content">
          <p>
            {{ comment.fields.message }}
          </p>
        </div>
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
  &__title {
    color: rgba($white, 0.25);
    font-size: 2rem;
    text-align: left;
    margin-top: $spacing * 6;
    padding-left: $spacing * 3;
  }

  &__items {
    display: grid;
    grid-gap: $spacing * 2;
  }

  &__item {
    background-color: $white;
    color: $black;
    border-radius: $border-radius * 2;
    padding: $spacing * 3;
    position: relative;

    &:target {
      box-shadow: 0px 0px 0px 1px var(--accent);
    }

    &__anchor {
      color: $grey-dark;
      position: absolute;
      right: $spacing * 2;
      top: $spacing * 2;
      text-decoration: none;

      &:hover {
        color: $grey-lighter;
      }
    }

    &__title {
      font-size: 1.2rem;
      line-height: 1rem;
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
