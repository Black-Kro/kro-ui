<template>
    <div :class="$style.root">
        <div :class="$style.header">{{title}}</div>
        <div :class="$style.content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
        }
    }
</script>

<style module lang="scss">
    .root {
        max-width: 960px;
        width: 100%;
        display: grid;
        margin-bottom: 1rem;
    }

    .header {
        padding: 1rem;
        font-size: 1rem;
        font-weight: 700;
        border-bottom: 1px solid var(--kro-application-divider);
    }

    .content {
        padding: 1rem;
        background: var(--kro-application-background);
    }
</style>