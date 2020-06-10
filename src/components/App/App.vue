<template>
    <div class="kro-app">
        <div class="kro-app__content">
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