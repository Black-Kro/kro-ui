# Icons
There are only a few icons provided by the UI library out of the box. This is to prevent the UI library from becoming
too bloated. You can register your own icons in the configuration when registering the plugin. Icons should be of the
format of a svg definition. [https://materialdesignicons.com/](https://materialdesignicons.com/) provides hundreds of icons
for free. To add an icon from [https://materialdesignicons.com/](https://materialdesignicons.com/), just click on an icon,
click the button at the bottom of the dialog that looks like `&lt;/&gt;` and click "View SVG". Then copy the value of the `d` attribute
on the icon and include it in the config for the plugin.

## Usage
<kro-icon icon="menu"></kro-icon>
<kro-icon icon="external"></kro-icon>
<kro-icon icon="settings"></kro-icon>

```html
<kro-icon icon="menu" />
<kro-icon icon="external" />
<kro-icon icon="settings" />
```

## Props
<app-prop-definition name="icon" type="string" value="undefined" description="The icon to display"></app-prop-definition>

## Styles
<app-prop-definition name="--kro-icon-size" type="string" value="1.5rem" description="Controls the size of the icon"></app-prop-definition>
