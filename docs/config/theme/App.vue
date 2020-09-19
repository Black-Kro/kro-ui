<template>
  <kro-app>
    <kro-layout
      v-model:is-drawer-open="isDrawerOpen"
      :temporary="true"
    >
      <template #toolbar>
        <kro-toolbar class="the-app-toolbar prevent-scrollbar-shift">
          <div class="container mx-auto flex flex-row items-center px-4">
            <div class="grid grid-flow-col gap-2">
              <div>
                <kro-button class="lg:hidden" icon="mdi:menu" @click="isDrawerOpen = true" />
              </div>
              <kro-logo class="h-10" />
            </div>
            <span class="flex-1" />
            <div class="grid grid-flow-col gap-2">
              <kro-button icon="mdi:invert-colors" @click="toggleTheme" />
              <kro-button icon="mdi:github" href="https://github.com/Black-Kro/kro-ui" />
            </div>
          </div>
        </kro-toolbar>
      </template>

      <template #drawer>
        <div class="px-4 py-2">
          <the-sidebar />
        </div>
      </template>

      <template #default>
        <div class="container mx-auto p-4 grid grid-cols-9 gap-4">
          <the-sidebar class="hidden lg:block col-span-2" />
          <div class="col-span-9 lg:col-span-5 markdown">
            <router-view />
          </div>
          <the-page-context class="hidden lg:block" />
        </div>
      </template>
      <template #footer>
        <footer class="container mx-auto p-4 text-center text-secondary text-xs font-medium flex flex-col">
          <kro-logo class="h-10 mb-2" />
          Copyright Black kro 2020
        </footer>
      </template>
    </kro-layout>
  </kro-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '/~/index'

const { theme } = useTheme()
const { afterEach } = useRouter()

export const isDrawerOpen = ref(false)

afterEach(() => {
  isDrawerOpen.value = false
})

export const toggleTheme = () => {
  if (theme.value === 'default-light')
    theme.value = 'default-dark'
  else
    theme.value = 'default-light'
}

export default {
  name: 'App',
}

</script>

<style lang="scss">

    .the-app-toolbar {
        border-bottom: 1px solid var(--kro-divider);
    }

</style>
