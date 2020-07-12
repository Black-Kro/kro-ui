<template>
    <div class="flex flex-row justify-center">
        <kro-select label="Favorite Food" v-model="favoriteFood">
            <option value="pizza">Pizza</option>
            <option value="ramen">Ramen</option>
            <option value="ice-cream">Ice Cream</option>
        </kro-select>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            const favoriteFood = ref('');

            return {
                favoriteFood
            }
        }
    }
</script>
