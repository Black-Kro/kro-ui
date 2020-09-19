import { Ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

export const useSliderContainer = (target?: Ref<HTMLElement | null>) => {
  const { x, elementPositionX, elementWidth } = useMouseInElement(target)

  const targetPercentage = computed(() => {
    return Math.min(Math.max(0, x.value - elementPositionX.value), elementWidth.value) / (elementWidth.value || 1)
  })

  return {
    elementWidth,
    targetPercentage,
  }
}
