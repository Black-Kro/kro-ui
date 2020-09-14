<template>
    <router-link :class="$style.root" :to="to">
        <div :class="$style.content">
            <span :class="$style.title">{{title}}</span>
            <span :class="$style.subtitle">{{subtitle}}</span>
        </div>
        <kro-icon icon="arrow-right" />
    </router-link>
</template>

<script>
    export default {
        props: {
            to: String,
            title: String,
            subtitle: String,
        }
    }
</script>

<style module lang="scss">

    .root {
        display: grid;
        grid-template-columns: auto min-content;
        align-items: center;

        text-decoration: none;

        border: 1px solid var(--kro-divider);
        padding: 1rem;

        --kro-icon-size: 2rem;
    }

    .content { display: grid; }
    .title { font-size: 1.25rem; }

    .subtitle {
        font-size: 0.75rem;
        color: var(--kro-foreground-secondary);
    }

</style>