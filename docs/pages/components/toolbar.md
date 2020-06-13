# Toolbar
Similar to the Surface, the Toolbar is a container component for housing content. Unlike the Surface, it is fixed height. Best use for toolbar applicable components, such as button groups.

## Usage
<kro-toolbar>Normal Toolbar</kro-toolbar>
<br />
<kro-toolbar padded>Padded Toolbar</kro-toolbar>
<br />
<kro-toolbar padded raised>Padded & Raised Toolbar</kro-toolbar>
<br />
<kro-toolbar padded raised small>Padded & Raised & Small Toolbar</kro-toolbar>

```html
<kro-toolbar>Normal Toolbar</kro-toolbar>
<kro-toolbar padded>Padded Toolbar</kro-toolbar>
<kro-toolbar padded raised>Padded & Raised Toolbar</kro-toolbar>
<kro-toolbar padded raised small>Padded & Raised & Small Toolbar</kro-toolbar>
```

## Props
```ts
small: Boolean,
padded: Boolean,
raised: Boolean,
```

## Styles
```scss
--kro-toolbar-height: 4rem;
--kro-toolbar-background: var(--kro-background-secondary);
```

## Related
Coming Soon :)