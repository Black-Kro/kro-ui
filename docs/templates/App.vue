<template>
    <kro-app>
        <kro-layout fixed>
            <template #toolbar>
                <kro-toolbar padded class="flex" style="background: var(--kro-background); border-bottom: 1px solid var(--kro-divider);">
                    <kro-button class="mr-4 sm:block md:hidden lg:hidden xl:hidden" icon="menu" @click="navigation = !navigation" />
                    <span class="flex items-center">
                        <docs-logo />
                        <span class="mx-3">{{title}}</span>
                    </span>
                    <div class="flex-1"></div>
                    <kro-button class="mx-2" @click="toggleThemeMode" icon="invert"></kro-button>
                    <kro-button icon="github" href="https://github.com/Black-Kro/kro-ui"></kro-button>
                </kro-toolbar>
            </template>

            <template #navigation>
                <kro-navigation v-model="navigation">
                    <div class="py-4">
                        <press-navigation-item
                            v-for="item in sidebar" 
                            
                            :key="item.to" 
                            :title="item.title"
                            :to="item.to"
                            :children="item.children"></press-navigation-item>
                    </div>
                </kro-navigation>
            </template>
            
            <template #default>
                <div class="container mx-auto px-4 grid grid-cols-4 gap-4">
                    <div class="col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3">
                        <router-view></router-view>
                    </div>
                    <div v-if="meta && meta.headings" class="hidden md:block lg:block xl:block p-4 pt-8">
                        <div class="sticky py-4" style="top: 4rem">
                            <span class="block text-xs font-bold mb-4">On This Page</span>
                            <a  v-for="(heading, i) in meta.headings" :key="i"
                                class="block mb-2 font-medium transition-fast hover:translate-r-2px text-sm"
                                :style="{'color':  $route.hash === `#${heading.hash}` ? 'var(--kro-primary)' : 'var(--kro-foreground-secondary)'}" 
                                :href="`#${heading.hash}`">{{heading.text}}</a>
                            <kro-button hide-external-icon icon="bug" v-if="meta.options.for" :href="`https://github.com/Black-Kro/kro-ui/issues/new?assignees=&labels=bug&template=bug_report.md&title=${meta.options.for.split('/')[2]}:`" class="block my-2 mt-4 w-full">Report Bug</kro-button>
                            <kro-button hide-external-icon icon="github" v-if="meta.options.for" :href="`https://github.com/Black-Kro/kro-ui/tree/master/src/${meta.options.for}`" class="block my-2 w-full">Source</kro-button>
                        </div>
                    </div>
                </div>
            </template>

            <template #footer>
                <div class="container mx-auto p-4 flex">
                    <span>&copy; 2020 Black Kro</span>
                    <span class="flex-1"></span>
                    <docs-logo />
                    <span class="flex-1"></span>
                    <a target="_blank" href="https://github.com/Black-Kro/kro-ui">Github</a>
                </div>
            </template>
        </kro-layout>
    </kro-app>
</template>

<script lang="ts">
    import { ref } from 'vue';
    import { useConfiguration } from '@kro-press';
    import { useTheme } from '@lib';
    import { useRouter, useRoute } from 'vue-router';
    import { useMeta } from '@kro-press/composables/useMeta';

    export default {
        name: 'App',
        setup() {
            const { beforeEach, afterEach, currentRoute,  } = useRouter();
            const { title, sidebar } = useConfiguration();
            const { toggleThemeMode } = useTheme();
            const { meta } = useMeta();

            const navigation = ref(false);
            
            // Close navigation when navigating to new page.
            beforeEach((to, from, next) => { navigation.value = false; next(); });

            return {
                title,
                sidebar,
                navigation,
                open,
                toggleThemeMode,
                meta
            }
        }
    }
</script>

<style lang="scss">



</style>

<style lang="scss">
    @import './styles/util';
    @import './markdown';
    @import '~highlight.js/scss/nord';
</style>