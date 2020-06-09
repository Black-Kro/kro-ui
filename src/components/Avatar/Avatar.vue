<template>
    <div :class="$style.root">
        <img src="" alt="">
    </div>
</template>

<script lang="ts">
    export default {

    }
</script>

<style module lang="scss">

    .root {
        width: var(--kro-avatar-size, 3rem);
        height: var(--kro-avatar-size, 3rem);

        border-radius: 50%;
        background: black;
    }

</style>