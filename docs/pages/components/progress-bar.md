---
title: Progress Bars
for: /components/ProgressBar
---

# Progress Bar
Used to inform the user of the progress of current actions in realtime, Kro UI provides a progressbar that can display either a percentage value or, if needed, an indeterminate loader for actions that don't have a defined progress value.

Our progress bars also provide a buffer value for use cases such as audio or video playback bars.
## Usage

<progress-bar-demo></progress-bar-demo>

```html
<kro-progress-bar rounded :value="progressValue" />
<kro-progress-bar rounded :value="progressValue" :buffer-value="bufferValue" />
<kro-progress-bar rounded :value="progressValue" :buffer-value="bufferValue" stream />
<kro-progress-bar rounded indeterminate />
```

```ts
import { ref } from 'vue';
    
export default {
    setup() {
        const progressValue = ref(0);
        const bufferValue = ref(10);

        setInterval(() => {
            if (progressValue.value >= 100) {
                progressValue.value = 0;
                bufferValue.value = 10;
            } else {
                progressValue.value += Math.random() * (15 - 5) + 5;
                progressValue.value = Math.min(progressValue.value, 100);

                bufferValue.value += Math.random() * (15 - 5) + 6;
                bufferValue.value = Math.min(bufferValue.value, 100);
            }
            
        }, 2000);

        return {
            progressValue,
            bufferValue,
        }
    }
}
```

## Props
```ts
stream: Boolean,
indeterminate: Boolean,
active: Boolean,
rounded: {
    type: Boolean,
    default: false,
},

value: {
    type: Number,
    default: 0,
},
bufferValue: {
    type: Number,
    default: 100,
}
```

## Styles
```scss

// The height of the progress bar.
--kro-progress-bar-height: 0.5rem;

// The stream circle size
--kro-progress-bar-stream-size: 0.3rem;

// Background color of buffer bar
--kro-progress-buffer-color: var(--kro-primary-lighten);

// Background color of progress bar
--kro-progress-bar-progress-color: var(--kro-primary);

// Background color of stream bar
--kro-progress-stream-color: var(--kro-primary-lighten);
```

## Related
<press-article-link title="Spinner" subtitle="Like a progress bar, but it's not." to="/components/spinner"></press-article-link>