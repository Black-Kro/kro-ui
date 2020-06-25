<template>
    <div>
        <!-- <kro-menu>
            <template #activator="{ open }">
                <kro-button icon="menu" @click="open" />
            </template>

            Hello World, this is just a menu
        </kro-menu> -->

        <br />

        <kro-menu offset-y>
            <template #activator="{ open }">
                <kro-button @click="open">Open Menu</kro-button>
            </template>

           <kro-list>
               <kro-list-item>Item 1</kro-list-item>
               <kro-list-item>Item 2</kro-list-item>
               <kro-list-item>Item 3</kro-list-item>
               <kro-list-item>Item 4</kro-list-item>
               <kro-list-item>Item 5</kro-list-item>
           </kro-list>
        </kro-menu>
    </div>
</template>

<script>
    export default {
        name: 'MenuDemo',
    }
</script>

<style>

</style>