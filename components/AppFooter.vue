<template>
  <footer class="app-footer">
    <div class="app-footer__socials">
      <socials />
    </div>
  </footer>
</template>
<style lang="scss">
.app-footer {
  border-top: 1px solid $grey-darker;
  padding: $spacing * 8;

  &__socials {
    color: $grey-lighter;
    max-width: $breakpoint-mobile;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
}
</style>
