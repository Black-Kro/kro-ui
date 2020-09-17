<template>
    <component 
        :is="componentType" 
        v-bind="componentProps"
        class="kro-list-item">
        <div v-if="!!$slots.icon" class="kro-list-item__icon">
            <slot name="icon"></slot>
        </div>
        <div class="kro-list-item__content">
            <span class="kro-list-item__title">
                <slot></slot>
            </span>
            <span v-if="!!$slots.subtitle" class="kro-list-item__subtitle">
                <slot name="subtitle"></slot>
            </span>
        </div>
        <div v-if="!!$slots.action" class="kro-list-item__action">
            <slot name="action"></slot>
        </div>
    </component>
</template>

<script lang="ts">
    import { computed, ref } from 'vue';
    import { useRoutable, RoutableProps } from '../../composables/useRoutable';

    export default {
        name: 'KroListItem',
        props: {
            ...RoutableProps,
            tag: {
                type: String,
                default: 'div'
            },
        },
        setup(props) {
            const { tag, componentProps } = useRoutable(props);

            const componentType = computed(() => { return tag ? tag : 'div' });

            return {
                componentProps,
                componentType
            }
        }
    }
</script>

<style lang="scss">

    .kro-list-item {
        @apply flex flex-row items-center px-4;
        color: inherit;
    }

    .kro-list-item__icon {
        @apply grid items-center mr-4;
        width: var(--kro-list-item-icon-size);
        color: var(--kro-list-item-icon-color, var(--kro-foreground-secondary));
    }

    .kro-list-item__content {
        @apply grid grid-flow-row content-center py-3 flex-1;
        @apply leading-normal;
        grid-auto-rows: min-content;
        color: var(--kro-list-item-foreground, var(--kro-foreground))
    }

        .kro-list-item__title {
            @apply text-base;
        }

        .kro-list-item__subtitle {
            @apply text-xs;
            color: var(--kro-foreground-secondary);
        }

    .kro-list-item__action {
        @apply py-3;
        color: var(--kro-list-item-icon-color, var(--kro-foreground-secondary));
    }

</style>