import { ref, watchEffect } from 'vue';

interface DialogOptions {
    title: string;
    message: string;

    confirmText?: string;
    cancelText?: string;

    canCancel?: boolean;
    persistent?: boolean;

    icon?: boolean;
}

interface RootDialogOptions extends DialogOptions {
    type: DialogType,
}

export enum DialogType {
    ALERT,
    CONFIRMATION
};

export const dialog = ref<any>()

export const useDialog = () => {

    const createDialog = (options : RootDialogOptions) => {
        return new Promise((resolve, reject) => {
            dialog.value = {
                ...options,
                successful: -1,
            };

            // Kinda sketchy if you ask me, but I currently can't think of a better solution
            // So this will have to work for now. Ideally I would be able to pass a function
            // to the component to the component but I currently have no idea how to do that,
            // so this will have to do for now. Maybe come back to this later and make it less trash....
            // we'll see....
            const watcher = watchEffect(() => {
                if (dialog.value.successful === 1) {
                    dialog.value = null;
                    watcher();
                    resolve();
                }
                else if (dialog.value.successful === 0) {
                    dialog.value = null;
                    watcher();
                    reject();
                }
            });
        });
    };

    const createAlert = async (options: DialogOptions) => {
        return createDialog({
            canCancel: true,
            ...options,
            type: DialogType.ALERT
        });
    };
    
    const createConfirmation = async (options: DialogOptions) => {
        return createDialog({
            canCancel: true,
            ...options,
            type: DialogType.CONFIRMATION
        });
    };


    return {
        createDialog,
        createAlert,
        createConfirmation,
    }

}