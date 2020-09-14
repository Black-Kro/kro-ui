<template>
    <div>
        <div class="flex justify-center">
            <kro-switch v-model="foods" value="pizza">Pizza</kro-switch>
            <kro-switch v-model="foods" value="corissants">Croissants</kro-switch>
            <kro-switch v-model="foods" value="ramen">Ramen</kro-switch>
        </div>
        <div class="text-center text-sm mt-4">
            {{foods}}
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const foods = ref([]);

            return {
                foods
            }
        }
    }
</script>

<style>

</style>