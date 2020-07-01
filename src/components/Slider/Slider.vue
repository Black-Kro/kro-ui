<template>
    <div class="kro-slider" :style="{'--kro-slider-progress': `${value - 100}%`}">
        <div ref="sliderRef" @touchstart.passive="enableEditing" @mousedown="enableEditing" class="kro-slider__track">
            <div class="kro-slider__markers">
                <div v-for="n in 100 / (step) - 1" :key="n"></div>
            </div>
            <div class="kro-slider__progress"></div>
        </div>
        <div class="kro-slider__knob-container">
            <div  @touchstart.passive="enableEditing" @mousedown="enableEditing" class="kro-slider__knob"></div>
            <div class="kro-slider__preview-value">
                <div class="kro-slider__bloop"></div>
                <span>{{value}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, ref, watchEffect } from 'vue';
    import { useMouseInElement, useEventListener } from '@vueuse/core';
    import { useWindow } from '../../composables';

    import { useSliderContainer } from './composables/slider';

    export default {
        props: {
            step: {
                type: Number,
                default: 10,
            }
        },
        setup(props) {

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
                removeEventListener('touchcancel', disableEditing);
                removeEventListener('touchend', disableEditing);
                removeEventListener('mouseup', disableEditing);
            }

            const enableEditing = () => {
                isEditing.value = true;
                disableDocumentSelect();
                addEventListener('touchcancel', disableEditing);
                addEventListener('touchend', disableEditing);
                addEventListener('mouseup', disableEditing);                
            }

            watchEffect(() => {
                if (isEditing.value) {
                    value.value = Math.round(targetPercentage.value * 100 / props.step) * props.step;
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
        // width: 500px;
        position: relative;
        height: 0.5rem;
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

            .kro-slider__markers {
                position: absolute;
                top: 0; left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;

                div {
                    width: 4px;
                    height: 100%;
                    background: rgba(0, 0, 0, .24);
                }
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
                    width: 1.25rem;
                    height: 1.25rem;
                    cursor: pointer;

                    top: 50%;
                    transform: translateX(50%) translateY(-50%);
                    right: 0;

                    background: var(--kro-accent);
                    box-shadow: var(--kro-shadow);
                    position: absolute;
                    border-radius: 50%;
                }

                .kro-slider__preview-value {
                    position: absolute;
                    right: 0;
                    transform: translateX(50%) translateY(-110%);
                    top: -100%;

                    width: 2rem;
                    height: 2rem;

                    text-align: center;

                    span {
                        display: block;
                        position: relative;
                        margin-top: 0.4rem;
                        margin-left: 0.15rem;
                        font-size: 0.875rem;
                        font-weight: 500;
                        text-align: center;
                    }
                }

                    .kro-slider__bloop {
                        width: 2rem;
                        height: 2rem;

                        background: var(--kro-primary);
                        position: absolute;
                        border-radius: 50% 50% 0;
                        transform: rotate(45deg);
                    }

</style>