# Buttons
The `kro-button` is a replacement for the standard html `button` element. The button can be 
automatically converted into an external link by setting the `href` attribute 
or it can be converted into a vue `router-link` by setting the `to` prop on the button.

## Usage

<style>
    .buttons-demo > * {
        margin: 0 1rem 1rem 0 !important;
    }
</style>

<div class="buttons-demo">
    <kro-button>Normal Button</kro-button>
    <kro-button raised>Raised Button</kro-button>
    <kro-button raised icon="settings">Button with Icon</kro-button>
    <kro-button outline>Outlined Button</kro-button>
    <kro-button primary>Primary Button</kro-button>
    <kro-button loading>Loading Button</kro-button>
    <kro-button href="https://google.com">External Link Button</kro-button>
    <kro-button to="/components/button-groups">Internal Link Button</kro-button>
    <kro-button icon="settings"></kro-button>
</div>

```html
<button>Hello World</button>
<kro-button>Normal Button</kro-button>
<kro-button raised>Raised Button</kro-button>
<kro-button raised icon="settings">Button with Icon</kro-button>
<kro-button outline>Outlined Button</kro-button>
<kro-button primary>Primary Button</kro-button>
<kro-button loading>Loading Button</kro-button>
<kro-button href="https://google.com">External Link Button</kro-button>
<kro-button to="/components/button-groups">Internal Link Button</kro-button>
<kro-button icon="settings"></kro-button>
```

## Props
```ts
/**
 * Adds loading icon to the button
 */
loading: {
    type: Boolean,
    default: false
},

/**
 * Transforms the button into a link
 */
href: String,

/**
 * If the button is a link, then this will set the target
 */
target: {
    type: String,
    default: '_blank'    
},

/**
 * Transforms the button into a router-link
 */
to: String,

/**
 * The button type
 */
type: String,

/**
 * Apply primary button styling to the button
 */
primary: Boolean,

/**
 * Gives the button an outline style
 */
outline: Boolean,

/**
 * Apply a shadow to the button
 */
raised: Boolean,
```

## Styles
```scss
// The background style of the button
--kro-button-background: var(--kro-background-secondary);

// Foreground color of the button
--kro-button-foreground: var(--kro-foreground);

// Background color of a primary button
--kro-button-background-primary: var(--kro-primary);

// Foreground color of a primary button.
--kro-button-foreground-primary: var(--kro-foreground);

// Shadow of a raised button.
--kro-button-shadow: var(--kro-shadow);
```

## Related
<press-article-link title="Button Groups" subtitle="Combine mutliple buttons intoa  group" to="/components/button-group"></press-article-link>