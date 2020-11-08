<template>
  <form name="contact" method="POST" @submit.prevent="onSubmit">
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
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('message', this.message)
      formData.append('type', 'contract')
      formData.append('path', this.$route.path)
      this.$axios.post(
        'https://vuescratch.com/.netlify/functions/post-submissions',
        formData
      )
    },
  },
}
</script>
