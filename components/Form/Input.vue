<template>
  <label class="form-input">
    <div class="form-input__label">{{ label }}</div>
    <input
      class="form-input__input"
      :value="value"
      :type="type"
      @change="$emit('input', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
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
.form-input {
  display: flex;
  flex-direction: column;

  &__label {
    font-family: $font-heading;
    font-weight: 700;
    padding: $spacing 0;
  }

  &__input {
    border: 1px solid $grey-lighter;
    border-radius: $spacing;
    box-shadow: none;
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
