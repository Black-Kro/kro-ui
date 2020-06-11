# App
`kro-app` is the base component for Kro apps. This should be the root component of your app and there should only
ever be a single instance of `kro-app` on the page. This component enables the functionality of many components in this library,
so if you are trying to use something and it isn't working, you probably forgot to add this to the root of your app.

## Usage
```html
<template>
    <kro-app>
        <!-- Your App Content -->
    </kro-app>
</template>
```

## Related
<press-article-link title="Alerts" subtitle="Because alerts are fun" to="/components/alert"></press-article-link>