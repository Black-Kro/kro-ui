<template>
    <div class="kro-ui__temp-demo flex flex-row justify-center">
        <kro-surface class="max-w-md w-full">
            <div class="flex flex-row items-center justify-center" style="transition: color 200ms ease;" :style="{color: temp < 33 ? '#00B0FF' : temp < 66 ? '#7C4DFF' : temp < 90 ? '#FFFF00' : '#F44336' }">
                <kro-icon class="w-12 h-12" icon="thermometer"/>
                <span class="text-5xl">{{temp}}°C</span>
            </div>
            <div class="flex flex-row items-center">
                <kro-button class="mr-4" icon="minus" @click="temp -= 5"/>
                <kro-slider class="flex-1" v-model="temp">
                    <template #thumb="{ value }">{{value}}°C</template>
                </kro-slider>
                <kro-button class="ml-4" icon="plus" @click="temp += 5"/>
            </div>
        </kro-surface>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const temp = ref(20);

            return {
                temp
            }
        }
    }
</script>

<style>

    .kro-ui__temp-demo {
        --kro-slider-knob-color: var(--kro-foreground);
        --kro-slider-track-color: linear-gradient(90deg, #00B0FF 0%, #7C4DFF 33%, #FFFF00 66%, #F44336 100%);
        --kro-slider-progress-color: white;
        --kro-slider-thumb-foreground: black;
        --kro-slider-thumb-background: white;
    }

</style>