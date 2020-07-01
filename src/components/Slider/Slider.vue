<template>
    <div>
        <div class="kro-slider" :style="{'--kro-slider-progress': `${value * 100 - 100}%`}">
            <div ref="sliderRef" @mousedown="enableEditing" class="kro-slider__track">
                <div class="kro-slider__progress">
                </div>
            </div>
            <div class="kro-slider__knob-container">
                <div @mousedown="enableEditing" class="kro-slider__knob"></div>
            </div>
        </div>
        <div>
        Value: {{(value * 100).toFixed(0)}}
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, ref, watchEffect } from 'vue';
    import { useMouseInElement, useEventListener } from '@vueuse/core';
    import { useWindow } from '../../composables';

    import { useSliderContainer } from './composables/slider';

    export default {
        setup() {

            /**
             * General Setup
             */
            const value = ref(0);
            const sliderRef = ref();
            const { targetPercentage } = useSliderContainer(sliderRef);


            /**
             * Handle Editing State of element.
             */
            const isEditing = ref(false);
            const { disableDocumentSelect, enableDocumentSelect } = useWindow();

            const disableEditing = () => {
                isEditing.value = false;
                enableDocumentSelect();
                removeEventListener('mouseup', disableEditing);
            }

            const enableEditing = () => {
                isEditing.value = true;
                disableDocumentSelect();
                addEventListener('mouseup', disableEditing);                
            }

            watchEffect(() => {
                if (isEditing.value) {
                    value.value = targetPercentage.value;
                }
            });

            return {
                sliderRef,
                targetPercentage,

                value,
                enableEditing,

                isEditing,
            }
        }
    }
</script>

<style lang="scss">

    .kro-slider {
        display: block;
        width: 500px;
        position: relative;
        height: 0.75rem;
    }

        .kro-slider__track {
            flex: 1;
            background: var(--kro-background-secondary);
            cursor: pointer;
            height: 100%;
            overflow: hidden;
            border-radius: 1rem;
        }

            .kro-slider__progress {
                transform: translateX(var(--kro-slider-progress, 0));
                transform-origin: left;
                background: var(--kro-primary);
                width: 100%;

                will-change: transform;
                position: relative;
                height: 100%;
            }

        .kro-slider__knob-container {
            position: absolute;
            // background: red;
            height: 100%;
            width: 100%;
            top: 0; left: 0;
            pointer-events: none;
            transform: translateX(var(--kro-slider-progress, 0));
        }

                .kro-slider__knob {
                    width: 1.5rem;
                    height: 1.5rem;
                    cursor: pointer;

                    top: -50%;
                    transform: translateX(50%);
                    right: 0;

                    background: var(--kro-accent);
                    box-shadow: var(--kro-shadow);
                    position: absolute;
                    border-radius: 50%;
                }

</style>