import { ref, watch, Ref } from 'vue'
import { useThrottleFn, useEventListener } from '@vueuse/core'

export const useWindow = () => {
  /**
     * Disables the document from scrolling.
     */
  const disableDocumentScroll = () => {
    document.documentElement.classList.add('kro-helper--prevent-scroll')
  }

  /**
     * Enables the document scrolling
     */
  const enableDocumentScroll = () => {
    document.documentElement.classList.remove('kro-helper--prevent-scroll')
  }

  const disableDocumentSelect = () => {
    document.documentElement.classList.add('kro-helper--prevent-select')
  }

  const enableDocumentSelect = () => {
    document.documentElement.classList.remove('kro-helper--prevent-select')
  }

  const disableAppFocus = () => {
        document.querySelector('#app')?.setAttribute('tabindex', '-1')
  }

  const enableAppFocus = () => {
        document.querySelector('#app')?.removeAttribute('tabindex')
  }

  return {
    disableDocumentScroll,
    enableDocumentScroll,

    disableDocumentSelect,
    enableDocumentSelect,

    enableAppFocus,
    disableAppFocus,
  }
}

export const useElement = (target: Ref<any>) => {
  const elementWidth = ref(0)
  const elementHeight = ref(0)
  const elementLeft = ref(0)
  const elementTop = ref(0)

  const updateRefs = (el: HTMLElement) => {
    const { left, top, width, height } = el.getBoundingClientRect()

    elementWidth.value = width
    elementHeight.value = height
    elementLeft.value = left
    elementTop.value = top
  }

  watch(target, (el: HTMLElement) => {
    const ele = el || document.body
    updateRefs(ele)
  })

  const throttledFn = useThrottleFn(() => {
    const ele = target.value || document.body
    updateRefs(ele)
  }, 250)

  useEventListener('resize', throttledFn)

  return {
    elementWidth,
    elementHeight,
    elementLeft,
    elementTop,
  }
}
