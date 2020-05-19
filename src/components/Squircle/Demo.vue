<template>
    <demo title="Squircle">
        <kro-squircle :class="$style.squircle" />
    </demo>
</template>

<script>
    import Demo from '../Demo.vue';
    import KroSquircle from './Squircle.vue';

    export default {
        components: { Demo, KroSquircle }
    }
</script>

<style module lang="scss">

    .squircle {
        width: 5rem;
        height: 5rem;
        color: #5E81AC;
    }

</style>