import {
    defineComponent,
    onMounted,
    watch,
    ref,
    cloneVNode,
    onUnmounted,
    PropType
  } from 'vue'
  import createFocusTrap, { FocusTrap as FocusTrapI } from 'focus-trap'
  
  const FocusTrap = defineComponent({
    emits: ['update:active', 'activate', 'deactivate'],
    props: {
      active: {
        // TODO: could be options for activate
        type: Boolean as PropType<boolean>,
        default: true,
      },
      escapeDeactivates: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
      returnFocusOnDeactivate: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
      allowOutsideClick: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
      initialFocus: {
        type: [String, Function] as PropType<string | (() => HTMLElement)>,
        default: undefined,
      },
      fallbackFocus: {
        type: [String, Function] as PropType<string | (() => HTMLElement)>,
        default: undefined,
      },
    },
    setup(props, { slots, emit }) {
      let trap: FocusTrapI | null
      const el = ref<HTMLElement | null>(null)
      onMounted(function () {
        watch(
          () => props.active,
          active => {
            if (active && el.value) {
              // has no effect if already activated
              trap = createFocusTrap(el.value, {
                escapeDeactivates: props.escapeDeactivates,
                allowOutsideClick: () => props.allowOutsideClick,
                returnFocusOnDeactivate: props.returnFocusOnDeactivate,
                onActivate: () => {
                  emit('update:active', true)
                  emit('activate')
                },
                onDeactivate: () => {
                  emit('update:active', false)
                  emit('deactivate')
                },
                initialFocus:
                  typeof props.initialFocus === 'string'
                    ? props.initialFocus
                    : props.initialFocus?.() ?? el.value,
                fallbackFocus: props.fallbackFocus,
              })
              trap.activate()
            } else {
              trap?.deactivate()
            }
          },
          { immediate: true }
        )
      })
      onUnmounted(() => {
        trap?.deactivate()
        trap = null
      })
      return () => {
        const vNodes = slots.default?.()
        if (!vNodes || !vNodes.length || vNodes.length > 1) {
          throw new Error('FocusTrap requires exactly one child')
        }
        const vnode = cloneVNode(vNodes[0], { ref: el })
        return vnode
      }
    },
  })
  
  export default FocusTrap