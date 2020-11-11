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

  &__label {
    color: var(--heading-color);
    font-family: $font-heading;
    font-weight: 700;
    padding: $spacing 0;
  }

  &__input {
    -webkit-appearance: none;
    background-color: var(--section-bg);
    border: 1px solid var(--body-bg);
    border-radius: $spacing;
    color: var(--section-fg);
    font-size: 1rem;
    font-family: $font-base;
    padding: $spacing * 2;
    margin: 0;

    &:active {
      outline: 0;
    }
  }
}
</style>
