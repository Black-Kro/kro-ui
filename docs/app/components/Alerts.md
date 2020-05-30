# Alerts
Used to convey important information. Has four possible display types, `success`, `info`, `warning`, and `error`. By default,
the information type is info. 

## Usage

<style>
    .kro-docs-alerts-container > * {
        margin: 1rem 0;
    }
</style>
<div class="kro-docs-alerts-container">
    <kro-alert type="success">I'm a success alert!</kro-alert>
    <kro-alert type="info">I'm a info alert!</kro-alert>
    <kro-alert type="warning" dismissible>I'm a warning alert!</kro-alert>
    <kro-alert type="error" dismissible>I'm a error alert!</kro-alert>
</div>

```html
<kro-alert type="success">I'm a success alert!</kro-alert>
<kro-alert type="info">I'm a info alert!</kro-alert>
<kro-alert type="warning" dismissible>I'm a warning alert!</kro-alert>
<kro-alert type="error" dismissible>I'm a error alert!</kro-alert>
```

## Props
<app-prop-definition name="type" type="Enum(warning, error, info, success)" value="info" description="Sets the type of the alert"></app-prop-definition>
<app-prop-definition name="dismissible" type="Boolean" value="false" description="Makes the alert dismissible"></app-prop-definition>
<app-prop-definition name="icon" type="string" value="undefined" description="Overrides the alert icon"></app-prop-definition>
<app-prop-definition name="tag" type="string" value="div" description="Custom tag for the element to use"></app-prop-definition>