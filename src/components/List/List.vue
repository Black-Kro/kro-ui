<template>
    <div class="kro-list">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { computed, onMounted, onUpdated, VNode } from 'vue';
    import KroListItem from './ListItem.vue';

    export default {
        name: 'KroList',
        props: {
            disabled: Boolean,
            dense: Boolean,
        },

    }
</script>

<style lang="scss">

    .kro-list {
        padding: 0.5rem 0;
        background: var(--kro-background-secondary);
    }

</style>