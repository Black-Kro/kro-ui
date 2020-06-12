# Dividers
Remember the perfectly usable `&lt;hr/&gt;` element that can easily be made presentable with a single line of CSS? Yeah me neither. Presenting `&lt;kro-divider/&gt;`.
Just like the `&lt;hr/&gt;` element, but pretty! OH, and it can be vertical! Imagine that!

## Usage

Let's start with a vertical divider:

<kro-toolbar class="divider-demo-toolbar" padded>
    <kro-button class="divider-demo-toolbar-button" icon="menu"></kro-button>
    <kro-divider vertical></kro-divider>
</kro-toolbar>

or a horizontal divider:

<kro-divider></kro-divider>

how neat is that?

<style>
    .divider-demo-toolbar {
        --kro-button-background: var(--kro-background);
    }
</style>

```html
<kro-toolbar padded>
    <kro-icon-button icon="menu"></kro-icon-button>
    <kro-divider vertical></kro-divider>
</kro-toolbar>

or a horizontal divider

<kro-divider></kro-divider>

how neat is that?
```

## Props

```ts
vertical: Boolean,
inset: Boolean,
```

## Related
<press-article-link title="Icons" subtitle="An icon is worth 41 words" to="/components/icon"></press-article-link>