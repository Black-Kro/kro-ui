<template>
    <demo title="Button Groups">
        <kro-button-group :class="$style.buttonGroup">
            <kro-button>Copy</kro-button>
            <kro-button>Cut</kro-button>
            <kro-button>Paste</kro-button>
        </kro-button-group>

        <kro-button-group :class="$style.buttonGroup">
            <kro-button>Kick</kro-button>
            <kro-button>Ban</kro-button>
            <kro-button><kro-icon icon="settings"/></kro-button>
        </kro-button-group>

        <kro-button-group :class="$style.buttonGroup">
            <kro-button><kro-icon icon="external"/></kro-button>
            <kro-button><kro-icon icon="invert"/></kro-button>
            <kro-button><kro-icon icon="settings"/></kro-button>
        </kro-button-group>
        
    </demo>
</template>

<script lang="ts">
    import Demo from '../Demo.vue';
    import KroButtonGroup from './ButtonGroup.vue';
    import { KroButton } from '../Button';
    import { KroIcon } from '../Icon';

    export default {
        components: { Demo, KroButtonGroup, KroButton, KroIcon }
    }
</script>

<style module lang="scss">

    .buttonGroup {
        margin-right: 1rem;
        vertical-align: top;
    }

</style>