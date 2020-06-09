<template>
    <div :class="{
        [$style.root]: true,
        [$style.small]: small,
        [$style.raised]: raised,
        [$style.padded]: padded }">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            small: Boolean,
            padded: Boolean,
            raised: Boolean,
        }
    }
</script>

<style module lang="scss">

    .root {
        height: var(--kro-toolbar-height, 4rem);
        background: var(--kro-toolbar-background, var(--kro-background-secondary));

        display: flex;
        align-items: center;

    }

    .small { height: 3.5rem; }
    .padded { padding: 0 1rem; }
    .raised { box-shadow: var(--kro-shadow); }

</style>