---
title: Dialogs
for: /components/Dialog
---

# Dialogs
Dialogs are used to display important information requiring the users immediate attention, often to confirm an action or to display an important error message, and should only be used when necessary. Dialogs will always be shown on top of everything else. The dialog can be dismissed by clicking on the overlay, pusing the escape key, or using the custom
close function provided by the dialog and wiring it up to a button.

## Usage



<!-- <dialog-demo></dialog-demo>

```html
<template>
    <div>
        <kro-dialog v-model="isOpen">
            <template #activator="{ open }">
                <kro-button @click="open">Open Normal Dialog</kro-button>
            </template>

            <template #title>Normal Dialog</template>
            
            <span>Hello world, this is just a normal dialog. Make sure you don't annoy your users with these hecking things!</span>

            <template #controls="{ close }">
                <kro-button @click="close">Cancel</kro-button>
                <kro-button @click="close" primary>Ok</kro-button>
            </template>
        </kro-dialog>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'DialogDemo',
        setup() {
            const isOpen = ref(false);

            return {
                isOpen,
            }
        }
    
    }
</script>
``` -->

## API

<docs-component-metadata :metadata="metadata.options.component"></docs-component-metadata>

## Related
<press-article-link title="Dividers" subtitle="For dividing content, because sometimes you need to do that" to="/components/divider"></press-article-link>