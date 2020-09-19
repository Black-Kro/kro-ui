<template>
  <div class="kro-textfield" :class="{ 'kro-textfield--is-textarea': multiline }">
    <div :class="{'kro-textfield__container': true, 'kro-textfield--focused': focused, 'kro-textfield--has-text': $attrs.modelValue , 'kro-textfield--is-textarea': multiline}">
      <label :class="{'kro-textfield__label': true, 'kro-textfield--focused': focused, 'kro-textfield--has-text': $attrs.modelValue }" :for="id">{{ label }}</label>
      <span :class="{'kro-textfield__pseudo-label': true, 'kro-textfield--focused': focused, 'kro-textfield--has-text': $attrs.modelValue }">{{ label }}</span>
      <input
        v-if="!multiline"

        class="kro-textfield__input"
        :id="id"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :autofocus="autofocus"
        :type="type"
        :min="min"
        :max="max"
        :maxlength="maxlength"
        :name="name"
        :value="$attrs.modelValue"

        @input="$emit('update:modelValue', $event.target.value)"
        @focus="focused = true"
        @blur="focused = false"
      >

      <textarea
        v-else
        :id="id"
        ref="inputRef"
        class="kro-textfield__input"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :autofocus="autofocus"
        :maxlength="maxlength"
        :name="name"
        :value="$attrs.modelValue"

        @input="($event) => { $emit('update:modelValue', $event.target.value); runAutoResize(); }"
        @focus="focused = true"
        @blur="focused = false"
      />

      <div v-if="loading || success || error" class="block pr-2">
        <kro-spinner v-if="loading" class="kro-textfield__spinner" />
        <kro-icon v-else-if="success" class="kro-textfield__success-icon" icon="mdi:check" />
        <kro-icon v-else-if="error" class="kro-textfield__error-icon" icon="mdi:alert" />
      </div>
    </div>
    <div v-if="!!$slots.default" class="pl-4 text-xs font-medium">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'KroTextfield',
  props: {
    label: { type: String },
    type: { type: String, default: 'text' },
    required: { type: Boolean },
    disabled: { type: Boolean },
    multiline: { type: Boolean },
    readonly: { type: Boolean },
    autofocus: { type: Boolean },
    min: { type: Number },
    max: { type: Number },
    maxlength: { type: Number },
    name: { type: String },
    id: { type: String },
    autoResize: { type: Boolean, default: true },
    loading: { type: Boolean },
    success: { type: Boolean },
    error: { type: Boolean },
    message: { type: String },
  },
  emits: ['update:modelValue'],

  setup(props) {
    const focused = ref(false)
    const inputRef = ref<HTMLElement | null>()

    const runAutoResize = () => {
      if (props.autoResize) {
        if (inputRef.value) {
          inputRef.value.style.height = 'auto'
          inputRef.value.style.height = `${inputRef.value.scrollHeight}px`
        }
      }
    }

    return {
      focused,
      runAutoResize,
      inputRef,
    }
  },
}
</script>

<style lang="scss">

.kro-textfield {
  display: inline-block;

  &.kro-textfield--is-textarea {
    display: block;
  }

  &__spinner {
    --kro-spinner-size: 1.5rem;
  }
}

.kro-textfield__container {
  display: inline-grid;
  position: relative;
  border: 2px solid var(--kro-textfield-border-color, var(--kro-divider));
  border-radius: 0.25rem;
  height: 3rem;

  display: flex;
  align-items: center;

  &.kro-textfield--focused { border-color: var(--kro-textifled-focused-border-color, var(--kro-primary)); }

  &.kro-textfield--is-textarea {
    height: auto;
    min-height: var(--kro-textfield-min-height, 3.5rem);
  }
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
  height: calc(3rem - 0.25rem);
  padding: 0 0.25rem;
  margin-left: 0.75rem;
  pointer-events: none;
  display: flex;
  align-items: center;
  z-index: 1;
  white-space: nowrap;
  top: 0;

  transform-origin: left center;
  transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

  &.kro-textfield--focused { color: var(--kro-textifled-focused-border-color, var(--kro-primary)) }

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
  padding: 1rem;
  display: block;
  width: 100%;
  height: 100%;

  resize: none;

  color: var(--kro-foreground);
  background: transparent;
  outline: none;
}

.kro-textfield__success-icon {
  color: var(--kro-success);
}

.kro-textfield__error-icon {
  color: var(--kro-error);
}

</style>
