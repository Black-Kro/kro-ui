<template>
    <div>
        <kro-textfield label="Email" v-model="email"></kro-textfield>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const email = ref('');

            return {
                email
            }
        }
    }
</script>

<style>

</style>