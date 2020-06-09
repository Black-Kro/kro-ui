<template>
    <div :class="$style.root">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    export default {

    }
</script>

<style module lang="scss">

    .root {
        display: inline-grid;
        grid-auto-flow: column;

        > * {
            border-radius: 0;
            border-left: 1px solid var(--kro-divider);

            &:first-child { border-radius: 0.25rem 0 0 0.25rem; border-left: none; }
            &:last-child { border-radius: 0 0.25rem 0.25rem 0; }

        }
    }

</style>