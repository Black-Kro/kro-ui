<template>
    <component :is="tag" class="kro-list-item" :tabindex="tabindex">
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

    export default {
        props: {
            tag: {
                type: String,
                default: 'div'
            },
        },
        setup(props) {
            return {
            }
        }
    }
</script>

<style lang="scss">

    .kro-list-item {
        // --kro-list-item-icon-size: 2.5rem;

        display: flex;
        padding: 0 1rem;
        flex-direction: row;
        align-items: center;
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
    }

        .kro-list-item__title {
            font-size: 1rem;
        }

        .kro-list-item__subtitle {
            font-size: 0.75rem;
            color: var(--kro-foreground-secondary);
        }

    .kro-liste-item__action {
        padding: 0.75rem 0;
    }

</style>