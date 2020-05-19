<template>
    <svg :class="$style.root" viewBox="0 0 24 24">
        <path :d="iconDefinition"></path>
    </svg>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import icons from '../../assets/icons';

    export default {

        props: {
            icon: {
                type: String,
                required: true,
            },
        },

        setup(props) {

            const iconDefinition = computed(() => {
                return icons[props.icon];
            });

            return {
                iconDefinition
            }
        }

    }
</script>

<style module lang="scss">
    .root {
        width: var(--icon-size, 1.5rem);
        height: var(--icon-size, 1.5rem);

        fill: currentColor;
    }
</style>