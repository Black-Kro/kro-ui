<template>
    <div class="kro-textfield">
        <div :class="{'kro-textfield__container': true, 'kro-textfield--focused': focused, 'kro-textfield--has-text': $attrs.modelValue }">
            <label :class="{'kro-textfield__label': true, 'kro-textfield--focused': focused, 'kro-textfield--has-text': $attrs.modelValue }" :for="id">{{label}}</label>
            <span :class="{'kro-textfield__pseudo-label': true, 'kro-textfield--focused': focused, 'kro-textfield--has-text': $attrs.modelValue }">{{label}}</span>
            <input
                class="kro-textfield__input"
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
        },

        setup() {
            const focused = ref(false);

            return {
                focused
            }
        }
    }
</script>

<style lang="scss">

    .kro-textfield {
        display: inline-block;
    }

    .kro-textfield__container {
        display: inline-grid;
        position: relative;
        border: 2px solid var(--kro-divider);
        border-radius: 0.25rem;
        height: 3rem;

        display: flex;
        align-items: center;

        &.kro-textfield--focused { border-color: var(--kro-primary); }
    }

    .kro-textfield__pseudo-label {
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
        white-space: nowrap;

        transform: translateX(0.75rem) translateY(-2px) scaleX(0);
        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

        &.kro-textfield--has-text,
        &.kro-textfield--focused { transform: translateX(0.75rem) translateY(-2px) scaleX(1); }
    }

    .kro-textfield__label {
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
        white-space: nowrap;

        transform-origin: left center;
        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

        &.kro-textfield--focused { color: var(--kro-primary); }

        &.kro-textfield--has-text,
        &.kro-textfield--focused {
            transform: scale(0.75) translateY(calc(-50% - 0.6rem));
        }
    }

    .kro-textfield__input {
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