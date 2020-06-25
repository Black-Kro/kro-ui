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
        // setup(props, { slots }) {

        //     const getListItemNode = (node: VNode) => {
        //         let nodes : VNode[] = [];

        //         /**
        //          * Check the node type, if it is a list item node,
        //          * then return it. Otherwise we will check the children.
        //          */
        //         if (typeof node.type === 'string') {
        //             // Check the children
        //             if (node.children) {
        //                 if (Array.isArray(node.children)) {
        //                     nodes = [
        //                         ...nodes,
        //                         ...node.children.map((node) => getListItemNode(node as VNode)).flat()
        //                     ]
        //                 } else if (typeof node.children === 'object') {
        //                     nodes = [
        //                         ...nodes,
        //                         ...getListItemNode(node.children as any)
        //                     ];
        //                 }
                        
        //             }
        //         } else if (typeof node.type === 'symbol') {
        //             // Check the children
        //             if (Array.isArray(node.children)) {
        //                 nodes = [
        //                     ...nodes,
        //                     ...node.children.map((node) => getListItemNode(node as VNode)).flat()
        //                 ]
        //             } else if (typeof node.children === 'object') {
        //                 nodes = [
        //                     ...nodes,
        //                     ...getListItemNode(node.children as any)
        //                 ];
        //             }
        //         } else if (typeof node.type === 'object') {
        //             // Check the name
        //             if ((node.type as any).name === 'kro-list-item') {
        //                 nodes = [
        //                     ...nodes,
        //                     node,
        //                 ]
        //             }
        //         }

        //         return nodes;
        //     };

        //     const getListItemNodes = (nodes: VNode[]) => {
        //         let items : VNode[] = [];

        //         for (const node of nodes) {
        //             items = [
        //                 ...items,
        //                 ...getListItemNode(node),
        //             ];
        //         }

        //         return items;
        //     };

        //     const registerSlotItems = () => {
        //         if (slots.default) {
        //             const root = slots.default();
        //             const items = getListItemNodes(root);
                    
        //             console.log(items);
        //             items.forEach(item => {
        //                 item.props = {
        //                     ...item.props,
        //                     tabindex: 0,
        //                 }
        //             });
        //         }
        //     }

        //     onMounted(() => { registerSlotItems(); });
        //     onUpdated(() => { registerSlotItems(); });
        // }
    }
</script>

<style lang="scss">

    .kro-list {
        padding: 0.5rem 0;
        background: var(--kro-background-secondary);
    }

</style>