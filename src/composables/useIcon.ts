import { inject } from 'vue'
import type { IconifyGlobal } from '@purge-icons/generated'

export const IconSymbol = Symbol('Provides instance of @purge-icons/generated')

export function useIcons() {
  const icons = inject<IconifyGlobal>(IconSymbol)

  return {
    icons,
  }
}
