<template>
    <div class="root">
        <kro-layout>
            <template #toolbar>
                <kro-toolbar padded>
                    <kro-button @click="isOpen = !isOpen" class="icon" icon="menu" />
                </kro-toolbar>
            </template>

            <template #navigation>
                <kro-navigation v-model="isOpen">
                    Hello World
                </kro-navigation>
            </template>
        </kro-layout>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    export default {
        setup() {
            const isOpen = ref(false);

            return {
                isOpen
            }
        }
    }
</script>

<style scoped lang="scss">

    .root {
        width: 100%;
        height: 500px;
        position: relative;
        border: 1px solid var(--kro-divider);
    }

        .icon {
            --kro-button-background: rgba(0, 0, 0, .12);
        }

</style>