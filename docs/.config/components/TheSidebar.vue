<template>
    <nav class="the-sidebar pt-4">
        <div class="the-sidebar-container flex flex-col sticky">
            <div v-for="(items, category) in menu" class="flex flex-col mb-4">
                <span class="text-xs mb-2 tracking-wide font-medium text-secondary uppercase px-2">{{category}}</span>
                <router-link 
                    class="capitalize font-medium text-sm text-primary block py-1 px-2" 
                    v-for="item in items" 
                    :to="item.path">{{item.name}}</router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
    import { config } from '../config';

    export const menu = config.routes;

</script>

<style lang="scss">
    
    .the-sidebar {
        .router-link-active {
            color: var(--kro-primary);
        }
    }

    .the-sidebar-container {
        top: 6rem;
    }

</style>