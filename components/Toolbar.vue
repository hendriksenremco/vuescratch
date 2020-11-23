<template>
  <header class="toolbar">
    <div class="toolbar__inner">
      <logo />
      <!-- <search-form v-model="query" class="hide-mobile" /> -->
      <span class="spacer"></span>
      <div class="toolbar__actions">
        <nuxt-link class="toolbar__link" to="/about/">About</nuxt-link>
      </div>
      <!-- <div class="toolbar__actions">
        <button
          class="button--transparent button--icon hide-desktop hide-tablet"
        >
          <search-icon />
        </button>
        <button
          class="button--transparent button--icon hide-desktop hide-tablet"
        >
          <menu-icon />
        </button>
      </div> -->
    </div>
  </header>
</template>
<script>
// import MenuIcon from '~/assets/icons/menu.svg?inline'
// import SearchIcon from '~/assets/icons/search.svg?inline'
// export default {
//   components: {
//     MenuIcon,
//     SearchIcon,
//   },
// }
</script>
<style lang="scss" scoped>
.toolbar {
  background-color: rgba($black, 0.95);
  border-bottom: 1px solid $grey-darker;
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

  .spacer {
    flex: 1;
  }

  .logo {
    height: $spacing * 4;
    width: auto;
    margin-top: -2px;
    margin-right: $spacing * 4;

    @media (max-width: #{$breakpoint-tablet}) {
      height: $spacing * 3;
      margin-left: $spacing * 4;
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
    max-width: $breakpoint-tablet;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  &__link {
    border-left: 1px solid $grey-darker;
    border-right: 1px solid $grey-darker;
    color: var(--body-fg);
    font-size: 1rem;
    font-family: $font-heading;
    font-weight: 400;
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
