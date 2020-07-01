<template>
    <div>
        <kro-slider v-model="value1"></kro-slider>
        <br />
        <kro-slider v-model="value1" :step="20" ticks></kro-slider>
        <br />
        <kro-slider v-model="value3" :step="0.5"></kro-slider>
        <br />
        <kro-slider v-model="value2" :min="-50" :max="200" :step="10" ticks></kro-slider>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        setup() {
            const value1 = ref(0);
            const value2 = ref(20);
            const value3 = ref(30);

            return {
                value1,
                value2,
                value3,
            }
        }
    }
</script>

<style>

</style>