<template>
    <div>
        <app-sidebar-item v-for="item in sidebar" :key="item.path" :data="item"></app-sidebar-item>
        <!-- {{sidebar}} -->
    </div>
</template>

<script lang="ts">
    import { useDocConfiguration } from '@docs/_internal';
    import AppSidebarItem from './AppSidebarItem.vue';

    export default {
        name: 'AppSidebar',
        components: { AppSidebarItem },
        props: {
            data: {
                required: true
            },
        },
        setup(props) {
            const { sidebar } = useDocConfiguration();

            return {
                sidebar
            }
        }
    }
</script>

<style>

</style>