<template>
    <div :class="$style.root">
        <router-link :exact-active-class="$style.active" :class="$style.link" :to="to">
            <span :style="{ 'margin-left': `${depth * 16}px` }">{{title}}</span>
        </router-link>
        <navigation-item :depth="depth + 1" v-for="child in children" :key="child.to" :to="child.to" :title="child.title" :children="child.children"></navigation-item>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        name: 'NavigationItem',
        props: {
            title: String,
            to: String,
            children: {
                type: Array,
                default: [],
            },
            depth: {
                type: Number,
                default: 0,
            }
        }
    }
</script>

<style module lang="scss">

    @import '../../src/styles/general/typography';

    .root {        
        // @include useFont('body-1');
        font-weight: 700;
        font-size: 0.9em;
    }

    .link {
        color: var(--kro-foreground);
        text-decoration: none;
        display: block;
        padding: 0.5rem 1rem 0.5rem 2rem;
        border-left: 4px solid transparent;
    }

    .active {
        border-color: var(--kro-accent);
        color: var(--kro-accent);
    }

</style>