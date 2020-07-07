---
title: Navigation
for: /components/Navigation
---

# Navigation
TODO

## Usage

```html
<kro-button icon="menu" @click="isOpen = !isOpen" />
<kro-navigation v-model="isOpen">
    <!-- Navigation Content -->
</kro-navigation>
```

```ts
import { ref } from 'vue';

export default {
    setup() {
        const isOpen = ref(false);

        return {
            isOpen
        }
    }
}
```

## Styles
```scss
// The width of the navigation
// When used in the layout, place this property on the layout element
// so it knows the width of the navigation
--kro-navigation-width: 275px;
```

## Slots
```html
#default - The navivation content
```

## Related
<press-article-link title="Progress Bar" subtitle="To indicate progress or something" to="/components/progress-bar"></press-article-link>
