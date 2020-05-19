<template>

    <component 
        :class="{ 
            [$style.root]: true,
            [$style.isPrimary]: primary,
            [$style.isOutlined]: outline,
            [$style.isRaised]: raised,
        }" 
        :is="componentType" 
        
        :href="href" 
        :to="to" 
        :target="target">
        <span :class="$style.content" v-show="!loading">
            <slot></slot>
            <kro-icon 
                v-if="href"
                icon="external" />
        </span>
        <span v-show="loading">Loading...</span>
    </component>
</template>

<script lang="ts">
    import { computed } from 'vue';
    import { KroIcon } from '../Icon';

    export default {
        components: { KroIcon },
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
            to: String,

            /**
             * The button type
             */
            type: String,
            
            /**
             * Apply primary button styling to the button
             */
            primary: Boolean,

            outline: Boolean,

            raised: Boolean,

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

<style module lang="scss">

    .root {
        display: inline-grid;
        place-items: center;
        place-content: center;
        padding: 0.5rem 0.875rem;

        text-decoration: none;
        text-transform: uppercase;

        cursor: pointer;

        background: var(--kro-button-background, var(--kro-component-background));
        color: var(--kro-button-foreground, var(--kro-component-foreground));

        margin: 1rem;

        font-family: inherit;
        font-size: 0.875rem;
        font-weight: 600;

        border: 1px solid var(--kro-button-border-color, transparent);
        border-radius: 0.25rem;

        &.isPrimary {
            background: var(--kro-button-background-primary, var(--kro-component-accent));
            color: var(--kro-button-foreground-primary, var(--kro-component-accent-contrast));
        }

        &.isRaised {
            box-shadow: var(--kro-component-shadow);
        }

        &.isOutlined {
            background: transparent;
            border: 1px solid var(--kro-button-foreground, var(--kro-component-foreground));
        }

        &:active {
            transform: scale(0.95);
        }

    }

    .content {
        display: grid;
        grid-auto-flow: column;
        gap: 0.5rem;
        place-items: center;

        --icon-size: 1.25rem;
    }

</style>