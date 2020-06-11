# Icons
There are only a few icons provided by Kro UI out of the box. This is to prevent the UI library from becoming
too bloated. You can register your own icons in the configuration when registering the plugin. Icons should be of the
format of an svg definition. [https://materialdesignicons.com/](https://materialdesignicons.com/) provides hundreds of icons
for free. To add an icon from [https://materialdesignicons.com/](https://materialdesignicons.com/), just click on an icon,
click the button at the bottom of the dialog that looks like `&lt;/&gt;` and click "View SVG". Then copy the value of the `d` attribute
on the icon and include it in the config for the plugin.

## Usage
<icon-demo></icon-demo>

```html
<kro-icon icon="explore" />
```

## Props
```ts
icon: {
    type: String,
    required: true,
},
```

## Related
<press-article-link title="Layout" subtitle="Wow! A component that makes it easy to create navigation, a toolbar, content, or a footer!" to="/components/layout"></press-article-link>