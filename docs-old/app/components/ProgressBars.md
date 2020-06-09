# Progress Bars

## Usage

<progress-bar-demo></progress-bar-demo>

```html
<kro-progress-bar rounded :value="progressValue"></kro-progress-bar>
<kro-progress-bar rounded :value="progressValue" :buffer-value="bufferValue"></kro-progress-bar>
<kro-progress-bar rounded :value="progressValue" :buffer-value="bufferValue" stream></kro-progress-bar>
<kro-progress-bar rounded indeterminate></kro-progress-bar>
```

## Props
<app-prop-definition name="value" type="Number" value="0" description="The percentage value for current progress"></app-prop-definition>
<app-prop-definition name="buffer-value" type="Number" value="100" description="The percentage value for the buffer"></app-prop-definition>
<app-prop-definition name="rounded" type="Boolean" value="false" description="Makes the progress bar have rounded corners."></app-prop-definition>
<app-prop-definition name="stream" type="Boolean" value="false" description="A style to be used when for things like streams."></app-prop-definition>
<app-prop-definition name="indeterminate" type="Boolean" value="false" description="A constant moving bar, used when loading progress is unknown."></app-prop-definition>

## Styles