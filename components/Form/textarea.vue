<template>
  <label class="form-textarea">
    <div class="form-textarea__label">{{ label }}</div>
    <textarea
      class="form-textarea__input"
      rows="5"
      :value="value"
      @change="$emit('input', $event.target.value)"
    ></textarea>
  </label>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [Number, String],
      default: null,
    },
  },
}
</script>
<style lang="scss">
.form-textarea {
  display: flex;
  flex-direction: column;

  &__input {
    border: 1px solid $grey-lighter;
    border-radius: $spacing;
    font-size: 1rem;
    padding: $spacing * 2;
    margin: 0;

    &:active {
      outline: 0;
    }
  }
}
</style>
