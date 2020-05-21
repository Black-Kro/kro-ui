<template>
    <div :gap="gap" :layout="layout" :class="{[$style.root]: true, [$style.layout]: layout}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            layout: String,
            gap: {
                type: String,
                default: 'normal'
            },
        }
    }
</script>

<style module lang="scss">

    .root {

    }

    .layout {
        &[layout="horizontal"] {
            display: grid;
            grid-auto-flow: column;
            gap: 0.5rem;
            grid-auto-columns: min-content;

            &[gap="small"] { gap: 0.5rem; }
            &[gap="large"] { gap: 1.5rem; }
        }
    }

</style>