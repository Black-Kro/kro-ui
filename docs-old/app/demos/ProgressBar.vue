<template>
    <div>
        <kro-progress-bar rounded :value="progressValue"></kro-progress-bar>
        <kro-progress-bar rounded :value="progressValue" :buffer-value="bufferValue"></kro-progress-bar>
        <kro-progress-bar rounded :value="progressValue" :buffer-value="bufferValue" stream></kro-progress-bar>
        <kro-progress-bar rounded indeterminate></kro-progress-bar>

        {{componentProps}}
    </div>
</template>

<script>
    import { ref } from 'vue';
    import { componentPropsExtractor } from '@docs/_internal/helpers';
    import { KroProgressBar } from '@lib';

    export default {

        setup() {

            const componentProps = ref(componentPropsExtractor(KroProgressBar));

            const progressValue = ref(0);
            const bufferValue = ref(10);

            setInterval(() => {
                if (progressValue.value >= 100) {
                    progressValue.value = 0;
                    bufferValue.value = 10;
                }

                progressValue.value += Math.random() * (15 - 5) + 5;
                progressValue.value = Math.min(progressValue.value, 100);

                bufferValue.value += Math.random() * (15 - 5) + 6;
                bufferValue.value = Math.min(bufferValue.value, 100);

            }, 2000);

            return {
                progressValue,
                bufferValue,
                componentProps
            }
        }

    }
</script>

<style>

</style>