<template>
  <div ref="el" :class="$attrs.class" class="kro-icon" />
</template>

<script lang="ts" setup="props">
import { watch, ref, onMounted, nextTick } from 'vue'
import { useIcons } from '../../composables/useIcon'

const { icons } = useIcons()

declare const props: {
  icon: string
}

export const el = ref<HTMLElement | null>(null)

const update = async() => {
  if (el.value && icons) {
    await nextTick()

    const svg = icons.renderSVG(props.icon, {})

    if (svg) {
      el.value.textContent = ''
      el.value.appendChild(svg)
    }
    else {
      const span = document.createElement('span')
      span.className = 'iconify'
      span.dataset.icon = props.icon
      el.value.textContent = ''
      el.value.appendChild(span)
    }
  }
}

export default {
  name: 'KroIcon',
}

watch(() => props.icon, update, { flush: 'post' })
onMounted(update)
</script>

<style lang="scss">
    .kro-icon {
        width: var(--kro-icon-size, 1.5rem);
        height: var(--kro-icon-size, 1.5rem);

        @apply fill-current;

        svg { @apply w-full h-full; }
    }
</style>
