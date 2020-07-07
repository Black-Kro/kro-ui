# Lists
Kro UI provides a material design style List as a responsive flexbox alternative to HTML tables for displaying lists of information.

Using the icon, subtitle and action templates as showcased below, you can create lists in a variety of different styles to fit any kind of data you need to display.

## Usage

<kro-surface>
    <kro-list-item>List Item 1</kro-list-item>
    <kro-list-item>List Item 2</kro-list-item>
    <kro-list-item>List Item 3</kro-list-item>
</kro-surface>
<br />
<kro-surface>
    <kro-list-item>
        <template #icon><kro-avatar src="https://cdn.discordapp.com/avatars/124211772465872899/c2512635e5b0c1bfadc20fd219ec9ed0.png?size=128" /></template>
        wheat.js
        <template #subtitle>@wheat</template>
    </kro-list-item>
    <kro-list-item>
        <template #icon><kro-avatar src="https://cdn.discordapp.com/avatars/123806469807144961/4829c5110aa76b7443fdf6e2c98d02fa.png?size=128" /></template>
        bizzycola
        <template #subtitle>@bizzycola</template>
    </kro-list-item>
    <kro-list-item>
        <template #icon><kro-avatar src="https://cdn.discordapp.com/avatars/204577703217594368/1a30ba6d2186bc132be2000fbef54cd3.png?size=128" /></template>
        cyanboy
        <template #subtitle>@cyanboy</template>
    </kro-list-item>
</kro-surface>
<br />
<kro-surface>
    <kro-list-item>
        <template #icon><kro-icon icon="settings" /></template>
        General
        <template #subtitle>General settings</template>
        <template #action><kro-icon icon="arrow-right"/></template>
    </kro-list-item>
    <kro-list-item>
        <template #icon><kro-icon icon="account" /></template>
        Account
        <template #subtitle>Account settings</template>
        <template #action><kro-icon icon="arrow-right"/></template>
    </kro-list-item>
</kro-surface>

```html
<kro-list>
    <kro-list-item>List Item 1</kro-list-item>
    <kro-list-item>List Item 2</kro-list-item>
    <kro-list-item>List Item 3</kro-list-item>
</kro-list>
<br />
<kro-list>
    <kro-list-item>
        <template #icon><kro-avatar src="[avatar]" /></template>
        wheat.js
        <template #subtitle>@wheat</template>
    </kro-list-item>
    <kro-list-item>
        <template #icon><kro-avatar src="[avatar]" /></template>
        bizzycola
        <template #subtitle>@bizzycola</template>
    </kro-list-item>
    <kro-list-item>
        <template #icon><kro-avatar src="[avatar]" /></template>
        cyanboy
        <template #subtitle>@cyanboy</template>
    </kro-list-item>
</kro-list>
<br />
<kro-list>
    <kro-list-item>
        <template #icon><kro-icon icon="settings" /></template>
        General
        <template #subtitle>General settings</template>
        <template #action><kro-icon icon="arrow-right"/></template>
    </kro-list-item>
    <kro-list-item>
        <template #icon><kro-icon icon="account" /></template>
        Account
        <template #subtitle>Account settings</template>
        <template #action><kro-icon icon="arrow-right"/></template>
    </kro-list-item>
</kro-list>
```

## Props
```ts
tag: {
    type: String,
    default: 'div'
},
```

## Slots
```html
<kro-list-item>
#default - The title of the list item

#subtitle - The text directly under the title
#icon - The icon to the left of the title
#action - The icon on the right side of the item, typically used for actions.
```
## Styles
```scss
// The size of the icon.
--kro-list-item-icon-size: unset;

// The icon color
--kro-list-item-icon-color: var(--kro-foreground-secondary);
```


## Related
<press-article-link title="Navigation" subtitle="Fancy that sidebar on the left of this page? Then you are going to love this!" to="/components/navigation"></press-article-link>