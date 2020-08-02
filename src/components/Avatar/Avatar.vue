<template>
    <div class="kro-avatar" :class="{ 'kro-avatar__small': small, 'kro-avatar__large': large }">
        <img v-if="src" :src="src" alt="">
        <div v-else-if="color" :style="{ backgroundColor: color }" class="kro-avatar__color-circle"></div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'KroAvatar',
        props: {
            src: String,
            color: String,
            small: Boolean,
            large: Boolean,
        }
    }
</script>

<style lang="scss">

    .kro-avatar {
        width: var(--kro-avatar-size, 3rem);
        height: var(--kro-avatar-size, 3rem);

        border-radius: var(--kro-avatar-radius, 50%);

        &__color-circle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        &__large {
            width: var(--kro-avatar-size, 5rem);
            height: var(--kro-avatar-size, 5rem);
        }

        &__small {
            width: var(--kro-avatar-size, 1.5rem);
            height: var(--kro-avatar-size, 1.5rem);
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

</style>