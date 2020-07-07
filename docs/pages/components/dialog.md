# Dialogs
Dialogs are used to display important information requiring the users immediate attention, often to confirm an action or to display an important error message, and should only be used when necessary. Dialogs will always be shown on top of everything else. The dialog can be dismissed by clicking on the overlay, pusing the escape key, or using the custom
close function provided by the dialog and wiring it up to a button.

## Usage

<dialog-demo></dialog-demo>

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
```

## Props

```ts
open: Boolean,
persistent: Boolean,
```

## Slots
```html
#default - The body of the dialog

#activator - A slot for the dialog activator
#title - Contains the title for the dialog
#controls - The footer of the dialog for dialog controls
```

## Events

```html
@open - Fired when the dialog opens
@close - Fired when the dialog closes
```

## Related
<press-article-link title="Dividers" subtitle="For dividing content, because sometimes you need to do that" to="/components/divider"></press-article-link>