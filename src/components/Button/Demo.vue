<template>
    <demo title="Buttons" :code="require('./Code.md').default">
        <div :class="$style.content">
            <kro-button :class="$style.button" @click="onClick">Button</kro-button>
            <kro-button :class="$style.button" loading>Loading button</kro-button>
            <kro-button :class="$style.button" primary>Primary Button</kro-button>
            <kro-button :class="$style.button" raised>Raised Button</kro-button>
            <kro-button :class="$style.button" raised primary>Raised Primary Button</kro-button>
            <kro-button :class="$style.button" outline>Outlined Button</kro-button>
            <kro-button :class="$style.button" href="https://google.com">Link Button</kro-button>
            <kro-button :class="$style.button"><kro-icon icon="settings" /></kro-button>
        </div>
    </demo>
</template>

<script>
    import { ref } from 'vue';
    import Demo from '../Demo.vue';
    import KroButton from './Button.vue';
    import { KroIcon } from '../Icon';

    export default {
        components: { Demo, KroButton, KroIcon },
    }
</script>

<style module>

    .button {
        margin: 0.5rem;
    }

</style>