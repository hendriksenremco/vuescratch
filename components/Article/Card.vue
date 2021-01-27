<template>
  <nuxt-link class="article-card" :to="{ name: 'slug', params: { slug } }">
    <div v-if="image" class="article-card__image">
      <lazy-image :src="`${image}?fm=webp&w=500`" />
    </div>
    <div class="article-card__content">
      <h2>{{ title }}</h2>
      <lazy-author :author="author" :image="authorImage" :date="date" />
      <p>
        {{ description }}
      </p>
      <div class="button">Read article</div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    slug: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    author: {
      type: String,
      default: null,
    },
    authorImage: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.article-card {
  background-color: $white;
  border-radius: $border-radius * 2;
  color: $black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  position: relative;
  transition: transform 150ms ease, box-shadow 150ms ease;
  width: 100%;

  &__content {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: $spacing * 4;

    @media (max-width: #{$breakpoint-mobile}) {
      padding: $spacing * 3;
    }
  }

  &__image {
    display: flex;
    width: 100%;
    padding-bottom: 52.75%;

    img {
      border-top-left-radius: $border-radius * 2;
      border-top-right-radius: $border-radius * 2;
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }

  > * {
    z-index: 2;
    position: relative;
  }

  p {
    color: $grey-light;
    font-size: 0.9rem;
    flex: 1;
  }

  &:focus,
  &:active,
  &:hover {
    // box-shadow: 0 0 10px 0 rgba($black, 0.2);
    transform: scale(1.05);
    color: $accent;
  }
}
</style>
