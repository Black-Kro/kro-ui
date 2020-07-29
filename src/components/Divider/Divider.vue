<template>
    <div class="kro-divider" :class="{ 'kro-divider--vertical': vertical, 'kro-divider--inset': inset, }">
        <span v-if="label">{{label}}</span>
    </div>
</template>

<script>
    export default {
        name: 'KroDivider',
        props: {
            vertical: Boolean,
            inset: Boolean,
            label: String,
        }
    }
</script>

<style lang="scss">

    .kro-divider {
        border: none;
        background: var(--kro-divider-color, var(--kro-divider));

        height: 1px;
        width: 100%;
        margin: 1rem 0;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: var(--kro-foreground-secondary);
        font-weight: 700;
        font-size: 0.875rem;

        span {
            padding: 0 0.5rem;
            background: var(--kro-divider-label-background, var(--kro-background));
            margin-top: -0.125rem;
        }
    }

        .kro-divider--vertical {
            width: 1px;
            height: 100%;
            margin: 0 1rem;

            &.kro-divider--inset {
                margin: 0.25rem 0;
            }
        }

        .kro-divider--inset {
            margin: 0 0.25rem;
        }

</style>