<template>
    <div>
        <kro-button @click="onSubmit">Create Confimation</kro-button>
    </div>
</template>

<script lang="ts">
    import { useDialog } from '@lib/composables/dialogs';

    export default {
        name: 'UseDialogDemo',
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
</script>
