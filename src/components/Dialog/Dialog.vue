<template>
    <slot 
        name="activator" 
        :close="close" 
        :open="open" 
        :toggle="toggle"></slot>

    <teleport to="#kro-portal">
        <transition appear name="kro-dialog-scrim">
            <div 
                v-if="$attrs.modelValue"
                @click="() => { if (!persistent) { close(); } }"
                class="kro-dialog__scrim fixed inset-0"></div>
        </transition>
        <div tabindex="-1" ref="dialog" class="kro-dialog__container p-4 fixed inset-0 grid grid-flow-col items-center justify-center pointer-events-none">
            <transition appear name="kro-dialog" @after-leave="onDialogLeaveAnimationComplete">
                <kro-surface
                    v-if="$attrs.modelValue"
                    class="kro-dialog pointer-events-auto max-w-xl" 
                    v-bind="$attrs" >

                        <focus-trap v-model="$attrs.modelValue">
                            <div class="grid grid-row gap-4">
                                <div 
                                    class="kro-dialog__header text-lg"
                                    v-if="!!$slots.header">
                                    <slot
                                        name="header"
                                        :open="open" 
                                        :close="close" 
                                        :toggle="toggle"/> 
                                </div>

                                <div class="kro-dialog__body">
                                    <slot 
                                        :open="open" 
                                        :close="close" 
                                        :toggle="toggle"/> 
                                </div>

                                <div 
                                    class="kro-dialog__footer flex flex-row align-middle gap-4"
                                    v-if="!!$slots.footer">
                                    <slot 
                                        name="footer"
                                        :open="open" 
                                        :close="close" 
                                        :toggle="toggle"/> 
                                </div>
                            </div>
                    </focus-trap>
                </kro-surface>
            </transition>
        </div>
    </teleport>
</template>

<script lang="ts" setup="props, { emit, attrs }">
    import { ref, onMounted, onUnmounted, nextTick, onUpdated } from 'vue';
    import { KroSurface } from '../Surface';
    import { FocusTrap } from '../FocusTrap';
    import { useWindow } from '../../composables';

    const { disableDocumentScroll, enableDocumentScroll } = useWindow();

    export const dialog = ref<HTMLElement | null>(null);
    
    let openedThroughMethod = false;

    /**
     * Handle Controls for opening and closing the dialog.
     */

    const canCloseDialog = (e) => {
        if (e?.type === 'keydown') {
            if (e.key === 'Escape') {
                if (!props.persistent) {
                    return true;
                }
            }
        } else {
            return true;
        }

        return false;
    };
    

    /**
     * Handle Dialog Animation Events
     */

    export const onDialogLeaveAnimationComplete = () => {
        emit('close-animation-end');
    }

    onUpdated(() => {
        if (!openedThroughMethod && attrs.modelValue === true) {
            emit('update:modelValue', true);
            disableDocumentScroll();
            window.addEventListener('keydown', close);

            if (dialog.value)
                dialog.value.focus();
        }
    })

    /**
     * Dialog Controls
     */
    export const open = () => {
        openedThroughMethod = true;
        emit('update:modelValue', true);
        disableDocumentScroll();
        window.addEventListener('keydown', close);

        if (dialog.value)
            dialog.value.focus();
            
    };

    export const close = (e) => {
        if (canCloseDialog(e)) {
            emit('update:modelValue', false);
            window.removeEventListener('keydown', close);
            enableDocumentScroll();
            openedThroughMethod = false;
        }
    };

    export const toggle = () => {
        attrs.modelValue ? close(null) : open();
    };

    export default {
        name: 'KroDialog',
        inheritAttrs: false,
        components: { KroSurface, FocusTrap }
    };

    declare const props: {
        persistent?: Boolean
    };

    declare const emit: any;
    declare const attrs: any;
</script>

<style lang="scss">

    @import '../../styles/general/layers';
    
    .kro-dialog {

        &__scrim {
            @include useLayer(dialog);
            background: rgba(0, 0, 0, .24);
        }

        &__container {
            @include useLayer(dialog);

            place-items: center;
            place-content: center;
        }

    }

    .kro-dialog-enter-active,
    .kro-dialog-leave-active {
        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    .kro-dialog-enter-from,
    .kro-dialog-leave-to {
        transform: scale(0);
    }

    .kro-dialog-scrim-enter-active,
    .kro-dialog-scrim-leave-active {
        transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    }

    .kro-dialog-scrim-enter-from,
    .kro-dialog-scrim-leave-to {
        opacity: 0;
    }

</style>