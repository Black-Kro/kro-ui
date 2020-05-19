<template>
    <demo title="Icons">
        <kro-icon icon="external" />
        <kro-icon icon="settings" />
        <kro-icon icon="invert" />
    </demo>
</template>

<script>
    import { ref } from 'vue';
    import Demo from '../Demo.vue';
    import KroIcon from './Icon.vue';

    export default {
        components: { Demo, KroIcon },
    }
</script>

<style>

</style>