<template>
  <div class="comments-form">
    <h2>Leave a comment</h2>
    <div class="comments-form__row">
      <form-input label="Name" type="text" />
      <form-input label="Email" type="email" />
    </div>
    <div class="comments-form__row">
      <form-input label="Website" type="url" />
    </div>
  </div>
</template>
<style lang="scss">
.comments-form {
  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $spacing * 2;
    margin-bottom: $spacing * 2;
  }
}
</style>
