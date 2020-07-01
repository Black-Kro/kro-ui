<template>
    <div>
        Slider Demo
        <kro-slider v-model="value"></kro-slider>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        setup() {
            const value = ref(0);

            return {
                value,
            }
        }
    }
</script>

<style>

</style>