---
title: Alert
for: /components/Alert
---

# Alerts
Used to convey important information. Has four possible display types, `success`, `info`, `warning`, and `error`. By default,
the display type is `info`. 

## Usage

<style>
    .kro-docs-alerts-container > * {
        margin: 1rem 0;
    }
</style>
<div class="kro-docs-alerts-container">
    <kro-alert type="success">I'm a success alert!</kro-alert>
    <kro-alert type="info">I'm an info alert!</kro-alert>
    <kro-alert type="warning" dismissible>I'm a warning alert!</kro-alert>
    <kro-alert type="error" dismissible>I'm an error alert!</kro-alert>
</div>

```html
<kro-alert type="success">I'm a success alert!</kro-alert>
<kro-alert type="info">I'm a info alert!</kro-alert>
<kro-alert type="warning" dismissible>I'm a warning alert!</kro-alert>
<kro-alert type="error" dismissible>I'm a error alert!</kro-alert>
```

## Props
```ts
// Sets the alert type. Possible options: success, info, warning, error
type: {
    type: String,
    default: 'info'
},

// Makes the alert dismissable, applying a hidden state when dismissed.
dismissible: Boolean,

// Sets the icon of the alert, only used to override the default icon.
icon: String,

// Custom tag for the element
tag: {
    type: String,
    default: 'div'
}
```

## Related
<press-article-link title="Buttons" subtitle="Using Kro Buttons" to="/components/button"></press-article-link>
