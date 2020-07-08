<template>
    <kro-surface class="docs-playground" :raised="false" :padded="false">
        <kro-toolbar class="docs-playground__toolbar flex px-4">
            <div class="text-xl font-medium">{{title}}</div>
            <span class="flex-1"></span>
            <kro-button @click="displayCode = !displayCode" icon="xml" />
            <kro-button class="ml-2" @click="invert" icon="invert" />
            <kro-button class="ml-2" :href="source" icon="github" />
        </kro-toolbar>

        <div v-if="!displayCode" class="docs-playground__content p-4 pt-0">
            <div class="docs-playground__demo-container p-4" :class="theme === 'dark' ? 'kro-theme__default-dark' : 'kro-theme__default-light'">
                <slot />
            </div>
        </div>
        <div class="p-4 pt-0" v-else>
            <slot name="code"></slot>
        </div>
    </kro-surface>
</template>

<script>
    import { ref } from 'vue';

    export default {
        props: {
            title: String,
            source: String,
        },
        setup() {
            const theme = ref('dark');

            const displayCode = ref(false);

            const invert = () => {
                if (theme.value === 'dark')
                    theme.value = 'light';
                else
                    theme.value = 'dark';
            }

            return {
                theme,
                invert,
                displayCode,
            }
        }
    }
</script>

<style lang="scss">

    .docs-playground {

        pre {
            margin: 0;
        }

    }

    .docs-playground__toolbar {
        --kro-button-background: var(--kro-background);
        border-radius: 0.25rem 0.25rem 0 0;
    }

    .docs-playground__demo-container {
        background: var(--kro-background);
        border-radius: 0.25rem;
    }

</style>