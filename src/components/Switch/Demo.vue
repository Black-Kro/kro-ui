<template>
    <demo title="Switch" :code="require('./Code.md').default">
        <div :class="$style.content">
            <kro-switch v-model="checked"/>
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

<style module lang="scss">

    .content {
        display: grid;
        grid-auto-flow: row;
        grid-auto-columns: min-content;
        gap: 1rem;
        place-content: center;
        place-items: center;
    }

</style>