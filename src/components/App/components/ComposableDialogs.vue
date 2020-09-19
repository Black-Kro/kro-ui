<template>
  <div v-for="(instance, key) in instances" :key="key">
    <kro-dialog
      v-model="instance.isOpen"
      :class="{'kro-composable-dialog--centered': instance.style === 'centered'}"
      @close-animation-end="instance.destroy()"
    >
      <template #header>
        <div class="flex items-center" :class="{ 'flex-col': instance.style === 'centered' }">
          <kro-icon
            v-if="instance.icon"
            :style="{ color: instance.iconColor ? instance.iconColor : '', }"
            :class="{ 'kro-composable-dialog__icon--large': instance.style === 'centered' }"
            class="mr-4"
            :icon="instance.icon"
          />
          {{ instance.title }}
        </div>
      </template>
      <template #default>
        <div :class="{ 'text-center': instance.style === 'centered' }">
          {{ instance.message }}
        </div>
      </template>
      <template #footer="{ close }">
        <div class="flex flex-row flex-1 gap-4" :class="{ 'justify-end': instance.style !== 'centered', 'justify-center': instance.style === 'centered' }">
          <kro-button v-if="!instance.rejectButton.hidden" v-bind="instance.rejectButton.attributes" @click="() => { instance.reject(); close(); }">
            {{ instance.rejectButton.text }}
          </kro-button>
          <kro-button v-if="!instance.resolveButton.hidden" v-bind="instance.resolveButton.attributes" @click="() => { instance.resolve(); close(); }">
            {{ instance.resolveButton.text }}
          </kro-button>
        </div>
      </template>
    </kro-dialog>
  </div>
</template>

<script lang="ts" setup>

import { dialogInstances } from '../../../composables/useDialog'

export const instances = dialogInstances

export default {
  name: 'ComposableDialogs',
}
</script>

<style lang="scss">

    .kro-composable-dialog--centered {
        max-width: 28rem;
    }

    .kro-composable-dialog__icon--large {
        --kro-icon-size: 4rem;
        margin-bottom: 1rem;
    }

</style>
