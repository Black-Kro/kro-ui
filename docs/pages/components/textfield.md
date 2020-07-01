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

## Props
```ts
value:      { type: String, default: '' },
label:      { type: String },
type:       { type: String, default: 'text' },
required:   { type: Boolean },
disabled:   { type: Boolean },
multiline:  { type: Boolean },
readonly:   { type: Boolean },
autofocus:  { type: Boolean },
min:        { type: Number },
max:        { type: Number },
maxlength:  { type: Number },
name:       { type: String },
id:         { type: String },
autoResize: { type: Boolean, default: true }
```

## Related
<press-article-link title="Toolbar" subtitle="Toolbar stuff" to="/components/toolbar"></press-article-link>
