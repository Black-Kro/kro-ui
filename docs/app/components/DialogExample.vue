<template>
    <div :class="$style.root">

        <kro-dialog>
            <template #activator="{ open }">
                <kro-button @click="open" kro-button>Open Dialog</kro-button>
            </template>
            <template #default="{ close }">
                <header :class="$style.header">Normal Dialog</header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien odio, tristique quis porttitor id, sagittis quis erat. Cras in mollis leo.</p>
                <div :class="$style.footer">
                    <kro-button @click="close">Cancel</kro-button>
                    <kro-button primary>Delete</kro-button>
                </div>
            </template>
        </kro-dialog>

        <kro-dialog persistent>
            <template #activator="{ open }">
                <kro-button @click="open" kro-button>Open Persistent Dialog</kro-button>
            </template>
            <template #default="{ close }">
                <header :class="$style.header">Persistent Dialog</header>
                <p>This dialog will not close by clicking the background overlay, only by clicking the close button or hitting the escape key.</p>
                <div :class="$style.footer">
                    <kro-button @click="close">Cancel</kro-button>
                    <kro-button primary>Delete</kro-button>
                </div>
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

    .header {
        font-size: 1.5rem;
        padding: 1rem 0 0.5rem 0;
    }

    .footer {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        justify-content: flex-end;
        gap: 0.5rem;
        /* padding: 0.5rem 0 1rem 0; */
    }

</style>