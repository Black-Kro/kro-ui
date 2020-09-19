<template>
  <div class="kro-divider" :class="{ 'kro-divider--vertical': vertical, 'kro-divider--inset': inset, }">
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'KroDivider',
  props: {
    vertical: Boolean,
    inset: Boolean,
    label: String,
  },
}
</script>

<style lang="scss">

    .kro-divider {
        @apply flex flex-row items-center justify-center;
        @apply font-bold text-sm;
        @apply border-none w-full my-4 mx-0;

        background: var(--kro-divider-color, var(--kro-divider));
        color: var(--kro-foreground-secondary);
        height: 1px;

        span {
            background: var(--kro-divider-label-background, var(--kro-background));
            margin-top: -0.125rem;
            user-select: none;
        }
    }

        .kro-divider--vertical {
            width: 1px;
            height: 100%;
            margin: 0 1rem;

            &.kro-divider--inset { @apply my-1; }
        }

        .kro-divider--inset { @apply mx-1; }
</style>
