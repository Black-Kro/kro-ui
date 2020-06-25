<template>
    <div class="icon-demo">
        <div class="icon-demo-item" v-for="(value, name) in icons" :key="name">
            <kro-icon :icon="name" />
            <span>{{name}}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import { useIcons } from '@lib';

    export default {
        name: 'IconDemo',
        setup() {
            const { icons } = useIcons();

            return {
                icons
            }
        }
    }
</script>

<style scoped lang="scss">
    .icon-demo {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    }
    
    .icon-demo-item {
        display: grid;
        grid-template-rows: 2rem 1rem;
        place-items: center;
        font-size: 0.75rem;

        gap: 0.25rem;

        span { color: var(--kro-foreground-secondary); }
    }
</style>