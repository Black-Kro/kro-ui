<template>
    <div :class="$style.root">
        <input
            :class="$style.input"
            type="checkbox"
            @change="$emit('update:modelValue', $event.target.checked)"/>
    
    
        <div :class="$style.track">
            <div :class="{[$style.trackActive]: true, [$style.isActive]: $attrs.modelValue}"></div>
        </div>
        <div :class="{[$style.knobContainer]: true, [$style.isActive]: $attrs.modelValue}">
            <div :class="$style.knob"></div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style module lang="scss">

    .root {
        width: 2.5rem;
        height: 1.25rem;
        border-radius: 1rem;
        position: relative;

        display: flex;
        align-items: center;

        margin: 0.5rem 0;
    }

        .input {
            cursor: pointer;
            position: absolute;
            display: block;
            width: 100%; height: 100%;
            left: 0; top: 0;
            z-index: 50;
            margin: 0;
            opacity: 0;
        }

        .track {
            height: 0.875rem;
            width: 100%;
            border-radius: 0.5rem;
            background: var(--kro-component-background);
            overflow: hidden;
            position: relative;
        }


        .trackActive {
            background: var(--kro-switch-track-active-background, var(--kro-component-accent));
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            transform: translateX(-100%);
            transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
            opacity: 0.35;

            &.isActive { transform: none; }
        }

        .knobContainer {
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

            &.isActive {
                transform: translateX(110%);
            }
        }

        .knob {
            width: 1.25rem;
            height: 1.25rem;
            background: var(--kro-switch-knob-color, var(--kro-component-accent));
            border-radius: 50%;
            box-shadow: var(--kro-component-shadow);
        }

</style>