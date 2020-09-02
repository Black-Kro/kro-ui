<template>
    <kro-surface class="the-surface">

        <kro-textfield label="bruh moment" loading>
            Loading
        </kro-textfield>
        <kro-textfield label="bruh moment" success message="Username Works">Success</kro-textfield>
        <kro-textfield label="bruh moment" error message="Username taken">Ok</kro-textfield>

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