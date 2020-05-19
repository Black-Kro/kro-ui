<template>
    <div :class="$style.root">
        <div :class="$style.container">
            <label :for="id">{{label}}</label>
            <input
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
            mask:       { type: [String, Array], default: '' },
            masked:     { type: Boolean, default: false },
            tokens:     { type: Object }
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

    }

</style>