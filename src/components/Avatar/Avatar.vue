<template>
    <div class="kro-avatar">
        <img :src="src" alt="">
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            src: String,
        }
    }
</script>

<style lang="scss">

    .kro-avatar {
        width: var(--kro-avatar-size, 3rem);
        height: var(--kro-avatar-size, 3rem);

        border-radius: 50%;
        // background: black;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

</style>