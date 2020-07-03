<template>
    <div class="kro-press-article-heading">
        <slot />
    </div>
</template>

<style lang="scss">

    .kro-press-article-heading {
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