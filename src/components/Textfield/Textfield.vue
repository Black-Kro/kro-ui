<template>
    <div :class="$style.root">
        <div :class="{[$style.container]: true, [$style.focused]: focused, [$style.hasText]: $attrs.modelValue }">
            <label :class="{[$style.label]: true, [$style.focused]: focused, [$style.hasText]: $attrs.modelValue }" :for="id">{{label}}</label>
            <span :class="{[$style.pseudoLabel]: true, [$style.focused]: focused, [$style.hasText]: $attrs.modelValue }">{{label}}</span>
            <input
                :class="$style.input"
                :disabled="disabled"
                :required="required"
                :readonly="readonly"
                :autofocus="autofocus"
                :type="type"
                :min="min"
                :max="max"
                :maxlength="maxlength"
                :name="name"
                :id="id"
                
                :value="value"

                @input="$emit('update:modelValue', $event.target.value)"
                @focus="focused = true"
                @blur="focused = false" />
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        props: {
            value:      { type: String, default: '' },
            label:      { type: String },
            type:       { type: String, default: 'text' },
            required:   { type: Boolean },
            disabled:   { type: Boolean },
            multiline:  { type: Boolean },
            readonly:   { type: Boolean },
            autofocus:  { type: Boolean },
            min:        { type: Number },
            max:        { type: Number },
            maxlength:  { type: Number },
            name:       { type: String },
            id:         { type: String },
            hasError:   { type: Boolean, default: false },
            isDirty:    { type: Boolean, default: false },
        },

        setup() {
            const focused = ref(false);

            return {
                focused
            }
        }
    }
</script>

<style module lang="scss">

    .root {
        display: inline-block;
    }

    .container {
        display: inline-grid;
        position: relative;
        border: 2px solid var(--kro-divider);
        border-radius: 0.25rem;
        height: 3rem;

        display: flex;
        align-items: center;

        &.focused { border-color: var(--kro-primary); }
    }

    .pseudoLabel {
        font-size: 0.75rem;
        font-weight: 500;
        position: absolute;
        padding: 0 0.25rem;
        top: 0;
        height: 2px;
        background: var(--kro-background);
        overflow: hidden;
        color: transparent;
        pointer-events: none;
        margin-left: calc(-0.25rem / 2);

        transform: translateX(0.75rem) translateY(-2px) scaleX(0);
        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

        &.hasText,
        &.focused { transform: translateX(0.75rem) translateY(-2px) scaleX(1); }
    }

    .label {
        font-size: 1rem;
        font-weight: 500;
        position: absolute;
        height: 100%;
        padding: 0 0.25rem;
        margin-left: 0.75rem;
        pointer-events: none;
        display: flex;
        align-items: center;
        z-index: 1;

        transform-origin: left center;
        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

        &.focused { color: var(--kro-primary); }

        &.hasText,
        &.focused {
            transform: scale(0.75) translateY(calc(-50% - 0.6rem));
        }
    }

    .input {
        border: none;
        font-size: 1rem;
        font-weight: 500;
        font-family: inherit;
        padding: 0 1rem;
        display: block;
        width: 100%;
        height: 100%;

        color: var(--kro-foreground);
        background: transparent;
        outline: none;
    }

</style>