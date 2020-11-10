<template>
  <div class="socials">
    <a
      href="https://facebook.com/VueScratch-114362063809302"
      title="Facebook"
      class="socials__item"
    >
      <icon-facebook />
    </a>
    <a
      href="https://twitter.com/VueScratch"
      class="socials__item"
      title="Twitter"
    >
      <icon-twitter />
    </a>
    <a href="/feed.rss" title="RSS" class="socials__item">
      <icon-rss />
    </a>
  </div>
</template>
<style lang="scss">
.socials {
  display: flex;
  justify-content: space-around;
  width: 100%;

  svg {
    cursor: pointer;
    fill: $grey;
    width: $spacing * 8;
    height: $spacing * 8;

    &:hover {
      fill: $white;
    }
  }
}
</style>
