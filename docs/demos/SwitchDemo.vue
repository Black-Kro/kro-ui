<template>
    <div>
        <kro-switch v-model="isActive">Switch 1 {{isActive}}</kro-switch>
        <kro-switch v-model="isActive2">Switch 2 {{isActive2}}</kro-switch>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        name: 'SwitchDemo',
        setup() {
            const isActive = ref(false);
            const isActive2 = ref(false);

            return {
                isActive,
                isActive2,
            }
        }
    }
</script>

<style>

</style>