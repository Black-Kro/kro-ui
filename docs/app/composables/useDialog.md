# useDialog


## Usage

<use-dialog-example></use-dialog-example>

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