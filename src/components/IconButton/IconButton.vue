<template>
    <button :class="$style.root">
        <span :class="$style.content">
            <kro-squircle :class="$style.squircle" />
            <kro-icon :class="$style.icon" :icon="icon"/>
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

<style module lang="scss">

    .root {
        width: var(--kro-icon-button-size, 2.5rem);
        height: var(--kro-icon-button-size, 2.5rem);

        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
    }

        .content {
            display: grid;
            width: 100%;
            height: 100%;
            position: relative;

            place-items: center;
        }

        .icon {
            position: relative;
            color: var(--kro-icon-button-foreground, var(--kro-foreground));
        }

        .squircle {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100%; height: 100%;
            color: var(--kro-icon-button-background, var(--kro-background-secondary));
        }

</style>