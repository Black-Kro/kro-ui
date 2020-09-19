import { watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const applyTheme = () => {
  document.documentElement.className = `kro-theme__${theme.value}`
}

let theme: any

export const useTheme = () => {
  const setTheme = (schema: string) => {
    theme.value = schema
  }

  const getTheme = () => {
    return theme.value
  }

  return {
    setTheme,
    getTheme,
    theme,
  }
}

export const registerThemeWatcher = () => {
  theme = useLocalStorage('kro.theme', 'default-dark')

  watch(() => theme.value, () => {
    applyTheme()
  }, {
    immediate: true,
  })
}
