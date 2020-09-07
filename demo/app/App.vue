<template>
    <kro-app>
        <kro-layout 
            v-model:is-drawer-hidden="isDrawerHidden" 
            v-model:is-drawer-open="isDrawerOpen">
            <template #toolbar>
                <kro-toolbar raised padded>
                    <kro-button v-if="isDrawerHidden" @click="isDrawerOpen = !isDrawerOpen" icon="menu" />
                    App
                    <span class="flex-1"></span>
                    <kro-menu>
                        <template #activator="{ open }">
                            <kro-button icon="invert" @click="open"/>
                        </template>
                        <template #default>
                            <kro-list-item @click="setTheme('light')">Light</kro-list-item>
                            <kro-list-item @click="setTheme('dark')">Dark</kro-list-item>
                            <kro-list-item>Black</kro-list-item>
                        </template>
                    </kro-menu>
                </kro-toolbar>
            </template>

            <template #drawer v-if="hasNavBar">
                <kro-list-item to="/">
                    <template #icon><kro-icon icon="home"/></template>
                    Home
                </kro-list-item>
                <kro-list-item href="/settings">
                    <template #icon><kro-avatar color="#e91e63" small/></template>
                    Settings
                    <template #action>
                        <kro-icon icon="menu" />
                    </template>
                </kro-list-item>
            </template>

            <template #default>

                <kro-button v-tooltip="'Hello World'" @click="testDialog">Open Dialog</kro-button>
                
                <kro-dialog v-model="isOpen">
                    <template #activator="{ open }">
                        <kro-button @click="open">Open</kro-button>
                    </template>
                    <template #header>
                        Hey, this is just a title
                    </template>
                    <template #default>
                        Hello WOrld sdaf asdklj sklf jaslkf jaslkf jasdklf jaslkfj aslkdjf alks;jf kl;asj fkl;asdj flk;asdj fkl;asjd fkl;asdjf lk;asdjf lk;asj l;ksdj lk js
                    </template>
                    <template #footer="{ close }">
                        <kro-button @click="close">Cancel</kro-button>
                        <kro-button warning @click="close"><kro-icon icon="error" />Delete World</kro-button>
                    </template>
                </kro-dialog>

                <div class="grid gap-4 grid-flow-col p-4 container mx-auto">
                    <kro-button>A Normal Button</kro-button>
                    <kro-button disabled>A Disabled Button</kro-button>
                    <kro-button warning>A Warning Button</kro-button>
                    <kro-button success>A Success Button</kro-button>
                    <kro-button error>A Error Button</kro-button>
                </div>

                <router-view></router-view>
            </template>

            <template #footer>
                Footer Content
            </template>
        </kro-layout>
    </kro-app>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { useTheme, useDialog } from '../../src';

    export const { theme } = useTheme();

    export const setTheme = (schema) => {
        console.log(schema);
        theme.value = `default-${schema}`;
    }

    export const isDrawerOpen = ref(false);
    export const isDrawerHidden = ref(false);

    export const hasNavBar = ref(true);

    export const isOpen = ref(false);

    const { createDialog, createConfirmationDialog } = useDialog();

    export const testDialog = async () => {
        await createConfirmationDialog({
            title: 'Delete World?',
            message: 'Ipsum proident consequat excepteur nisi laboris nostrud. Id sunt voluptate sit tempor deserunt aute pariatur mollit nisi. Mollit officia et in elit non.',
            style: 'centered',
            icon: 'error',
            iconColor: 'red',
            resolveButton: {
                text: 'Delete World',
                attributes: {
                    error: true,
                }
            }
        });
        console.log('done');
    };

    export const test = async () => {
        console.log('testing');
        // await createConfirmation({
        //     title: 'Click me bb',
        //     message: 'plz click me',
        // })
    }

    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    
</style>