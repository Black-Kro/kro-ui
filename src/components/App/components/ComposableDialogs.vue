<template>
    <div v-for="instance in instances">
        <kro-dialog v-model="instance.isOpen" @close-animation-end="instance.destroy()" :class="{'kro-composable-dialog--centered': instance.style === 'centered'}">
            <template #header>
                <div class="flex items-center" :class="{ 'flex-col': instance.style === 'centered' }">
                    <kro-icon 
                        :style="{ color: instance.iconColor ? instance.iconColor : '', }" 
                        :class="{ 'kro-composable-dialog__icon--large': instance.style === 'centered'  }" 
                        class="mr-4" 
                        v-if="instance.icon" 
                        :icon="instance.icon"/>
                    {{instance.title}}
                </div>
            </template>
            <template #default>
                <div :class="{ 'text-center': instance.style === 'centered' }">
                    {{instance.message}}
                </div>
            </template>
            <template #footer="{ close }">
                <div class="flex flex-row flex-1 gap-4" :class="{ 'justify-end': instance.style !== 'centered', 'justify-center': instance.style === 'centered' }">
                    <kro-button v-bind="instance.rejectButton.attributes" v-if="!instance.rejectButton.hidden" @click="() => { instance.reject(); close(); }">{{instance.rejectButton.text}}</kro-button>
                    <kro-button v-bind="instance.resolveButton.attributes" v-if="!instance.resolveButton.hidden" @click="() => { instance.resolve(); close(); }">{{instance.resolveButton.text}}</kro-button>
                </div>
            </template>
        </kro-dialog>
    </div>
</template>

<script lang="ts" setup>

    import { dialogInstances } from '../../../composables/useDialog';

    export const instances = dialogInstances;

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