<template>
  <slot
    name="activator"
    :close="close"
    :open="open"
    :toggle="toggle"
  />

  <teleport to="#kro-portal">
    <transition appear name="kro-dialog-scrim">
      <div
        v-if="$attrs.modelValue"
        class="kro-dialog__scrim fixed inset-0"
        @click="() => { if (!persistent) { close(); } }"
      />
    </transition>
    <div ref="dialog" tabindex="-1" class="kro-dialog__container">
      <transition appear name="kro-dialog" @after-leave="onDialogLeaveAnimationComplete">
        <kro-surface
          v-if="$attrs.modelValue"
          class="kro-dialog"
          v-bind="$attrs"
        >
          <focus-trap v-model="$attrs.modelValue">
            <div class="grid grid-row gap-4">
              <div
                v-if="!!$slots.header"
                class="kro-dialog__header text-lg"
              >
                <slot
                  name="header"
                  :open="open"
                  :close="close"
                  :toggle="toggle"
                />
              </div>

              <div class="kro-dialog__body">
                <slot
                  :open="open"
                  :close="close"
                  :toggle="toggle"
                />
              </div>

              <div
                v-if="!!$slots.footer"
                class="kro-dialog__footer"
              >
                <slot
                  name="footer"
                  :open="open"
                  :close="close"
                  :toggle="toggle"
                />
              </div>
            </div>
          </focus-trap>
        </kro-surface>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts" setup="props, { emit, attrs }">
import { ref, onUpdated } from 'vue'
import { KroSurface } from '../Surface'
import { FocusTrap } from '../FocusTrap'
import { useWindow } from '../../composables'

declare const props: {
  persistent?: Boolean
}

declare const emit: any
declare const attrs: any

const { disableDocumentScroll, enableDocumentScroll } = useWindow()

export const dialog = ref<HTMLElement | null>(null)

let openedThroughMethod = false

/**
 * Handle Controls for opening and closing the dialog.
 */

const canCloseDialog = (e: any) => {
  if (e?.type === 'keydown') {
    if (e.key === 'Escape') {
      if (!props.persistent)
        return true
    }
  }
  else {
    return true
  }

  return false
}

/**
     * Handle Dialog Animation Events
     */

export const onDialogLeaveAnimationComplete = () => {
  emit('close-animation-end')
}

onUpdated(() => {
  if (!openedThroughMethod && attrs.modelValue === true) {
    emit('update:modelValue', true)
    emit('open')
    disableDocumentScroll()
    window.addEventListener('keydown', close)

    if (dialog.value)
      dialog.value.focus()
  }
})

/**
     * Dialog Controls
     */
export const open = () => {
  openedThroughMethod = true
  emit('update:modelValue', true)
  emit('open')
  disableDocumentScroll()
  window.addEventListener('keydown', close)

  if (dialog.value)
    dialog.value.focus()
}

export const close = (e: any) => {
  if (canCloseDialog(e)) {
    emit('update:modelValue', false)
    emit('close')
    window.removeEventListener('keydown', close)
    enableDocumentScroll()
    openedThroughMethod = false
  }
}

export const toggle = () => {
  attrs.modelValue ? close(null) : open()
}

export default {
  name: 'KroDialog',
  components: { KroSurface, FocusTrap },
  inheritAttrs: false,
  emits: ['update:modelValue', 'close', 'open', 'close-animation-end'],
}
</script>

<style lang="scss">

    @import '../../styles/general/layers';

    .kro-dialog {
        @apply pointer-events-auto max-w-xl;

        &__scrim {
            @include useLayer(dialog);
            background: rgba(0, 0, 0, .24);
        }

        &__footer {
            @apply flex flex-row align-middle gap-4;
        }

        &__container {
            @include useLayer(dialog);

            @apply fixed inset-0;
            @apply grid grid-cols-1 items-center justify-center;
            @apply p-4 pointer-events-none;

            place-items: center;
            place-content: center;
        }

    }

    .kro-dialog-enter-active,
    .kro-dialog-leave-active {
        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    .kro-dialog-enter-from,
    .kro-dialog-leave-to {
        transform: scale(0);
    }

    .kro-dialog-scrim-enter-active,
    .kro-dialog-scrim-leave-active {
        transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    .kro-dialog-scrim-enter-from,
    .kro-dialog-scrim-leave-to {
        opacity: 0;
    }

</style>
