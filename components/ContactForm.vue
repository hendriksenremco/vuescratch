<template>
  <form class="contact-form" method="POST" @submit.prevent="onSubmit">
    <form-input
      v-if="!success"
      v-model="beer"
      class="contact-form__beer"
      label="beer"
      type="text"
    />
    <form-input
      v-if="!success"
      v-model="name"
      class="contact-form__name"
      label="Name"
      type="text"
    />
    <form-input
      v-if="!success"
      v-model="email"
      class="contact-form__email"
      label="Email"
      type="email"
    />
    <form-textarea
      v-if="!success"
      v-model="message"
      label="Your message"
      class="contact-form__comment"
    />
    <button v-if="!success" class="button--accent" type="submit">Submit</button>
    <div v-if="success">
      <h1>Thanks! I will contact you soon.</h1>
    </div>
  </form>
</template>
<script>
export default {
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
          type: 'contact',
          path: this.$route.path,
        })
        .then(() => {
          this.success = true
        })
    },
  },
}
</script>
<style lang="scss">
.contact-form {
  background-color: $white;
  border-radius: $border-radius * 2;
  max-width: $breakpoint-mobile;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: $spacing * 2;
  padding: $spacing * 3;

  @media (max-width: #{$breakpoint-mobile}) {
    grid-template-columns: 1fr;
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

    @media (max-width: #{$breakpoint-mobile}) {
      grid-column: span 1;
    }
  }
}
</style>
