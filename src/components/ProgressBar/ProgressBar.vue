<template>
  <div
    :class="{
      'kro-progress-bar': true,
      'kro-progress-bar--is-stream': stream,
      'kro-progress-bar--is-indeterminate': indeterminate,
      'kro-progress-bar--rounded': rounded,
    }"
  >
    <div class="kro-progress-bar__stream">
      <div class="kro-progress-bar__stream-content" />
    </div>
    <div class="kro-progress-bar__buffer" :style="{ '--kro-progress-bar-buffer-value': `${bufferValue - 100}%` }" />
    <div class="kro-progress-bar__progress" :style="{ '--kro-progress-bar-value': `${value - 100}%` }" />
    <div class="kro-progress-bar__indeterminate" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'KroProgressBar',
  props: {
    stream: Boolean,
    indeterminate: Boolean,
    rounded: {
      type: Boolean,
      default: true,
    },

    value: {
      type: Number,
      default: 0,
    },
    bufferValue: {
      type: Number,
      default: 100,
    },
  },
}
</script>

<style lang="scss">

    .kro-progress-bar {
        --kro-progress-bar-height: 0.5rem;
        --kro-progress-bar-stream-size: 0.3rem;

        position: relative;
        overflow: hidden;

        -webkit-mask-image: -webkit-radial-gradient(white, black);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        height: var(--kro-progress-bar-height);
        width: 100%;
        margin: 1rem 0;

        transition: .2s cubic-bezier(.4,0,.6,1);
    }

        .kro-progress-bar--rounded {
            border-radius: calc(var(--kro-progress-bar-height) / 2);
        }

        .kro-progress-bar--is-indeterminate {

            .kro-progress-bar__indeterminate {
                opacity: 1;
            }

            .kro-progress-bar__stream,
            .kro-progress-bar__progress {
                opacity: 0;
            }
        }

        .kro-progress-bar--is-stream {
            .kro-progress-bar__stream {
                 display: block;
            }
        }

    .kro-progress-bar__stream,
    .kro-progress-bar__buffer,
    .kro-progress-bar__indeterminate,
    .kro-progress-bar__progress {
        position: absolute;
        top: 0; left: 0;
        height: 100%;
        width: 100%;
    }

    .kro-progress-bar__stream {
        height: var(--kro-progress-bar-stream-size);
        top: 50%;
        transform: translateY(-50%);

        display: none;
    }

        .kro-progress-bar__stream-content {
            height: 0;
            border-top: var(--kro-progress-bar-stream-size) dotted var(--kro-progress-stream-color, var(--kro-primary-lighten));

            animation: KroProgressStreamAnimation 0.25s linear infinite;
            opacity: 0.3;
        }

    .kro-progress-bar__buffer,
    .kro-progress-bar__progress {
        width: 100%;
        transform-origin: left center;
        transition: inherit;
        border-radius: calc(var(--kro-progress-bar-height) / 2);
    }

    .kro-progress-bar__buffer {
        background: var(--kro-progress-buffer-color, var(--kro-primary-lighten));
        transform: translateX(var(--kro-progress-bar-buffer-value));
    }

    .kro-progress-bar__progress {
        background: var(--kro-progress-bar-progress-color, var(--kro-primary));
        transform: translateX(var(--kro-progress-bar-value));
    }

    .kro-progress-bar__indeterminate {
        opacity: 0;
        width: 25%;
        border-radius: calc(var(--kro-progress-bar-height) / 2);
        background: var(--kro-progress-bar-progress-color, var(--kro-primary));

        transform: translateX(-100%);

        animation: KroProgressIndeterminateAnimation 1.5s linear infinite;
    }

    @keyframes KroProgressStreamAnimation {
        100% { transform: translateX(calc(var(--kro-progress-bar-stream-size) * -2)); }
    }

    @keyframes KroProgressIndeterminateAnimation {
        100% { transform: translateX(400%); }
    }

</style>
