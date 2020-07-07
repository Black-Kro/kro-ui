<template>
    <div>
        <kro-dialog v-model="isOpen">
            <template #activator="{ open }">
                <kro-button @click="open">Open Normal Dialog</kro-button>
            </template>

            <template #title>Normal Dialog</template>
            
            <span>Hello world, this is just a normal dialog. Make sure you don't annoy your users with these hecking things!</span>

            <template #controls="{ close }">
                <kro-button @click="close">Cancel</kro-button>
                <kro-button @click="close" primary>Ok</kro-button>
            </template>
        </kro-dialog>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'DialogDemo',
        setup() {
            const isOpen = ref(false);

            return {
                isOpen,
            }
        }
    
    }
</script>

<style>

</style>