<template>
    <div :class="$style.root">
        <kro-dialog>
            <template #activator="{ open }">
                <kro-button @click="open" kro-button>Open Dialog</kro-button>
            </template>

            <template #title>Normal Dialog</template>
            <template #default>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien odio, tristique quis porttitor id, sagittis quis erat. Cras in mollis leo.</p>
            </template>
            <template #controls="{ close }">
                <kro-button @click="close">Cancel</kro-button>
                <kro-button primary>Delete</kro-button>
            </template>
        </kro-dialog>

        <kro-dialog persistent>
            <template #activator="{ open }">
                <kro-button @click="open" kro-button>Open Persistent Dialog</kro-button>
            </template>
            
            <template #title>Persistent Dialog</template>
            <template #default>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien odio, tristique quis porttitor id, sagittis quis erat. Cras in mollis leo.</p>
            </template>
            <template #controls="{ close }">
                <kro-button @click="close">Cancel</kro-button>
                <kro-button primary>Delete</kro-button>
            </template>
        </kro-dialog>
    </div>
</template>

<script>

    export default {

    }
</script>

<style module>

    .root {
        display: grid;
        gap: 1rem;
    }

</style>