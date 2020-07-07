<template>
    <div class="kro-spinner"></div>
</template>

<script>
export default {
    name: 'KroSpinner',
}
</script>

<style lang="scss">

    .kro-spinner {
        width: var(--kro-spinner-size, 2.5rem);
        height: var(--kro-spinner-size, 2.5rem);

        border-radius: 50%;
        border: var(--kro-spinner-thickness, 0.35rem) solid var(--kro-spinner-color, var(--kro-foreground));
        border-bottom: var(--kro-spinner-thickness, 0.35rem) solid transparent;
    
        animation-name: KroSpinnerAnimation;
        animation-duration: 750ms;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }
    
    @keyframes KroSpinnerAnimation {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

</style>