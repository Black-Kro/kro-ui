<template>
  <component
    :is="componentType"
    :class="{
      'kro-button': true,
      'kro-button--primary': primary,
      'kro-button--outline': outline,
      'kro-button--raised': raised,
      'kro-button--warning': warning,
      'kro-button--success': success,
      'kro-button--error': error,
      'kro-button--is-icon-button': icon && !$slots.default,
    }"

    rel="noreferrer"

    v-bind="componentProps"
    :target="href ? target : ''"
  >
    <kro-squircle v-if="icon && !$slots.default" class="kro-button__squircle" />
    <span :class="{'kro-button__content': true, 'kro-button__content--is-loading': loading }">

      <kro-icon v-if="icon" class="kro-button__icon" :icon="icon" />

      <slot />
      <kro-icon
        v-if="href && !(icon && !$slots.default) && !hideExternalIcon"
        icon="external"
      />
    </span>
    <span v-show="loading" class="kro-button__spinner"><kro-spinner /></span>
  </component>
</template>

<script lang="ts">
import { computed } from 'vue'

import { useRoutable, RoutableProps } from '../../composables/useRoutable'

import KroIcon from '../Icon/Icon.vue'
import KroSpinner from '../Spinner/Spinner.vue'
import KroSquircle from '../Squircle/Squircle.vue'

export default {
  name: 'KroButton',
  components: { KroIcon, KroSpinner, KroSquircle },
  props: {
    ...RoutableProps,

    /**
             * Adds loading icon to the button
             */
    loading: {
      type: Boolean,
      default: false,
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

    warning: Boolean,

    error: Boolean,

    success: Boolean,

  },

  setup(props: any) {
    const { tag, componentProps } = useRoutable(props)

    const componentType = computed(() => {
      return tag || 'button'
    })

    return {
      componentProps,
      componentType,
    }
  },
}

</script>

<style lang="scss">
    .kro-button {
        --kro-spinner-size: 1.25rem;
        --kro-spinner-thickness: 0.25rem;

        @apply relative inline-grid items-center content-center;
        @apply px-4 py-2 rounded-sm appearance-none text-sm;
        @apply uppercase no-underline cursor-pointer h-10 m-0;
        @apply font-medium align-top;

        font-family: inherit;

        background: var(--kro-button-background, var(--kro-background-secondary));
        color: var(--kro-button-foreground, var(--kro-foreground));

        border: 1px solid var(--kro-button-border-color, transparent);

        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1),
                    filter 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

        &--warning {
            --kro-button-background: var(--kro-warning);
            --kro-button-foreground: var(--kro-warning-foreground);
        }

        &--success {
            --kro-button-background: var(--kro-success);
            --kro-button-foreground: var(--kro-success-foreground);
        }

        &--error {
            --kro-button-background: var(--kro-error);
            --kro-button-foreground: var(--kro-error-foreground);
        }

        &:disabled {
            @apply opacity-75 pointer-events-none;
            color: var(--kro-foreground-disabled)
        }

        &:focus,
        &:hover {
            @apply outline-none;
            filter: brightness(calc(1.15 - (var(--kro-theme-bool) / 3 )));
        }
        &:active { transform: scale(0.95); }
    }

        .kro-button--primary {
            --kro-button-background: var(--kro-button-background-primary, var(--kro-primary));
            --kro-button-foreground: var(--kro-button-foreground-primary, var(--kro-primary-foreground));
        }

        .kro-button--raised {
            box-shadow: var(--kro-button-shadow, var(--kro-shadow));
        }

        .kro-button--outline {
            @apply bg-transparent;
            border: 1px solid var(--kro-button-foreground, var(--kro-foreground));
        }

        .kro-button--outline.kro-button--primary {
            --kro-button-foreground: var(--kro-button-background);
            border: 1px solid var(--kro-button-background);
        }

        .kro-button--is-icon-button {
            @apply bg-transparent;

            width: var(--kro-icon-button-size, 2.5rem);
            height: var(--kro-icon-button-size, 2.5rem);

            @apply border-none p-0;

            &.kro-button--outline {
                --kro-button-background: transparent;

                .kro-button__squircle {
                    stroke: var(--kro-button-foreground, var(--kro-foreground));
                    stroke-width: 2px;
                }
            }
        }

        .kro-button__squircle {
            @apply absolute inset-0 w-full h-full;
            color: var(--kro-button-background, var(--kro-background-secondary));
        }

        .kro-button__icon {
            @apply relative;
        }

    .kro-button__spinner {
        @apply absolute top-0 left-0 w-full h-full;
        @apply grid items-center justify-center;
    }

    .kro-button__content {
        --icon-size: 1.25rem;

        @apply grid grid-flow-col gap-2 items-center justify-center;
    }
        .kro-button__content--is-loading { @apply opacity-0; }

</style>
