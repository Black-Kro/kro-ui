<template>
    <div :class="$style.root">

        <kro-surface>
            <kro-list-item v-for="(item, i) in items" :key="i">
                <template #icon><kro-icon :icon="item.icon"/></template>
                {{item.title}}
            </kro-list-item>
            <kro-list-item>
                <template #icon><kro-icon icon="settings" /></template>
                Settings
            </kro-list-item>
        </kro-surface>

        <kro-surface>
            <kro-list-item>
                <template #icon><kro-avatar /></template>
                Buckizzy
                <template #subtitle>@bizzycola</template>
            </kro-list-item>
            <kro-list-item>
                <template #icon><kro-avatar /></template>
                wheat.js
                <template #subtitle>@wheat</template>
            </kro-list-item>
            <kro-list-item>
                <template #icon><kro-avatar /></template>
                rey_pato
                <template #subtitle>@rey_pato</template>
            </kro-list-item>
            <kro-list-item>
                <template #icon><kro-avatar /></template>
                pere_gb.c
                <template #subtitle>@pere_gb</template>
            </kro-list-item>
            <kro-list-item>
                <template #icon><kro-avatar /></template>
                cyanboy
                <template #subtitle>@cyanboy</template>
            </kro-list-item>
            <kro-list-item>
                <template #icon><kro-avatar /></template>
                weatherd00d
                <template #subtitle>@weatherd00d</template>
            </kro-list-item>
            <kro-list-item>
                <template #icon><kro-avatar /></template>
                TheRox
                <template #subtitle>@rox</template>
            </kro-list-item>
        </kro-surface>

        <kro-button @click="addItem" primary raised>Add Item</kro-button>

    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const items = ref([{
                title: 'Home',
                icon: 'home'
            }]);

            const addItem = () => {
                items.value = [...items.value, {
                    title: 'Explore',
                    icon: 'explore'
                }]
            };

            return {
                items,
                addItem,
            }
        }
    }
</script>

<style module lang="scss">

    .root {
        display: grid;
        gap: 1rem;
    }

</style>