---
title: Switches
for: /components/Switch
---

# {{metadata.options.title}}
Simple toggle switch, useful for replacing checkboxes in forms, settings dialogs, etc.

## Usage
<switch-demo></switch-demo>

```html
<kro-switch v-model="isActive">Switch 1 {{isActive}}</kro-switch>
<kro-switch v-model="isActive2">Switch 2 {{isActive2}}</kro-switch>
```

{{metadata}}

```ts
import { ref } from 'vue';

export default {
    setup() {
        const isActive = ref(false);
        const isActive2 = ref(false);

        return {
            isActive,
            isActive2,
        }
    }
}
```

## Styles
```css
--kro-switch-track-active-background: var(--kro-primary);
--kro-switch-knob-color: var(--kro-primary);
```

## Related
<press-article-link title="Textfield" subtitle="for entering words or something" to="/components/textfield"></press-article-link>