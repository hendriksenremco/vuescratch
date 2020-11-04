<template>
  <header class="toolbar">
    <div class="toolbar__inner">
      <logo />
      <!-- <nuxt-link :to="{ name: 'articles' }" class="toolbar__link"
        >Articles</nuxt-link
      > -->
      <span class="spacer"></span>
      <nuxt-link :to="{ name: 'about' }" class="toolbar__link">About</nuxt-link>
      <!-- <div class="toolbar__actions">
        <button class="button--border-left button--icon hide-desktop">
          <search-icon />
        </button>
        <button class="button--border-left button--icon hide-tablet">
          <menu-icon />
        </button>
      </div> -->
    </div>
  </header>
</template>
<script>
// import MenuIcon from '~/assets/icons/menu.svg?inline'
// import SearchIcon from '~/assets/icons/search.svg?inline'
export default {
  // components: {
  //   MenuIcon,
  //   SearchIcon,
  // },
}
</script>
<style lang="scss">
.toolbar {
  background-color: $black;
  border-bottom: 1px solid $grey-darker;
  height: $spacing * 10;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;

  @media (max-width: #{$breakpoint-mobile}) {
    height: $spacing * 8;
  }

  .hide-tablet {
    @media (min-width: #{$breakpoint-tablet}) {
      display: none;
    }
  }
  .hide-desktop {
    @media (min-width: #{$breakpoint-desktop}) {
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
      height: $spacing * 2;
      margin-left: $spacing * 2;
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
    color: $white;
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
      color: $accent;
    }
  }

  &__actions {
    height: 100%;
    display: flex;
    margin-left: auto;
  }
}
</style>
