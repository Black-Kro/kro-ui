<template>
    <div :class="$style.root">
        <div :class="$style.top">
            <div :class="$style.detail">
                <span :class="$style.name">Name</span>
                <span :class="$style.value">{{name}}</span>
            </div>
            <div :class="$style.detail">
                <span :class="$style.name">Type</span>
                <span :class="$style.value">{{type}}</span>
            </div>
            <div :class="$style.detail">
                <span :class="$style.name">Default Value</span>
                <span :class="$style.value">{{value}}</span>
            </div>
        </div>
        <div :class="$style.detail">
            <span :class="$style.name">Description</span>
            <span :class="$style.value">{{description}}</span>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            
            name: String,
            type: String,
            value: String,
            description: String,

        }

    }
</script>

<style module lang="scss">

    .root {
        // padding: 0.5rem 1rem 1rem 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
        display: grid;
        gap: .5rem;
        margin-top: 1rem;
        background: #282c34;
    }

    .detail {
        display: grid;
    }

    .top {
        display: grid;
        grid-auto-flow: column;
        
        .detail {
            &:first-child {
                .value {
                    color: var(--kro-application-accent);
                }
            }

            &:last-child {
                text-align: right;
            }
        }
    }

    .name {
        font-size: 0.75rem;
        color: var(--kro-application-foreground-secondary);
        opacity: 0.75;
    }

    .value {
        font-size: 1rem;
    }

</style>