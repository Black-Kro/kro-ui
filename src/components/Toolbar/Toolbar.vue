<template>
    <div :class="{
        [$style.root]: true,
        [$style.small]: small,
        [$style.raised]: raised,
        [$style.padded]: padded }">
        <div :class="$style.content">
            <slot></slot>
        </div>
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
        height: 4rem;
        background: var(--kro-toolbar-background, var(--kro-component-background));

        display: flex;
        align-items: center;

    }

        .content {
            --kro-component-background: var(--kro-component-background-secondary);
            flex: 1;
        }

    .small { height: 3.5rem; }
    .padded { padding: 0 1rem; }
    .raised { box-shadow: var(--kro-component-shadow); }

</style>