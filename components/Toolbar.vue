<template>
  <header class="toolbar" :class="{ 'toolbar--show-search': showSearch }">
    <div class="toolbar__inner">
      <logo />
      <span class="spacer"></span>
      <search-form
        :show-close="showSearch || $route.query.q"
        :auto-focus="showSearch"
        :value="$route.query.q"
        @close="showSearch = false"
      />

      <div class="toolbar__actions">
        <span class="spacer"></span>
        <div
          class="toolbar__link hide-desktop hide-tablet"
          @click="showSearch = true"
        >
          <search-icon />
        </div>
        <nuxt-link class="toolbar__link" to="/about/">About</nuxt-link>
        <!-- <button
          class="button--transparent button--icon hide-desktop hide-tablet"
        >
          <menu-icon />
        </button> -->
      </div>
    </div>
  </header>
</template>
<script>
import SearchIcon from '~/assets/icons/search.svg?inline'
export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      showSearch: false,
    }
  },
  watch: {
    '$route.query.q'() {
      if (!this.$route.query.q) {
        this.showSearch = false
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.toolbar {
  background-color: rgba($black, 0.9);
  // border-bottom: 1px solid $grey-darker;
  box-shadow: 0px 4px 8px 0px rgba($black, 0.25);
  backdrop-filter: blur(5px);
  height: $spacing * 10;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;

  @media (max-width: #{$breakpoint-mobile}) {
    height: $spacing * 8;
  }

  .hide-mobile {
    @media (max-width: #{$breakpoint-mobile}) {
      display: none !important;
    }
  }
  .hide-tablet {
    @media (min-width: #{$breakpoint-mobile}) {
      display: none;
    }
  }
  .hide-desktop {
    @media (min-width: #{$breakpoint-tablet}) {
      display: none;
    }
  }

  .search-form {
    max-width: 350px;
    margin-right: $spacing * 2;

    @media (max-width: #{$breakpoint-mobile}) {
      display: none;
      max-width: 100vh;
      margin: 0;
      position: absolute;
      left: $spacing * 2;
      right: $spacing * 2;
      width: auto;
    }
  }

  &--show-search {
    .search-form {
      display: flex;
    }
  }

  .spacer {
    flex: 1;
  }

  .logo {
    height: $spacing * 4;
    width: auto;
    margin-top: -2px;
    margin-right: $spacing * 3;
    margin-left: $spacing * 3;

    @media (max-width: #{$breakpoint-tablet}) {
      height: $spacing * 3;
      margin-left: $spacing * 3;
    }

    @media (max-width: #{$breakpoint-mobile}) {
      height: $spacing * 3;
      margin-left: $spacing * 3;
      margin-right: $spacing * 2;
    }
  }

  &__inner {
    align-items: center;
    justify-content: flex-start;
    display: flex;
    max-width: $breakpoint-desktop;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  &__link {
    // border-left: 1px solid $grey-darker;
    // border-right: 1px solid $grey-darker;
    color: var(--body-fg);
    fill: currentColor;
    font-size: 1rem;
    text-decoration: none;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    height: 100%;
    padding: $spacing * 2 $spacing * 6;

    @media (max-width: #{$breakpoint-tablet}) {
      padding: $spacing * 2 $spacing * 3;
    }

    @media (max-width: #{$breakpoint-tablet}) {
      padding: $spacing * 2 $spacing * 2;
    }

    &:hover {
      color: var(--accent);
    }
  }

  &__actions {
    height: 100%;
    display: flex;
    margin-left: auto;
  }
}
</style>
