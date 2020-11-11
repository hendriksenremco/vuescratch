<template>
  <div class="comments-list">
    <h2 class="comments-list__title">Comments</h2>
    <div v-for="n in 6" :id="n" :key="n" class="comments-list__item">
      <a class="comments-list__item__anchor" :href="'#' + n">#</a>
      <h3 class="comments-list__item__title">Remco Hendriksen</h3>
      <date class="comments-list__item__date">11-11-2020</date>
      <div class="comments-list__item__content">
        <p>
          Really great article. It saved my life today. Thanks alot. Keep up the
          good work!
        </p>
        <p>
          Really great article. It saved my life today. Thanks alot. Keep up the
          good work!
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.comments-list {
  display: grid;
  grid-gap: $spacing * 2;
  padding: $spacing * 4;

  @media (max-width: #{$breakpoint-tablet}) {
    padding: $spacing * 4;
  }
  @media (max-width: #{$breakpoint-mobile}) {
    padding: $spacing * 3;
  }

  &__title {
    margin: $spacing * 2 0;
    text-align: center;
  }

  &__item {
    background-color: var(--section-bg);
    box-shadow: 0 0 25px rgba($black, 0.1);
    color: var(--section-fg);
    border-radius: $border-radius;
    padding: $spacing * 3;
    position: relative;

    &:target {
      box-shadow: 0px 0px 0px 1px var(--accent);
    }

    &__anchor {
      color: var(--section-bg-alt);
      position: absolute;
      right: $spacing * 2;
      top: $spacing * 2;
      text-decoration: none;

      &:hover {
        color: var(--section-fg);
      }
    }

    &__title {
      color: var(--heading-color);
      font-size: 1.2rem;
    }
    &__date {
      opacity: 75%;
      font-size: 0.8rem;
    }
    &__content {
      font-size: 0.9rem;
      margin-top: $spacing * 2;
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
