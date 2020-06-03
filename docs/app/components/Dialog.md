# Dialogs
Dialogs are used to force the users attention to certian content. They should only be used when there is no other option. Dialogs
will always be shown on top of everything else. The dialog can be dismissed by clicking on the overlay, pusing the escape key, or using the custom
close function provided by the dialog and wiring it up to a button.

## Usage
<docs-dialog-demo></docs-dialog-demo>

```html
<kro-dialog>
    <template #activator="{ open }">
        <kro-button @click="open" kro-button>Open Dialog</kro-button>
    </template>

    <template #title>Normal Dialog</template>
    <template #default>
        ...
    </template>
    <template #controls="{ close }">
        <kro-button @click="close">Cancel</kro-button>
        <kro-button primary>Delete</kro-button>
    </template>
</kro-dialog>  
```


## Props
<app-prop-definition name="persistent" type="Boolean" value="false" description="Prevents the dialog from closing when clicking on the overlay."></app-prop-definition>
<app-prop-definition name="open" type="Boolean" value="false" description="Sets the initial open state of the dialog."></app-prop-definition>

## Events
