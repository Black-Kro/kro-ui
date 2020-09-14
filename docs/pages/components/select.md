---
title: Select
for: /components/Select
---

# Select
TODO

## Usage
<select-demo></select-demo>

```html
<kro-select v-model="favoriteFood" label="Favorite Food">
    <option value="Pizza">Pizza</option>
    <option value="Tacos">Tacos</option>
    <option value="Cake">Cake</option>
</kro-select>

<kro-select v-model="favoriteLibrary" label="Favorite Library">
    <option>React</option>
    <option>VueJS</option>
    <option>Angular</option>
</kro-select>
```

```ts
import { ref } from 'vue';

export default {
    setup() {
        const favoriteFood = ref();
        const favoriteLibrary = ref('VueJS');

        return {
            favoriteFood,
            favoriteLibrary,
        }
    }
}
```

## Props
```ts
value:      { type: String, default: '' },
label:      { type: String },
required:   { type: Boolean },
disabled:   { type: Boolean },
readonly:   { type: Boolean },
autofocus:  { type: Boolean },
name:       { type: String },
id:         { type: String },
```

## Related
<press-article-link title="Switch" subtitle="a toggle button or something" to="/components/switch"></press-article-link>