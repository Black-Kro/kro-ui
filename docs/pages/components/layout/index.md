---
title: Layout
for: /components/Layout
---

# Layout

`kro-layout` provides a basic layout component that will auto size the content based upon the child component placed within it.
You can include only the components you want as well. It is recommended to use the `kro-navigation` and `kro-toolbar` components inside of
the navigation and toolbar slots.

## Usage

```html
<template>
    <kro-app>
        <kro-layout>
        
            <template #toolbar>
                <kro-toolbar>
                    <kro-icon-button icon="menu" @click="open" />
                    <!-- Toolbar Content -->
                </kro-toolbar>
            </template>

            <template #navigation>
                <kro-navigation v-model="isNavigationOpen">
                    <!-- Navigation Content -->
                </kro-navigation>
            </template>

            <template #content>
                <!-- Page Content -->
            </template>

            <template #footer>
                <!-- Page Footer -->
            </template>

        <kro-layout>
    </kro-app>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const isNavigationOpen = ref(false);
            
            const open = () => isNavigationOpen = true;

            return {
                open
            }
        }
    }
</script>
```

## API

<api />

## Up Next

<up-next title="List" subtitle="For all the stuff that needs a list I guess" to="/components/list" />