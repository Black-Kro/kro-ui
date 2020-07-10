<template>
    <kro-slider :min="-50" :max="50" v-model="val"></kro-slider>
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
