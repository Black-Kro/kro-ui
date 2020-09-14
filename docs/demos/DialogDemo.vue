<template>
    <div>
        <kro-dialog v-model="isOpen">
            <template #activator="{ open }">
                <kro-button @click="open">Open Normal Dialog</kro-button>
            </template>

            <template #header>Normal Dialog</template>
            
            <span>Hello world, this is just a normal dialog. Make sure you don't annoy your users with these hecking things!</span>

            <template #footer="{ close }">
                <kro-button @click="close">Cancel</kro-button>
                <kro-button @click="close" primary>Ok</kro-button>
            </template>
        </kro-dialog>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    export const isOpen = ref(false);
</script>
