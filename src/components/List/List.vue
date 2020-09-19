<template>
  <div class="kro-list">
    <slot />
  </div>
</template>

<script lang="ts">

export default {
  name: 'KroList',
  props: {
    disabled: Boolean,
    dense: Boolean,
  },

}
</script>

<style lang="scss">

    .kro-list {
        padding: 0.5rem 0;
        background: var(--kro-background-secondary);
    }

</style>
