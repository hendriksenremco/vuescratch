<template>
  <div class="modal">
    <div class="modal__bg" @click="$emit('close')" />
    <div class="modal__content">
      <div class="modal__close">
        <button @click="$emit('close')">&times;</button>
      </div>
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.modal {
  align-items: center;
  justify-content: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  z-index: 1000;

  &__bg {
    background-color: rgba($black, 0.5);
    bottom: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    position: fixed;
    z-index: 2;
  }

  &__content {
    background-color: $white;
    color: $black;
    border-radius: $border-radius;
    display: flex;
    flex-direction: column;
    width: 95vw;
    height: 95%;
    max-height: 95vh;
    max-width: 800px;
    padding: $spacing * 4;
    position: relative;
    opacity: 1;
    z-index: 2;
  }

  &__close {
    position: absolute;
    right: $spacing * 2;
    top: $spacing * 2;
    z-index: 3;
  }
}
</style>
