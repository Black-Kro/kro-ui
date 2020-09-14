# useDialog
`useDialog` exports three functions: `createConfirmation`, `createAlert`, and `createDialog`. The first two, `createConfirmation` and `createAlert`
have been prestyled while `createDialog` has the generic dialog look, but also has the ability to change the icon of the dialog. Each dialog
will return `Promise.resolve` if the user clicks the confirm button on the dialog or `Promise.reject` if the user cancels or closes the dialog.

## Usage

<use-dialog-demo></use-dialog-demo>

```html
<form @submit.prevent="onSubmit">
    ...
    <kro-button>Submit Form</kro-button>
</form>
```

```ts
import { useDialog } from 'kro-ui';

export default {
    setup() {
        const { createConfirmation } = useDialog();
    
        const onSubmit = async () => {
            try {
                await createConfirmation({
                    title: 'Confirmation Dialog',
                    message: 'This is a message from the confirmation dialog.',
                });
            } catch {
                // Handle Cancel
            }
        }

        return {
            onSubmit
        }
    }
}
```

## Options
```ts
interface DialogOptions {

    // Sets the title of the dialog.
    title: string;

    // Sets the message of the dialog
    message: string;

    // Custom confirm button text. Defaults to 'ok'
    confirmText?: string;

    // Custom cancel button text. Defaults to 'cancel'
    cancelText?: string;

    // Sets the visibility of the cancel buttons on the dialog.
    canCancel?: boolean;

    // Sets the persistent option for the dialog.
    persistent?: boolean;
}
```

## Related
<press-article-link title="useToast" subtitle="Create toast notifications" to="/composables/useToast"></press-article-link>