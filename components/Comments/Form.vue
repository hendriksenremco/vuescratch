<template>
  <form class="comments-form" method="POST" @submit.prevent="onSubmit">
    <h2 v-if="!success" class="comments-form__title">Leave a comment</h2>
    <form-input
      v-if="!success"
      v-model="beer"
      class="comments-form__beer"
      label="beer"
      type="text"
    />
    <form-input
      v-if="!success"
      v-model="name"
      class="comments-form__name"
      label="Name"
      type="text"
    />
    <form-input
      v-if="!success"
      v-model="email"
      class="comments-form__email"
      label="Email"
      type="email"
    />
    <form-textarea
      v-if="!success"
      v-model="message"
      label="Your comment"
      class="comments-form__comment"
    />
    <button v-if="!success" class="button--accent" type="submit">Submit</button>
    <div v-if="success" class="comments-form__success">
      <h3>Thanks for contributing!</h3>
      <div>Your comment will soon be shown here.</div>
    </div>
  </form>
</template>
<style lang="scss">
.comments-form {
  background-color: $grey-darker;
  border-radius: $border-radius * 2;
  color: $grey-lighter;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: $spacing * 2;
  max-width: 100%;
  min-width: 0;
  padding: $spacing * 4;

  @media (max-width: #{$breakpoint-tablet}) {
    padding: $spacing * 4;
  }
  @media (max-width: #{$breakpoint-mobile}) {
    padding: $spacing * 3;
  }

  &__beer {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  &__success,
  &__comment,
  &__title {
    grid-column: span 2;
  }
}
</style>
<script>
export default {
  props: {
    slug: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      beer: '',
      name: null,
      email: null,
      message: null,
      success: false,
    }
  },

  methods: {
    onSubmit() {
      if (this.beer || !this.email || !this.message) {
        return false
      }
      this.$axios
        .post('https://vuescratch.com/.netlify/functions/post-submissions', {
          name: this.name,
          email: this.email,
          message: this.message,
          type: 'comment',
          path: this.slug,
        })
        .then(() => {
          this.success = true
        })
    },
  },
}
</script>
