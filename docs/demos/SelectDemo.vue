<template>
    <div class="select-demo__root">
        <kro-select v-model="favoriteFood" label="Favorite Food">
            <option value="Pizza">Pizza</option>
            <option value="Tacos">Tacos</option>
            <option value="Cake">Cake</option>
        </kro-select>
        {{favoriteFood}}
        <kro-select v-model="favoriteLibrary" label="Favorite Library">
            <option>React</option>
            <option>VueJS</option>
            <option>Angular</option>
        </kro-select>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'SelectDemo',
        setup() {
            const favoriteFood = ref();
            const favoriteLibrary = ref('VueJS');

            return {
                favoriteFood,
                favoriteLibrary,
            }
        }
    }
</script>

<style lang="scss">

    .select-demo__root {
        .kro-select {
            margin-right: 1rem;
        }
    }

</style>