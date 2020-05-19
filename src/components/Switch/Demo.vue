<template>
    <demo title="Switch">
        <div>
            <kro-switch v-model="checked"/>
            <br />
            <kro-switch v-model="checked2"/>
        </div>
    </demo>
</template>

<script>
    import { ref } from 'vue';
    import Demo from '../Demo.vue';
    import KroSwitch from './Switch.vue';

    export default {
        components: { Demo, KroSwitch },
        setup() {
            const checked = ref(false);
            const checked2 = ref(true);

            return {
                checked,
                checked2
            }
        }
    }
</script>

<style>

</style>