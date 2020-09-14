<template>
    <div class="flex justify-center">
        <kro-switch v-model="val">Basic Switch</kro-switch>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const val = ref(false);

            return {
                val
            }
        }
    }
</script>
