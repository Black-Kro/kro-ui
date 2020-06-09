<template>
    <div :class="$style.root">
        <router-link :exact-active-class="$style.active" :to="data.path" :class="$style.link">
            <span :style="{ 'margin-left': `${ level * 16 }px` }" :class="$style.title">{{data.title}}</span>
        </router-link>
        <app-sidebar-item :level="level + 1" v-for="item in data.children" :key="item.path" :data="item"></app-sidebar-item>
    </div>
</template>

<script>
    export default {
        name: 'AppSidebarItem',
        props: {
            level: {
                type: Number,
                default: 0,
            },
            data: {
                required: true,
            }
        },
        setup(props) {

            return {

            }  
        }
    }
</script>

<style module lang="scss">

    .root {
        font-size: 0.9em;
    }

    .link {
        color: var(--kro-foreground);
        text-decoration: none;
        font-size: 1em;
        display: block;
        border-left: 4px solid transparent;
        padding: 0.5rem 1rem 0.5rem 2rem;
    }

    .active {
        border-color: var(--kro-accent);
        color: var(--kro-accent);
    }

</style>