<template>
    <div>
        <kro-toolbar padded raised style="--kro-button-background: var(--kro-background)">
            <kro-button icon="menu"/>
            <div class="flex-1"></div>
            <kro-menu style="--kro-menu-width: 300px" left bottom>
                <template #activator="{ open }">
                    <kro-avatar class="cursor-pointer" src="https://cdn.discordapp.com/avatars/124211772465872899/c2512635e5b0c1bfadc20fd219ec9ed0.png?size=128" @click="open" icon="menu" /> 
                </template>

                <div>
                    <img class="object-cover block h-32 w-full" src="../assets/profile-header.jpg" />
                    <div class="p-2 flex flex-row">
                        <kro-button>View Profile</kro-button>
                        <div class="flex-1"></div>
                        <kro-button icon="settings" />
                    </div>
                </div>
            </kro-menu>
        </kro-toolbar>

        <br />

        <div class="menu-demo-container">
            <kro-menu bottom offset-y>
                <template #activator="{ open }">
                    <kro-button @click="open">Open Menu</kro-button>
                </template>

            <div>
                <kro-list-item>Item 1</kro-list-item>
                <kro-list-item>Item 2</kro-list-item>
                <kro-list-item>Item 3</kro-list-item>
                <kro-list-item>Item 4</kro-list-item>
                <kro-list-item>Item 5</kro-list-item>
            </div>
            </kro-menu>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'MenuDemo',
    }
</script>
