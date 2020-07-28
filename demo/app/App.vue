<template>
    <kro-app>
        <kro-layout 
            v-model:is-drawer-hidden="isDrawerHidden" 
            v-model:is-drawer-open="isDrawerOpen">
            <template #toolbar>
                <kro-toolbar padded>
                    <kro-button v-if="isDrawerHidden" @click="isDrawerOpen = !isDrawerOpen" icon="menu" />
                    App

                    <kro-switch v-model="hasNavBar" />
                </kro-toolbar>
            </template>

            <template #drawer v-if="hasNavBar">
                <kro-list-item to="/">
                    <template #icon><kro-icon icon="home"/></template>
                    Home
                </kro-list-item>
                <kro-list-item href="/settings">
                    <template #icon><kro-icon icon="settings"/></template>
                    Settings
                </kro-list-item>
            </template>

            <template #default>
                Layout Content

                <router-view></router-view>
                <router-link to="/">Bruh Moment</router-link>
            </template>

            <template #footer>
                Footer Content
            </template>
        </kro-layout>
    </kro-app>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    export const isDrawerOpen = ref(false);
    export const isDrawerHidden = ref(false);

    export const hasNavBar = ref(true);

    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    
</style>