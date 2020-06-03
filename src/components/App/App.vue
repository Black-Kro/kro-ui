<template>
    <div :class="$style.root">
        <div :class="$style.container">
            <slot></slot>
        </div>
        <div id="kro-portal"></div>
        <composable-dialogs></composable-dialogs>
    </div>
</template>

<script lang="ts">
    import ComposableDialogs from './components/ComposableDialogs.vue';

    export default {
        components: { ComposableDialogs }
    }
</script>

<style module lang="scss">

</style>