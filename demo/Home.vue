<template>
    <kro-surface class="the-surface">

        some content
        <kro-divider label="or" />
        Some more conent

        <kro-divider vertical label="or" />

    </kro-surface>
</template>

<script lang="ts" setup>
    export default {
        name: '',
    }
</script>

<style lang="scss">
    .the-surface {
        // margin: 2rem;
        height: 300px;
        width: 900px;
        margin: 2rem auto;
    }
</style>