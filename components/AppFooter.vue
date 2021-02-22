<template>
  <footer class="app-footer">
    <div class="app-footer__socials">
      <socials />
    </div>
    <div class="app-footer__links">
      VueScratch&copy; 2021 -
      <nuxt-link :to="{ name: 'privacy' }">Privacy</nuxt-link>
    </div>
  </footer>
</template>
<style lang="scss">
.app-footer {
  background: linear-gradient(0deg, rgba($black, 1), rgba($black, 0));
  // border-top: 1px solid rgba($black, 0.5);
  color: $grey-lighter;

  &__socials {
    max-width: $breakpoint-mobile;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    padding: $spacing * 8;
  }

  &__links {
    font-size: 0.8rem;
    margin: 0 auto;
    max-width: $breakpoint-mobile;
    text-align: center;
    padding: $spacing * 4;
    width: 100%;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: $white;
      }
    }
  }
}
</style>
