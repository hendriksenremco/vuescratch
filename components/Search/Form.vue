<template>
  <form class="search-form">
    <input
      ref="input"
      type="search"
      :value="value"
      class="search-form__input"
      placeholder=""
      @keyup="onChange"
    />
    <button
      v-if="showClose"
      class="search-form__button button--accent button--small button--icon"
      type="submit"
      @click="$emit('close')"
    >
      <close-icon />
    </button>
    <button
      v-else
      class="search-form__button button--accent button--small button--icon"
      type="submit"
    >
      <search-icon />
    </button>
  </form>
</template>
<script>
import Typed from 'typed.js'
import SearchIcon from '~/assets/icons/search.svg?inline'
import CloseIcon from '~/assets/icons/close.svg?inline'
export default {
  components: {
    CloseIcon,
    SearchIcon,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      typed: null,
    }
  },
  watch: {
    autoFocus() {
      if (this.autoFocus) {
        this.$refs.input.focus()
      }
    },
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.input.focus()
    }

    this.typed = new Typed(this.$refs.input, {
      strings: [
        'Search for component',
        'Search for variables',
        'Search for dark-mode',
        'Search for intersection observer',
      ],
      typeSpeed: 100,
      backSpeed: 10,
      attr: 'placeholder',
      smartBackspace: true,
      loop: true,
    })
  },
  methods: {
    onChange(event) {
      this.$router.push({ query: { q: event.target.value } })
    },
  },
}
</script>
<style lang="scss">
.search-form {
  border-radius: 9999px;
  background-color: $grey-dark;
  display: flex;
  width: 100%;

  &:focus,
  &:hover {
    box-shadow: none;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px rgba($grey, 0.5);
  }

  &__input {
    border: 0;
    border-radius: 9999px;
    background-color: transparent;
    box-shadow: none;
    color: $white;
    font-size: 0.9rem;
    line-height: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;

    &::-webkit-search-cancel-button {
      display: none;
    }
  }

  &__button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
