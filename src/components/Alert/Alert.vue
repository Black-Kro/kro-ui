<template>
    <component 
        :is="tag"
        v-show="!isHidden"
        :class="{
            'kro-alert': true, 
            'kro-alert--error': type === 'error',
            'kro-alert--info': type === 'info',
            'kro-alert--warning': type === 'warning',
            'kro-alert--success': type === 'success',
            'kro-alert--outline': outline,
            'kro-alert--has-icon': iconName,
            'kro-alert--is-dismissible': dismissible,
        }">
        
        <div class="kro-alert__icon">
            <kro-icon v-if="iconName" :icon="iconName"></kro-icon>
        </div>
        <div>
            <slot></slot>
        </div>
        <div v-if="dismissible">
            <kro-button @click="hide" icon="close" />
        </div>
    </component>
</template>

<script lang="ts">
    import { ref, computed } from 'vue';
    import { KroIcon } from '../Icon';
    import { KroButton } from '../Button';

    export default {
        name: 'KroAlert',
        components: { KroIcon, KroButton },
        emits: ['dismissed', 'show'],
        props: {
            type: {
                type: String,
                default: 'info'
            },

            dismissible: {
                type: Boolean,
                default: false,
            },

            tag: {
                type: String,
                default: 'div',
            },

            icon: String,

            outline: {
                type: Boolean,
                default: false,
            }
        },

        setup(props, { emit }) {

            const isHidden = ref(false);

            const hide = () => {
                emit('dismissed');
                isHidden.value = true;
            };

            const show = () => {
                emit('show');
                isHidden.value = false;
            }

            const iconName = computed(() => {
                const { type, icon } = props;

                if (icon)
                    return icon;

                if (type === 'warning')
                    return 'mdi:alert-circle';

                if (type === 'info')
                    return 'mdi:alert-circle';

                if (type === 'error')
                    return 'mdi:alert';

                if (type === 'success')
                    return 'mdi:check';

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

<style lang="scss">

    .kro-alert {
        --kro-button-background: rgba(0, 0, 0, .12);
        --kro-button-foreground: var(--kro-alert-foreground);

        @apply grid grid-flow-col gap-4 items-center content-center;
        @apply rounded-md p-4;
        @apply font-medium text-sm;

        background: var(--kro-alert-background, var(--kro-background-secondary));
        color: var(--kro-alert-foreground, var(--kro-foreground));
    }

        .kro-alert--has-icon { grid-template-columns: min-content auto; }
        .kro-alert--is-dismissible { grid-template-columns: auto min-content; }

        .kro-alert--has-icon,
        .kro-alert--is-dismissible {
            grid-template-columns: min-content auto min-content;
        }

        .kro-alert--error {
            --kro-alert-background: var(--kro-error);
            --kro-alert-foreground: var(--kro-error-foreground);
        }

        .kro-alert--warning {
            --kro-alert-background: var(--kro-warning);
            --kro-alert-foreground: var(--kro-warning-foreground);
        }

        .kro-alert--success {
            --kro-alert-background: var(--kro-success);
            --kro-alert-foreground: var(--kro-success-foreground);
        }
        
        .kro-alert--info {
            --kro-alert-background: var(--kro-info);
            --kro-alert-foreground: var(--kro-info-foreground);
        }

        .kro-alert--outline {
            background: transparent;
            --kro-alert-foreground: var(--kro-alert-background);
            border: 1px solid var(--kro-alert-background);
        }

    .kro-alert__icon {
        @apply grid items-center justify-center;
        @apply w-10 h-10;
        @apply rounded-full;

        background: rgba(0, 0, 0, .12);
    }

</style>