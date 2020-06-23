# Surface
Similar to Cards in material design, used to display content raised off of the background.

## Usage

<surface-demo></surface-demo>

```html
<kro-surface>
    This is a surface
</kro-surface>

<kro-surface outline label="Settings">
    This is an outlined surface with a label
</kro-surface>

<kro-surface outline label="Settings" icon="settings">
    This is an outlined surface with a label
</kro-surface>
```

## Props
```ts
padded: {
    type: Boolean,
    default: true
},

raised: {
    type: Boolean,
    default: true,
},

outline: {
    type: Boolean,
    default: false,
},

icon: String,

label: String,
```

## Related
<press-article-link title="Switch" subtitle="a toggle button or something" to="/components/switch"></press-article-link>