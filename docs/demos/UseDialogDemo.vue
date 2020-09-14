<template>
    <div>
        <kro-button @click="onSubmit">Create Confimation</kro-button>
    </div>
</template>

<script lang="ts">
    import { useDialog } from '@lib/composables/useDialog';

    export default {
        name: 'UseDialogDemo',
        setup() {
            const { createConfirmationDialog } = useDialog();
        
            const onSubmit = async () => {
                try {
                    await createConfirmationDialog({
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
