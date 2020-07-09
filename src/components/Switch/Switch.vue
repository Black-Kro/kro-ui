<template>
    <div class="kro-switch">
        <div class="kro-switch__container">
            <input
                class="kro-switch__input"
                :checked="Array.isArray($attrs.modelValue) ? $attrs.modelValue.indexOf(value) > -1 : !!$attrs.modelValue"
                type="checkbox"
                @change="update"/>
        
        
            <div class="kro-switch__track">
                <div :class="{
                    'kro-switch__track-active': true, 'kro-switch__track-active--is-active': Array.isArray($attrs.modelValue) ? $attrs.modelValue.indexOf(value) > -1 : !!$attrs.modelValue}"></div>
            </div>
            <div :class="{'kro-switch__knob-container': true, 'kro-switch__knob-container--is-active': Array.isArray($attrs.modelValue) ? $attrs.modelValue.indexOf(value) > -1 : !!$attrs.modelValue}">
                <div class="kro-switch__knob"></div>
            </div>
        </div>
        <div v-if="!!$slots.default" class="kro-switch__label">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { ref, computed, watch, toRefs, reactive } from 'vue';

    export default {
        name: 'KroSwitch',
        props: {
            value: String,
        },
        setup(props, { emit, attrs }) {

            const update = (e) => {
                // Check if removing or adding state.
                if (e.target.checked) {
                    // Add item
                    if (props.value) {
                        if (Array.isArray(attrs.modelValue))
                            emit('update:modelValue', [...attrs.modelValue, props.value]);
                    } else {
                        emit('update:modelValue', true);
                    }
                } else {
                    // Remove item
                    if (props.value) {
                        if (Array.isArray(attrs.modelValue))
                            emit('update:modelValue', attrs.modelValue.filter(value => value != props.value));
                    } else {
                        emit('update:modelValue', false);
                    }
                }
            };

            return {
                update,
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../src/styles/general/typography';

    .kro-switch {
        display: inline-grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        align-items: center;
        gap: 0.75rem;
        margin-right: 1rem;
    }

    .kro-switch__label {
        @include useFont(body-1);
        color: var(--kro-label-color, var(--kro-foreground-secondary));
        white-space: nowrap;
    }

    .kro-switch__container {
        width: 2.5rem;
        height: 1.25rem;
        border-radius: 1rem;
        position: relative;

        display: flex;
        align-items: center;

        margin: 0.5rem 0;
    }

        .kro-switch__input {
            cursor: pointer;
            position: absolute;
            display: block;
            width: 100%; height: 100%;
            left: 0; top: 0;
            z-index: 50;
            margin: 0;
            opacity: 0;
        }

        .kro-switch__track {
            height: 0.875rem;
            width: 100%;
            border-radius: 0.5rem;
            background: var(--kro-switch-track-background, var(--kro-background-secondary));
            overflow: hidden;
            position: relative;
        }

        .kro-switch__track-active {
            background: var(--kro-switch-track-active-background, var(--kro-primary-darken));
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            transform: translateX(-100%);
            transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }

            .kro-switch__track-active--is-active { transform: none; }

        .kro-switch__knob-container {
            width: calc(100% - 1.25rem);
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            display: flex;
            flex-direction: row;
            align-items: center;

            transform: translateX(-10%);
            transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }

            .kro-switch__knob-container--is-active { transform: translateX(110%); }
        
        .kro-switch__knob {
            width: 1.25rem;
            height: 1.25rem;
            background: var(--kro-switch-knob-color, var(--kro-primary));
            border-radius: 50%;
            box-shadow: var(--kro-switch-knob-shadow, var(--kro-shadow));
        }

</style>