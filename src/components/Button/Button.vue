<template>
    <component 
        :class="{ 
            'kro-button': true,
            'kro-button--primary': primary,
            'kro-button--outline': outline,
            'kro-button--raised': raised,
            'kro-button--is-icon-button': icon && !$slots.default,
        }" 
        :is="componentType"
         
        rel="noreferrer"
        
        :href="href"
        :to="to" 
        :target="href ? target : ''">
        <span :class="{'kro-button__content': true, 'kro-button__content--is-loading': loading }">
            
            <kro-squircle class="kro-button__squircle" v-if="icon && !$slots.default" />
            <kro-icon class="kro-button__icon" v-if="icon" :icon="icon" />


            <slot></slot>
            <kro-icon 
                v-if="href && !(icon && !$slots.default) && !hideExternalIcon"
                icon="external" />
        </span>
        <span class="kro-button__spinner" v-show="loading"><kro-spinner /></span>
    </component>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import KroIcon from '../Icon/Icon.vue';
    import KroSpinner from '../Spinner/Spinner.vue';
    import KroSquircle from '../Squircle/Squircle.vue';

    export default {
        name: 'KroButton',
        components: { KroIcon, KroSpinner, KroSquircle },
        props: {

            /**
             * Adds loading icon to the button
             */
            loading: {
                type: Boolean,
                default: false
            },

            /**
             * Turns the button into a link
             */
            href: String,

            /**
             * If the button is a link, then this will set the target
             */
            target: {
                type: String,
                default: '_blank'    
            },

            /**
             * Makes the button a router-link
             */
            to: {
                type: [String, Object]
            },

            /**
             * The button type
             */
            type: String,
            
            /**
             * Apply primary button styling to the button
             */
            primary: Boolean,

            /**
             * Gives the button an outline style
             */
            outline: Boolean,

            /**
             * Apply a shadow to the button
             */
            raised: Boolean,

            /**
             * Adds an icon to the button
             */
            icon: String,

            /**
             * Hide the external icon
             */
            hideExternalIcon: Boolean,

        },

        setup(props) {
            
            const componentType = computed(() => {
                const { to, href } = props;
                
                if (to) return 'router-link';
                if (href) return 'a';

                return 'button';
            });

            return {
                componentType
            }
        }
    }
</script>

<style lang="scss">
    .kro-button {
        --kro-spinner-size: 1.25rem;
        --kro-spinner-thickness: 0.25rem; 
        
        position: relative;
        display: inline-grid;
        place-items: center;
        place-content: center;
        padding: 0.5rem 0.875rem;

        text-decoration: none;
        text-transform: uppercase;

        cursor: pointer;

        height: 2.5rem;

        background: var(--kro-button-background, var(--kro-background-secondary));
        color: var(--kro-button-foreground, var(--kro-foreground));

        margin: 0;

        font-family: inherit;
        font-size: 0.875rem;
        font-weight: 500;
        vertical-align: top;

        border: 1px solid var(--kro-button-border-color, transparent);
        border-radius: 0.25rem;

        -webkit-appearance: none;

        &:active { transform: scale(0.95); }
    }

        .kro-button--primary {
            background: var(--kro-button-background-primary, var(--kro-primary));
            color: var(--kro-button-foreground-primary, var(--kro-primary-foreground));
        }

        .kro-button--raised {
            box-shadow: var(--kro-button-shadow, var(--kro-shadow));
        }

        .kro-button--outline {
            background: transparent;
            border: 1px solid var(--kro-button-foreground, var(--kro-foreground));
        }

        .kro-button--is-icon-button {
            background: transparent;

            width: var(--kro-icon-button-size, 2.5rem);
            height: var(--kro-icon-button-size, 2.5rem);


            border: none;
            padding: 0;
        }

        .kro-button__squircle {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100%; height: 100%;
            color: var(--kro-button-background, var(--kro-background-secondary));
        }

        .kro-button__icon {
            position: relative;
        }


    .kro-button__spinner {
        position: absolute;
        top: 0; left: 0; 
        width: 100%; height: 100%;

        display: grid;
        place-items: center;
    }

    .kro-button__content {
        --icon-size: 1.25rem;

        display: grid;
        grid-auto-flow: column;
        gap: 0.5rem;
        place-items: center;
        justify-content: center;

    }
        .kro-button__content--is-loading { opacity: 0; }

</style>