<template>
    <component 
        :is="tag"
        v-show="!isHidden"
        :class="{
            [$style.root]: true, 
            [$style.error]: type === 'error',
            [$style.info]: type === 'info',
            [$style.warning]: type === 'warning',
            [$style.success]: type === 'success',
            [$style.hasIcon]: iconName,
            [$style.isDismissable]: dismissible,
        }">
        
        
        <div :class="$style.icon">
            <kro-icon v-if="iconName" :icon="iconName"></kro-icon>
        </div>
        <div :class="$style.contentContainer">
            <slot></slot>
        </div>
        <div v-if="dismissible" :class="$style.actionContainer">
            <kro-icon-button @click="hide" icon="close" />
        </div>
    </component>
</template>

<script lang="ts">
    import { ref, computed } from 'vue';
    import { KroIcon } from '../Icon';
    import { KroIconButton } from '../IconButton';

    export default {
        components: { KroIcon, KroIconButton },
        props: {
            type: {
                type: String,
                default: 'info'
            },

            dismissible: Boolean,

            icon: String,

            tag: {
                type: String,
                default: 'div'
            }
        },

        setup(props) {

            const isHidden = ref(false);

            const hide = () => {
                isHidden.value = true;
            };

            const show = () => {
                isHidden.value = false;
            }

            const iconName = computed(() => {
                const { type, icon } = props;

                if (icon)
                    return icon;

                if (type === 'warning')
                    return 'warning';

                if (type === 'info')
                    return 'info';

                if (type === 'error')
                    return 'error';

                if (type === 'success')
                    return 'success';

                return null;
            });

            return {
                iconName,
                isHidden,

                hide,
                show,
            }
        }
    }
</script>

<style module lang="scss">

    .root {
        
        --kro-icon-button-background: rgba(0, 0, 0, .12);

        border-radius: 0.25rem;
        padding: 0 1rem;
        height: 4rem;

        display: grid;
        grid-auto-flow: column;
        grid-gap: 1rem;
        align-items: center;
        align-content: center;

        color: var(--kro-foreground);

        &.hasIcon {
            grid-template-columns: min-content auto;
        }

        &.isDismissable {
            grid-template-columns: auto min-content;
        }

        &.hasIcon.isDismissable {
            grid-template-columns: min-content auto min-content;
        }

        &.error {
            background: var(--kro-error);
            color: var(--kro-error-foreground);
        }

        &.warning {
            background: var(--kro-warning);
            color: var(--kro-warning-foreground);
        }

        &.success {
            background: var(--kro-success);
            color: var(--kro-success-foreground);
        }
        
        &.info {
            background: var(--kro-info);
            color: var(--kro-info-foreground);
        }

    }

    .icon {
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(0, 0, 0, .12);
        width: 2.75rem;
        height: 2.75rem;
    }

</style>