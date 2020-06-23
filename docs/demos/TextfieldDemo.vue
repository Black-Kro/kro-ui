<template>
    <div>
        <kro-textfield class="field" v-model="email" label="Email" />
        <kro-textfield class="field" v-model="password" label="Password" type="password" />

        <div>
            <div>Email: {{email}}</div>
            <div>Password: {{password}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        setup() {
            const email = ref('bruh');
            const password = ref('');

            return {
                email,
                password,
            }
        }
    }
</script>

<style scoped lang="scss">

    .field {
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

</style>