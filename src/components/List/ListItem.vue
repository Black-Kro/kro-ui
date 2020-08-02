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
            href: {
                type: String,
                default: undefined
            },
            to: {
                type: [String, Object],
            }
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
        display: flex;
        padding: 0 1rem;
        flex-direction: row;
        align-items: center;
        color: inherit;
    }

    .kro-list-item__icon {
        display: grid;
        align-items: center;
        width: var(--kro-list-item-icon-size);
        margin-right: 1rem;
        color: var(--kro-list-item-icon-color, var(--kro-foreground-secondary));
    }

    .kro-list-item__content {
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: min-content;
        align-content: center;
        line-height: 1.5;
        padding: 0.75rem 0;
        flex: 1;
        color: var(--kro-list-item-foreground, var(--kro-foreground))
    }

        .kro-list-item__title {
            font-size: 1em;
        }

        .kro-list-item__subtitle {
            font-size: 0.75em;
            color: var(--kro-foreground-secondary);
        }

    .kro-list-item__action {
        padding: 0.75rem 0;
        color: var(--kro-list-item-icon-color, var(--kro-foreground-secondary));
    }

</style>