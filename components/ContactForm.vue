<template>
  <form class="contact-form" @submit.prevent="onSubmit">
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
    <button v-if="!success" type="submit">Submit</button>
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
      if (this.beer) {
        return false
      }
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('message', this.message)
      formData.append('type', 'contact')
      formData.append('path', this.$route.path)
      this.$axios
        .post(
          'https://vuescratch.com/.netlify/functions/post-submissions',
          formData
        )
        .then(() => {
          this.success = true
        })
    },
  },
}
</script>
<style lang="scss">
.contact-form {
  max-width: $breakpoint-mobile;
  display: grid;
  grid-gap: $spacing * 2;

  &__beer {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
}
</style>
