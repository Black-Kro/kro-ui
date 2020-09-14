---
title: Sliders
for: /components/Slider
---

# Slider

## Usage
<slider-demo></slider-demo>

```html
<kro-slider v-model="value1" />
<kro-slider v-model="value3" :step="0.5" />
<kro-slider v-model="value2" :min="-50" :max="200" :step="10" ticks />
```

```ts
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref(0);
        const value2 = ref(20);
        const value3 = ref(30);

        return {
            value1,
            value2,
            value3,
        }
    }
}
```

## Props
```ts
disabled: {
    type: Boolean,
    default: false,
},
step: {
    type: Number,
    default: 1,
},
ticks: {
    default: false,
    type: [Boolean, String],
},
min: {
    type: Number,
    default: 0
},
max: {
    type: Number,
    default: 100,
}
```