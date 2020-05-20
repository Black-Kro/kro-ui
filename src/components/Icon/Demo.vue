<template>
    <demo title="Icons">
        <div :class="$style.grid">
            <kro-icon icon="external" />
            <kro-icon icon="settings" />
            <kro-icon icon="invert" />
        </div>
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

<style module lang="scss">
    .grid {
        display: grid;
        gap: 1rem;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
    }
</style>