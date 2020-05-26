# Dialogs
Dialogs are used to force the users attention to certian content. They should only be used when there is no other option. Dialogs
will always be shown on top of everything else. The dialog can be dismissed by clicking on the overlay, pusing the escape key, or using the custom
close function provided by the dialog and wiring it up to a button.

## Usage
<docs-dialog-demo></docs-dialog-demo>

```html
<kro-dialog>

    <!-- Template for buttons to open the dialog -->
    <template #activator="{ open }">
        <kro-button @click="open" kro-button>Open</kro-button>
    </template>

    <!-- Template for Dialog Content -->
    <template #default="{ close }">
        <header :class="$style.header">Delete Account</header>
        <p>...</p>
        <div :class="$style.footer">
            <kro-button @click="close">Cancel</kro-button>
            <kro-button primary>Delete</kro-button>
        </div>
    </template>

</kro-dialog>      
```


## Props
<app-prop-definition name="persistent" type="Boolean" value="false" description="Prevents the dialog from closing when clicking on the overlay."></app-prop-definition>

## Events
