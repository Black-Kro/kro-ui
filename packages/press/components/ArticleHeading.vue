<template>
    <div class="kro-press-article-heading">
        <slot />
    </div>
</template>

<script lang="ts">
    import { useElementVisibility } from '@vueuse/core';

    export default {
        setup() {
            return {}
        }
    }
</script>

<style lang="scss">

    .kro-press-article-heading {
        display: block;
        position: relative;

        &:hover {
            a {
                opacity: 1;
            }
        }

        a {
            font-size: 0.85em;
            position: absolute;
            margin-left: -.87em;
            padding-right: .23em;
            margin-top: .125em;
            opacity: 0;
            transition: opacity 100ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }
    }


</style>