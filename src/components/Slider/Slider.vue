<template>
        <div 
            class="kro-slider"
            @touchstart.passive="enableEditing" 
            @mousedown="enableEditing" 
            :style="{'--kro-slider-progress': `${($attrs.modelValue - min) / (max - min) * 100 - 100}%`}">

            <div class="kro-slider__track-container">
                <div ref="sliderRef" class="kro-slider__track">
                    <div v-if="ticks" :style="{ '--kro-slider-tick-spacing': `${trackSpacing}px` }" class="kro-slider__markers"></div>
                    <div class="kro-slider__progress"></div>
                </div>
                <div class="kro-slider__knob-container">
                    <div class="kro-slider__knob"></div>
                    <div class="kro-slider__preview-value" :class="{ 'kro-slider__preview-value--is-active': isEditing }">
                        <div class="kro-slider__bloop"></div>
                        <span>{{$attrs.modelValue}}</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
    import { computed, ref, watchEffect, onMounted } from 'vue';
    import { useMouseInElement, useEventListener } from '@vueuse/core';
    import { useWindow, useElement } from '../../composables';

    import { useSliderContainer } from './composables/slider';

    export default {
        name: 'KroSlider',
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            step: {
                type: Number,
                default: 1,
            },
            ticks: {
                default: false,
                type: [Boolean, String],
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100,
            }
        },
        setup(props, { emit, attrs }) {

            /**
             * General Setup
             */
            const value = ref(0);
            const sliderRef = ref();
            const { targetPercentage } = useSliderContainer(sliderRef);
            const { elementWidth } = useElement(sliderRef);


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

            const trackSpacing = computed(() => elementWidth.value / Math.ceil((props.max - props.min) / (props.step)));

            onMounted(() => {
                /**
                 * Ensure the inital value is within the constratins of the slider
                 */
                emit('update:modelValue', Math.max(props.min, Math.min(((attrs.modelValue as number) || 0), props.max)))
            });

            watchEffect(() => {
                if (isEditing.value) {
                    emit('update:modelValue', Math.max(props.min, Math.min(Math.round(targetPercentage.value * (props.max - props.min) / props.step) * props.step + props.min, props.max)));
                }
            });

            return {
                sliderRef,
                targetPercentage,

                value,
                enableEditing,

                trackSpacing,
                isEditing,
            }
        }
    }
</script>

<style lang="scss">

    .kro-slider {
        display: flex;
        position: relative;
        height: 1.5rem;
        align-items: center;
        cursor: pointer;
    }

        .kro-slider__track-container {
            width: 100%;
            height: 0.5rem;
        }

        .kro-slider__track {
            flex: 1;
            background: var(--kro-slider-track-color, var(--kro-background-secondary));
            cursor: pointer;
            height: 100%;
            overflow: hidden;
            border-radius: 1rem;
            -webkit-mask-image: -webkit-radial-gradient(white, black);
        }

            .kro-slider__progress {
                transform: translateX(var(--kro-slider-progress, 0));
                transform-origin: left;
                background: var(--kro-slider-progress-color, var(--kro-primary));
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

                background-repeat: no-repeat;
                background-image: repeating-linear-gradient(90deg, var(--kro-slider-tick-color, rgba(0, 0, 0, .24)), var(--kro-slider-tick-color, rgba(0, 0, 0, .24)) 3px, transparent 3px, transparent var(--kro-slider-tick-spacing, 100px));
                
            }

        .kro-slider__knob-container {
            position: absolute;
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

                    background: var(--kro-slider-knob-color, var(--kro-primary-lighten));
                    box-shadow: var(--kro-shadow);
                    position: absolute;
                    border-radius: 50%;
                }

                .kro-slider__preview-value {
                    position: absolute;
                    right: 0;
                    transform: translateX(50%) translateY(-50%);
                    top: -100%;

                    width: 2rem;
                    height: 2rem;

                    text-align: center;

                    opacity: 0;
                    transform-origin: center bottom;
                    transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
                    transform: translateX(50%) translateY(-50%) scale(0);

                    span {
                        display: block;
                        position: relative;
                        margin-top: 0.45rem;
                        font-size: 0.75rem;
                        font-weight: 500;
                        text-align: center;
                        color: var(--kro-primary-foreground);
                    }
                }

                    .kro-slider__preview-value--is-active {
                        opacity: 1;
                        transform: translateX(50%) translateY(-50%) scale(1);
                    }

                    .kro-slider__bloop {
                        width: 2rem;
                        height: 2rem;

                        background: var(--kro-primary);
                        position: absolute;
                        border-radius: 50% 50% 0;
                        transform: rotate(45deg);
                        box-shadow: var(--kro-shadow);
                    }

</style>