<template>
    <component :is="tag" :class="$style.root" :tabindex="tabindex">
        <div v-if="!!$slots.icon" :class="$style.icon">
            <slot name="icon"></slot>
        </div>
        <div :class="$style.content">
            <span :class="$style.title">
                <slot></slot>
            </span>
            <span v-if="!!$slots.subtitle" :class="$style.subtitle">
                <slot name="subtitle"></slot>
            </span>
        </div>
        <div v-if="!!$slots.action" :class="$style.action">
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

            to: {
                type: String,
                default: null,
            }
        },
        setup(props) {

            const tabindex = ref(-1);

            const setTabIndex = (value: number) => tabindex.value = value;

            return {
                setTabIndex,
            }
        }
    }
</script>

<style module lang="scss">

    .root {
        // --kro-list-item-icon-size: 2.5rem;

        display: flex;
        padding: 0 1rem;
        flex-direction: row;
        align-items: center;
    }

    .icon {
        display: grid;
        align-items: center;
        width: var(--kro-list-item-icon-size);
        margin-right: 1rem;
        color: var(--kro-list-item-icon-color, var(--kro-foreground-secondary));
    }

    .content {
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: min-content;
        align-content: center;
        line-height: 1.5;
        padding: 0.75rem 0;
        flex: 1;
    }

        .title {
            font-size: 1rem;
        }

        .subtitle {
            font-size: 0.75rem;
            color: var(--kro-foreground-secondary);
        }

    .action {
        padding: 0.75rem 0;
    }

</style>