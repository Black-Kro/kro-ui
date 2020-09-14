<template>
    <kro-dialog v-model="isOpen">
        <template #activator="{ open }">
            <div class="flex align-middle justify-center">
                <kro-button primary @click="open">Open Dialog</kro-button>
            </div>
        </template>
        <template #title>Dialog Title</template>
        <template #default>
            In in irure mollit enim ipsum commodo Lorem cillum laborum aliqua ipsum mollit pariatur. Qui et elit deserunt ea esse consequat eu Lorem nisi laborum. Lorem in mollit consectetur minim occaecat ea laboris magna nulla dolore ea velit. Quis est minim officia officia.
        </template>
        <template #controls="{ close }">
            <kro-button @click="close">Close</kro-button>
            <kro-button primary @click="close">Confirm</kro-button>
        </template>
    </kro-dialog>
</template>

<script setup>
    import { ref } from 'vue';

    export const isOpen = ref(false);
</script>
