<template>
    <component 
        :is="tag" 
        :class="{
            [$style.root]: true, 
            [$style.error]: type === 'error',
            [$style.info]: type === 'info',
            [$style.warning]: type === 'warning',
            [$style.success]: type === 'success',
        }">
        
        
        <div :class="$style.iconContainer"></div>
        <div :class="$style.contentContainer">
            <slot></slot>
        </div>
        <div :class="$style.actionContainer"></div>
    </component>
</template>

<script lang="ts">
    export default {
        props: {
            type: {
                type: String,
                default: 'info'
            },

            dismissible: Boolean,

            icon: String,

            tag: {
                type: String,
                default: 'div'
            }
        },

        setup(props) {

            return {

            }
        }
    }
</script>

<style module lang="scss">

    .root {
        
    }

</style>