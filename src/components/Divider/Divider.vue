<template>
    <hr :class="{'kro-divider': true, 'kro-divider--vertical': vertical, 'kro-divider--inset': inset}">
</template>

<script>
export default {
    props: {
        vertical: Boolean,
        inset: Boolean,
    }
}
</script>

<style lang="scss">

    .kro-divider {
        border: none;
        background: var(--kro-divider-color, var(--kro-divider));

        height: 1px;
        width: 100%;
    }

        .kro-divider--vertical {
            width: 1px;
            height: 100%;

            &.kro-divider--inset {
                margin: 0.25rem 0;
            }
        }

        .kro-divider--inset {
            margin: 0 0.25rem;
        }

</style>