<template>
    <kro-slider ticks :step="10" v-model="val"></kro-slider>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const val = ref(0);

            return {
                val
            }
        }
    }
</script>
