<template>
    <div :class="{[$style.root]: true, [$style.padded]: padded, [$style.raised]: raised}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            padded: {
                type: Boolean,
                default: true
            },

            raised: {
                type: Boolean,
                default: true,
            }
        }
    }
</script>

<style module lang="scss">

    .root {
        background: var(--kro-background-secondary);
        border-radius: 0.25rem;
    }

        .padded {
            padding: 1rem;
        }

        .raised {
            box-shadow: var(--kro-shadow);
        }

</style>