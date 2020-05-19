<template>
    <demo title="Textfield">
        <div>
            <kro-textfield label="Email Address" v-model="email"/>
            {{email}}
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
            return {
                email
            }
        }
    }
</script>

<style>

</style>