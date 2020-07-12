<template>
    <div class="flex flex-row justify-center">
        <kro-textfield v-model="val" label="Textfield" />
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const val = ref('');

            return {
                val
            }
        }
    }
</script>

<style>

</style>