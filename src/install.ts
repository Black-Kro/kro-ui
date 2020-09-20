import type { Plugin } from 'vue'
import { registerThemeWatcher } from './composables/useTheme'

import * as KroComponents from './components'
import * as KroDirectives from './directives'

interface KroUIConfiguration {
  icons: string[]
  components: any
}

export const KroUIBaseConfigurationPlugin = (): Plugin => ({
  install(app, config: KroUIConfiguration) {
    if (config.components && Array.isArray(config.components)) {
      Object.entries(config.components).forEach(([key, value]: [string, any]) => {
        app.component(key, value)
      })
    }

    registerThemeWatcher()
  },
})

const KroUIPluginBase = (components: any, directives: any): Plugin => ({
  install(app) {
    /**
         * Register Components
         */
    if (components) {
      Object.entries(components).forEach(([key, value]: [string, any]) => {
        if (value)
          app.component(key, value)
      })
    }

    /**
         * Register Directives
         */
    if (directives) {
      Object.entries(directives).forEach(([key, value]: [string, any]) => {
        if (value)
          app.directive(key, value)
      })
    }

    /**
         * Register the theme watcher
         */
    registerThemeWatcher()
  },
})

export const KroUIPlugin = KroUIPluginBase(KroComponents, KroDirectives)
