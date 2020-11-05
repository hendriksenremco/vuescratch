<template>
  <form class="comments-form" data-netlify="true">
    <h2 class="comments-form__title">Leave a comment</h2>
    <form-input class="comments-form__name" label="Name" type="text" />
    <form-input class="comments-form__email" label="Email" type="email" />
    <form-textarea label="Your comment" class="comments-form__comment" />
    <button type="submit">Submit</button>
  </form>
</template>
<style lang="scss">
.comments-form {
  align-items: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: $spacing * 2;
  margin-bottom: $spacing * 2;

  &__comment,
  &__title {
    grid-column: span 2;
  }
}
</style>
