# Theming

There are two ways to go about theming in Kro UI, both of which make use of Custom Properties in CSS.
The preferred method is using the provided SASS theming tools to build your own themes. Alternatively, you can override the custom CSS Properties
yourself.

## Using SASS
Kro UI comes with a few themes by default. The current theme on the page is called Nord. You can easily import the premade themes in 
your `main.ts` or `main.js` file by doing the following
```ts
import '~@black-kro/ui/themes/nord.scss';
```

To create your own theme, you will need to create a new sass file and import the theme tools from Kro UI.
```scss
@import '~@black-kro/ui/themes/tools';

$NordTheme: (
    light: (
        'background': hsl(0, 0%, 100%),
        'background-secondary': hsl(218, 27%, 94%),
        
        'foreground': hsl(220, 16%, 22%),
        'foreground-secondary': hsl(220, 16%, 36%),

        'divider': rgba(0, 0, 0, .12),

        'primary': hsl(213, 32%, 52%),
        'primary-lighten': hsl(213, 32%, 70%),
        'primary-foreground': white,
        'accent': hsl(179, 25%, 45%),

        'shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        
        'error': hsl(0, 100%, 66%),
        'info': hsl(207, 90%, 54%),
        'success': hsl(122, 39%, 49%),
        'warning': hsl(45, 100%, 51%),
    ),
        
    dark: (
        // All the same properties as the light version,
        // but for the dark variant
    ),
);

@include CompileTheme($NordTheme, "nord");
```


## Using CSS Custom Properties
When creating a theme using just CSS custom properties you will need to provide two different classes. The first class will be
for the light variant of your theme and the second will be for the dark variant. The format of your class names should be `.theme__[name]-[variant]`

For example, if we wanted to recreate the nord theme, we would do the following.
```css

.theme__nord-light {
    --kro-background: white;
    --kro-background-secondary: #eceff4;
    --kro-foreground: #2f3541;
    --kro-foreground-secondary: #4d576a;
    --kro-divider: rgba(0, 0, 0, 0.12);
    --kro-primary: #5d81ac;
    --kro-primary-lighten: hsl(213, 32%, 70%);
    --kro-primary-foreground: white; 
    --kro-accent: #80b0ff;
    --kro-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px 0px;
    --kro-error: #ff5252;
    --kro-info: #2094f3;
    --kro-success: #4cae4f;
    --kro-warning: #ffc105;
}

.theme__nord-dark {
    /* Same Properties as the light theme but for a dark variant */
}

```


## Related
<press-article-link title="Composables" to="/composables" subtitle="Using Composables"></press-article-link>