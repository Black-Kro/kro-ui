<template>
    <kro-app>
        <kro-layout>
            <template #toolbar>
                <kro-toolbar class="the-app-toolbar prevent-scrollbar-shift">
                    <div class="container mx-auto flex flex-row items-center px-4">
                        <kro-logo class="h-10"></kro-logo>
                        <span class="flex-1"></span>
                        <div class="grid grid-flow-col gap-2">
                            <kro-button icon="invert" @click="toggleTheme" />
                            <kro-button icon="github" href="https://github.com/Black-Kro/kro-ui" />
                        </div>
                    </div>
                </kro-toolbar>
            </template>
            <template #default>

                <div class="container mx-auto p-4 grid grid-cols-9 gap-4">
                    <the-sidebar class="col-span-2" />
                    <div class="col-span-5 markdown">
                        <router-view />
                    </div>
                    <the-page-context />
                </div>

            </template>
            <template #footer>
                <footer class="container mx-auto p-4 text-center text-secondary text-xs font-medium flex flex-col">
                    <kro-logo class="h-10 mb-2" />
                    Copyright Black kro 2020
                </footer>
            </template>
        </kro-layout>
    </kro-app>
</template>

<script lang="ts" setup>
    import { useTheme } from '/~/index'; 

    const { theme } = useTheme();

    export const toggleTheme = () => {
        if (theme.value === 'default-light')
            theme.value = 'default-dark';
        else
            theme.value = 'default-light';
    }

</script>

<style lang="scss">

    .the-app-toolbar {
        border-bottom: 1px solid var(--kro-divider);
    }

</style>