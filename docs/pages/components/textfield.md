---
title: Textfields
for: /components/Textfield
---

# Textfield
Kro UI's replacement for the standard HTML textfield with a placeholder label that is repositioned on focus.

## Usage
<textfield-demo></textfield-demo>

```html
<kro-textfield v-model="email" label="Email" />
<kro-textfield v-model="password" label="Password" type="password" />
<kro-textfield v-model="bio" label="Biography" multiline />
```

```ts
import { ref } from 'vue';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const bio = ref('');

        return {
            email,
            password,
            bio, 
        }
    }
}
```

<docs-component-metadata :metadata="metadata.options.component"></docs-component-metadata>

## Related
<press-article-link title="Toolbar" subtitle="Toolbar stuff" to="/components/toolbar"></press-article-link>
