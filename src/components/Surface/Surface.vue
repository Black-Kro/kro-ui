<template>
    <div :class="{'kro-surface': true, 'kro-surface--padded': padded, 'kro-surface--raised': raised, 'kro-surface--outline': outline}">
        <div class="kro-surface__label-container" v-if="!!icon || !!label">
            <kro-icon class="kro-surface__icon" v-if="!!icon" :icon="icon" />
            <div class="kro-surface__label" v-if="!!label">{{label}}</div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'KroSurface',
        props: {
            padded: {
                type: Boolean,
                default: true
            },

            raised: {
                type: Boolean,
                default: true,
            },

            outline: {
                type: Boolean,
                default: false,
            },

            icon: String,

            label: String,
        }
    }
</script>

<style lang="scss">

    .kro-surface {
        background: var(--kro-surface-background, var(--kro-background-secondary));
        border-radius: 0.25rem;
        position: relative;

        &:not(.kro-surface--outline) {
            --kro-button-background: var(--kro-background);
            --kro-divider-label-background: var(--kro-background-secondary);

            &.kro-surface--padded { padding: 1rem; }
            &.kro-surface--raised { box-shadow: var(--kro-surface-shadow, var(--kro-shadow)); }
        }

        &.kro-surface--outline {
            --kro-surface-background: var(--kro-background);

            padding: 1rem;
            border: 2px solid var(--kro-surface-outline-color, var(--kro-divider));
        }
    }

    .kro-surface__label-container {
        display: flex;
        flex-direction: row;
        align-items: center;

        position: absolute;
        top: 0;
        transform: translateY(calc(-50% - 2px)) translateX(-.5rem);
        padding: 0 .5rem;
        background: var(--kro-surface-background, var(--kro-background-secondary));
    }

        .kro-surface__icon {
            margin-right: 0.5rem;
        }


</style>