<template>
    <div class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));">
        <div v-for="(icon, name) in Icons" class="flex flex-col items-center content-center justify-center" :key="name">
            <kro-icon :icon="name" />
            <span class="text-xs mt-2">{{name}}</span>
        </div>
    </div>
</template>

<script>
    import Icons from '@lib/assets/icons';

    export default {
        setup() {
            return {
                Icons
            }
        }
    }
</script>
