<template>
  <div class="kro-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'KroButtonGroup',
}
</script>

<style lang="scss">

    .kro-button-group {
        display: inline-grid;
        grid-auto-flow: column;

        .kro-button {
            border-radius: 0;
            border-left: 1px solid var(--kro-divider);

            &:first-child { border-radius: 0.25rem 0 0 0.25rem; border-left: none; }
            &:last-child { border-radius: 0 0.25rem 0.25rem 0; }
        }
    }

</style>
