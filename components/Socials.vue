<template>
  <div class="socials">
    <a
      href="https://facebook.com/VueScratch"
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
    <a
      href="https://pinterest.com/VueScratch"
      class="socials__item"
      title="Pinterest"
    >
      <icon-pinterest />
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
    width: $spacing * 4;
    height: $spacing * 4;

    &:hover {
      fill: $white;
    }
  }
}
</style>
