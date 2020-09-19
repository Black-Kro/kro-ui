<template>
  <div
    :class="{
      'kro-toolbar': true,
      'kro-toolbar--small': small,
      'kro-toolbar--raised': raised,
      'kro-toolbar--padded': padded }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'KroToolbar',
  props: {
    small: Boolean,
    padded: Boolean,
    raised: Boolean,
  },
}
</script>

<style lang="scss">

  .kro-toolbar {
    --kro-button-background: var(--kro-background);

    height: var(--kro-toolbar-height, 4rem);
    background: var(--kro-toolbar-background, var(--kro-background-secondary));

    display: flex;
    align-items: center;
  }

  .kro-toolbar--small { height: 3.5rem; }
  .kro-toolbar--padded { padding: 0 1rem; }
  .kro-toolbar--raised { box-shadow: var(--kro-toolbar-shadow, var(--kro-shadow)); }

</style>
