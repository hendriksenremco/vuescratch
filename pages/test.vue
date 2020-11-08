<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    @submit.prevent="onSubmit"
  >
    <p>
      <label>Your Name: <input v-model="name" type="text" name="name" /></label>
    </p>
    <p>
      <label
        >Your Email: <input v-model="email" type="email" name="email"
      /></label>
    </p>
    <p>
      <label
        >Message: <textarea v-model="message" name="message"></textarea>
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    onSubmit() {
      this.$axios
        .post(this.$el.getAttribute('action'), {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((result) => {
          console.log(result)
        })
    },
  },
}
</script>
