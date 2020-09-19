import { ref } from 'vue'

interface DialogConfiguration {
  title: string
  message: string
  style?: string
  icon?: string
  iconColor?: string
  persistent?: boolean

  resolveButton?: {
    text: string
    hidden?: boolean
    attributes?: any
  }

  rejectButton?: {
    text: string
    hidden?: boolean
    attributes?: any
  }
}

const defaultDialogConfiguration: DialogConfiguration = {
  title: 'Dialog Title',
  message: 'Dialog Message',
  style: 'default',
  resolveButton: {
    text: 'Ok',
    attributes: {
      primary: true,
    },
  },
  rejectButton: {
    text: 'Cancel',
  },
}

const defaultConfirmationDialogConfiguration: DialogConfiguration = {
  title: 'Confirmation Dialog',
  message: 'Dialog Message',
  icon: 'mdi:help-circle',
  style: 'default',
  resolveButton: {
    text: 'Ok',
    attributes: {
      primary: true,
    },
  },
  rejectButton: {
    text: 'Cancel',
  },
}

interface DialogInstance extends DialogConfiguration {
  isOpen: any
  resolve: any
  reject: any
  destroy: any
}

export const dialogInstances = ref<DialogInstance[]>([])

const createDialogInstance = (configuration: DialogConfiguration, resolve: any, reject: any) => {
  const instance: DialogInstance = {
    ...configuration,
    isOpen: ref(true),
    resolve,
    reject,
    destroy() {
      dialogInstances.value.splice(dialogInstances.value.indexOf(this), 1)
    },
  }

  dialogInstances.value = [
    ...dialogInstances.value,
    instance,
  ]
}

export const useDialog = () => {
  const createDialog = (options: DialogConfiguration) => {
    return new Promise((resolve, reject) => {
      createDialogInstance({
        ...defaultDialogConfiguration,
        ...options,
      }, resolve, reject)
    })
  }

  const createConfirmationDialog = (options: DialogConfiguration) => {
    return new Promise((resolve, reject) => {
      createDialogInstance({
        ...defaultConfirmationDialogConfiguration,
        ...options,
      }, resolve, reject)
    })
  }

  return {
    createDialog,
    createConfirmationDialog,
  }
}
