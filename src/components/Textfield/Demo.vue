<template>
    <demo title="Textfield">
        <div :class="$style.container">
            <kro-textfield :class="$style.textfield" label="Email Address" v-model="email"/>
            <kro-textfield :class="$style.textfield" label="Password" v-model="password" type="password"/>
        </div>
    </demo>
</template>

<script>
    import { ref } from 'vue';
    import Demo from '../Demo.vue';
    import KroTextfield from './Textfield.vue';

    export default {
        components: { Demo, KroTextfield },
        setup() {
            const email = ref('');
            const password = ref('');
            return {
                email,
                password
            }
        }
    }
</script>

<style module lang="scss">
    .container {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr 1fr;
        // grid-auto-columns: min-content;
        gap: 1rem;
    }
</style>