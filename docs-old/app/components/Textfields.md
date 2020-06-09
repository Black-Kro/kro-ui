# Textfields
`kro-textfield` provides a replacement for the normal textfield. It has a built in label with additional icon options coming soon.

## Usage

<textfield-demo></textfield-demo>

```html
<kro-textfield label="Email" v-model="email"></kro-textfield>
```

```ts
import { ref } from 'vue';

export default {
    setup() {
        const email = ref('');

        return {
            email
        }
    }
}
```

## Props
<app-prop-definition name="label" type="String" value="undefined" description="Textfield label"></app-prop-definition>
<app-prop-definition name="type" type="String" value="text" description="The type for the textfield input"></app-prop-definition>
<app-prop-definition name="required" type="Boolean" value="false" description="Sets the textfield required value"></app-prop-definition>
<app-prop-definition name="multiline" type="Boolean" value="false" description="Turns the textfield into a textarea. COMING SOON"></app-prop-definition>
<app-prop-definition name="readonly" type="Boolean" value="false" description="Makes the textfield readonly"></app-prop-definition>
<app-prop-definition name="autofocus" type="Boolean" value="false" description="If true, the textfield will autofocus when created."></app-prop-definition>
<app-prop-definition name="min" type="Number" value="undefined" description="The minimum value the input can be if the input is a number"></app-prop-definition>
<app-prop-definition name="max" type="Number" value="undefined" description="The maximum value the input can be if the input is a number"></app-prop-definition>
<app-prop-definition name="maxlength" type="Number" value="undefined" description="The maximum length of the input string"></app-prop-definition>
<app-prop-definition name="id" type="String" value="undefined" description="The id of the textfield"></app-prop-definition>
<app-prop-definition name="name" type="String" value="undefined" description="The name of the textfield input"></app-prop-definition>
