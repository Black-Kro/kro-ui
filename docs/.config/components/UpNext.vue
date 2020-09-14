<template>
    <router-link class="flex flex-row items-center text-current bg-secondary rounded-md p-4">
        <div class="flex-1 flex flex-col">
            <span class="text-primary">{{title}}</span>
            <span class="text-sm">{{subtitle}}</span>
        </div>
        <kro-icon icon="arrow-right" />
    </router-link>
</template>

<script lang="ts" setup>
    export default {
        name: 'UpNext',
        props: {
            title: String,
            subtitle: String
        }
    }
</script>

<style lang="scss">
    
</style>