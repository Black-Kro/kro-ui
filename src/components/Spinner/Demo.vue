<template>
    <demo title="Spinner" :code="require('./Code.md').default">
        <kro-spinner />
    </demo>
</template>

<script lang="ts">
    import Demo from '../Demo.vue';
    import KroSpinner from './Spinner.vue';

    export default {
        components: { Demo, KroSpinner }
    }
</script>

<style module lang="scss">

</style>