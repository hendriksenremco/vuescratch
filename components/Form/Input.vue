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
    color: $white;
    font-family: $font-heading;
    font-weight: 800;
    padding: $spacing 0;
  }

  &__input {
    -webkit-appearance: none;
    background-color: $grey-dark;
    border: 0;
    border-radius: $spacing;
    color: $white;
    font-size: 1rem;
    font-family: $font-base;
    padding: $spacing * 2;
    margin: 0;
    width: 100%;

    &:active {
      outline: 0;
    }
  }
}
</style>
