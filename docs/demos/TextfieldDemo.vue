<template>
    <div>
        <kro-textfield class="field" v-model="email" label="Email" />
        <kro-textfield class="field" v-model="password" label="Password" type="password" />

        <kro-textfield v-model="bio" label="Biography" multiline></kro-textfield>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        name: 'TextfieldDemo',
        setup() {
            const email = ref('');
            const password = ref('');
            const bio = ref('');

            return {
                email,
                password,
                bio, 
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