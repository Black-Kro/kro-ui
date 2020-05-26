<template>
    <svg :class="$style.root" viewBox="0 0 24 24">
        <path :d="iconDefinition"></path>
    </svg>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import { useIcons } from '../../composables/icons';

    export default {

        props: {
            icon: {
                type: String,
                required: true,
            },
        },

        setup(props) {

            const { icons } = useIcons();

            const iconDefinition = computed(() => {
                if (icons && icons[props.icon])
                    return icons[props.icon];

                console.error(`Kro UI Error: No Icon Named "${props.icon}". Did you register your icon in the kro ui plugin?`)

                return 'M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z';
            });

            return {
                iconDefinition
            }
        }

    }
</script>

<style module lang="scss">
    .root {
        width: var(--kro-icon-size, 1.5rem);
        height: var(--kro-icon-size, 1.5rem);

        fill: currentColor;
    }
</style>