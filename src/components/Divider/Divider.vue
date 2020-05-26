<template>
    <hr :class="{[$style.root]: true, [$style.vertical]: vertical, [$style.inset]: inset}">
</template>

<script>
export default {
    props: {
        vertical: Boolean,
        inset: Boolean,
    }
}
</script>

<style module lang="scss">

    .root {
        border: none;
        background: var(--kro-divider-color, var(--kro-component-divider));

        height: 1px;
        width: 100%;

        &.vertical {

            width: 1px;
            height: 100%;

            &.inset {
                margin: 0.25rem 0;
            }

        }

        &.inset {
            margin: 0 0.25rem;
        }

    }

</style>