<template>
    <kro-surface class="the-surface">

        <kro-menu>
            <template #activator="{ open }">
                <kro-button @click="open">Open Menu</kro-button>
            </template>
            <div>
                <kro-list-item>This is a menu item</kro-list-item>
                <kro-list-item>This is a menu item</kro-list-item>
                <kro-list-item>This is a menu item</kro-list-item>
                <kro-list-item>This is a menu item</kro-list-item>
            </div>
        </kro-menu>

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
        height: 200vh;
        width: 900px;
        margin: 2rem auto;
    }
</style>