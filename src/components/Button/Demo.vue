<template>
    <demo title="Buttons">
        <kro-button @click="onClick">Button</kro-button>
        <kro-button loading>Loading button</kro-button>
        <kro-button primary>Primary Button</kro-button>
        <kro-button raised>Raised Button</kro-button>
        <kro-button raised primary>Raised Primary Button</kro-button>
        <kro-button outline>Outlined Button</kro-button>
        <kro-button href="https://google.com">Link Button</kro-button>
    </demo>
</template>

<script>
    import { ref } from 'vue';
    import Demo from '../Demo.vue';
    import KroButton from './Button.vue';

    export default {
        components: { Demo, KroButton },
    }
</script>

<style>

</style>