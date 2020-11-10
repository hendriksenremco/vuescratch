<template>
  <footer class="app-footer">
    <div class="app-footer__socials">
      <h3>Socials</h3>
      <socials />
    </div>
  </footer>
</template>
<style lang="scss">
.app-footer {
  border-top: $spacing solid $grey-darker;
  padding: $spacing * 8;

  &__socials {
    color: $grey-lighter;
    max-width: $breakpoint-mobile;
    margin: 0 auto;
    text-align: center;
    width: 100%;

    .socials {
      margin-top: $spacing * 4;
    }
  }
}
</style>
