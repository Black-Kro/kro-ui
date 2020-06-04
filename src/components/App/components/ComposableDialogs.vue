<template>
    <div>
        <div v-if="dialog">
            <kro-dialog :persistent="dialog.persistent || false" @close="dialog.successful = 0" open>
                <template #title>
                    <kro-icon v-if="iconType" :class="$style.icon" :icon="iconType"/>
                    {{dialog.title}}
                </template>
                <p>
                    {{dialog.message}}
                </p>
                <template #controls>
                    <kro-button @click="dialog.successful = 0" v-if="dialog.canCancel">{{ dialog.cancelText || 'Cancel' }}</kro-button>
                    <kro-button @click="dialog.successful = 1" primary>{{ dialog.confirmText || 'Ok' }}</kro-button>
                </template>
            </kro-dialog>
        </div>
    </div>
</template>

<script lang='ts'>
    import { computed } from 'vue';
    import { dialog, DialogType } from '../../../composables/dialogs';

    export default {
        setup() {

            const iconType = computed(() => {
                if (dialog.value) {
                    if (dialog.value.type === DialogType.ALERT) {
                        return 'error';
                    }

                    if (dialog.value.type === DialogType.CONFIRMATION) {
                        return 'warning';
                    }
                }

                return null;
            });

            return {
                dialog,
                iconType,
            }
        }
    }
</script>

<style module lang="scss">

</style>