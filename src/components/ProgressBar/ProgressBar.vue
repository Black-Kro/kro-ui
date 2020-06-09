<template>
    <div :class="{
        [$style.root]: true,
        [$style.isActive]: active,
        [$style.isStream]: stream,
        [$style.isIndeterminate]: indeterminate,
        [$style.rounded]: rounded,
    }">
        <div :class="$style.stream">
            <div :class="$style.streamContent"></div>
        </div>
        <div :class="$style.buffer" :style="{ '--kro-progress-bar-buffer-value': bufferValue }"></div>
        <div :class="$style.progress" :style="{ '--kro-progress-bar-value': value }"></div>
        <div></div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            stream: Boolean,
            indeterminate: Boolean,
            active: Boolean,
            rounded: {
                type: Boolean,
                default: false,
            },

            value: {
                type: Number,
                default: 0,
            },
            bufferValue: {
                type: Number,
                default: 100,
            }

        },
        setup() {
            return {

            }
        }
    }
</script>

<style module lang="scss">

    .root {
        --kro-progress-bar-height: 0.5rem;

        position: relative;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        height: var(--kro-progress-bar-height);
        width: 100%;
        margin: 1rem 0;

        transition: .2s cubic-bezier(.4,0,.6,1);

        --kro-progress-bar-stream-size: 0.3rem;

        &.rounded {
            border-radius: calc(var(--kro-progress-bar-height) / 2);
        }

        &.isIndeterminate {
            .stream,
            .progress,
            .buffer {
                opacity: 0;
            }
        }

        &.isStream .stream {
            display: block;
        }
    }

    .stream,
    .buffer,
    .progress {
        position: absolute;
        top: 0; left: 0;
        height: 100%;
        width: 100%;
    }

    .stream {
        height: var(--kro-progress-bar-stream-size);
        top: 50%;
        transform: translateY(-50%);

        display: none;
    }

        .streamContent {
            height: 0;
            border-top: var(--kro-progress-bar-stream-size) dotted var(--kro-progress-stream-color, var(--kro-primary-darken));

            animation: KroProgressStreamAnimation 0.25s linear infinite;
            opacity: 0.3;
        }

    .buffer {
        background: var(--kro-progress-buffer-color, var(--kro-primary-darken));
        transform-origin: left center;
        transform: scaleX(calc( var(--kro-progress-bar-buffer-value) / 100 ));

        transition: inherit;
    }

    .progress {
        background: var(--kro-progress-progress-color, var(--kro-primary));
        transform-origin: left center;
        transform: scaleX(calc( var(--kro-progress-bar-value) / 100 ));

        transition: inherit;
    }


    @keyframes KroProgressStreamAnimation {
        
        100% {
            transform: translateX(calc(var(--kro-progress-bar-stream-size) * -2));
        }

    }

</style>