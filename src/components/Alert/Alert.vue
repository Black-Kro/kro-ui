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

<style lang="scss">

    .kro-alert {
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
    }

        .kro-alert--has-icon { grid-template-columns: min-content auto; }
        .kro-alert--is-dismissible { grid-template-columns: auto min-content; }

        .kro-alert--has-icon,
        .kro-alert--is-dismissible {
            grid-template-columns: min-content auto min-content;
        }

        .kro-alert--error {
            background: var(--kro-error);
            color: var(--kro-error-foreground);
        }

        .kro-alert--warning {
            background: var(--kro-warning);
            color: var(--kro-warning-foreground);
        }

        .kro-alert--success {
            background: var(--kro-success);
            color: var(--kro-success-foreground);
        }
        
        .kro-alert--info {
            background: var(--kro-info);
            color: var(--kro-info-foreground);
        }

    .kro-alert__icon {
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(0, 0, 0, .12);
        width: 2.75rem;
        height: 2.75rem;
    }

</style>