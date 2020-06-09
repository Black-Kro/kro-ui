# Buttons

The `kro-button` is a replacement for the normal html `button`. The button can be 
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
    <kro-button outline>Outlined Button</kro-button>
    <kro-button primary>Primary Button</kro-button>
    <kro-button loading>Loading Button</kro-button>
    <kro-button href="https://google.com">External Link Button</kro-button>
    <kro-button to="/components/button-groups">Internal Link Button</kro-button>
    <kro-icon-button icon="settings"></kro-icon-button>
</div>

```html
<kro-button>Normal Button</kro-button>
<kro-button raised>Raised Button</kro-button>
<kro-button outline>Outlined Button</kro-button>
<kro-button primary>Primary Button</kro-button>
<kro-button loading>Loading Button</kro-button>
<kro-button href="https://google.com">External Link Button</kro-button>
<kro-button to="/components/button-groups">Internal Link Button</kro-button>

<!-- Icon buttons are a special button with a more rounded style -->
<kro-icon-button icon="settings"></kro-icon-button>
```

## Props
<app-prop-definition name="raised" type="Boolean" value="false" description="Applies a shadow to the button"></app-prop-definition>
<app-prop-definition name="outline" type="Boolean" value="false" description="Applies an outline to the button"></app-prop-definition>
<app-prop-definition name="href" type="String" value="undefined" description="Turns the button into a link"></app-prop-definition>
<app-prop-definition name="target" type="String" value="_blank" description="If the button is a link, this is the link target"></app-prop-definition>
<app-prop-definition name="to" type="String" value="undefined" description="Turns the button into a vue-router link"></app-prop-definition>
<app-prop-definition name="type" type="String" value="undefined" description="The button type"></app-prop-definition>
<app-prop-definition name="primary" type="Boolean" value="false" description="Styles the button as a primary button"></app-prop-definition>
<app-prop-definition name="loading" type="Boolean" value="false" description="Shows a loader for the button"></app-prop-definition>

## Styles
<app-prop-definition name="--kro-button-background" type="color" value="--kro-component-background" description="Sets the background of the button"></app-prop-definition>
<app-prop-definition name="--kro-button-foreground" type="color" value="--kro-component-foreground" description="Sets the foreground of the button"></app-prop-definition>
<app-prop-definition name="--kro-button-background-primary" type="color" value="--kro-component-accent" description="Sets the background of the button for a primary button"></app-prop-definition>
<app-prop-definition name="--kro-button-foreground-primary" type="color" value="--kro-component-accent-contrast" description="Sets the foreground of the button for a primary button"></app-prop-definition>
