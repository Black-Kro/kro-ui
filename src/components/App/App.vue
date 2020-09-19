<template>
  <div class="kro-app">
    <div class="kro-app__content">
      <slot />
    </div>
    <composable-dialogs />
  </div>
</template>

<script lang="ts">
import ComposableDialogs from './components/ComposableDialogs.vue'

export default {
  name: 'KroApp',
  components: { ComposableDialogs },
}
</script>
