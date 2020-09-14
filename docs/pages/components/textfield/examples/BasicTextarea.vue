<template>
    <div>
        <kro-textfield multiline v-model="val" label="Textarea" />
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