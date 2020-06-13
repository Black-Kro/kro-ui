<template>
    <div :class="{'kro-surface': true, 'kro-surface--padded': padded, 'kro-surface--raised': raised}">
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

<style lang="scss">

    .kro-surface {
        background: var(--kro-background-secondary);
        border-radius: 0.25rem;
    }

        .kro-surface--padded {
            padding: 1rem;
        }

        .kro-surface--raised {
            box-shadow: var(--kro-shadow);
        }

</style>