# Textfield
Kro UI's replacement for the standard HTML textfield with a placeholder label that is repositioned on focus.

## Usage
<textfield-demo></textfield-demo>

```html
<kro-textfield class="field" v-model="email" label="Email" />
<kro-textfield class="field" v-model="password" label="Password" type="password" />

<div>
    <div>Email: {{email}}</div>
    <div>Password: {{password}}</div>
</div>
```

```ts
import { ref } from 'vue';

export default {
    setup() {
        const email = ref('');
        const password = ref('');

        return {
            email,
            password,
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
```

## Related
<press-article-link title="Toolbar" subtitle="Toolbar stuff" to="/components/toolbar"></press-article-link>
