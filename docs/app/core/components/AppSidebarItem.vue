<template>
    <div>
        <router-link :to="data.path" :class="$style.link">
            <span :class="$style.title" :style="{ 'margin-left': `${data.level * 16}px` }">{{data.title}}</span>
            <!-- {{data.title}} -->
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'AppSidebarItem',
        props: {
            data: {
                required: true,
            }
        },
        setup(props) {

            return {

            }  
        }
    }
</script>

<style module lang="scss">

    .link {
        color: white;
        text-decoration: none;
        font-size: 1.15rem;
        display: block;

        padding: 0.5rem 1rem 0.5rem 2rem;
    }

</style>