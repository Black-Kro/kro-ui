<template>
    <button class="kro-icon-button">
        <span class="kro-icon-button__content">
            <kro-squircle class="kro-icon-button__squircle" />
            <kro-icon class="kro-icon-button__icon" :icon="icon"/>
        </span>
    </button>
</template>

<script lang="ts">
    import { KroSquircle } from '../Squircle';
    import { KroIcon } from '../Icon';

    export default {
        components: { KroIcon, KroSquircle },
        props: {
            icon: {
                type: String,
                requird: true
            }
        }
    }
</script>

<style lang="scss">

    .kro-icon-button {
        width: var(--kro-icon-button-size, 2.5rem);
        height: var(--kro-icon-button-size, 2.5rem);

        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
    }

        .kro-icon-button__content {
            display: grid;
            width: 100%;
            height: 100%;
            position: relative;

            place-items: center;
        }

        .kro-icon-button__icon {
            position: relative;
            color: var(--kro-icon-button-foreground, var(--kro-foreground));
        }

        .kro-icon-button__squircle {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100%; height: 100%;
            color: var(--kro-icon-button-background, var(--kro-background-secondary));
        }

</style>