---
title: Menu
for: /components/Menu
---

# Menus

## Usage
<menu-demo></menu-demo>

```html
<kro-toolbar padded raised style="--kro-button-background: var(--kro-background)">
    <kro-button icon="menu"/>
    <div class="flex-1"></div>
    <kro-menu style="--kro-menu-width: 300px" left bottom>
        <template #activator="{ open }">
            <kro-avatar class="cursor-pointer" src="..." @click="open" icon="menu" /> 
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

    <kro-list>
        <kro-list-item>Item 1</kro-list-item>
        <kro-list-item>Item 2</kro-list-item>
        <kro-list-item>Item 3</kro-list-item>
        <kro-list-item>Item 4</kro-list-item>
        <kro-list-item>Item 5</kro-list-item>
    </kro-list>
    </kro-menu>
</div>
```

## Related